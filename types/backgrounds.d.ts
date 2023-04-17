interface Backgrounds {}

/**
 * Backgrounds is a global which provides the ability to interact with the background.
 */
interface BackgroundsConstructor {
  /**
   * Returns the current background name.
   *
   * @return {string} The current background name.
   */
  getBackground: (this: void) => string;

  /**
   * Returns the image URL of the current custom background, or nil if the current background is not custom.
   *
   * @return {string} The image URL of the current custom background, or nil if the current background is not custom.
   */
  getCustomURL: (this: void) => string;

  /**
   * Replaces the current background with the background matching the specified name.
   *
   * @param {string} name The name of the background to set.
   * @return {boolean} True if the background was set successfully, false otherwise.
   */
  setBackground: (this: void, name: string) => boolean;

  /**
   * Replaces the current background with a custom background loaded from the specified url.
   *
   * @param {string} url The url of the image to use as the background.
   * @return {boolean} True if the background was set successfully, false otherwise.
   */
  setCustomURL: (this: void, url: string) => boolean;
}

/**
 * Backgrounds is a global which provides the ability to interact with the background.
 */
declare var Backgrounds: BackgroundsConstructor;
