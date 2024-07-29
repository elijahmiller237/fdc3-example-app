import { Context } from "./Context";
import { ContextMetadata } from "./ContextMetadata";
import { IntentResult } from "./IntentResult";

export type IntentHandler = (
  context: Context,
  metadata?: ContextMetadata
) => Promise<IntentResult> | void;
