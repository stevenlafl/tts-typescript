/**
 * The Clock behavior is present on the Digital Clock object.
 */
interface Clock extends GObject {
  /**
   * If the clock timer is paused.
   */
  paused: boolean;

  /**
   * Current time in stopwatch or timer mode. Clock mode returns 0. This function acts the same as Object's `getValue()`.
   *
   * @returns {number} The current time in seconds.
   */
  getValue(this: void): number;

  /**
   * Pauses/resumes a Clock in stopwatch or timer mode.
   *
   * @returns {boolean} `true` if the Clock was paused, `false` if it was resumed.
   */
  pauseStart(this: void): boolean;

  /**
   * Switches clock to timer and sets countdown time. This function acts the same as Object's `setValue().`
   *
   * If the Clock is not in timer mode, it will be switched. If it is in timer mode, it will be paused and the remaining time will be changed. This will not start the countdown on its own.
   *
   * @param {number} seconds How many seconds will be counted down.
   * @returns {boolean} `true` if the Clock was switched to timer mode, `false` if it was already in timer mode.
   */
  setValue(this: void, seconds: number): boolean;

  /**
   * Switches clock to display current time. It will clear any stopwatch or timer.
   *
   * @returns {boolean} `true` if the Clock was switched to current time mode, `false` if it was already in current time mode.
   */
  showCurrentTime(this: void): boolean;

  /**
   * Switches clock to stopwatch, setting time to 0. It will reset time if already in stopwatch mode.
   *
   * @returns {boolean} `true` if the Clock was switched to stopwatch mode, `false` if it was already in stopwatch mode.
   */
  startStopwatch(this: void): boolean;
}

interface ClockConstructor {}

declare var Clock: ClockConstructor;
