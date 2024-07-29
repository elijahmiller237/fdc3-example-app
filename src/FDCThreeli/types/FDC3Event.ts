import { AppIdentifier } from "./fdc3/AppIdentifier";
import { Context } from "./fdc3/Context";

/**
 * Custom DOM event used by the FDC3 API
 */
export class FDC3Event extends Event {
  detail: FDC3EventDetail;
  ts: number;

  constructor(type: string, init?: CustomEventInit) {
    super(type, init);
  }
}

/**
 * Event Detail structure
 */
export interface FDC3EventDetail {
  id?: string; //resolve with listenerId
  ts?: number;
  listenerId?: string;
  eventId?: string; //resolve with listenerId & eventId
  intent?: string;
  channel?: string;
  channelId?: string; //resolve w/channel
  instanceId?: string; //identifier for the app instance
  contextType?: string;
  data?: any;
  target?: AppIdentifier;
  name?: string;
  context?: Context;
  source?: string;
}

export type FDC3EventHandler = (event: FDC3Event) => Promise<any>;
