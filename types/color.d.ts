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

type ColorLettersGuaranteed = {
  [key in ColorLetterKeys]: number;
}

type ColorNumbers = {
  [key in ColorNumberKeys]?: number;
};

type ColorTuple = [number, number, number, number?];

interface Color extends ColorLetters, ColorNumbers, ColorFunctionality {
 /**
  * Sets a component to value and returns self.
  * 
  * @param {ColorLetterKeys} k The component to set.
  * @param {number} value The value to set the component to.
  * @returns {this} self
  */
 setAt?: (k: ColorLetterKeys, value: number) => this;

 /**
  * Sets r, b, g, a components to given values and returns self.
  * 
  * @param {VectorTuple} args The values to set the components to.
  * @returns {this} self
  */
 set?: (...args: ColorTuple) => this;

 /**
  * Returns x, y, z components as three separate values.
  * 
  * @returns {ColorLettersGuaranteed} The components.
  */
 get?: () => ColorLettersGuaranteed;
 
 /**
  * Returns a separate Color with identical component values. 	
  * 
  * @returns {Color} A new Color
  */
 copy?: () => Color;

 /**
  *  Returns a hex string for self, boolean parameter `includeAlpha`.
  * 
  * @param includeAlpha Whether to include the alpha component.
  */
 toHex? (includeAlpha: boolean): string;

 /**
  * Returns a color string if matching this instance, nil otherwise, optional numeric tolerance param.
  * 
  * @param {number} tolerance The tolerance to use.
  * @returns {string} A string representation of the color or null.
  */
 toString?: (tolerance?: number) => string | null;

 /**
  * Returns true if otherCol same as self, false otherwise, optional numeric tolerance param.
  * 
  * @param {Color} otherCol The color to compare to.
  * @param {number} tolerance The tolerance to use.
  * @returns {boolean} Whether the colors are equal.
  */
 equals?: (otherCol: Color, tolerance?: number) => boolean;

 /**
  * Return a color some part of the way between col and otherCol, numeric arg [0, 1] is the fraction.
  * 
  * @param {Color} otherCol The color to lerp to.
  * @param {number} num The fraction to lerp by.
  * @returns {Color} The lerped color.
  */
 lerp?: (otherCol: Color, num: number) => Color;

 /**
  * Return a string description of a color with an optional `prefix`.
  * 
  * @param prefix The prefix to use.
  * @returns {string} The string representation of the color.
  */
 dump?: (prefix?: string) => string;
}

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
  Add(this: void, name: string, yourColor: Color): Color;
};

/**
 * Color is a type of Table that is used to define RGBA values for tinting. R for red, G for green, B for blue and A for alpha (transparency)
 *
 * Besides the functions listed below, other classes can be used to manipulate colors as well.
 *
 * Example Usage: orange = Color(1, 0, 0):lerp(Color(1, 1, 0), 0.5)
 */
declare var Color: ColorConstructor;
