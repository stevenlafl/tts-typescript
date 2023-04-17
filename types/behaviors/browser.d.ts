/**
 * The Browser behavior is present on the Tablet Object.
 */
interface Browser {
  /**
   * URL which currently wants to display.
   */
  url: string;

  /**
   * The pixel width the browser is virtually rendering to.
   */
  pixel_width: number;
}

interface BrowserConstructor {}

declare var Browser: BrowserConstructor;
