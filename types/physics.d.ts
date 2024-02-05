/// <reference path="./vector.d.ts" />
/// <reference path="./object.d.ts" />

interface Physics {}

interface PhysicsConstructor {
  /**
   * The play area being used (ie. how far from middle you can get). Values from 0 - 1. Default is 0.5
   */
  play_area: number;

  /**
   * Returns Table containing information on hit Objects. There are three kinds of casts:
   *
   * It draws the imaginary cast, then moves the rap/box/sphere along that path instantly. The debug Bool in the parameters allows you to see this shape, to aid in setup, but the visual is not instant (due to that making it pointless, if you can't see it).
   *
   * @warning Physics casts are somewhat expensive. When running 30+ at once it will cause your game to stutter and/or crash. Do not overuse.
   *
   * @param {CastParameters} parameters A Table of parameters used to guide the function.
   * @returns {HitObjects} Table containing information on hit Objects.
   */
  cast(this: void, parameters: CastParameters): HitObjects;

  /**
   * Returns directional Vector of the direction gravity is pulling.
   *
   * @returns {Vector} The directional Vector of the direction gravity is pulling.
   */
  getGravity(this: void): Vector;

  /**
   * Sets the direction gravity pulls.
   *
   * @param {Vector} direction The new direction gravity pulls.
   * @returns {boolean} True if the direction gravity pulls was set, false otherwise.
   */
  setGravity(this: void, direction: Vector): boolean;
}

/**
 * Physics, a static global class, allows access to casts and gravity. Physics casts are a way to detect Objects. You call these functions like this: Physics.getGravity(). This class also allows you to access elements of the environment.
 *
 * For more information on physics casts in Unity, refer to the Unity documentation under BoxCast/RayCast/SphereCast.
 */
declare var Physics: PhysicsConstructor;

declare enum CastType {
  Ray = 1,
  Sphere = 2,
  Box = 3
}

type CastParameters = {
  /**
   * Position of the starting point. Defaults to {x=0, y=0, z=0}.
   */
  origin?: Vector;

  /**
   * A direction for the cast to move in. Cast is motionless without a direction.
   */
  direction?: Vector;

  /**
   * The type of cast. 1 = Ray, 2 = Sphere, 3 = Box. Defaults to 1.
   */
  type?: CastType;

  /**
   * Size of the cast shape. Sphere/Box only. Defaults to {x=0, y=0, z=0}.
   */
  size?: Vector;

  /**
   * Rotation of the cast shape. Box only. Defaults to {x=0, y=0, z=0}
   */
  orientation?: Vector;

  /**
   * How far the cast will travel. Defaults to infinity. Won't move without direction.
   */
  max_distance?: number;

  /**
   * If the cast is visualized for the user. Defaults to false.
   */
  debug?: boolean;
};

type HitObjects = {
  /**
   * Position the cast impacted the Object.
   */
  point: Vector;

  /**
   * The surface normal of the impact point.
   */
  normal: Vector;

  /**
   * Distance between cast origin and impact point.
   */
  distance: number;

  /**
   * An Object reference to the Object hit by the cast.
   */
  // TODO check what object types get hit
  hit_object: GObject;
};
