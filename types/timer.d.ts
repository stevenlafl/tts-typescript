interface Timer {}

interface TimerConstructor {
  /**
   * Creates a Timer. It will auto-delete once its repetitions have been completed.
   */
  create(this: void, parameters: CreateTimer): boolean;

  /**
   * Destroys a Timer.
   */
  destroy(this: void, identifier: string): boolean;
}

/**
 * Timer is a static global class which provides methods for executing other functions after a delay and/or repeatedly. Each Timer is tracked by a unique "identifier" string.
 *
 * @deprecated Use Wait.frames(...) instead.
 * @warning The "identifiers" are shared between Global and all Object scripts, so each Timer must have a unique name.
 */
declare var Timer: TimerConstructor;

/**
 * A Table containing the information used to start the Timer.
 */
type CreateTimer = {
  /**
   * Timer's name, used to destroy it. Must be unique within all other scripts.
   */
  identifier: string;

  /**
   * Name of function to trigger when time is reached.
   */
  function_name: string;

  /**
   * Where the function from function_name exists.
   *
   * Defaults to the calling Object.
   */
  function_owner?: GObject | Global;

  /**
   * Table containing any data that will be passed to the function.
   *
   * Will not be used by default
   */
  parameters?: Record<string, any>;

  /**
   * Length of time in seconds before the function is triggered.
   *
   * Defaults to 0.
   *
   * 0 results in a delay of 1 frame before the triggered function activates.
   */
  delay?: number;

  /**
   * Number of times the countdown repeats.
   *
   * Optional, defaults to 1.
   *
   * Use 0 for infinite repetitions.
   */
  repetitions?: number;
};
