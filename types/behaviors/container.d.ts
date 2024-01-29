/// <reference path="../player.d.ts" />

/**
 * The Container behavior is present on Container objects such as Bags, Stacks and Decks.
 */
interface Container extends GObject {
  /**
   * Activate search window for player, optionally limited to top N cards
   *
   * @param {Player} player The player to show the Search window to.
   * @param {number} max_card Optional maximum number of cards to show.
   * @returns {boolean} True if the search window was shown, false otherwise.
   */
  search(this: void, player: Player, max_card?: number): boolean;
}

interface ContainerConstructor {}

declare var Container: ContainerConstructor;
