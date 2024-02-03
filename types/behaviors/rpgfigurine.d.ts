/// <reference path="../object.d.ts" />

/**
 * The RPGFigurine behavior is present on Objects that are figurines with built-in animations i.e. RPG Kit objects.
 */
interface RPGFigurine extends GObject {
  // settable callbacks

  /**
   * Executed when an attack is performed by the RPGFigurine Object.
   *
   * An attack is triggered via the context menu or by pressing the appropriate number key. If another RPGFigurine is within its attack arc, then onHit will be executed on the other figurine.
   *
   * @param {GObject[]} hitObjects The objects that were hit by the attack.
   * @returns {boolean} True if the attack was successful, false otherwise.
   */
  onAttack(this: void, hitObjects: GObject[]): void;

  /**
   * Executed when the RPGFigurine Object is attacked.
   *
   * An attack is triggered via the context menu or by pressing the appropriate number key. If this RPGFigurine Object is within the attack radius of an attacker, this function will be executed.
   *
   * @param {GObject} attacker The object that attacked the RPGFigurine Object.
   * @returns {boolean} True if the attack was successful, false otherwise.
   */
  onHit(this: void, attacker: GObject): void;

  /**
   * Plays a random attack animation.
   *
   * @returns {boolean} True if the attack animation was played, false otherwise.
   */
  attack(this: void): boolean;

  /**
   * Changes the figurine's current mode. What the mode represents is based on the figurine.
   *
   * @returns {boolean} True if the mode was changed, false otherwise.
   */
  changeMode(this: void): boolean;

  /**
   * Plays the death animation or causes it to return to life.
   *
   * @returns {boolean} True if the figurine died or was revived, false otherwise.
   */
  die(this: void): boolean;
}

interface RPGFigurineConstructor {}

declare var RPGFigurine: RPGFigurineConstructor;
