/**
 * The AssetBundle behavior is present on Objects that were created from a custom AssetBundle.
 */
interface AssetBundle {
  /**
   * Index of the currently looping effect. Indexes starts at 0.
   *
   * @returns {boolean} The index of the currently looping effect.
   */
  getLoopingEffectIndex(this: void): number;

  /**
   * Returns a Table with the keys "index" and "name" for each looping effect.
   *
   * @returns {LoopingEffect[]} A Table with the keys "index" and "name" for each looping effect.
   */
  getLoopingEffects(this: void): LoopingEffect[] | undefined;

  /**
   * Returns a Table with the keys "index" and "name" for each trigger effect.
   *
   * @returns {LoopingEffect[]} A Table with the keys "index" and "name" for each trigger effect.
   */
  getTriggerEffects(this: void): LoopingEffect[] | undefined;

  /**
   * Starts playing a looping effect. Indexes starts at 0.
   *
   * @param {number} index Index of the looping effect to play.
   * @returns {boolean}
   */
  playLoopingEffect(this: void, index: number): boolean;

  /**
   * Starts playing a trigger effect. Indexes starts at 0.
   *
   * @param {number} index Index of the trigger effect to play.
   * @returns {boolean}
   */
  playTriggerEffect(this: void, index: number): boolean;
}

type LoopingEffect = {
  /**
   * The index of the effect.
   */
  index: number;

  /**
   * The name of the effect.
   */
  name: String;
};
