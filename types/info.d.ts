interface Info {}

interface InfoConstructor {
  /**
   * The complexity of the current game/mod.
   */
  complexity: string;

  /**
   * Name of the current game/mod.
   */
  name: string;

  /**
   * The number of players the current game/mod allows.
   */
  number_of_players: [number, number] | undefined;

  /**
   * The amount of time the current game/mod takes.
   */
  playing_time: [number, number] | undefined;

  /**
   * The tags associated with the current game/mod.
   */
  tags: string[];

  /**
   * The category of the current mod.
   */
  type: string;
}

/**
 * Info global allows you to manipulate the information about your game/mod, in the same way as the in-game Options -> Info menu.
 *
 * This information helps players find your game/mod within Tabletop Simulator's server list and via Steam Workshop's search/filter capabilities.
 */
declare var Info: InfoConstructor;
