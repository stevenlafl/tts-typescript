type VectorLetterKeys = 'x' | 'y' | 'z';
type VectorNumberKeys = 0 | 1 | 2;
type VectorTuple = [number, number, number];

type VectorLetters = {
  [key in VectorLetterKeys]?: number;
};

type VectorNumbers = {
  [key in VectorNumberKeys]?: number;
};

type OrthoNormalizeTuple = {
  base: Vector,
  normal: Vector,
  binormal: Vector
};

//type Vector = VectorLetters & VectorNumbers;

interface Vector extends VectorLetters, VectorNumbers {

  // Arithmetic operators

  /**
   * Sets a component to value and returns self.
   * 
   * @param {VectorLetterKeys} k The component to set.
   * @param {number} value The value to set the component to.
   * @returns {this} self
   */
  setAt?(k: VectorLetterKeys, value: number): this;

  /**
   * Sets x, y, z components to given values and returns self.
   * 
   * @param {VectorTuple} args The values to set the components to.
   * @returns {this} self
   */
  set?(...args: VectorTuple): this;

  /**
   * Returns x, y, z components as three separate values.
   * 
   * @returns {VectorLetters} The components.
   */
  get?(): VectorLetters;
  
  /**
   * Returns a separate Vector with identical component values. 	
   * 
   * @returns {Vector} A new Vector
   */
  copy?(): Vector;

  // Methods modifying self
  /**
   * Adds components of otherVec to self.
   * 
   * @param otherVec The vector to add to self.
   * @returns {this} self
   */
  add?(otherVec: Vector): this;

  /**
   * Subtracts components of otherVec from self.
   * 
   * @param otherVec The vector to subtract from self.
   * @returns {this} self
   */
  sub?(otherVec: Vector): this;

  /**
   * Multiplies self-components by corresponding components from otherVec.
   * 
   * @param { Vector | number } otherVec If a number is passed, it will be used for all components.
   * @returns {this} self
   */
  scale?(vecOrNum: Vector | number): this;

  /**
   * If self-magnitude is higher than provided limit, scale self-down to match it.
   * 
   * @param {Vector} num The limit to scale self to. 
   * @returns {this} self
   */
  clamp?(num: Vector): this;

  /**
   * Makes self-have a magnitude of 1.
   * 
   * @returns {this} self
   */
  normalize?(): this;

  /**
   * Make self into projection on another vector.
   * 
   * @param {Vector} otherVec The vector to project self on.
   * @returns {this} self
   */
  project?(otherVec: Vector): this;

  /**
   * Project self on a plane defined through a normal vector arg.
   * 
   * @param {Vector} otherVec The vector to project self on.
   * @returns self
   */
  projectOnPlane?(otherVec: Vector): this;
  
  /**
   * Reflect self over a plane defined through a normal vector arg.
   * 
   * @param {Vector} otherVec The vector to reflect self over. 
   * @returns self
   */
  reflect?(otherVec: Vector): this;

  /**
   * Multiply self-components by -1.
   * 
   * @returns {this} self
   */
  inverse?(): this;

  /**
   * Move self towards another vector, but only up to a provided distance limit.
   * 
   * @param {Vector} otherVec The vector to move self towards.
   * @param num The limit to move self to.
   * @returns {this} self
   */
  moveTowards?(otherVec: Vector, num: number): this;

  /**
   * Rotate self towards another vector, but only up to a provided angle limit.
   * 
   * @param {Vector} target The vector to rotate self towards.
   * @param {number} maxAngle The limit to rotate self to.
   * @returns {this} self
   */
  rotateTowards?(target: Vector, maxAngle: number): this;

  /**
   * Same as rotateTowards, but only works correctly if `target` Vector is normalized. Less expensive than `rotateTowards`.
   * 
   * @param {Vector} target The vector to rotate self towards.
   * @param {number} maxAngle The limit to rotate self to.
   * @returns {this} self
   */
  rotateTowardsUnit?(target: Vector, maxAngle: number): this;

  /**
   * Rotate a Vector `angle` degrees over given axis (can be `'x'`, `'y'`, `'z'`).
   * 
   * @param {string} axis The axis to rotate over. 
   * @param {number} angle The angle to rotate by.
   * @returns {this} self
   */
  rotateOver?(axis: string, angle: number): this;

  // Methods not modifying self
  /**
   * Return a dot product of two vectors.
   * 
   * @param {Vector} vec2 The vector to dot with. 
   * @returns {number} The dot product of the two vectors.
   */
  dot?(vec2: Vector): number;

  /**
   * Returns the length of this vector.
   * 
   * @returns {number} The magnitude of the vector.
   */
  magnitude?(): number;

  /**
   * Returns the squared length of this vector.
   * 
   * @returns {number} The squared magnitude of the vector.
   */
  sqrMagnitude?(): number;

  /**
   * Returns distance between two points.
   * 
   * @param {Vector} p2 The vector to get the distance to.
   * @returns {number} The distance between the two vectors.
   */
  distance?(p2: Vector): number;

  /**
   * Returns squared distance between two points.
   * 
   * @param {Vector} p2 The vector to get the squared distance to. 
   * @returns 
   */
  sqrDistance?(p2: Vector): number;

  /**
   * Returns true if two vectors are approximately equal. The `margin` argument is optional and defaults to tolerating a difference of ~0.03 in both vector magnitude.
   * 
   * @param {Vector} vec2 The vector to compare to. 
   * @param {number} margin The margin of error to allow.
   * @returns 
   */
  equals?(vec2: Vector, margin?: number): boolean;

  /**
   * Return string describing self, optional string prefix.
   * 
   * @returns {string} The string describing self.
   */
  string?(): string;

  /**
   * Return an angle between two vectors, in degrees [0, 180].
   * 
   * @param {Vector} vec2 The vector to get the angle to.
   * @returns {number} The angle between the two vectors.
   */
  angle?(vec2: Vector): number;

  /**
   * Return a cross-product vector of two vectors.
   * 
   * @param {Vector} vec2 The vector to cross with. 
   * @returns {Vector} The cross-product vector.
   */
  cross?(vec2: Vector): Vector;

  /**
   * Linearly interpolates between two points. Numeric arg [0, 1] is the fraction.
   * 
   * @param {Vector} p2 The vector to lerp to. 
   * @param {Vector} t The fraction to lerp by. 
   * @returns 
   */
  lerp?(p2: Vector, t: number): Vector;

  /**
   * Return a new vector that is normalized (length 1) version of self. 	
   * 
   * @returns {Vector} The normalized vector.
   */
  normalized?(): Vector;

  /**
   * Return three normalized vectors perpendicular to each other, first one being in the same dir as self. Return `base`, `normal`, `binormal` vectors.
   * 
   * @param binormalPlanar Optional vector that will be used as a plane for binormal vector, and is guaranteed to be on a self-binormalPlanar plane.
   * @returns {OrthoNormalizeTuple} The three normalized vectors.
   */
  orthoNormalize?(binormalPlanar?: Vector): OrthoNormalizeTuple;

  /**
   * Returns an angle (In degrees) of rotation of Vector over all axis (`'x'`, `'y'`, `'z'`).
   * 
   * @param axis Optional axis to return angle for. If not specified, returns a table with all three angles.
   * @returns { number | VectorTuple } The angle of rotation.
   */
  heading?(axis?: string): number | VectorTuple;
}

interface VectorConstructor {
  /**
   * Return a vector with specified (x, y, z) components.
   * 
   * @param {number} x The x component of the vector.
   * @param {number} y The y component of the vector.
   * @param {number} z The z component of the vector.
   * @returns {Vector} A vector with specified (x, y, z) components.
   */
  (this: void, x: number, y: number, z: number): Vector;

  /**
   * Return a vector with x/y/z or 1/2/3 components from source table (x/y/z first).
   * 
   * @param {VectorTuple} t A table with x/y/z or 1/2/3 components.
   * @returns {Vector} A vector with x/y/z or 1/2/3 components.
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
  min(this: void, vec1: Vector, vec2: Vector): Vector;

  /**
   * Returns a vector that is made from the largest components of two vectors.
   *
   * @param {Vector} vec1 The first vector.
   * @param {Vector} vec2 The second vector.
   * @returns {Vector} A vector that is made from the largest components of two vectors.
   */
  max(this: void, vec1: Vector, vec2: Vector): Vector;

  /**
   * Return a vector pointing from vec1 to vec2.
   *
   * @param {Vector} vec1 The first vector.
   * @param {Vector} vec2 The second vector.
   * @returns {Vector} A vector pointing from vec1 to vec2.
   */
  between(this: void, vector1: Vector, vector2: Vector): Vector;

  // Methods not modifying self
  /**
   * Return a dot product of two vectors.
   * 
   * @param {Vector} vec1 The vector to dot with.
   * @param {Vector} vec2 The vector to dot with. 
   * @returns {number} The dot product of the two vectors.
   */
  dot?(this: void, vec1: Vector, vec2: Vector): number;

  /**
   * Returns the length of this vector.
   * 
   * @param {Vector} vec1 The vector to get the magnitude of.
   * @returns {number} The magnitude of the vector.
   */
  magnitude?(this: void, vec1: Vector): number;

  /**
   * Returns the squared length of this vector.
   * 
   * @param {Vector} vec1 The vector to get the squared magnitude of.
   * @returns {number} The squared magnitude of the vector.
   */
  sqrMagnitude?(this: void, vec1: Vector): number;

  /**
   * Returns distance between two points.
   * 
   * @param {Vector} p1 The vector to get the distance from.
   * @param {Vector} p2 The vector to get the distance to.
   * @returns {number} The distance between the two vectors.
   */
  distance?(this: void, p1: Vector, p2: Vector): number;

  /**
   * Returns squared distance between two points.
   * 
   * @param {Vector} p1 The vector to get the squared distance from.
   * @param {Vector} p2 The vector to get the squared distance to. 
   * @returns 
   */
  sqrDistance?(this: void, p1: Vector, p2: Vector): number;

  /**
   * Returns true if two vectors are approximately equal. The `margin` argument is optional and defaults to tolerating a difference of ~0.03 in both vector magnitude.
   * 
   * @param {Vector} vec1 The vector to compare from.
   * @param {Vector} vec2 The vector to compare to. 
   * @param {number} margin The margin of error to allow.
   * @returns 
   */
  equals?(this: void, vec1: Vector, vec2: Vector, margin?: number): boolean;

  /**
   * Return string describing self, optional string prefix.
   * 
   * @param {Vector} vec1 The vector to get the string of.
   * @returns {string} The string describing self.
   */
  string?(this: void, vec1: Vector): string;

  /**
   * Return an angle between two vectors, in degrees [0, 180].
   * 
   * @param {Vector} vec1 The vector to get the angle from.
   * @param {Vector} vec2 The vector to get the angle to.
   * @returns {number} The angle between the two vectors.
   */
  angle?(this: void, vec1: Vector, vec2: Vector): number;

  /**
   * Return a cross-product vector of two vectors.
   * 
   * @param {Vector} vec1 The vector to cross with.
   * @param {Vector} vec2 The vector to cross with. 
   * @returns {Vector} The cross-product vector.
   */
  cross?(this: void, vec1: Vector, vec2: Vector): Vector;

  /**
   * Linearly interpolates between two points. Numeric arg [0, 1] is the fraction.
   * 
   * @param {Vector} p1 The vector to lerp from.
   * @param {Vector} p2 The vector to lerp to. 
   * @param {Vector} t The fraction to lerp by. 
   * @returns 
   */
  lerp?(this: void, p1: Vector, p2: Vector, t: number): Vector;

  /**
   * Return a new vector that is normalized (length 1) version of self. 	
   * 
   * @param {Vector} vec1 The vector to normalize.
   * @returns {Vector} The normalized vector.
   */
  normalized?(this: void, vec1: Vector): Vector;

  /**
   * Return three normalized vectors perpendicular to each other, first one being in the same dir as self. Return `base`, `normal`, `binormal` vectors.
   * 
   * @param {Vector} vec1 The vector to get the orthogonal vectors of.
   * @param binormalPlanar Optional vector that will be used as a plane for binormal vector, and is guaranteed to be on a self-binormalPlanar plane.
   * @returns {OrthoNormalizeTuple} The three normalized vectors.
   */
  orthoNormalize?(this: void, vec1: Vector, binormalPlanar?: Vector): OrthoNormalizeTuple;

  /**
   * Returns an angle (In degrees) of rotation of Vector over all axis (`'x'`, `'y'`, `'z'`).
   * 
   * @param {Vector} vec1 The vector to get the angle of rotation of.
   * @param axis Optional axis to return angle for. If not specified, returns a table with all three angles.
   * @returns { number | VectorTuple } The angle of rotation.
   */
  heading?(this: void, vec1: Vector, axis?: string): number | VectorTuple;
}
declare var Vector: VectorConstructor;
