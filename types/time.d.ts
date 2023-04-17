interface Time {}

interface TimeConstructor {
  /**
   * The current time. Works like os.time() but is more accurate. Read only.
   */
  time: number;

  /**
   * The amount of time since the last frame. Read only.
   */
  delta_time: number;

  /**
   * The interval (in seconds) between physics updates. Read only.
   */
  fixed_delta_time: number;
}

/**
 * Time, not to be confused with the deprecated Timer class, is a static global class which provides access to Unity's time information.
 */
declare var Time: TimeConstructor;
