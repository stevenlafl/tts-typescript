declare type ColorLiteral =
  | 'White'
  | 'Brown'
  | 'Black'
  | 'Red'
  | 'Orange'
  | 'Yellow'
  | 'Green'
  | 'Teal'
  | 'Blue'
  | 'Purple'
  | 'Pink'
  | 'Grey'
  | 'Black'
  | 'Nobody';

declare class ColorFunctionality {
  /**
   *
   */
  setAt?: (this: void, k: string, value: number) => this;

  /**
   *
   */
  set?: (this: void, r: number, g: number, b: number, a: number) => this;

  /**
   *
   */
  get?: (this: void) => { r: number; g: number; b: number; a: number };

  /**
   *
   */
  copy?: (this: void) => Color;
}

type ColorLetterKeys = 'r' | 'g' | 'b' | 'a';
type ColorNumberKeys = 0 | 1 | 2 | 3;

type ColorLetters = {
  [key in ColorLetterKeys]?: number;
};

type ColorNumbers = {
  [key in ColorNumberKeys]?: number;
};

type Color = ColorLetters & ColorNumbers & ColorFunctionality;

type ColorConstructor = {
  [index in ColorLiteral]: Color;
} & {
  /**
   * Return a color with specified (r, g, b, a?) components.
   *
   * @param {number} r Red component.
   * @param {number} g Green component.
   * @param {number} b Blue component.
   * @param {number} a Alpha component.
   * @returns {Color} The color.
   */
  (this: void, r: number, g: number, b: number, a?: number): Color;

  /**
   * Return a color with r/g/b/a components from source table.
   *
   * @param {Color} t The source table.
   * @returns {Color} The color.
   */
  (this: void, t: Color): Color;

  /**
   * Same as Color(...).
   *
   * @param {number} r Red component.
   * @param {number} g Green component.
   * @param {number} b Blue component.
   * @param {number} a Alpha component.
   * @returns {Color} The color.
   */
  new: (this: void, r: number, g: number, b: number, a?: number) => Color;

  /**
   * Return a color from a color string ('Red', 'Green' etc), capitalization ignored.
   *
   * @param {string} colorStr The color string.
   * @returns {Color} The color.
   */
  fromString: (this: void, colorStr: string) => Color;
};

/**
 * Color is a type of Table that is used to define RGBA values for tinting. R for red, G for green, B for blue and A for alpha (transparency)
 *
 * Besides the functions listed below, other classes can be used to manipulate colors as well.
 *
 * Example Usage: orange = Color(1, 0, 0):lerp(Color(1, 1, 0), 0.5)
 */
declare var Color: ColorConstructor;
