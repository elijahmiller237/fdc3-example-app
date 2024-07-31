import { AppIdentifier } from "./AppIdentifier";
// import { AppIntent } from "./AppIntent";
// import { AppMetadata } from "./AppMetadata";
// import { Channel } from "./Channel";
import { Context } from "./Context";
import { IntentHandler } from "./IntentHandler";
// import { ContextHandler } from "./ContextHandler";
import { IntentResolution } from "./IntentResolution";
import { Listener } from "./Listener";
// import { PrivateChannel } from "./PrivateChannel";

export interface DesktopAgent {
  // apps

  /**
   * Launches an app, specified via an AppIdentifier object. The open method differs in use from raiseIntent.
   * Generally, it should be used when the target application is known but there is no specific intent.
   * For example, if an application is querying an App Directory, open would be used to open an app returned
   * in the search results.
   */
  open(app: AppIdentifier, context?: Context): Promise<AppIdentifier>;

  /**
   * Find all the available instances for a particular application.
   */
  /* findInstances(app: AppIdentifier): Promise<Array<AppIdentifier>>; */

  /**
   * Retrieves the AppMetadata for an AppIdentifier, which provides additional metadata (such as icons, a title
   * and description) from the App Directory record for the application, that may be used for display purposes.
   */
  /* getAppMetadata(app: AppIdentifier): Promise<AppMetadata>; */

  // context

  /**
   * Publishes context to other apps on the desktop. Calling broadcast at the DesktopAgent scope will push the
   * context to whatever User Channel the app is joined to. If the app is not currently joined to a channel,
   * calling fdc3.broadcast will have no effect.
   */
  /* broadcast(context: Context): Promise<void>; */

  /**
   * Adds a listener for incoming context broadcasts from the Desktop Agent (via a User channel or fdc3.open API call).
   */
  /* addContextListener(
    contextType: string | null,
    handler: ContextHandler
  ): Promise<Listener>; */

  /**
   * Find out more information about a particular intent by passing its name, and optionally its context and/or a
   * desired result context type. findIntent is effectively granting programmatic access to the Desktop Agent's resolver.
   * It returns a promise resolving to an AppIntent which provides details of the intent, its metadata and metadata about
   * the apps and app instances that are registered to handle it. This can be used to raise the intent against a specific
   * app or app instance.
   */
  /* findIntent(
    intent: string,
    context?: Context,
    resultType?: string
  ): Promise<AppIntent>; */

  /**
   * Find all the available intents for a particular context, and optionally a desired result context type.
   */
  /* findIntentsByContext(
    context: Context,
    resultType?: string
  ): Promise<Array<AppIntent>>; */

  /**
   * Raises a specific intent for resolution against apps registered with the desktop agent.
   */

  raiseIntent(
    intent: string,
    context: Context,
    app?: AppIdentifier
  ): Promise<IntentResolution>;

  /**
   * Finds and raises an intent against apps registered with the desktop agent based purely on the type of the context data.
   */
  /* raiseIntentForContext(
    context: Context,
    app?: AppIdentifier
  ): Promise<IntentResolution>; */

  /**
   * Adds a listener for incoming intents raised by other applications, via calls to fdc3.raiseIntent or fdc3.raiseIntentForContext.
   */
  addIntentListener(intent: string, handler: IntentHandler): Promise<Listener>;

  // channels

  /**
   * Returns a Channel object for the specified channel, creating it (as an App channel) if it does not exist.
   */
  /* getOrCreateChannel(channelId: string): Promise<Channel>; */

  /**
   * Returns a Channel with an auto-generated identity that is intended for private communication between applications. Primarily used to
   * create channels that will be returned to other applications via an IntentResolution for a raised intent.
   */
  // createPrivateChannel(): Promise<PrivateChannel>;

  /**
   * Retrieves a list of the User Channels available for the app to join.
   */
  // getUserChannels(): Promise<Array<Channel>>;
}
