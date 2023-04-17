/// <reference path="./vector.d.ts" />
/// <reference path="./color.d.ts" />
/// <reference path="./object.d.ts" />
/// <reference path="./player.d.ts" />

/** @noSelfInFile */
/* Global */

/**
 * Function to run when menu item is selected.
 *
 * @callback addContextMenuItemCallback
 * @param {string} player_color - Player Color who selected the menu item.
 * @param {Vector} vector - Global position of the right-click context menu.
 */

/**
 * Adds a menu item to the Global right-click context menu. Global menu is shown when player right-clicks on empty space or table.
 *
 * @param {string} label Label for the menu item.
 * @param {addContextMenuItemCallback} toRunFunc Function to run when menu item is selected.
 * @param {boolean} [keep_open=false] Keep context menu open after menu item was selected.
 * @param {string} [require_table=false] Show added menu item when right-clicked on empty space or table.
 * @returns {boolean}
 */
declare function addContextMenuItem(
  label: string,
  toRunFunc: (player_color: string, vector: Vector) => void,
  keep_open?: boolean,
  require_table?: boolean
): boolean;

/**
 * Clears all menu items added by function {@link addContextMenuItem}.
 *
 * @returns {boolean}
 * @see {@link addContextMenuItem}
 */
declare function clearContextMenu(): boolean;

/**
 * Copy a list of Objects to the clipboard. Works with {@link paste}.
 *
 * @param {GObject} object_list List of Objects to copy.
 * @returns {boolean}
 */
declare function copy(object_list: GObject[]): boolean;

/**
 * Destroy an Object.
 *
 * @param {GObject} obj The Object you wish to delete from the instance.
 * @returns {boolean}
 */
declare function destroyObject(obj: GObject): boolean;

/**
 * Flip the table.
 *
 * @returns {boolean}
 */
declare function flipTable(): boolean;

/**
 * Get all Objects in the instance.
 *
 * @returns {GObject[]} List of all Objects in the instance.
 */
declare function getAllObjects(): GObject[];

/**
 * Returns Object by its GUID. Will return null if this GUID doesn't currently exist.
 *
 * @param {string} guid GUID of the Object to get a reference of.
 * @returns {GObject}
 */
declare function getObjectFromGUID(guid: string): GObject;

/**
 * Returns a list of all Objects.
 *
 * @returns {GObject[]}
 */
declare function getObjects(): GObject[];

/**
 * Returns a list of all Objects with the given tag.
 *
 * @param {string} tag
 * @returns {GObject[]} List of all matching Objects.
 */
declare function getObjectsWithTag(tag: string): GObject[];

/**
 * Returns a list of all Objects with any of the given tags.
 *
 * @param {string[]} tags
 * @returns {GObject[]} List of all matching Objects.
 */
declare function getObjectsWithAnyTags(tags: string[]): GObject[];

/**
 * Returns a list of all Objects with all of the given tags.
 *
 * @param tags
 * @returns {GObject[]} List of all matching Objects.
 */
declare function getObjectsWithAllTags(tags: string[]): GObject[];

/**
 * Returns a list of all seated players.
 *
 * @returns {Player[]} List of all seated players.
 */
declare function getSeatedPlayers(): Player[];

/**
 * Groups objects together, like how the `G` key does for players. It returns a table of object references to any decks/stacks formed.
 *
 * Not all objects CAN be grouped. If the `G` key won't work on them, neither will this function.
 *
 * @param {GObject[]} objects List of Objects to group.
 * @returns {GObject[]} A table containing the grouped objects. Different types of object are grouped independently i.e. cards will form into a deck, each type of checker will form their own stack.
 */
declare function group(objects: GObject[]): GObject[];

/**
 *  Pastes Objects in-game that were copied to the in-game clipboard. Works with copy(...).
 *
 * @param {PasteParameters} parameters
 * @returns {GObject[]} List of pasted objects.
 */
declare function paste(parameters: PasteParameters): GObject[];

/**
 * Sets whether the instance is looking for players or not. This is the same as the "Looking for Players" toggle in the Instance Settings.
 *
 * @param {boolean} lfp
 * @returns {boolean}
 */
declare function setLookingForPlayers(lfp: boolean): boolean;

/**
 * Spawns an object.
 *
 * Refer to the spawnable Built-in Object and Custom Object pages for details about the types of objects that can be spawned.
 *
 * If you are spawning a Custom Object, you should immediately call setCustomObject(...) on the object returned from spawnObject(...).
 *
 * @param {SpawnObjectParameters} parameters Parameters for spawning an object. See {@link SpawnObjectParameters}.
 * @returns {GObject} The spawned object.
 */
declare function spawnObject(parameters: SpawnObjectParameters): GObject;

/**
 * Spawns an object.
 *
 * Refer to the spawnable Built-in Object and Custom Object pages for details about the types of objects that can be spawned.
 *
 * If you are spawning a Custom Object, you should immediately call setCustomObject(...) on the object returned from spawnObject(...).
 *
 * @param {SpawnObjectDataParameters} parameters Parameters for spawning an object. See {@link SpawnObjectDataParameters}.
 * @returns {GObject} The spawned object.
 */
declare function spawnObjectData(parameters: SpawnObjectDataParameters): GObject;

/**
 * Spawns an object from an object data table representation.
 *
 * This API gives you complete control over all persistent properties that an object has.
 *
 * @param {SpawnObjectJSONParameters} parameters Parameters for spawning an object. See {@link SpawnObjectJSONParameters}.
 * @returns {GObject} The spawned object.
 */
declare function spawnObjectJSON(parameters: SpawnObjectJSONParameters): GObject;

/**
 * Start a coroutine. A coroutine is similar to a function, but has the unique ability to have its run paused until the next frame of the game using coroutine.yield(0).
 *
 * @param {GObject} function_owner The Object that the function being called is on. Global is a valid target.
 * @param {string} function_name Name of the function being called as a coroutine.
 * @returns {boolean}
 */
declare function startLuaCoroutine(function_owner: GObject, function_name: string): boolean;

/**
 * Converts a Player Color string into a Color Table for tinting.
 *
 * @param {string} player_color A String of a Player Color.
 */
declare function stringColorToRGB(player_color: string): Color;

/* Hotkey */

/**
 * The function that will be executed whenever the hotkey is pressed, and also when released if triggerOnKeyUp is true.
 *
 * @callback addHotkeyCallback
 * @param {ColorLiteral} playerColor -  Player {@link Color} of the player that pressed the hotkey.
 * @param {Vector} hoveredObject - The object that the Player's pointer was hovering over at the moment the key was pressed/released. nil if no object was under the Player's pointer at the time.
 * @param {Vector} pointerPosition - Word Position of the Player's pointer at the moment the key was pressed/released.
 * @param {boolean} isKeyUp - Whether this callback is being triggered in response to a hotkey being released.
 */

/**
 * Adds a bindable hotkey to the game.
 *
 * Players can bind key to hotkeys from the `Options -> Game Keys` UI after this function is called.
 *
 * @param {string} label A label displayed to users.
 * @param {addHotkeyCallback} toRunFunc The function that will be executed whenever the hotkey is pressed, and also when released if triggerOnKeyUp is true.
 * @param {boolean} trigger_on_key_up Whether the callback is also executed when the hotkey is released. The callback is always triggered when the hotkey is pressed.
 * @returns {boolean}
 */
declare function addHotkey(
  label: string,
  toRunFunc: (
    playerColor: ColorLiteral,
    hoveredObject: GObject,
    pointerPosition: Vector,
    isKeyUp: boolean
  ) => void,
  trigger_on_key_up?: boolean
): boolean;

/**
 * Removes hotkeys from the game.
 *
 * @returns {boolean}
 */
declare function clearHotkeys(): boolean;

/**
 * Shows the hotkey configuration UI.
 *
 * @returns {boolean}
 */
declare function showHotkeyConfig(): boolean;

/* Message */

/**
 * Print an on-screen message to all Players.
 *
 * @param {string} message Message to display on-screen.
 * @param {Color} message_tint  A Table containing the RGB color tint for the text.
 * @returns {boolean}
 */
declare function broadcastToAll(message: string, message_tint: Color): boolean;

/**
 * Print an on-screen message to a specified Player and their in-game chat.
 *
 * @param {string} message Message to display on-screen.
 * @param {string} player_color Player Color to receive the message.
 * @param {Color} message_tint RGB color tint for the text.
 * @returns {boolean}
 */
declare function broadcastToColor(
  message: string,
  player_color: string,
  message_tint: Color
): boolean;

/**
 * Logs a message to the host's System Console (accessible from ~ pane of in-game chat window).
 *
 * @param {any} value The value you want to log.
 * @param {string} label Text to be logged before value.
 * @param {string} tags The log tag/style or a space separated list of log tags/styles. (See: logStyle(...))
 * @returns {boolean}
 */
declare function log(value: any, label?: string, tags?: string): boolean;

/**
 * Returns a String formatted similarly to the output of log(...).
 *
 * @param {any} value The value you want to log.
 * @param {string} label Text to be logged before value.
 * @param {string} tags The log tag/style or a space separated list of log tags/styles.
 * @param {boolean} concise Whether the resultant String should be generated in a more compact form (less newline characters).
 * @param {boolean} displayTag Whether the specified tag(s) should be included as prefix of the resultant String.
 * @returns {string}
 */
declare function logString(
  value: any,
  label?: string,
  tags?: string,
  concise?: boolean,
  displayTag?: boolean
): string;

/**
 * Configures style options for a log(...) tag.
 *
 * @param {string} tag A String of the log's tag.
 * @param {Color} tint RGB value to tint the log entry's text.
 * @param {string} prefix Text to place before this type of log entry.
 * @param {string} postfix Text to place after this type of log entry.
 * @returns {boolean}
 */
declare function logStyle(tag: string, tint: Color, prefix: string, postfix: string): boolean;

/**
 * Print a string into chat that only the host is able to see. Used for debugging scripts.
 *
 * @param message Text to print into the chat log.
 * @returns {boolean}
 */
declare function print(message: string): null;

/**
 * Print a message into the in-game chat of all connected players.
 *
 * @param {string} message Message to place into players' in-game chats.
 * @param {Color} message_tint RGB values for the text's color tint.
 */
declare function printToAll(message: string, message_tint?: Color): boolean;
declare function printToColor(message: string, player_colo: string, message_tint: Color): boolean;
declare function sendExternalMessage(data: any): boolean;

/**
 * PasteParameters
 *
 * @typedef {GObject} PasteParameters
 * @property {Vector} [position] - Position to paste objects to. Defaults to the position of the player's cursor.
 * @property {boolean} [snap_to_grid] - Snap pasted objects to the grid. Defaults to true.
 * @see {@link paste}
 */
type PasteParameters = {
  position?: Vector;
  snap_to_grid?: boolean;
};

/**
 * SpawnObjectParameters
 *
 * @typedef {GObject} SpawnObjectParameters
 * @property {string} type Built-in or Custom Game Object name.
 * @property {Vector} [position=[0,0,0]] Position where the object will be spawned.
 * @property {Vector} [rotation=[0,0,0]] Rotation of the spawned object.
 * @property {Vector} [scale=[1,1,1]] Scale of the spawned object.
 * @property {boolean} [sound=true] Whether a sound will be played as the object spawns.
 * @property {boolean} [snap_to_grid=false] Whether upon spawning, the object will snap to nearby grid lines (or snap points).
 * @property {function} [callback_function=null] Called when the object has finished spawning. The spawned object will be passed as the first and only parameter.
 * @see {@link spawnObject}
 */
type SpawnObjectParameters = {
  type: string;
  position?: Vector;
  rotation?: Vector;
  scale?: Vector;
  sound?: boolean;
  snap_to_grid?: boolean;
  callback_function?: (this: void, obj: GObject) => void;
};

/**
 * SpawnObjectDataParameters
 *
 * @typedef {GObject} SpawnObjectDataParameters
 * @property {GObject} data Properties describing the object that will be spawned.
 * @property {Vector} [position=[0,0,0]] Position where the object will be spawned. When specified, overrides the `Transform` position in `data`.
 * @property {Vector} [rotation=[0,0,0]] Rotation of the spawned object. When specified, overrides the `Transform` rotation in `data`.
 * @property {Vector} [scale=[1,1,1]] Scale of the spawned object. When specified, overrides the `Transform` scale in `data`.
 * @property {function} [callback_function=null] Called when the object has finished spawning. The spawned object will be passed as the first and only parameter.
 * @see {@link spawnObjectData}
 */
type SpawnObjectDataParameters = {
  data: any;
  position?: Vector;
  rotation?: Vector;
  scale?: Vector;
  callback_function?: (this: void, obj: GObject) => void;
};

/**
 * SpawnObjectJSONParameters
 *
 * @typedef {GObject} SpawnObjectJSONParameters
 * @property {GObject} json - The JSON data of the object to spawn.
 * @property {Vector} [position=[0,0,0]] Position where the object will be spawned. When specified, overrides the `Transform` position in `json`.
 * @property {Vector} [rotation=[0,0,0]] Rotation of the spawned object. When specified, overrides the `Transform` rotation in `json`.
 * @property {Vector} [scale=[1,1,1]] Scale of the spawned object. When specified, overrides the `Transform` scale in `json`.
 * @property {function} [callback_function=null] Called when the object has finished spawning. The spawned object will be passed as the first and only parameter.
 * @see {@link spawnObjectJSON}
 */
type SpawnObjectJSONParameters = {
  json: any;
  position?: Vector;
  rotation?: Vector;
  scale?: Vector;
  callback_function?: (this: void, obj: GObject) => void;
};
