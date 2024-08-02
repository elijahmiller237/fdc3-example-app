import {
  AppIdentifier,
  Channel,
  Context,
  ContextHandler,
  FDC3MessageDetail,
  FDC3MessageHandler,
  IntentHandler,
  IntentResolution,
  Listener,
  DesktopAgent as fdc3DesktopAgent,
} from "./types";
import { guid } from "./utils";

const _returnMessageHandlers = new Map<string, FDC3MessageHandler>();

const _intentHandlers = new Map<string, Map<string, IntentHandler>>();

const _seenMessages = new Set<string>();

const _contextHandlers = new Map<string, Map<string, ContextHandler>>();

const MESSAGE_TTL_MS = 30000;

const wireMethod = (method: string, payload: any): Promise<any> => {
  const ts: number = new Date().getTime();
  const _guid = guid();
  const messageId = `${method}_${_guid}`;
  const messageDetail: FDC3MessageDetail = {
    id: messageId,
    type: "method",
    payload: { ...payload, method },
    ts,
  };
  return new Promise((resolve) => {
    const handler: FDC3MessageHandler = (data) => {
      resolve(data.payload);
    };
    _returnMessageHandlers.set(`FDC3:return_${messageId}`, handler);
    window.top?.postMessage(messageDetail, "*");
  });
};

const handleMessage = (event: MessageEvent) => {
  if (typeof event.data !== "object" || _seenMessages.has(event.data.id))
    return;
  _seenMessages.add(event.data.id);
  setTimeout(() => _seenMessages.delete(event.data.id), MESSAGE_TTL_MS);
  if (
    event.data.type === "return" &&
    _returnMessageHandlers.has(event.data.id)
  ) {
    const handler =
      _returnMessageHandlers.get(event.data.id) ??
      (() => {
        return;
      });
    handler(event.data);
    _returnMessageHandlers.delete(event.data.id);
  } else if (
    event.data.type === "intent" &&
    _intentHandlers.has(event.data.payload.intent)
  ) {
    console.log("recieved intent message", window);
    _intentHandlers
      .get(event.data.payload.intent)
      ?.forEach((handler) => handler(event.data.payload.context));
  } else if (
    event.data.type === "broadcast" &&
    _contextHandlers.has(event.data.payload.channelId)
  ) {
    console.log("recieved broadcast message", window);
    _contextHandlers
      .get(event.data.payload.channelId)
      ?.forEach((handler) => handler(event.data.payload.context));
  }
};

class DesktopAgent implements fdc3DesktopAgent {
  constructor() {}

  async open(app: AppIdentifier, context?: Context): Promise<AppIdentifier> {
    return wireMethod("open", { app, context });
  }

  async addIntentListener(
    intent: string,
    handler: IntentHandler
  ): Promise<Listener> {
    if (!_intentHandlers.has(intent)) {
      _intentHandlers.set(intent, new Map<string, IntentHandler>());
    }
    const intentHandlerId = guid();
    _intentHandlers.get(intent)?.set(intentHandlerId, handler);
    const pendingIntents = await wireMethod("addIntentListener", {
      instanceId: window.name,
    });
    console.log("received pending intents", pendingIntents);
    pendingIntents.forEach((intent: any) => handler(intent["context"]));
    return {
      unsubscribe: () => {
        _intentHandlers.get(intent)?.delete(intentHandlerId);
      },
    };
  }

  async raiseIntent(
    intent: string,
    context: Context,
    app?: AppIdentifier
  ): Promise<IntentResolution> {
    return wireMethod("raiseIntent", { intent, context, app });
  }

  async getOrCreateChannel(channelId: string): Promise<Channel> {
    const res = await wireMethod("getOrCreateChannel", { channelId });
    if (!_contextHandlers.has(channelId)) {
      _contextHandlers.set(channelId, new Map<string, ContextHandler>());
    }

    return {
      id: res.id,
      type: "app",
      addContextListener: async (contextType, handler) => {
        const handlerId = guid();
        _contextHandlers.get(channelId)?.set(handlerId, handler);
        return {
          unsubscribe: () => {
            if (_contextHandlers.has(channelId)) {
              _contextHandlers.get(channelId)?.delete(handlerId);
            }
          },
        };
      },
      broadcast: async (context) => {
        return wireMethod("broadcast", { channelId, context });
      },
      getCurrentContext: async () => {
        return null;
      },
    };
  }
}

export const init = () => {
  window.addEventListener("message", handleMessage);
  (window as any)["fdc3"] = new DesktopAgent();
};
