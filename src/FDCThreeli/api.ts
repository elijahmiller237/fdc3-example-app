import {
  AppIdentifier,
  Context,
  FDC3MessageDetail,
  FDC3MessageHandler,
  DesktopAgent as fdc3DesktopAgent,
} from "./types";
import { guid } from "./utils";

const _returnMessageHandlers = new Map<string, FDC3MessageHandler>();

const wireMethod = (
  method: string,
  payload: any,
  config?: any
): Promise<any> => {
  const ts: number = new Date().getTime();
  const _guid = guid();
  const messageId = `${method}_${_guid}`;
  const messageDetail: FDC3MessageDetail = {
    id: messageId,
    type: "method",
    method,
    payload,
    ts,
  };
  return new Promise((resolve) => {
    const handler: FDC3MessageHandler = (data) => {
      resolve(data.payload);
    };
    _returnMessageHandlers.set(`FDC3:return_${messageId}`, handler);
    window.parent.postMessage(messageDetail, "*");
  });
};

const handleMessage = (event: MessageEvent) => {
  if (typeof event.data !== "object") return;
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
  }
};

class DesktopAgent implements fdc3DesktopAgent {
  constructor() {}

  async open(app: AppIdentifier, context?: Context): Promise<AppIdentifier> {
    return wireMethod("open", { app, context });
  }
}

export const init = () => {
  window.addEventListener("message", handleMessage);
  (window as any)["fdc3"] = new DesktopAgent();
};
