import { Context } from "./Context";
import { ContextMetadata } from "./ContextMetadata";

/**Describes a callback that handles a context event. Optional metadata about the context message, including the app that originated the message, may be provided.
 */
export type ContextHandler = (
  context: Context,
  metadata?: ContextMetadata
) => void;
