interface Player {
  /**
   * If the player is promoted or the host of the game. Read only.
   */
  readonly admin: boolean;

  /**
   * If the player is blindfolded.
   */
  blindfolded: boolean;

  /**
   * The player's Player Color. Read only.
   */
  readonly color: ColorLiteral;

  /**
   * If the player is the host. Read only.
   */
  readonly host: boolean;

  /**
   * The lift height for the player. This is how far an object is raised when held in a player's hand. Value is ranged 0 to 1.
   */
  lift_height: number;

  /**
   * If the current player is promoted.
   */
  promoted: boolean;

  /**
   * If a player is currently seated at this color. Read only.
   */
  readonly seated: boolean;

  /**
   * The Steam ID of the player. This is unique to each player's Steam account. Read only.
   */
  readonly steam_id: string;

  /**
   * The Steam name of the player. Read only.
   */
  readonly steam_name: string;

  /**
   * The team of the player.
   */
  team: TeamType;

  /**
   * Makes a Player's camera follow an Object.
   *
   * @param {attachCameraToObjectParameters} parameters A Table with parameters which guide the function. Defaults to {x=0, y=0, z=0}.
   * @returns {boolean} True if the camera was attached, false otherwise.
   */
  attachCameraToObject(this: void, parameters: attachCameraToObjectParameters): boolean;

  /**
   * Print message on Player's screen and their game chat log.
   *
   * @param {string} message The message to print.
   * @param {Color} message_color The color of the message. Defaults to {r=1, g=1, b=1}.
   * @returns {boolean} True if the message was broadcast, false otherwise.
   */
  broadcast(this: void, message: string, message_color?: Color): boolean;

  /**
   * Changes player to this Player Color.
   *
   * @param {ColorLiteral} player_color The Player Color seat to move the Player to.
   * @returns {boolean} True if the Player Color was changed, false otherwise.
   */
  changeColor(this: void, player_color: ColorLiteral): boolean;

  /**
   * Clears a player's current selection.
   *
   * @returns {boolean} True if the selection was cleared, false otherwise.
   */
  clearSelectedObjects(this: void): boolean;

  /**
   * Makes the Player take the Copy action with the specified Objects.
   *
   * @param {GObject[]} objects A Table of Objects.
   * @returns {boolean} True if the copy action was taken, false otherwise.
   */
  copy(this: void, objects: GObject[]): boolean;

  /**
   * Number of hand zones owned by this color.
   *
   * returns {number} The number of hand zones.
   */
  getHandCount(this: void): number;

  /**
   * Objects that are in this hand zone.
   *
   * @param {number} hand_index An index, representing which hand zone to return Objects for. Defaults to 1.
   * @returns {GObject[]} The Objects in the hand zone.
   */
  getHandObjects(this: void, hand_index?: number): GObject[];

  /**
   * Returns a Table of data on this hand zone.
   *
   * @param {number} hand_index an index, representing which hand zone to return data on. Defaults to 1.
   * @returns {Transform} The Transform of the hand zone.
   */
  getHandTransform(this: void, hand_index?: number): Transform;

  /**
   * Objects a Player is holding in their hand.
   *
   * @returns {GObject[]} The Objects the Player is holding.
   */
  getHoldingObjects(this: void): GObject[];

  /**
   * Object that the Player's pointer is hovering over.
   *
   * @returns {GObject} The Object the Player's pointer is hovering over.
   */
  getHoverObject(this: void): GObject;

  /**
   * Player's pointer coordinates.
   *
   * @returns {Vector} The Player's pointer coordinates.
   */
  getPointerPosition(this: void): Vector;

  /**
   * Player's pointer rotation on Y axis.
   *
   * @returns {number} The Player's pointer rotation on Y axis.
   */
  getPointerRotation(this: void): number;

  /**
   * Objects that the Player has selected with an area selection.
   *
   * @returns {GObject[]} The Objects the Player has selected.
   */
  getSelectedObjects(this: void): GObject[];

  /**
   * Kicks Player out of the room.
   *
   * @returns {boolean} True if the Player was kicked, false otherwise.
   */
  kick(this: void): boolean;

  /**
   * Moves a Player's camera, forcing 3'rd person camera mode.
   *
   * @param {lookAtParameters} parameters A Table of controlling parameters to point the player camera.
   */
  lookAt(this: void, parameters: lookAtParameters): boolean;

  /**
   * Mutes or unmutes Player, preventing/allowing voice chat.
   *
   * @returns {boolean} True if the Player was muted, false otherwise.
   */
  mute(this: void): boolean;

  /**
   * Makes the Player take the Paste action at the specified position
   *
   * @param {Vector} position The position to paste the copied Objects at.
   * @returns {boolean} True if the paste action was taken, false otherwise.
   */
  paste(this: void, position: Vector): boolean;

  /**
   * Emulates the player using the ping tool at the given position (tapping Tab).
   *
   * @param {Vector} position The position to ping.
   * @returns {boolean} True if the ping was successful, false otherwise.
   */
  pingTable(this: void, position: Vector): boolean;

  /**
   * Prints a message into the Player's game chat.
   *
   * @param {string} message The text to be displayed.
   * @param {Color} message_color  Color for the message text to be tinted. Defaults to {r=1, g=1, b=1}.
   * @returns {boolean} True if the message was printed, false otherwise.
   */
  print(this: void, message: string, message_color?: Color): boolean;

  /**
   * Promotes/demotes a Player. Promoted players have access to most host privileges.
   *
   * @returns {boolean} True if the Player was promoted, false otherwise.
   */
  promote(this: void): boolean;

  /**
   * Sets the player's camera mode. Camera modes available: "ThirdPerson", "FirstPerson", "TopDown".
   *
   * @param {string} camera_mode The Camera Mode to set the Player's Camera to.
   * @returns {boolean} True if the camera mode was set, false otherwise.
   */
  setCameraMode(this: void, camera_mode: 'ThirdPerson' | 'FirstPerson' | 'TopDown'): boolean;

  /**
   * Sets transform elements of a hand zone.
   *
   * @param {Transform} parameters The Table of data to transform the hand zone with.
   * @param {number} hand_index Index, representing which hand zone to modify. Defaults to 1.
   * @returns {boolean} True if the transform was set, false otherwise.
   */
  setHandTransform(this: void, parameters: Transform, hand_index?: number): boolean;

  /**
   * Sets the UI theme for the player.
   *
   * @param {string} theme A string representing a theme.
   * @returns {boolean} True if the theme was set, false otherwise.
   */
  setUITheme(this: void, theme: string): boolean;

  /**
   * Displays info string to player in the message box dialog.
   *
   * @param {string} info The info string to display.
   * @returns {boolean} True if the info string was displayed, false otherwise.
   */
  showInfoDialog(this: void, info: string): boolean;

  /**
   * Displays info string to player in the message box dialog, and executes {@link callback} if they click OK.
   *
   * @param {string} info Information to display.
   * @param {function} callback Callback to execute if they click OK. Will be called as {@link callback}(player_color)
   * @returns {boolean} True if the info string was displayed, false otherwise.
   */
  showConfirmDialog(
    this: void,
    info: string,
    callback: (this: void, player_color: ColorLiteral) => void
  ): boolean;

  /**
   * Shows the text input dialog to the player, and executes {@link callback} if they click OK.
   *
   * @param {string} description Optional description of what the player should input.
   * @param {string} default_text Optional default value.
   * @param {function} callback  Callback to execute if they click OK. Will be called as {@link callback}(text, player_color)
   * @returns {boolean} True if the text input dialog was displayed, false otherwise.
   */
  showInputDialog(
    this: void,
    description: string,
    default_text: string,
    callback: (this: void, text: string, player_color: ColorLiteral) => void
  ): boolean;

  /**
   * Shows the memo input dialog (large text input) to the player, and executes {@link callback} if they click OK.
   *
   * @param {string} description Optional description of what the player should input.
   * @param {string} default_text Optional default value.
   * @param {function} callback Callback to execute if they click OK. Will be called as {@link callback}(text, player_color)
   * @returns {boolean} True if the memo input dialog was displayed, false otherwise.
   */
  showMemoDialog(
    this: void,
    description: string,
    default_text: string,
    callback: (this: void, text: string, player_color: ColorLiteral) => void
  ): boolean;

  /**
   * Shows the dropdown options dialog to the player, and executes callback if they click OK.
   *
   * @param {string} description Description of what the player is choosing.
   * @param {string[]} options Table of string options.
   * @param {string} default_value Optional default value, an integer index into the options table. Note you may alternatively use the option string itself.
   * @param {function} callback Callback to execute if they click OK. Will be called as {@link callback}(selected_text, selected_index, player_color)
   * @returns {boolean} True if the dropdown options dialog was displayed, false otherwise.
   */
  showOptionsDialog(
    this: void,
    description: string,
    options: string[],
    default_value: string,
    callback: (
      this: void,
      selected_text: string,
      selected_index: number,
      player_color: ColorLiteral
    ) => void
  ): boolean;

  /**
   * Shows the color picker dialog to the player with optional default_color, and executes callback if they click OK.
   *
   * @param {Color} default_color Optional default color.
   * @param {function} callback Callback to execute if they click Apply. Will be called as {@link callback}(color, player_color)
   * @returns {boolean} True if the color picker dialog was displayed, false otherwise.
   */
  showColorDialog(
    this: void,
    default_color: Color,
    callback: (this: void, color: Color, player_color: ColorLiteral) => void
  ): boolean;
}

interface PlayerConstructor {
  /**
   * Returns a table of strings of every valid seat color at the current table. Returned colors are in the default order.
   *
   * @returns {string[]} A table of strings of every valid seat color at the current table.
   */
  getAvailableColors: (this: void) => string[];

  /**
   * Returns a table of strings of every possible seat color. Returned colors are in the default order.
   *
   * @returns {string[]} A table of strings of every possible seat color.
   */
  getColors: (this: void) => string[];

  /**
   * Returns a table of all Player instances.
   *
   * @returns {Player[]} A table of all Player instances.
   */
  getPlayers: (this: void) => Player[];

  /**
   * Returns a table of all spectator (Grey) Player instances.
   *
   * @returns {Player[]} A table of all spectator (Grey) Player instances.
   */
  getSpectators: (this: void) => Player[];

  /**
   * The onPlayerAction event allows you to handle player actions. A list of player actions is available as Player.Action.
   */
  Action: Action;
}

declare var Player: PlayerConstructor & Record<ColorLiteral, Player>;

declare enum Action {
  Copy,
  Cut,
  Delete,
  FlipIncrementalLeft,
  FlipIncrementalRight,
  FlipOver,
  Group,
  Paste,
  PickUp,
  Randomize,
  RotateIncrementalLeft,
  RotateIncrementalRight,
  RotateOver,
  Select,
  Under,
}

/**
 * A Table with parameters which guide the function.
 */
type attachCameraToObjectParameters = {
  /**
   * The Object to attach the camera to.
   */
  object: GObject;

  /**
   * A Vector to offset the camera by.
   */
  offset?: Vector;
};

type Transform = {
  /**
   * Position of the hand zone.
   */
  position: Vector;

  /**
   * Rotation of the hand zone.
   */
  rotation: Vector;

  /**
   * Scale of the hand zone.
   */
  scale: Vector;

  /**
   * Forward direction of the hand zone.
   */
  forward: Vector;

  /**
   * Right direction of the hand zone.
   */
  right: Vector;

  /**
   * Up direction of the hand zone.
   */
  up: Vector;
};

type lookAtParameters = {
  /**
   * Position to center the camera on.
   */
  position: Vector;

  /**
   * Pitch angle of the camera. 0 to 90.
   */
  pitch?: number;

  /**
   * Yaw angle of the camera. 0 to 360.
   */
  yaw?: number;

  /**
   * Distance the camera is from the position Vector.
   */
  distance?: number;
};

declare type TeamType = "None" | "Clubs" | "Diamonds" | "Hearts" | "Spades" | "Jokers";