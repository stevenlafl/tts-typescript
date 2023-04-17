/// <reference path="./color.d.ts" />

interface Grid {}

interface GridConstructor {
  /**
   * The type of the grid. 1 = Rectangles, 2 = Horizontal hexes, 3 = Vertical hexes.
   */
  type: number;

  /**
   * Visibility of the grid lines.
   */
  show_lines: boolean;

  /**
   * Color of the grid lines.
   */
  color: Color;

  /**
   * Opacity of the grid lines.
   */
  opacity: number;

  /**
   * Thickness of the grid lines. false = Thin, true = Thick.
   */
  thick_lines: boolean;

  /**
   * Method of snapping objects to the grid. 1 = Off, 2 = Lines, 3 = Center, 4 = Both.
   */
  snapping: number;

  /**
   * X offset of the grid origin.
   */
  offsetX: number;

  /**
   * Y offset of the grid origin.
   */
  offsetY: number;

  /**
   * Width of the grid cells.
   */
  sizeX: number;

  /**
   * Height of the grid cells.
   */
  sizeY: number;
}

/**
 * Grid, a static global class, controls the in-game grid. It allows you to manipulate the placement and appearance of the grid in the same way as the in-game interface.
 *
 * Example usage: Grid.show_lines = true.
 */
declare var Grid: GridConstructor;
