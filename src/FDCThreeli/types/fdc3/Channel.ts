import { Context } from "./Context";
import { ContextHandler } from "./ContextHandler";
import { DisplayMetadata } from "./DisplayMetadata";
import { Listener } from "./Listener";

export interface Channel {
  /**
   * Uniquely identifies the channel. It is either assigned by the desktop agent (User Channel) or defined by an application (App Channel).
   */
  readonly id: string;

  /**
   * Can be user, app or private.
   */
  readonly type: "user" | "app" | "private";

  /**
   * DisplayMetadata can be used to provide display hints for User Channels intended to be visualized and selectable by end users.
   */
  readonly displayMetadata?: DisplayMetadata;

  /**
   * Adds a listener for incoming contexts of the specified context type whenever a broadcast happens on this channel. If, when this function
   * is called, the channel already contains context that would be passed to the listener it is NOT called or passed this context automatically
   * (this behavior differs from that of the fdc3.addContextListener function). Apps wishing to access to the current context of the channel
   * should instead call the getCurrentContext(contextType) function.
   */
  addContextListener(
    contextType: string | null,
    handler: ContextHandler
  ): Promise<Listener>;

  /**
   * Broadcasts a context on the channel. This function can be used without first joining the channel, allowing applications to broadcast
   * on both App Channels and User Channels that they aren't a member of. Channel implementations should ensure that context messages broadcast
   * by an application on a channel should not be delivered back to that same application if they are joined to the channel.
   */
  broadcast(context: Context): Promise<void>;

  /**
   * When a context type is provided, the most recent context matching the type will be returned, or null if no matching context is found. If
   * no context type is provided, the most recent context that was broadcast on the channel - regardless of type - will be returned. If no context
   * has been set on the channel, it will return null.
   */
  getCurrentContext(contextType?: string): Promise<Context | null>;
}
