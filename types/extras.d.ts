/// <reference path="./color.d.ts" />

interface Global {}
interface GlobalConstructor {
  /* Global Functions */

  /**
   * Add a Decal onto an object or the game world.
   *
   * @important When using this function, the vector parameters (position, rotation) are relative to what the decal is being placed on. For example, if you put a decal at {0,0,0} on Global, it will attach to the center of the game room. If you do the same to an object, it will place the decal on the origin point of the object.
   * @param {AddDecalParameters} parameters A Table of parameters used to determine how the function will act.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  addDecal(this: void, parameters: AddDecalParameters): boolean;

  /**
   * Used to call a Lua function on another entity.
   *
   * @param {string} func_name Function name you want to activate.
   * @param {CustomTableObject} [func_params] A Table containing any data you want to pass to that function.
   * @returns {any} Var is only returned if the function called has a return. Otherwise return is nil. See example.
   */
  call(this: void, func_name: string, func_params?: CustomTableObject): any;

  /**
   * Returns information on all decals attached to this object or the world.
   *
   * @returns {AddDecalParameters[]} Returns a table of sub-tables, each sub-table representing one decal.
   */
  getDecals(this: void): Required<AddDecalParameters>[];

  /**
   * Get a Lua script as a string from the entity.
   *
   * @returns {string} The lua script.
   */
  getLuaScript(this: void): string;

  /**
   * Returns a table representing a list of snap points.
   *
   * @returns {SnapPoint[]} The returned value is a list (numerically indexed table) of sub-tables, where each sub-table represents a snap point.
   */
  getSnapPoints(this: void): Required<SnapPoint>[];

  /**
   * Data value of a variable in another Object's script. Can only return a table.
   *
   * @param {string} table_name Name of the table.
   * @returns {any} The table.
   */
  getTable(this: void, table_name: string): any;

  /**
   * Data value of a variable in another entity's script. Cannot return a table.
   *
   * @param {string} var_name Name of the variable.
   * @returns {any} The variable.
   */
  getVar(this: void, var_name: string): any;

  /**
   * Returns Table of data representing the current Vector Lines on this entity. See setVectorLines for table format.
   *
   * @returns {VectorLine[] | undefined} The vector lines.
   */
  getVectorLines(this: void): VectorLine[] | undefined;

  /**
   * Sets which decals are on an object. This removes other decals already present, and can remove all decals as well.
   *
   * @important Using this function with an empty table will remove all decals from Global or the object it is used on. Global.setDecals({})
   * @param {AddDecalParameters[]} parameters The main table, which will contain all of the sub-tables consisting of each decal's parameters.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setDecals(this: void, parameters: AddDecalParameters[]): boolean;

  /**
   * Input a string as an entity's Lua script. Generally only used after spawning a new Object.
   *
   * @param {string} script The script.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setLuaScript(this: void, script: string): boolean;

  /**
   * Replaces existing snap points with the specified list of snap points.
   *
   * @param {SnapPoint[]} snap_points The snap points.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setSnapPoints(this: void, snap_points: SnapPoint[]): boolean;

  /**
   * Creates/updates a variable in another entity's script. Only used for tables.
   *
   * @param {string} func_name Name of the function.
   * @param {any} data The data.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setTable(this: void, func_name: string, data: CustomTableObject): boolean;

  /**
   * Creates/updates a variable in another entity's script. Cannot set a table.
   *
   * @param {string} func_name Name of the function.
   * @param {any} data The data.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setVar(this: void, func_name: string, data: any): boolean;

  /**
   * Spawns Vector Lines from a list of parameters on this entity.
   *
   * @param {VectorLineParameter[]} parameters The parameters.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setVectorLines(this: void, parameters: VectorLineParameter[]): boolean;
}
declare var Global: GlobalConstructor;

//declare const _G: Record<string, any>;

declare function type(obj: any): string;

type CustomTableObject = {
  [key: string]: any
}
