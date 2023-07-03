interface UI {
  /**
   * Indicates whether (the server) has finished loading all UI custom assets.
   */
  loading: boolean;

  /**
   * Obtains the value of a specified attribute of a UI element. What it returns will typically be a string or a number.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} attribute  The name of the attribute you wish to get the value of.
   * @returns {any} The value of the attribute.
   */
  getAttribute(this: void, id: string, attribute: string): any;

  /**
   * Returns the attributes and their values of a UI element. It only returns the attributes (and values) for elements that have had those attributes set by the user.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {Record<string, any>} A table of attributes and their values.
   */
  getAttributes(this: void, id: string): Record<string, any>;

  /**
   * Returns a table/array of custom assets.
   *
   * @returns {CustomAsset[]} A table/array of custom assets.
   */
  getCustomAssets(this: void): CustomAsset[];

  /**
   * Obtains the value between elements tags, like: <Text>ValueToGet</Text>
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {string} The value between elements tags.
   */
  getValue(this: void, id: string): string;

  /**
   * Returns the contents of the current UI formatted as XML.
   *
   * @returns {string} The contents of the current UI formatted as XML.
   */
  getXml(this: void): string;

  /**
   * Returns the contents of the current UI formatted as a table.
   *
   * @returns {XMLData} The contents of the current UI formatted as a table.
   */
  getXmlTable(this: void): XMLData;

  /**
   * Hides the given UI element. Unlike the "active" attribute, hide triggers animations.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {boolean} True if the UI element was hidden, false otherwise.
   */
  hide(this: void, id: string): boolean;

  /**
   * Sets the value of a specified attribute of a UI element.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} attribute  The name of the attribute you want to set the value of.
   * @param {any} value The value to set for the attribute.
   * @returns {boolean} True if the attribute was set, false otherwise.
   */
  setAttribute(this: void, id: string, attribute: string, value: any): boolean;

  /**
   * Updates the value of the supplied attributes of a UI element. You do not need to set every attribute with the data table, an element will continue using any previous values you do not overwrite.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {Record<string, any>} data A Table with key/value pairs representing attributes and their values.
   * @returns {boolean} True if the attributes were set, false otherwise.
   */
  setAttributes(this: void, id: string, data: Record<string, any>): boolean;

  /**
   * Replaces all classes on a UI element.
   *
   * @param {string} id The ID of the UI element that should have its classes replaced.
   * @param {string} names Space separated class names.
   * @returns {boolean} True if the classes were set, false otherwise.
   */
  setClass(this: void, id: string, names: string): boolean;

  /**
   * Sets/replaces the custom assets which your UI may make use of.
   *
   * @param {CustomAsset[]} assets A table/array containing sub-tables which each represent a custom asset.
   * @returns {boolean} True if the custom assets were set, false otherwise.
   */
  setCustomAssets(this: void, assets: CustomAsset[]): boolean;

  /**
   * Updates the value between elements tags, like: <Text>ValueChanged</Text>
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} value The value to put between the element tags.
   * @returns {boolean} True if the value was set, false otherwise.
   */
  setValue(this: void, id: string, value: string): boolean;

  /**
   * Sets/replaces the UI with the contents of the provided XML.
   *
   * @param {string} xml A string containing XML representing the desired UI.
   * @param {CustomAsset} assets A table/array containing sub-tables which each represent a custom asset.
   * @returns {boolean} True if the UI was set, false otherwise.
   */
  setXml(this: void, xml: string, assets: CustomAsset): boolean;

  /**
   * Sets/replaces the UI with the contents of the provided UI table.
   *
   * @param {XMLData} data The UI table to set the UI to.
   * @param {CustomAsset} assets A table/array of custom assets.
   * @returns {boolean} True if the UI was set, false otherwise.
   */
  setXmlTable(this: void, data: XMLData, assets?: CustomAsset[]): boolean;

  /**
   * Displays the given UI element. Unlike the "active" attribute, show triggers animations.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {boolean} True if the UI element was shown, false otherwise.
   */
  show(this: void, id: string): boolean;
}

interface UIConstructor {
  /**
   * Indicates whether (the server) has finished loading all UI custom assets.
   */
  loading: boolean;

  /**
   * Obtains the value of a specified attribute of a UI element. What it returns will typically be a string or a number.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} attribute  The name of the attribute you wish to get the value of.
   * @returns {any} The value of the attribute.
   */
  getAttribute: (this: void, id: string, attribute: string) => any;

  /**
   * Returns the attributes and their values of a UI element. It only returns the attributes (and values) for elements that have had those attributes set by the user.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {Record<string, any>} A table of attributes and their values.
   */
  getAttributes: (this: void, id: string) => Record<string, any>;

  /**
   * Returns a table/array of custom assets.
   *
   * @returns {CustomAsset[]} A table/array of custom assets.
   */
  getCustomAssets: (this: void) => CustomAsset[];

  /**
   * Obtains the value between elements tags, like: <Text>ValueToGet</Text>
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {string} The value between elements tags.
   */
  getValue: (this: void, id: string) => string;

  /**
   * Returns the contents of the current UI formatted as XML.
   *
   * @returns {string} The contents of the current UI formatted as XML.
   */
  getXml: (this: void) => string;

  /**
   * Returns the contents of the current UI formatted as a table.
   *
   * @returns {XMLData} The contents of the current UI formatted as a table.
   */
  getXmlTable: (this: void) => XMLData;

  /**
   * Hides the given UI element. Unlike the "active" attribute, hide triggers animations.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {boolean} True if the UI element was hidden, false otherwise.
   */
  hide: (this: void, id: string) => boolean;

  /**
   * Sets the value of a specified attribute of a UI element.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} attribute  The name of the attribute you want to set the value of.
   * @param {any} value The value to set for the attribute.
   * @returns {boolean} True if the attribute was set, false otherwise.
   */
  setAttribute: (this: void, id: string, attribute: string, value: any) => boolean;

  /**
   * Updates the value of the supplied attributes of a UI element. You do not need to set every attribute with the data table, an element will continue using any previous values you do not overwrite.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {Record<string, any>} data A Table with key/value pairs representing attributes and their values.
   * @returns {boolean} True if the attributes were set, false otherwise.
   */
  setAttributes: (this: void, id: string, data: Record<string, any>) => boolean;

  /**
   * Replaces all classes on a UI element.
   *
   * @param {string} id The ID of the UI element that should have its classes replaced.
   * @param {string} names Space separated class names.
   * @returns {boolean} True if the classes were set, false otherwise.
   */
  setClass: (this: void, id: string, names: string) => boolean;

  /**
   * Sets/replaces the custom assets which your UI may make use of.
   *
   * @param {CustomAsset[]} assets A table/array containing sub-tables which each represent a custom asset.
   * @returns {boolean} True if the custom assets were set, false otherwise.
   */
  setCustomAssets: (this: void, assets: CustomAsset[]) => boolean;

  /**
   * Updates the value between elements tags, like: <Text>ValueChanged</Text>
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @param {string} value The value to put between the element tags.
   * @returns {boolean} True if the value was set, false otherwise.
   */
  setValue: (this: void, id: string, value: string) => boolean;

  /**
   * Sets/replaces the UI with the contents of the provided XML.
   *
   * @param {string} xml A string containing XML representing the desired UI.
   * @param {CustomAsset} assets A table/array containing sub-tables which each represent a custom asset.
   * @returns {boolean} True if the UI was set, false otherwise.
   */
  setXml: (this: void, xml: string, assets: CustomAsset) => boolean;

  /**
   * Sets/replaces the UI with the contents of the provided UI table.
   *
   * @param {XMLData} data The UI table to set the UI to.
   * @param {CustomAsset} assets A table/array of custom assets.
   * @returns {boolean} True if the UI was set, false otherwise.
   */
  setXmlTable: (this: void, data: XMLData, assets?: CustomAsset[]) => boolean;

  /**
   * Displays the given UI element. Unlike the "active" attribute, show triggers animations.
   *
   * @param {string} id The Id that was assigned, as an attribute, to the desired XML UI element.
   * @returns {boolean} True if the UI element was shown, false otherwise.
   */
  show: (this: void, id: string) => boolean;
}

declare var UI: UIConstructor;

type CustomAsset = {
  /**
   * The name you'll use to refer to this asset in your XML UI
   */
  name: string;

  /**
   * The URL this asset will be loaded from.
   */
  url: string;
};

type XMLData = {
  /**
   * The element type.
   */
  tag: string;

  /**
   * A table containing attribute names for keys. Available attribute types depend on tag's element type.
   *
   * Defaults to not being used
   */
  attributes?: any[];

  /**
   * Text that appears <Text>Here</Text>, between the <> and ``.
   *
   * Defaults to an empty string.
   */
  value?: string;

  /**
   * A table containing more sub-tables, formatted as above. This does mean the sub-tables can contain their own children as well, containing sub-sub tables, etc.
   *
   * Defaults to not being used.
   */
  children?: XMLData[];
};
