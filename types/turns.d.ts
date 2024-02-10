interface Turns {}

interface TurnsConstructor {
  /**
   * Enable/disable the turns system.
   */
  enable: boolean;

  /**
   * If the turn order is automatic or custom. 1=auto, 2=custom.
   */
  type: TurnOrderType;

  /**
   * A table of strings, representing the player turn order.
   */
  order: ColorLiteral[];

  /**
   * Enable/disable reversing turn rotation direction.
   */
  reverse_order: boolean;

  /**
   * Enable/disable skipping empty hands.
   */
  skip_empty_hands: boolean;

  /**
   * Enable/disable the blocking of players ability to interact with Objects when it is not their turn.
   */
  disable_interactations: boolean;

  /**
   * Enable/disable a player's ability to pass their turn to another.
   */
  pass_turns: boolean;

  /**
   * The color of the Player who's turn it is.
   */
  turn_color: ColorLiteral;

  /**
   * Returns the Player Color string of the next player in the turn order.
   *
   * @returns {string} The Player Color string of the next player in the turn order.
   */
  getNextTurnColor(this: void): ColorLiteral;

  /**
   * Returns the Player Color string of the previous player in the turn order.
   *
   * @returns {string} The Player Color string of the previous player in the turn order.
   */
  getPreviousTurnColor(this: void): ColorLiteral;
}

declare const enum TurnOrderType {
  Auto = 1,
  Custom = 2
}

/**
 * Turns, a static global class, is the in-game turns system. It allows you to modify the player turns in the same way that the in-game Turns menu does.
 *
 * Example usage: Turns.reverse_order = true.
 */
declare var Turns: TurnsConstructor;
