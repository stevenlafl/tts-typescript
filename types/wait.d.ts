interface Wait {}

interface WaitConstructor {
  /**
   * Schedules a function to be executed after the specified condition has been met.
   *
   * @param {callback} toRunFunc The function to be executed after the specified condition is met.
   * @param {callback} conditionFunc The function that will be executed repeatedly, until it returns true (or the timeout is reached).
   * @param {number} timeout The amount of time (in seconds) that may elapse before the scheduled function is cancelled. Defaults to never timing out.
   * @param {callback} timeoutFunc The function that will be executed if the timeout is reached.
   * @returns {number} A unique ID that may be used to stop the scheduled function before it runs.
   */
  condition: (
    this: void,
    toRunFunc: (this: void) => void,
    conditionFunc: (this: void) => void,
    timeout?: number,
    timeoutFunc?: (this: void) => void
  ) => number;

  /**
   * Schedules a function to be executed after the specified number of frames have elapsed.
   *
   * @param {callback} toRunFunc The function to be executed after the specified number of frames have elapsed.
   * @param {number} numberFrames The number of frames that must elapse before toRunFunc is executed.
   * @returns {number} a unique ID that may be used to stop the scheduled function before it runs.
   */
  frames: (this: void, toRunFunc: (this: void) => void, numberFrames?: number) => number;

  /**
   * Cancels a Wait-scheduled function.
   *
   * @param {number} id A wait ID (returned from Wait scheduling functions).
   * @returns {boolean} True if the function was cancelled, false if it was not found.
   */
  stop: (this: void, id: number) => boolean;

  /**
   * Cancels all Wait-scheduled functions.
   *
   * @warning You should be extremely careful using this function. Generally you should cancel individual scheduled functions with stop instead.
   *
   * @returns {void}
   */
  stopAll: (this: void) => void;

  /**
   * Schedules a function to be executed after the specified amount of time (in seconds) has elapsed.
   *
   * @param {callback} toRunFunc The function to be executed after the specified amount of time has elapsed.
   * @param {number} seconds The amount of time that must elapse before toRunFunc is executed.
   * @param {number} repetitions Number of times toRunFunc will be (re)scheduled. -1 is infinite repetitions. Defaults to 1.
   * @returns {number} A unique ID that may be used to stop the scheduled function before it runs.
   */
  time: (
    this: void,
    toRunFunc: (this: void) => void,
    seconds: number,
    repetitions?: number
  ) => number;
}

/**
 * The Wait class is a static global class which allows you to schedule code (functions) to be executed later on.
 */
declare var Wait: WaitConstructor;
