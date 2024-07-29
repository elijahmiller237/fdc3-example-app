import { AppIdentifier } from "./AppIdentifier";

export interface ContextMetadata {
  /** Identifier for the app instance that sent the context and/or intent.
   *  @experimental
   */
  readonly source: AppIdentifier;
}
