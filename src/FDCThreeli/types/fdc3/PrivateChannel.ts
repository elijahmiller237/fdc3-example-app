import { Channel } from "./Channel";
import { Listener } from "./Listener";

export interface PrivateChannel extends Channel {
  /**
   * Adds a listener that will be called each time that the remote app invokes addContextListener on this channel.
   */
  onAddContextListener(handler: (contextType?: string) => void): Listener;

  /**
   * Adds a listener that will be called whenever the remote app invokes Listener.unsubscribe() on a context listener that it previously added.
   */
  onUnsubscribe(handler: (contextType?: string) => void): Listener;

  /**
   * Adds a listener that will be called when the remote app terminates, for example when its window is closed or because disconnect was called.
   * This is in addition to calls that will be made to onUnsubscribe listeners.
   */
  onDisconnect(handler: () => void): Listener;

  /**
   * May be called to indicate that a participant will no longer interact with this channel. After this function has been called,
   * Desktop Agents SHOULD prevent apps from broadcasting on this channel and MUST automatically call Listener.unsubscribe() for
   * each listener that they've added (causing any onUnsubscribe handler added by the other party to be called) before triggering
   * any onDisconnect handler added by the other party.
   */
  disconnect(): void;
}
