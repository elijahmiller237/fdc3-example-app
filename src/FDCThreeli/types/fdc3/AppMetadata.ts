import { AppIdentifier } from "./AppIdentifier";
import { Icon } from "./Icon";
import { Image } from "./Image";

export interface AppMetadata extends AppIdentifier {
  readonly name?: string;
  readonly version?: string;
  readonly instanceMetadata?: Record<string, any>;
  readonly title?: string;
  readonly tooltip?: string;
  readonly description?: string;
  readonly icons?: Icon[];
  readonly screenshots?: Image[];
  readonly resultType?: string | null;
}
