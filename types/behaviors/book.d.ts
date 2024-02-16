/**
 * The Book behavior is present on Custom PDF Objects. The Book behaviour allows you to manipulate the displayed PDF.
 */
interface Book {

  /**
   * The page numbers displayed in the Custom PDF UI are offset by this amount.
   */
  page_offset: number;

  /**
   * Clears the current highlight.
   *
   * @returns {boolean} True if the highlight was cleared, false otherwise.
   */
  clearHighlight(this: void): boolean;

  /**
   * Gets the current page of the PDF.
   *
   * @param offsetPageNumbering - Indicates whether or not page_offset should be applied to the page number returned.
   * @returns {number} The current page number.
   */
  getPage(this: void, offsetPageNumbering?: boolean): number;

  /**
   * Set highlight box on current page.
   *
   * @param {number} x1 The x coordinate of the left side of the highlight box.
   * @param {number} y1 The y coordinate of the bottom side of the highlight box.
   * @param {number} x2 The x coordinate of the right side of the highlight box.
   * @param {number} y2 The y coordinate of the top side of the highlight box.
   * @returns {boolean} True if the highlight was set, false otherwise.
   */
  setHighlight(this: void, x1: number, y1: number, x2: number, y2: number): boolean;

  /**
   * Set current page.
   *
   * @param page The new page number.
   * @param offsetPageNumbering Indicates whether or not page_offset should be applied to the page number set.
   * @returns {boolean} True if the page was set, false otherwise.
   */
  setPage(this: void, page: number, offsetPageNumbering?: boolean): boolean;
}

interface BookConstructor {}

declare var Book: BookConstructor;
