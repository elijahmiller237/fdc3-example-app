export interface AppIdentifier {
  /** The unique application identifier located within a specific application
   *  directory instance. An example of an appId might be 'app@sub.root'.
   */
  readonly appId: string;

  /** An optional instance identifier, indicating that this object represents a
   *  specific instance of the application described.
   */
  readonly instanceId?: string;

  /** The Desktop Agent that the app is available on. Used in Desktop Agent
   *  Bridging to identify the Desktop Agent to target.
   *  @experimental
   */
  readonly desktopAgent?: string;
}
