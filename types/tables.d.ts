/// <reference path="./object.d.ts" />
interface Tables {}

interface TablesConstructor {
  /**
   * Returns the image URL of the current Custom Table, or nil if the current table is not a Custom Table.
   *
   * @returns {string} The image URL of the current Custom Table, or nil if the current table is not a Custom Table.
   */
  getCustomURL: (this: void) => string;

  /**
   * Returns the current Table's name i.e. equivalent to getTableObject().name.
   *
   * @returns {AllTableNames} The current Table's name.
   */
  getTable: (this: void) => AllTableNames;

  /**
   * Returns the current Table object.
   *
   * @returns {GObject} The current Table object.
   */
  getTableObject: (this: void) => GObject;

  /**
   * Sets the image URL for the current Custom Table. Has no effect if the current Table is not a Custom Table.
   *
   * @param {string} url The image URL for the current Custom Table.
   * @returns {boolean} True if the image URL was set, false otherwise.
   */
  setCustomURL: (this: void, url: string) => boolean;

  /**
   * Replaces the current Table with the Table matching the specified name.
   *
   * @param {AllTableNames} name The name of the Table to switch to.
   * @returns {boolean} True if the Table was switched, false otherwise.
   */
  setTable: (this: void, name: AllTableNames) => boolean;
}

/**
 * Tables is a global which provides the ability to interact with the Table object.
 */
declare var Tables: TablesConstructor;

type TableNames =
  | 'Table_Circular'
  | 'Table_Custom'
  | 'Table_Custom_Square'
  | 'Table_Glass'
  | 'Table_Hexagon'
  | 'Table_None'
  | 'Table_Octagon'
  | 'Table_Plastic'
  | 'Table_Poker'
  | 'Table_RPG'
  | 'Table_Square';

type HumanReadableNames =
  | 'Custom Rectangle'
  | 'Custom Square'
  | 'Hexagon'
  | 'None'
  | 'Octagon'
  | 'Poker'
  | 'Rectangle'
  | 'Round'
  | 'Round Glass'
  | 'Round Plastic'
  | 'Square';

type AllTableNames = TableNames | HumanReadableNames;
