/// <reference path="./color.d.ts" />

interface Lighting {}

interface LightingConstructor {
  /**
   * The strength of the ambient light. Range = 0 to 4.
   */
  ambient_intensity: number;

  /**
   * The source of ambient light. 1 = background, 2 = gradient.
   */
  ambient_type: number;

  /**
   * The strength of the directional light shining down in the scene. Range = 0 to 4.
   */
  light_intensity: number;

  /**
   * How much the LUT contributes to the light.
   */
  lut_contribution: number;

  /**
   * The LUT index of the light.
   */
  lut_index: number;

  /**
   * The URL of the LUT.
   */
  lut_url: string;

  /**
   * The strength of the reflections from the background. Range = 0 to 1.
   */
  reflection_intensity: number;

  /**
   * Applies pending changes made via the Lighting class.
   *
   * @returns {boolean} True if the changes were applied, false otherwise.
   */
  apply(this: void): boolean;

  /**
   * Returns Color Table of the gradient equator. Not used if {@link ambient_type} = 1.
   *
   * @returns {Color} The Color Table of the gradient equator.
   */
  getAmbientEquatorColor(this: void): Color;

  /**
   * Returns Color Table of the gradient ground. Not used if {@link ambient_type} = 1.
   *
   * @returns {Color} The Color Table of the gradient ground.
   */
  getAmbientGroundColor(this: void): Color;

  /**
   * Returns Color Table of the gradient sky. Not used if {@link ambient_type} = 1.
   *
   * @returns {Color} The Color Table of the gradient sky.
   */
  getAmbientSkyColor(this: void): Color;

  /**
   * Returns Color Table of the directional light, which shines straight down on the table.
   *
   * @returns {Color} The Color Table of the directional light.
   */
  getLightColor(this: void): Color;

  /**
   * Sets the color of the gradient equator. Not used if {@link ambient_type} = 1.
   *
   * @param {Color} tint The new color of the gradient equator.
   */
  setAmbientEquatorColor(this: void, tint: Color): boolean;

  /**
   * Sets the color of the gradient ground. Not used if {@link ambient_type} = 1.
   *
   * @param {Color} tint The new color of the gradient ground.
   */
  setAmbientGroundColor(this: void, tint: Color): boolean;

  /**
   * Sets the color of the gradient sky. Not used if {@link ambient_type} = 1.
   *
   * @param {Color} tint The new color of the gradient sky.
   */
  setAmbientSkyColor(this: void, tint: Color): boolean;

  /**
   * Sets the color of the directional light, which shines straight down on the table.
   *
   * @param {Color} tint The new color of the directional light.
   */
  setLightColor(this: void, tint: Color): boolean;
}

/**
 * Lighting, a static global class, is the in-game light of the map. It allows you to modify the lighting of the instance in the same way that the in-game lighting menu does. You call these functions like this: Lighting.apply().
 *
 * For more information on lighting in Unity, refer to the Unity documentation.
 */
declare var Lighting: LightingConstructor;
