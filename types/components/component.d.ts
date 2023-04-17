/// <reference path="gameobject.d.ts" />

/**
 * Component APIs are an advanced feature. An understanding of how Unity works is required to utilize them.
 */
interface Component {
  /**
   * The {@link GameObject} the {@link Component} composes.
   */
  game_object: GameObject;

  /**
   * The name of the Component.
   */
  name: string;

  /**
   * Obtains the value of a given Variable on a Component.
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
   * Sets the Var of the specified name to the provided value.
   *
   * @param {string} name The name of the Var.
   * @param {any} value The value to set the Var to.
   * @returns {boolean} True if the Var was set, false otherwise.
   */
  set(this: void, name?: string, value?: any): boolean;
}

interface ComponentConstructor {}

declare var Component: ComponentConstructor;
