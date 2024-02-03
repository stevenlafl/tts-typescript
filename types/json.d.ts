/**
 * The static global JSON class provides the ability to encode/decode data into JSON strings. This is largely used by the onSave() event function, but has other potential applications as well. The JSON class can be used on any String, Int, Float or Table. You call these functions like this: JSON.encode(...).
 *
 * @warning This class does not work with Object references. Use the Object's GUID instead.
 */
interface JSON {
  /**
   * Value obtained from the encoded string. Can return a number, string or Table.
   *
   * @param {string} json_string A String that is decoded, generally created by {@link encode}(...) or {@link encode_pretty}(...).
   * @return {any} Value obtained from the encoded string. Can return a number, string or Table.
   */
  decode(this: void, json_string: string): any;

  /**
   * Encodes data from a number, string or Table into a JSON string.
   *
   * @param {any} data A Var, either String, Int, Float or Table, to encode as a string.
   * @return {string} The encoded JSON string.
   */
  encode(this: void, data: any): string;

  /**
   * Same as {@link encode}(...) but this version is slightly less efficient but is easier to read.
   *
   * @param {any} data A Var, either String, Int, Float or Table, to encode as a string.
   * @return {string} The encoded JSON string.
   */
  encode_pretty(this: void, data: any): string;
}
