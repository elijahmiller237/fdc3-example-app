export interface DisplayMetadata {
  /**
   *  A user-readable name for this channel, e.g: `"Red"`.
   */
  readonly name?: string;

  /**
   *  The color that should be associated within this channel when displaying
   *  this channel in a UI, e.g: `#FF0000`. May be any color value supported by
   *  CSS, e.g. name, hex, rgba, etc..
   */
  readonly color?: string;

  /**
   *  A URL of an image that can be used to display this channel.
   */
  readonly glyph?: string;
}
