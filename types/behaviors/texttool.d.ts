/// <reference path="../color.d.ts" />

/**
 * The TextTool behavior is present on 3DText objects i.e those created with the text tool.
 */
interface TextTool extends GObject {
  /**
   * Returns Table of font Color.
   */
  getFontColor(this: void): Color;

  /**
   * Returns Int of the font size.
   */
  getFontSize(this: void): number;

  /**
   * Returns the current text. Behaves the same as Object's getValue().
   */
  getValue(this: void): string;

  /**
   * Sets font Color.
   *
   * @param {Color} font_color The new font Color.
   * @returns {boolean} True if the font Color was set, false otherwise.
   */
  setFontColor(this: void, font_color: Color): boolean;

  /**
   * Sets font size.
   *
   * @param {number} font_size The new font size.
   * @returns {boolean} True if the font size was set, false otherwise.
   */
  setFontSize(this: void, font_size: number): boolean;

  /**
   * Sets the current text. Behaves the same as Object's setValue(...).
   *
   * @param {string} text The new text.
   * @returns {boolean} True if the text was set, false otherwise.
   */
  setValue(this: void, text: string): boolean;
}

interface TextToolConstructor {}

declare var TextTool: TextToolConstructor;
