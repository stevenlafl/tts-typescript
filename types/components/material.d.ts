/// <reference path="gameobject.d.ts" />

/**
 * The Material of a Renderer component is the primary method of controlling that object's appearance.
 */
interface Material {
  /**
   * The GameObject the Material is attached to.
   */
  game_object: GameObject;

  /**
   * The name of the Shader used by the Material.
   */
  shader: string;

  /**
   * Obtains the value of a given Variable on a Material.
   *
   * @param {string} name The name of the Variable.
   * @returns {any} The value of the Variable.
   */
  get(this: void, name?: string): any;

  /**
   * Returns a table mapping Var names () to their type, which is also represented as a .
   *
   * @returns {Record<string, string>} A table mapping Var names to their type.
   */
  getVars(this: void): Record<string, string>;

  /**
   * Sets the Var of the specified {@link name} to the provided {@link value}.
   *
   * @param {string} name The name of the Var.
   * @param {any} value The value to set the Var to.
   */
  set(this: void, name?: string, value?: any): boolean;
}

interface MaterialConstructor {}

declare var Material: MaterialConstructor;
