import { AppMetadata } from "./AppMetadata";
import { IntentMetadata } from "./IntentMetadata";

export interface AppIntent {
  /** Details of the intent whose relationship to resolving applications is
   *  being described.
   */
  readonly intent: IntentMetadata;

  /** Details of applications that can resolve the intent.
   */
  readonly apps: AppMetadata[];
}
