declare const enum HidingState {
  Default = 1,
  Reverse = 2,
  Disable = 3
}

interface Hand {
  /**
   * Whether hand zones are enabled i.e. hold objects.
   */
  enable: boolean;

  /**
   * Whether hands zones belonging to a color without a seated player should be disabled.
   */
  disable_unused: boolean;

  /**
   * Determines which hand contents are hidden from which players.
   *
   * 1. Default. The contents of a player's hands are only visible to the owner.
   * 2. Reverse. The contents of a player's hands are visible to all other players, but not the owner.
   * 3. Disable. Contents of all player hands are visible to all players.
   */
  hiding: HidingState;

  /**
   * Returns a table of all Hand Zone Objects in the game.
   *
   * @returns {Zone[]} A table of all Hand Zone Objects in the game.
   */
  getHands(this: void): Hand[];
}
