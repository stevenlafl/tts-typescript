/**
 * The LayoutZone behavior is present on Layout Zones.
 */
interface LayoutZone extends Zone {
  /**
   * Returns the layout zone's {@link LayoutZoneOptions[options}.
   *
   * @returns {Required<LayoutZoneOptions>} The layout zone's {@link LayoutZoneOptions[options]}.
   */
  getOptions(this: void): Required<LayoutZoneOptions>;

  /**
   * Causes the layout zone to (re)layout.
   *
   * @returns {boolean} `true` if the layout zone was laid out, `false` otherwise.
   */
  layout(this: void): boolean;

  /**
   * Sets the layout zone's {@link LayoutZoneOptions[options]}. If an option is not included in the table, then the zone's value for that option will remain unchanged.
   *
   * @param {LayoutZoneOptions} options The layout zone's {@link LayoutZoneOptions[options]}.
   * @returns {boolean} `true` if the options were set, `false` otherwise.
   */
  setOptions(this: void, options: LayoutZoneOptions): boolean;
}

interface LayoutZoneConstructor {}

declare var LayoutZone: LayoutZoneConstructor;

type LayoutZoneOptions = {
  /**
   * When moving an object from one full group to another, the object you drop on will be moved to the original group.
   */
  allow_swapping?: boolean;

  /**
   * Objects added to a group will be aligned up or right, different from the preceding object in the group. Used, for example, in trick-taking games to make counting easier.
   */
  alternate_direction?: boolean;

  /**
   * Sets the size of decks made by the layout zone when it combines newly added cards.
   */
  cards_per_deck?: number;

  /**
   * Whether cards added to the zone should be combined into decks. You may specify the number of cards per deck.
   */
  combine_into_decks?: boolean;

  /**
   * The directions the groups in the zone expand into. This will determine the origin corner.
   */
  direction?: number;

  /**
   * How much horizontal space is inserted between groups.
   */
  horizontal_group_padding?: number;

  /**
   * How far each object in a group is moved horizontally from the previous object.
   */
  horizontal_spread?: number;

  /**
   * When enabled, if ever a group is picked up or removed the rest of the layout will trigger to fill in the gap
   */
  instant_refill?: boolean;

  /**
   * The zone will not automatically lay out objects: it must be triggered manually.
   */
  manual_only?: boolean;

  /**
   * Each group in the zone may not contain more than this number of objects.
   */
  max_objects_per_group?: number;

  /**
   * When new objects are added to a zone, they will be gathered into groups of this many objects.
   */
  max_objects_per_new_group?: number;

  /**
   * The direction the objects within a group will expand into.
   */
  meld_direction?: number;

  /**
   * When enabled the sort order inside a group is reversed
   */
  meld_reverse_sort?: boolean;

  /**
   * How groups are sorted internally.
   */
  meld_sort?: number;

  /**
   * When enabled all groups will be sorted when laid out, rather than only newly added groups.
   */
  meld_sort_existing?: boolean;

  /**
   * Determines whether newly added objects are turned face-up or face-down.
   */
  new_object_facing?: number;

  /**
   * Objects will be randomized whenever they are laid out
   */
  randomize?: boolean;

  /**
   * Decks added to the zone will be split into their individual cards.
   */
  split_added_decks?: boolean;

  /**
   * When picked up, cards above the grabbed card will also be lifted.
   */
  sticky_cards?: boolean;

  /**
   * Face-Down objects dropped on zone will be laid out.
   */
  trigger_for_face_down?: boolean;

  /**
   * Face-Up objects dropped on zone will be laid out.
   */
  trigger_for_face_up?: boolean;

  /**
   * Non-card objects dropped on zone will be laid out
   */
  trigger_for_non_cards?: boolean;

  /**
   * How much vertical space is inserted between groups.
   */
  vertical_group_padding?: number;

  /**
   * How far each object in a group is moved vertically from the previous object.
   */
  vertical_spread?: number;
};
