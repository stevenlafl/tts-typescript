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

type ColorLiteralIgnoreCase = ColorLiteral | Uppercase<ColorLiteral> | Lowercase<ColorLiteral>

type ColorLetterKeys = 'r' | 'g' | 'b' | 'a';
type ColorNumberKeys = 1 | 2 | 3 | 4;
type ColorTuple = [number, number, number, number?];

type ColorLetters = {
  [key in ColorLetterKeys]?: number;
};

type ColorLettersGuaranteed = {
  [key in ColorLetterKeys]: number;
}

type ColorNumbers = {
  [key in ColorNumberKeys]?: number;
};

interface ColorInput extends ColorLetters, ColorNumbers {}

interface Color extends ColorInput {
 /**
  * Sets a component to value and returns self.
  * 
  * @param {ColorLetterKeys} k The component to set.
  * @param {number} value The value to set the component to.
  * @returns {this} self
  */
 setAt(k: ColorLetterKeys | ColorNumberKeys, value: number): this;

 /**
  * Sets r, b, g, a components to given values and returns self.
  * 
   * @param {number} r Red component.
   * @param {number} g Green component.
   * @param {number} b Blue component.
   * @param {number} a Alpha component.
  * @returns {this} self
  */
 set(r: number, g: number, b: number, a?: number): this;

 /**
  * Returns r, g, b, a components as four separate values.
  * 
  * @returns {ColorLettersGuaranteed} The components.
  */
 get(): LuaMultiReturn<[number, number, number, number]>;
 
 /**
  * Returns a separate Color with identical component values. 	
  * 
  * @returns {Color} A new Color
  */
 copy(): Color;

 /**
  *  Returns a hex string for self, boolean parameter `includeAlpha`.
  * 
  * @param includeAlpha Whether to include the alpha component.
  */
 toHex(includeAlpha?: boolean): string;

 /**
  * Returns a color string if matching this instance, nil otherwise, optional numeric tolerance param.
  * 
  * @param {number} tolerance The tolerance to use.
  * @returns {undefined} A string representation of the color or undefined.
  */
 toString(tolerance?: number): string | undefined;

 /**
  * Returns true if otherCol same as self, false otherwise, optional numeric tolerance param.
  * 
  * @param {Color} otherCol The color to compare to.
  * @param {number} tolerance The tolerance to use.
  * @returns {boolean} Whether the colors are equal.
  */
 equals(otherCol: Color, tolerance?: number): boolean;

 /**
  * Return a color some part of the way between col and otherCol, numeric arg [0, 1] is the fraction.
  * 
  * @param {Color} otherCol The color to lerp to.
  * @param {number} fraction The fraction to lerp by.
  * @returns {Color} The lerped color.
  */
 lerp(otherCol: Color, fraction: number): Color;

 /**
  * Return a string description of a color with an optional `prefix`.
  * 
  * @param prefix The prefix to use.
  * @returns {string} The string representation of the color.
  */
 dump(prefix?: string): string;
}

// Because capitalization is ignored, and custom colors can be added, a lot more indexers can be used
type ColorConstructor = {
  [index in ColorLiteralIgnoreCase]: Color;
} & {
  [index: string]: Color | undefined;
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
  (this: void, t: ColorInput): Color;
  /**
   * Return a color with r/g/b/a components from source table.
   *
   * @param {Color} t The source table.
   * @returns {Color} The color.
   */
  (this: void, t: ColorTuple): Color;

  /**
   * Same as Color(...).
   *
   * @param {number} r Red component.
   * @param {number} g Green component.
   * @param {number} b Blue component.
   * @param {number} a Alpha component.
   * @returns {Color} The color.
   */
  new: (this: void, r: number | ColorInput | ColorTuple, g?: number, b?: number, a?: number) => Color;

  /**
   * Return a color from a color string ('Red', 'Green' etc), capitalization ignored.
   *
   * @param {string} colorStr The color string.
   * @returns {Color} The color.
   */
  fromString(this: void, colorStr: ColorLiteralIgnoreCase): Color;

  /**
   * Return a string description of a color with an optional `prefix`.
   * 
   * @param {ColorInput} color The color to dump
   * @param {string} prefix The prefix to use.
   * @returns {string} The string representation of the color.
   */
  dump(this: void, color: ColorInput, prefix?: string): string;

  /**
   * Returns a table of all color strings.
   * 
   * @returns {string[]} The color strings.
   */
  list: string[];
  
  /**
   * Add your own color definition to the class.
   * 
   * @param {string} name The name of the color.
   * @param {Color} yourColor The color to add.
   * @returns {Color} The color. 
   */
  Add(this: void, name: string, yourColor: ColorInput): Color;
};

/**
 * Color is a type of Table that is used to define RGBA values for tinting. R for red, G for green, B for blue and A for alpha (transparency)
 *
 * Besides the functions listed below, other classes can be used to manipulate colors as well.
 *
 * Example Usage: orange = Color(1, 0, 0):lerp(Color(1, 1, 0), 0.5)
 */
declare var Color: ColorConstructor;
