/**
 * The Counter behavior is present on the Counter object.
 */
interface Counter {
  /**
   * Resets Counter to 0.
   *
   * @return {boolean} `true` if the Counter was reset, `false` otherwise.
   */
  clear(this: void): boolean;

  /**
   * Reduces Counter's value by 1.
   *
   * @return {boolean} `true` if the Counter was decremented, `false` otherwise.
   */
  decrement(this: void): boolean;

  /**
   * Returns Counter's current value. This function behaves the same as Object's `getValue()`.
   *
   * @return {number} The current value of the Counter.
   */
  getValue(this: void): number;

  /**
   * Increases Counter's value by 1.
   *
   * @return {boolean} `true` if the Counter was incremented, `false` otherwise.
   */
  increment(this: void): boolean;

  /**
   * Sets the current value of the Counter. This function behaves the same as Object's `setValue()`.
   *
   * @param {number} value The new value of the Counter.
   * @return {boolean} `true` if the Counter was set, `false` otherwise.
   */
  setValue(this: void, value: number): boolean;
}

interface CounterConstructor {}

declare var Counter: CounterConstructor;
