/// <reference path="material.d.ts" />
/// <reference path="component.d.ts" />

/**
 * Component APIs are an advanced feature. An understanding of how Unity works is required to utilize them.
 */
interface GameObject {
  /**
   * The name of the {@link GameObject}.
   */
  name: string;

  /**
   * Returns a child {@link GameObject} matching the specified {@link name}.
   *
   * @param {string} name The name of the child {@link GameObject}.
   * @returns {GameObject} The child {@link GameObject} matching the specified {@link name}.
   */
  getChild(this: void, name?: string): GameObject;

  /**
   * Returns the list of children {@link GameObject}s.
   *
   * @returns {GameObject[]} The list of children {@link GameObject}s.
   */
  getChildren(this: void): GameObject[];

  /**
   * Returns a {@link Component} matching the specified {@link name} from the {@link GameObject}'s list of {@link Component}s.
   *
   * @param {string} name The name of the {@link Component}.
   * @returns {Component} The {@link Component} matching the specified {@link name}.
   */
  getComponent(this: void, name?: string): Component;

  /**
   * Returns a {@link Component} matching the specified {@link name}. Found by searching the {@link Component}s of the {@link GameObject} and its {@link getChildren[children]} recursively (depth first).
   *
   * @param {string} name The name of the {@link Component}.
   * @returns {Component} The {@link Component} matching the specified {@link name}.
   */
  getComponentInChildren(this: void, name?: string): Component;

  /**
   * Returns the {@link GameObject}'s list of {@link Component}s. {@link name} is optional, when specified only {@link Component}s with specified {@link name} will be included.
   *
   * @param {string} name The name of the {@link Component}.
   * @returns {Component[]} The list of {@link Component}s.
   */
  getComponents(this: void, name?: string): Component[];

  /**
   *Returns a list of {@link Component}s found by searching the {@link GameObject} and its {@link getChildren[children]} recursively (depth first). {@link name} is optional, when specified only {@link Component}s with specified {@link name} will be included.
   *
   * @param {string} name The name of the {@link Component}.
   * @returns {Component[]} The list of {@link Component}s.
   */
  getComponentsInChildren(this: void, name?: string): Component[];

  /**
   * Returns the {@link GameObject}'s list of {@link Material}s.
   *
   * @returns {Material[]} The list of {@link Material}s.
   */
  getMaterials(this: void): Material[];

  /**
   * Returns a list of {@link Material}s found by searching the GameObject and its {@link getChildren[children]} recursively (depth first).
   *
   * @returns {Material[]} The list of {@link Material}s.
   */
  getMaterialsInChildren(this: void): Material[];
}

interface GameObjectConstructor {}

declare var GameObject: GameObjectConstructor;
