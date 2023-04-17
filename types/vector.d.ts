type VectorLetterKeys = 'x' | 'y' | 'z';
type VectorNumberKeys = 0 | 1 | 2;
type VectorTuple = [number, number, number];

type VectorLetters = {
  [key in VectorLetterKeys]?: number;
};

type VectorNumbers = {
  [key in VectorNumberKeys]?: number;
};

type Vector = VectorLetters & VectorNumbers;

interface VectorConstructor {
  /**
   * Return a vector with specified (x, y, z) components.
   */
  (this: void, x: number, y: number, z: number): Vector;

  /**
   * Return a vector with x/y/z or 1/2/3 components from source table (x/y/z first).
   */
  (this: void, t: Vector): Vector;

  /**
   * Same as Vector(...).
   *
   * @param {number} x The x component of the vector.
   * @param {number} y The y component of the vector.
   * @param {number} z The z component of the vector.
   * @returns {Vector} A vector with specified (x, y, z) components.
   */
  new: (this: void, x: number, y: number, z: number) => Vector;

  /**
   * Returns a vector that is made from the smallest components of two vectors.
   *
   * @param {Vector} vec1 The first vector.
   * @param {Vector} vec2 The second vector.
   * @returns {Vector} A vector that is made from the smallest components of two vectors.
   */
  min: (this: void, vec1: Vector, vec2: Vector) => Vector;

  /**
   * Returns a vector that is made from the largest components of two vectors.
   *
   * @param {Vector} vec1 The first vector.
   * @param {Vector} vec2 The second vector.
   * @returns {Vector} A vector that is made from the largest components of two vectors.
   */
  max: (this: void, vec1: Vector, vec2: Vector) => Vector;

  /**
   * Return a vector pointing from vec1 to vec2.
   *
   * @param {Vector} vec1 The first vector.
   * @param {Vector} vec2 The second vector.
   * @returns {Vector} A vector pointing from vec1 to vec2.
   */
  between: (this: void, vector1: Vector, vector2: Vector) => Vector;
}
declare var Vector: VectorConstructor;
