import { AppIdentifier } from "./AppIdentifier";
import { IntentResult } from "./IntentResult";

export interface IntentResolution {
  /** Identifier for the app instance that was selected (or started) to resolve
   *  the intent. `source.instanceId` MUST be set, indicating the specific app
   *  instance that received the intent.
   */
  readonly source: AppIdentifier;

  /** The intent that was raised. May be used to determine which intent the user
   *  chose in response to `fdc3.raiseIntentForContext()`.
   */
  readonly intent: string;

  /** The version number of the Intents schema being used.
   */
  readonly version?: string;

  /** Retrieves a promise that will resolve to `Context` data returned
   *  by the application that resolves the raised intent, a `Channel`
   *  established and returned by the app resolving the intent or void.
   *
   *  A `Channel` returned MAY be of the `PrivateChannel` type. The
   *  client can then `addContextListener()` on that channel to, for example,
   *  receive a stream of data.
   *
   *  If an error occurs (i.e. an error is thrown by the handler function,
   *  the promise it returns is rejected, or the promise resolved to an invalid
   *  type) then the Desktop Agent MUST reject the promise returned by the
   *  `getResult()` function of the `IntentResolution` with a string from
   *  the `ResultError` enumeration.
   */
  getResult(): Promise<IntentResult>;
}
