/*
* Derived from https://api.tabletopsimulator.com/built-in-object/ and https://api.tabletopsimulator.com/custom-game-objects/
*/
declare type BlockObjectType =
| 'BlockRectangle'
| 'BlockSquare'
| 'BlockTriangle'

declare type BoardObjectType =
| 'backgammon_board'
| 'CardBot_Board'
| 'Checker_Board'
| 'Chess_Board'
| 'Chinese_Checkers_Board'
| 'Go_Board'
| 'Pachisi_board'
| 'reversi_board'

declare type CardObjectType =
| 'Card'

declare type DeckObjectType =
| 'Deck'
| 'Deck_CardBot_Head'
| 'Deck_CardBot_Main'

declare type CheckerObjectType =
| 'Checker_black'
| 'Checker_red'
| 'Checker_white'
| 'Chinese_Checkers_Piece'

declare type ChessObjectType =
| 'Chess_Bishop'
| 'Chess_King'
| 'Chess_Knight'
| 'Chess_Pawn'
| 'Chess_Queen'
| 'Chess_Rook'

declare type ChipObjectType =
| 'Chip_10'
| 'Chip_50'
| 'Chip_100'
| 'Chip_500'
| 'Chip_1000'

declare type DiceObjectType =
| 'Die_4'
| 'Die_6'
| 'Die_6_Rounded'
| 'Die_8'
| 'Die_10'
| 'Die_12'
| 'Die_20'
| 'Die_Piecepack'

declare type DominoObjectType =
| 'Domino'
| 'Mahjong_Coin'
| 'Mahjong_Stick'
| 'Mahjong_Tile'

declare type FigurineObjectType =
| 'Figurine_Card_Bot'
| 'Figurine_Kimi_Kat'
| 'Figurine_Knil'
| 'Figurine_Mara'
| 'Figurine_Sir_Loin'
| 'Figurine_Zeke'
| 'Figurine_Zomblor'
| 'Metal Ball'
| 'PlayerPawn'

declare type GoPieceObjectType =
| 'go_game_piece_black'
| 'go_game_piece_white'
| 'go_game_bowl_black'
| 'go_game_bowl_white'

declare type GraphicsObjectType =
| '3DText'

declare type PiecepackObjectType =
| 'PiecePack_Arms'
| 'PiecePack_Crowns'
| 'PiecePack_Moons'
| 'PiecePack_Suns'

declare type RPGFigurineObjectType =
| 'rpg_BARGHEST'
| 'rpg_BASILISK'
| 'rpg_BEAR'
| 'rpg_BLACK_DRAGON'
| 'rpg_CENTAUR'
| 'rpg_CERBERUS'
| 'rpg_CHIMERA'
| 'rpg_CRASC'
| 'rpg_CYCLOP'
| 'rpg_DARKNESS_WARLORD'
| 'rpg_DRAGONIDE'
| 'rpg_EVIL_WATCHER'
| 'rpg_GHOUL'
| 'rpg_GIANT_VIPER'
| 'rpg_GOBLIN'
| 'rpg_GOLEM'
| 'rpg_GRIFFON'
| 'rpg_HYDRA'
| 'rpg_KNIGHT'
| 'rpg_KOBOLD'
| 'rpg_LIZARD_WARRIOR'
| 'rpg_MAGE'
| 'rpg_MANTICORA'
| 'rpg_MUMMY'
| 'rpg_OGRE'
| 'rpg_ORC'
| 'rpg_RANGER'
| 'rpg_RAT'
| 'rpg_SKELETON_KNIGHT'
| 'rpg_TEMPLATE'
| 'rpg_THIEF'
| 'rpg_TREE_ENT'
| 'rpg_TROLL'
| 'rpg_VAMPIRE'
| 'rpg_WARRIRO'
| 'rpg_WEREWOLF'
| 'rpg_WYVERN'

declare type TilesetObjectType =
| 'Tileset_Barrel'
| 'Tileset_Chair'
| 'Tileset_Chest'
| 'Tileset_Corner'
| 'Tileset_Floor'
| 'Tileset_Rock'
| 'Tileset_Table'
| 'Tileset_Tree'
| 'Tileset_Wall'

declare type ZoneObjectType =
| 'Fog'
| 'FogOfWar'
| 'Hand'
| 'Layout'
| 'Randomize'
| 'Scripting'

declare type OtherObjectType =
| 'backgammon_piece_brown'
| 'backgammon_piece_white'
| 'Bag'
| 'Bowl'
| 'Calculator'
| 'Counter'
| 'Digital_Clock'
| 'Infinite_Bag'
| 'Notecard'
| 'Quarter'
| 'reversi_chip'
| 'Tablet'

declare type SpawnableTypeObjectType =
| 'Arms Dice'
| 'Backgammon Board'
| 'Barrel'
| 'Bear'
| 'Bishop Cast Iron'
| 'Bishop Chrome'
| 'Bishop Dark Wood'
| 'Bishop Light Wood'
| 'Black Ball'
| 'Black Checker'
| 'Black Pawn'
| 'Blue 10'
| 'Blue Ball'
| 'Blue Pawn'
| 'Blue Rectangle'
| 'Brown Backgammon'
| 'CardBot'
| 'CardBots Head Deck'
| 'CardBots Main Deck'
| 'Chair'
| 'Checkers Board'
| 'Chess Board'
| 'Chest'
| 'Chimera'
| 'Chinese Checkers Board'
| 'Corner'
| 'Crowns Dice'
| 'Custom Board'
| 'Custom Deck'
| 'Custom Figurine'
| 'Custom Model'
| 'Cyclops'
| 'D10'
| 'D10 Chrome'
| 'D12'
| 'D12 Chrome'
| 'D20'
| 'D20 Chrome'
| 'D4'
| 'D4 Chrome'
| 'D6'
| 'D6 Black'
| 'D6 Blue'
| 'D6 Chrome'
| 'D6 Green'
| 'D6 Red'
| 'D8'
| 'D8 Chrome'
| 'Digital Clock'
| 'Dragonide'
| 'Evil Watcher'
| 'Floor'
| 'Ghoul'
| 'Giant Rat'
| 'Giant Viper'
| 'Go Board'
| 'GO Bowl Black'
| 'GO Bowl White'
| 'GO Piece Black'
| 'GO Piece White'
| 'Goblin'
| 'Gold 1000'
| 'Golem'
| 'Green 50'
| 'Green Ball'
| 'Green Pawn'
| 'Green Triangle'
| 'Griffon'
| 'Hydra'
| 'Joker'
| 'Kimi Kat'
| 'King Cast Iron'
| 'King Chrome'
| 'King Dark Wood'
| 'King Light Wood'
| 'Knight Cast Iron'
| 'Knight Chrome'
| 'Knight Dark Wood'
| 'Knight Light Wood'
| 'Knight of Knil'
| 'Kobold'
| 'Lizard Warrior'
| 'Loot Bag'
| 'Manticora'
| 'Mara'
| 'Moons Dice'
| 'Mummy'
| 'Ogre'
| 'Orange Pawn'
| 'Orc'
| 'Pachisi Board'
| 'Pawn Cast Iron'
| 'Pawn Chrome'
| 'Pawn Dark Wood'
| 'Pawn Light Wood'
| 'Pink Ball'
| 'Pink Pawn'
| 'Purple Pawn'
| 'Quarter'
| 'Queen Cast Iron'
| 'Queen Chrome'
| 'Queen Dark Wood'
| 'Queen Light Wood'
| 'Random Card'
| 'Random Domino'
| 'Random Mahjong'
| 'Red 100'
| 'Red Ball'
| 'Red Checker'
| 'Red Pawn'
| 'Red Square'
| 'Reversi Board'
| 'Reversi Chip'
| 'Rock'
| 'Rook Cast Iron'
| 'Rook Chrome'
| 'Rook Dark Wood'
| 'Rook Light Wood'
| 'Silver 500'
| 'Sir Loin'
| 'Skeleton Knight'
| 'Standard Deck'
| 'Suns Dice'
| 'Table'
| 'Tree'
| 'Tree Ent'
| 'Troll'
| 'Vampire'
| 'Wall'
| 'Werewolf'
| 'White Backgammon'
| 'White Ball'
| 'White Checker'
| 'White Pawn'
| 'Wolf'
| 'Wyvern'
| 'Yellow Ball'
| 'Yellow Pawn'
| 'Zeke Kodoku'
| 'Zomblor'

declare type CustomObjectType =
| 'Custom_Assetbundle'
| 'Custom_Board'
| 'CardCustom'
| 'DeckCustom'
| 'Custom_Dice'
| 'Figurine_Custom'
| 'Custom_Model'
| 'Custom_Tile'
| 'Custom_Token'

declare type BuiltInObjectType = 
| BlockObjectType
| BoardObjectType
| CardObjectType
| DeckObjectType
| CheckerObjectType
| ChessObjectType
| ChipObjectType
| DiceObjectType
| DominoObjectType
| FigurineObjectType
| GoPieceObjectType
| GraphicsObjectType
| PiecepackObjectType
| RPGFigurineObjectType
| TilesetObjectType
| ZoneObjectType
| OtherObjectType
| SpawnableTypeObjectType

interface GObject extends GlobalConstructor {
  /* Common Variables */

  /**
   * When non-zero, the Alt view will use the specified Euler angle to look at the object.
   */
  alt_view_angle: Vector;

  /**
   * Angular drag. Unity rigidbody property.
   */
  angular_drag: number;

  /**
   * If the object should be lifted above other objects to avoid collision when held by a player.
   */
  auto_raise: boolean;

  /**
   * Bounciness, value of 0-1. Unity physics material.
   */
  bounciness: number;

  /**
   * Drag. Unity rigidbody property.
   */
  drag: number;

  /**
   * When false, the object will not be selected by regular (click and drag) selection boxes that are drawn around the object.
   *
   * Players may proceed to override this behavior by holding the "Shift" modifier whilst drag selecting.
   */
  drag_selectable: boolean;

  /**
   * Dynamic friction, value of 0-1. Unity physics material.
   */
  dynamic_friction: number;

  /**
   * When false, the object cannot be selected with the Gizmo tool.
   */
  gizmo_selectable: boolean;

  /**
   * If grid lines can appear on the Object if visible grids are turned on.
   */
  grid_projection: boolean;

  /**
   * The 6 character unique Object identifier within Tabletop Simulator. It is assigned correctly once the spawning member variable becomes `false`.
   */
  guid: string;

  /**
   * The Color of the Player that is holding the object.
   */
  held_by_color: ColorLiteral;

  /**
   * 0-23 value. Changes when a Player hits flip or alt + rotate.
   */
  held_flip_index: number;

  /**
   * Position offset from pointer.
   */
  held_position_offset: Vector;

  /**
   * When the Object collides with something while moving this is automatically enabled and reduces the movement force.
   */
  held_reduce_force: boolean;

  /**
   * Rotation offset from pointer.
   */
  held_rotation_offset: Vector;

  /**
   * 0-23 value. Changes when a Player rotates the Object.
   */
  held_spin_index: number;

  /**
   * Hide the Object when face-down as if it were in a hand zone. The face is the "top" of the Object, the direction of its positive Y coordinate. Cards/decks default to `true`.
   */
  hide_when_face_down: boolean;

  /**
   * Makes the object not be hidden by Fog of War.
   */
  ignore_fog_of_war: boolean;

  /**
   * If the object can be interacted with by Players. Other object will still be able to interact with it.
   */
  interactable: boolean;

  /**
   * If the Object is roughly face-down (like with cards). The face is the "top" of the Object, the direction of its positive Y coordinate. Read only.
   */
  is_face_down: boolean;

  /**
   * If the Object's custom elements (images/models/etc) are loading. Read only.
   */
  loading_custom: boolean;

  /**
   * If the object is frozen in place (preventing physics interactions).
   */
  locked: boolean;

  /**
   * Mass. Unity rigidbody property.
   */
  mass: number;

  /**
   * Determines the maximum number of digits which a user may type whilst hovering over the object.
   *
   * As soon as a player types the maximum number of digits, the corresponding behavior (e.g. onObjectNumberTyped/onNumberTyped) is triggered immediately, improving responsiveness.
   */
  max_typed_number: number;

  /**
   * Measure Tool will automatically be used when moving the Object.
   */
  measure_movement: boolean;

  /**
   * A string where you may persist user-data associated with the object. Tabletop Simulator saves this field, but otherwise does not use it. Store whatever information you see fit.
   */
  memo: string;

  /**
   * Internal resource name for this Object. Read only, and only useful for {@link spawnObjectData}. Generally, you want {@link getName}.
   */
  name: string;

  /**
   * The position the Object was picked up at. Read only.
   */
  pick_up_position: Vector;

  /**
   * The rotation the Object was picked up at. Read only.
   */
  pick_up_rotation: Vector;

  /**
   * If this object is a container that cannot exist with less than two contained objects (e.g. a deck), taking out the second last contained object will result in the container being destroyed. In its place the last remaining object in the container will be spawned.
   *
   * This variable provides a reference to the remaining object when it is being spawned. Otherwise, it's nil. Read only.
   */
  remainder: GObject;

  /**
   * If the Object is at rest. Unity rigidbody property.
   */
  resting: boolean;

  /**
   * The Lua Script on the Object.
   */
  script_code: string;

  /**
   * The saved data on the object. See onSave().
   */
  script_state: string;

  /**
   * If the Object is finished spawning. Read only.
   */
  spawning: boolean;

  /**
   * Static friction, value of 0-1. Unity physics material.
   */
  static_friction: number;

  /**
   * If other Objects on top of this one are also picked up when this Object is.
   */
  sticky: boolean;

  /**
   *  @deprecated
   *
   *  Use type.
   *
   *  This object's type. Read only.
   */
  tag: string;

  /**
   * If the tooltip opens when a pointer hovers over the object. Tooltips display name and description.
   */
  tooltip: boolean;

  /**
   * This object's type. Read only.
   */
  type: string;

  /**
   * If gravity affects this object.
   */
  use_gravity: boolean;

  /**
   * If snapping to grid is enabled or not.
   */
  use_grid: boolean;

  /**
   * If this object can be held in a hand zone.
   */
  use_hands: boolean;

  /**
   * Switches the axis the Object rotates around when flipped.
   */
  use_rotation_value_flip: boolean;

  /**
   * If snap points are used or ignored.
   */
  use_snap_points: boolean;

  /**
   * A numeric value associated with the object, which when non-zero, will be displayed when hovering over the object.

   * In the case of stacks, the value shown in the UI will be multiplied by the stack size i.e. you can use value to create custom stackable chips.

   * When multiple objects are selected, values will be summed together with objects sharing overlapping object tags.
   */
  value: number;

  /**
   * @deprecated
   *
   * Use object tags.
   *
   * A bit field. When objects with overlapping value_flags are selected and hovered over, their values will be summed together.
   */
  value_flags: number;

  /**
   * Custom "AssetBundle" objects.
   */
  AssetBundle?: AssetBundle;

  /**
   * "Custom PDF" objects.
   */
  Book?: Book;

  /**
   * "Tablet" objects.
   */
  Browser?: Browser;

  /**
   * "Bag", "Stack" and "Deck" objects.
   */
  Container?: Container;

  /**
   * "Digital Clock" objects.
   */
  Clock?: Clock;

  /**
   * "Counter" objects.
   */
  Counter?: Counter;

  /**
   * Layout zones.
   */
  LayoutZone?: LayoutZone;

  /**
   * "RPG Kit" animated figurine objects i.e. type "rpgFigurine".
   */
  RPGFigurine?: RPGFigurine;

  /**
   * 3D Text objects e.g. text created with the in-game Text tool.
   */
  TextTool: TextTool;

  /* Transform Functions */

  /**
   * Adds force to an object in a directional Vector.
   *
   * @param {VectorInput} vector A Vector of the direction and magnitude of force.
   * @param {ForceType} force_type An Int representing the force type to apply. Options below.
   *  - 1: Continuous force, uses mass. (Force)
   *  - 2: Continuous acceleration, ignores mass. (Acceleration)
   *  - 3: Instant force impulse, uses mass. (Impulse)
   *  - 4: Instant velocity change, ignores mass. (Velocity Change)
   * @returns {boolean} - True if the force was applied, false if not.
   */
  addForce(this: void, vector: VectorInput, force_type?: ForceType): boolean;

  /**
   * Adds torque to an object in a rotational Vector.
   *
   * @param {VectorInput} vector The direction and magnitude of the torque to apply.
   * @param {ForceType} force_type The type of torque to apply. One of:
   *  - 1: Continuous force, uses mass. (Force)
   *  - 2: Continuous acceleration, ignores mass. (Acceleration)
   *  - 3: Instant force impulse, uses mass. (Impulse)
   *  - 4: Instant velocity change, ignores mass. (Velocity Change)
   * @returns {boolean} - True if the torque was applied, false if not.
   */
  addTorque(this: void, vector: VectorInput, force_type?: ForceType): boolean;

  /**
   * Returns a Vector of the current angular velocity.
   *
   * @returns {Vector} The current angular velocity.
   */
  getAngularVelocity(this: void): Vector;

  /**
   * Returns a Vector describing the size of an object in Global terms.
   *
   * Bounds are part of Unity, and represent an imaginary square box that can be drawn around an object. Unlike scale, it can help indicate the size of an object in in-game units, not just relative model size.
   *
   * @returns {Bounds} The size of the object.
   */
  getBounds(this: void): Bounds;

  /**
   * Returns a Vector describing the size of the merged colliders on an object in Global terms, as if it was rotated to {0,0,0}.
   *
   * Bounds are part of Unity, and represent an imaginary square box that can be drawn around an object. Unlike scale, it can help indicate the size of an object in in-game units, not just relative model size.
   *
   * @returns {Bounds} The size of the object.
   */
  getBoundsNormalized(this: void): Bounds;

  /**
   * Returns a Vector of the current World Position.
   *
   * @returns {Vector} The current World Position.
   */
  getPosition(this: void): Vector;

  /**
   * Returns a Vector of the current smooth move target if the object is smooth moving, otherwise returns nil.
   *
   * @returns {Vector} The current smooth move target.
   */
  getPositionSmooth(this: void): Vector | undefined;

  /**
   * Returns a Vector of the current rotation.
   *
   * @returns {Vector} The current rotation.
   */
  getRotation(this: void): Vector;

  /**
   * Returns a Vector of the current smooth rotation target if the object is smooth moving, otherwise returns nil.
   *
   * @returns {Vector} The current smooth rotation target.
   */
  getRotationSmooth(this: void): Vector | undefined;

  /**
   * Returns a Vector of the current scale.
   *
   * Scale is not an absolute measurement, it is a multiple of the Object's default model size. So {x=2, y=2, z=2} would be a model twice its default size, not 2 units large.
   *
   * @returns {Vector} The current scale.
   */
  getScale(this: void): Vector;

  /**
   * Returns a Vector of the forward direction of this object. The direction is relative to how the object is facing.
   *
   * @returns {Vector} The forward direction of this object.
   */
  getTransformForward(this: void): Vector;

  /**
   * Returns a Vector of the right direction of this object. The direction is relative to how the object is facing.
   *
   * @returns {Vector} The right direction of this object.
   */
  getTransformRight(this: void): Vector;

  /**
   * Returns a Vector of the up direction of this object. The direction is relative to how the object is facing.
   *
   * @returns {Vector} The up direction of this object.
   */
  getTransformUp(this: void): Vector;

  /**
   * Returns a Vector of the current velocity.
   *
   * @returns {Vector} The current velocity.
   */
  getVelocity(this: void): Vector;

  /**
   * Returns a Vector describing the size of the merged renderers on an object in Global terms, as if it was rotated to {0,0,0}.
   *
   * Bounds are part of Unity, and represent an imaginary square box that can be drawn around an object. Unlike scale, it can help indicate the size of an object in in-game units, not just relative model size.
   *
   * @returns {Bounds} The size of the object.
   */
  getVisualBoundsNormalized(this: void): Bounds;

  /**
   * Indicates if an object is traveling as part of a Smooth move. Smooth moving is performed by setPositionSmooth and setRotationSmooth.
   *
   * @returns {boolean} True if the object is smooth moving, false if not.
   */
  isSmoothMoving(this: void): boolean;

  /**
   * Returns a Vector after converting a world Vector (World Position) to a local Vector (Local Position).
   *
   * A world Vector is a positional Vector using the world's coordinate system. A Local Vector is a positional Vector that is relative to the position of the given object.
   *
   * @param {VectorInput} vector The world position to convert into a local position.
   * @returns {Vector} The Local Position Vector.
   */
  positionToLocal(this: void, vector: VectorInput): Vector;

  /**
   * Returns a Vector after converting a local Vector (Local Position) to a world Vector (World Position).
   *
   * A world Vector is a positional Vector using the world's coordinate system. A Local Vector is a positional Vector that is relative to the position of the given object.
   *
   * @param {VectorInput} vector The local position to convert into a world position.
   * @returns {Vector} The World Position Vector.
   */
  positionToWorld(this: void, vector: VectorInput): Vector;

  /**
   * Rotates Object smoothly in the direction of the given Vector.
   *
   * This does not set the Object to face a specific rotation, it rotates the Object around by the number of degrees given for x/y/z.
   *
   * @param {VectorInput} vector The amount of x/y/z to rotate by.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  rotate(this: void, vector: VectorInput): boolean;

  /**
   * Scales Object by a multiple.
   *
   * This does not set the Object to a specific scale, it scales the Object by the given multiple.
   *
   * @param {VectorInput} scale Multiplier for scale. {x=1, y=1, z=1} would not change the scale
   * @returns {boolean} True if the scale was applied, false if not.
   */
  scale(this: void, scale: VectorInput): boolean;

  /**
   * Scales Object by a multiple.
   *
   * This does not set the Object to a specific scale, it scales the Object by the given multiple.
   *
   * @param {number} scale Multiplier for scale which is applied to the X/Y/Z. 1 would not change the scale.
   * @returns {boolean} True if the scale was applied, false if not.
   */
  scale(this: void, scale: number): boolean;

  /**
   * Sets a Vector as the current angular velocity.
   *
   * @param {VectorInput} vector The Vector to set as the current angular velocity.
   * @returns {boolean} True if the angular velocity was applied, false if not.
   */
  setAngularVelocity(this: void, vector: VectorInput): boolean;

  /**
   * Instantly moves an Object to the given Vector. The Vector is interpreted as World Position.
   *
   * @param {VectorInput} vector The World Position Vector to move to.
   * @returns {boolean} True if the position was applied, false if not.
   */
  setPosition(this: void, vector: VectorInput): boolean;

  /**
   * Moves the Object smoothly to the given Vector. The Vector is interpreted as World Position.
   *
   * @param {VectorInput} vector The World Position Vector to move to.
   * @param {boolean} collide If the Object will collide with other Objects while moving.
   * @param {boolean} fast If the Object is moved quickly.
   * @returns {boolean} True if the position was applied, false if not.
   */
  setPositionSmooth(this: void, vector: VectorInput, collide?: boolean, fast?: boolean): boolean;

  /**
   * Instantly rotates an Object to the given Vector.
   *
   * @param {VectorInput} vector The Vector to rotate to.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  setRotation(this: void, vector: VectorInput): boolean;

  /**
   * Rotates the Object smoothly to the given Vector.
   *
   * @param {VectorInput} vector The Vector to rotate to.
   * @param {boolean} collide If the Object will collide with other Objects while rotating.
   * @param {boolean} fast If the Object is rotated quickly.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  setRotationSmooth(this: void, vector: VectorInput, collide?: boolean, fast?: boolean): boolean;

  /**
   * Sets a Vector as the current scale.
   *
   * @param {VectorInput} vector The Vector to set as the current scale.
   * @returns {boolean} True if the scale was applied, false if not.
   */
  setScale(this: void, vector: VectorInput): boolean;

  /**
   * Sets a Vector as the current velocity.
   *
   * @param {VectorInput} vector The Vector to set as the current velocity.
   * @returns {boolean} True if the velocity was applied, false if not.
   */
  setVelocity(this: void, vector: VectorInput): boolean;

  /**
   * Smoothly moves Object by the given Vector offset.
   *
   * @param {VectorInput} vector The Vector to move by.
   * @param {boolean} collide Whether or not to collide with other objects.
   */
  translate(this: void, vector: VectorInput): boolean;

  /* Tag Functions */

  /**
   * Adds the specified tag to the object.
   *
   * @param {string} tag The tag to add.
   * @returns {boolean} True if the tag was added, false if not.
   */
  addTag(this: void, tag: string): boolean;

  /**
   * Returns a table of tags (string) that have been added to the object.
   *
   * @returns {string[]} The tags.
   */
  getTags(this: void): string[];

  /**
   * Returns whether the object has any tags.
   *
   * @returns {boolean} True if the object has any tags, false if not.
   */
  hasAnyTag(this: void): boolean;

  /**
   * Returns whether the object and the specified other object share at least one tag in common.
   *
   * @param {GObject} other The other object.
   * @returns {boolean} True if the objects share at least one tag, false if not.
   */
  hasMatchingTag(this: void, other: GObject): boolean;

  /**
   * Returns whether the object has the specified tag.
   *
   * @param {string} tag The tag to check for.
   * @returns {boolean} True if the object has the tag, false if not.
   */
  hasTag(this: void, tag: string): boolean;

  /**
   * Removes the specified tag from the object.
   *
   * @param {string} tag The tag to remove.
   * @returns {boolean} True if the tag was removed, false if not.
   */
  removeTag(this: void, tag: string): boolean;

  /**
   * Replaces all tags on the object with those contained in the specified table (containing string).
   *
   * @param {string[]} tags The tags to set.
   * @returns {boolean} True if the tags were set, false if not.
   */
  setTags(this: void, tags: string[]): boolean;

  /* UI Functions */

  /**
   * Removes all scripted buttons.
   *
   * @returns {boolean} True if the buttons were cleared, false if not.
   */
  clearButtons(this: void): boolean;

  /**
   * Removes all scripted inputs.
   *
   * @returns {boolean} True if the inputs were cleared, false if not.
   */
  clearInputs(this: void): boolean;

  /**
   * Creates a scripted button attached to the Object. Scripted buttons are buttons that can be clicked while in-game that trigger a function in a script.
   *
   * @param {CreateButtonParameters} parameters A Table containing the information used to spawn the button.
   * @returns {boolean} True if the button was created, false if not.
   */
  createButton(this: void, parameters: CreateButtonParameters): boolean;

  /**
   * Creates a scripted input attached to the Object. Scripted inputs are boxes you can click inside of in-game to input/edit text. Every letter typed triggers the function. The bool that is returned as part of the input_function allows you to determine when a player has finished editing the input.
   *
   * @param {CreateInputParameters} parameters A Table containing the information used to spawn the input.
   * @returns {boolean} True if the input was created, false if not.
   */
  createInput(this: void, parameters: CreateInputParameters): boolean;

  /**
   * Modify an existing button. The only parameter that is required is the index. The rest are optional, and not using them will cause the edited button's element to remain. Indexes start at 0. The first button on any given Object has an index of 0, the next button on it has an index of 1, etc. Each Object has its own indexes.
   *
   * @param {EditButtonParameters} parameters A Table containing the information used to spawn the button.
   * @returns {boolean} True if the button was edited, false if not.
   */
  editButton(this: void, parameters: EditButtonParameters): boolean;

  /**
   * Modify an existing input. The only parameter that is required is the index. The rest are optional, and not using them will cause the edited input's element to remain. Indexes start at 0. The first input on any given Object has an index of 0, the next input on it has an index of 1, etc. Each Object has its own indexes.
   *
   * @param {EditInputParameters} parameters A Table containing the information used to spawn the input.
   * @returns {boolean} True if the input was edited, false if not.
   */
  editInput(this: void, parameters: EditInputParameters): boolean;

  /**
   * Returns a Table of all buttons on this Object. The Table contains parameters tables with the same keys as seen in the createButton section, except each Table of parameters also contains an index entry. This is used to identify each button, used by editButton and removeButton.
   *
   * @returns {RequiredButtonParameters[]} The buttons.
   */
  getButtons(this: void): RequiredButtonParameters[];

  /**
   * Returns a Table of all inputs on this Object. The Table contains parameters tables with the same keys as seen in the createInput section, except each Table of parameters also contains an index entry. This is used to identify each input, used by editInput and removeInput.
   *
   * @returns {RequiredButtonParameters[]} The inputs.
   */
  getInputs(this: void): RequiredButtonParameters[];

  /**
   * Removes a specific button. Indexes start at 0. The first button on any given Object has an index of 0, the next button on it has an index of 1, etc. Each Object has its own indexes.
   *
   * Removing an index instantly causes all other higher indexes to shift down 1.
   *
   * @param {number} index The index of the button to remove.
   * @returns {boolean} True if the button was removed, false if not.
   */
  removeButton(this: void, index: number): boolean;

  /**
   * Removes a specific input. Indexes start at 0. The first input on any given Object has an index of 0, the next input on it has an index of 1, etc. Each Object has its own indexes.
   *
   * Removing an index instantly causes all other higher indexes to shift down 1.
   *
   * @param {number} index The index of the input to remove.
   * @returns {boolean} True if the input was removed, false if not.
   */
  removeInput(this: void, index: number): boolean;

  /* Get Functions */

  /**
   * Returns a table in the same format as getObjects() for containers.
   *
   * @returns {GObject[]} The objects.
   */
  getAttachments(): ObjectData[];

  /**
   * Color tint.
   *
   * @returns {Color} The color.
   */
  getColorTint(this: void): Color;

  /**
   * Returns a Table with the Custom Object information of a Custom Object.
   *
   * @returns {CustomObject} The custom object.
   */
  getCustomObject(this: void): Required<CustomObject>;

  /**
   * Returns a table data structure representation of the object. Works with spawnObjectData(...).
   *
   * @returns {SpawnObjectDataParameters} The data.
   */
  getData(): SpawnObjectDataParameters;

  /**
   * Description, also shows as part of Object's tooltip.
   *
   * @returns {string} The description.
   */
  getDescription(this: void): string;

  /**
   * Settings impacting Fog of War being revealed.
   *
   * @returns {FogOfWarReveal} The fog of war reveal.
   */
  getFogOfWarReveal(this: void): FogOfWarReveal;

  /**
   * Game Master Notes only visible for Player Color Black.
   *
   * @returns {string} The GM notes.
   */
  getGMNotes(this: void): string;

  /**
   * String of the Object's unique identifier.
   *
   * @returns {string} The GUID.
   */
  getGUID(this: void): string;

  /**
   * Returns information on any joints attached to this object. This information included the GUID of the other objects attached via the joints.
   *
   * This function returns a table of sub-tables, each sub-table representing one joint.
   *
   * @returns {Joint[]} The joints.
   */
  getJoints(this: void): Joint[];

  /**
   * Returns a JSON string representation of the object. Works with spawnObjectJSON(...).
   *
   * @param {boolean} indented Whether to indent the JSON.
   * @returns {string} The JSON.
   */
  getJSON(this: void, indented?: boolean): string;

  /**
   * If the Object is locked.
   *
   * @returns {boolean} True if locked, false if not.
   */
  getLock(this: void): boolean;

  /**
   * Name, also shows as part of Object's tooltip.
   *
   * @returns {string} The name.
   */
  getName(this: void): string;

  /**
   * Returns data describing the objects contained within in the zone/bag/deck.
   *
   * The format of the data returned depends on the kind of object.
   * 
   * Bags/Decks return ObjectData[]
   * Zones return GObject[]
   *
   * @returns {ObjectData[] | GObject[]} The objects.
   */
  getObjects(this: void): ObjectData[] | GObject[];

  /**
   * Returns the number of objects contained within (if the Object is a bag, deck or stack), otherwise -1.
   *
   * @returns {number} The quantity.
   */
  getQuantity(this: void): number;

  /**
   * Returns the current rotationValue. Rotation values are used to give value to different rotations (like dice).
   *
   * @returns {Vector | number | string} The rotation value.
   */
  getRotationValue(this: void): Vector | number | string;

  /**
   * Returns a Table of rotation values. Rotation values are used to give value to different rotations (like dice).
   *
   * @returns {RotationValuePair[]} The rotation values.
   */
  getRotationValues(this: void): RotationValuePair[];

  /**
   * Returns a table of the player colors currently selecting the object.
   *
   * @returns {ColorLiteral[]} The selecting players.
   */
  getSelectingPlayers(): ColorLiteral[];

  /**
   * Current state ID (index) an object is in. Returns -1 if there are no other states. State ids (indexes) start at 1.
   *
   * @returns {number} The state ID.
   */
  getStateId(this: void): number;

  /**
   * Returns a Table of information on the states of an Object.
   *
   * @returns {State[]} The states.
   */
  getStates(this: void): State[] | undefined;

  /**
   * Returns the Object's value. This represents something different depending on the Object's type.
   *
   * @returns {string | number} The value.
   */
  getValue(this: void): string | number | undefined;

  /**
   * Returns a list of zones that the object is currently occupying.
   *
   * @returns {GObject[]} The zones.
   */
  getZones(this: void): GObject[];

  /**
   * Returns true if the Object is (or will be) destroyed.
   *
   * @returns {boolean} True if destroyed, false if not.
   */
  isDestroyed(this: void): boolean;

  /* Set Functions */

  /**
   * Sets the Color tint.
   *
   * @param {Color} Color The color.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setColorTint(this: void, Color: ColorInput): boolean;

  /**
   * Sets a custom Object's properties.
   *
   * @param {CustomObject} parameters The parameters.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setCustomObject(this: void, parameters: CustomObject): boolean;

  /**
   * Sets a description for an Object. Shows in tooltip after delay.
   *
   * @param {string} description The description.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setDescription(this: void, description: string): boolean;

  /**
   * Establish the settings and enable/disable an Object's revealing of Fog of War.
   *
   * @param {FogOfWarReveal} fog_settings The fog settings.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setFogOfWarReveal(this: void, fog_settings: FogOfWarReveal): boolean;

  /**
   * Sets Game Master Notes only visible for Player Color Black.
   *
   * @param {string} notes The notes.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setGMNotes(this: void, notes: string): boolean;

  /**
   * Sets if an object is locked in place.
   *
   * @param {boolean} lock True to lock.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setLock(this: void, lock: boolean): boolean;

  /**
   * Sets a name for an Object. Shows in tooltip.
   *
   * @param {string} name The name.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setName(this: void, name: string): boolean;

  /**
   * Sets the Object's rotation value i.e. physically rotates the object.
   *
   * @param {VectorInput | number | string} rotation_value A rotation value.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setRotationValue(this: void, rotation_value: VectorInput | number | string): boolean;

  /**
   * Sets rotation values of an object. Rotation values are used to give value to different rotations (like dice).
   *
   * @param {RotationValuePair[]} rotation_values A Table containing Tables with the following values. 1 sub-Table per "face".
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setRotationValues(this: void, rotation_values: RotationValuePair[]): boolean;

  /**
   * Sets state of an Object. State ids (indexes) start at 1.
   *
   * @param {number} state_id The state identifier.
   * @returns {this} The new state.
   */
  setState(this: void, state_id: number): this | undefined;

  /**
   * Sets the Object's value. This represents something different depending on the Object's type.
   *
   * @param {string | number} value The value.
   * @returns {boolean} True if it succeeds, false if it fails.
   * @see {@link https://api.tabletopsimulator.com/object/#object-types}
   */
  setValue(this: void, value: string | number): boolean;

  /* Action Functions */

  /**
   * The Object supplied as param is destroyed and becomes a dummy Object child.
   *
   * @param {GObject} Object The object.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  addAttachment(this: void, Object: GObject): boolean;

  /**
   * @callback AddContextMenuItemCallback
   * @param {ColorLiteral} player_color Player Color who selected the menu item.
   * @param {Vector} object_position Position of object.
   * @param {this} object Object in question.
   */
  /**
   * Adds a menu item to the objects right-click context menu.
   *
   * @param {string} label Label for the menu item.
   * @param {AddContextMenuItemCallback} callback Execute if menu item is selected. Called as callback(player_color, object_position, object)
   * @param {boolean} [keep_open=false] Keep context menu open after menu item was selected.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  addContextMenuItem(
    label: string,
    callback: (
      this: void,
      player_color: ColorLiteral,
      object_position: Vector,
      object: this
    ) => void,
    keep_open?: boolean
  ): boolean;

  /**
   * Adds object to player's selection.
   *
   * @param {ColorLiteral} player_color The player color.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  addToPlayerSelection(this: void, player_color: ColorLiteral): boolean;

  /**
   * Clears all menu items added by function addContextMenuItem(...).
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  clearContextMenu(this: void): boolean;

  /**
   * Copy/Paste this Object, returning a reference to the new Object.
   *
   * @param {CloneParameters} parameters The parameters.
   * @returns {this} Cloned object
   */
  clone(this: void, parameters: CloneParameters): this;

  /**
   * Cuts (splits) a deck at the given card count. In other words, it counts down from the top of the deck and makes a new deck of that size and puts the remaining cards in the other pile.
   *
   * After the cut, the resulting decks much each have at least 2 cards. This means the parameter used must be between 2 and totalNumberOfCards - 2.
   *
   * @important New decks take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
   * @param {number} [count] How many cards down to cut the deck. If no value is provided the deck is cut in half.
   * @returns {GObject[]} The cut.
   */
  cut(this: void, count?: number): GObject[];

  /**
   * Deals Objects.Will deal from decks/bags/stacks as well as individual items. If dealing an individual item to a hand zone, it is a good idea to make sure that its Member Variable for use_hands is true.
   *
   * @param {number} number How many to deal.
   * @param {ColorLiteral} [player_color] The Player Color to deal to. Defaults to "". If not supplied, it will attempt to deal to all seated players.
   * @param {number} [index] Index of hand zone to deal to. Defaults to the first created hand zone.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  deal(this: void, number: number, player_color?: ColorLiteral, index?: number): boolean;

  /**
   * Deals from a deck to a position relative to the hand zone.
   *
   * @param {Vector} offset The x/y/z offset to deal to around the given hand zone.
   * @param {boolean} flip If the card is flipped over when dealt.
   * @param {ColorLiteral} player_color Hand zone Player Color to offset dealing to.
   * @returns {GObject} The new deal to color with offset.
   */
  dealToColorWithOffset(
    this: void,
    offset: Vector,
    flip: boolean,
    player_color: ColorLiteral
  ): GObject;

  /**
   * Destroys an attachment with the given index.
   *
   * @param {number} index Zero-based index of the.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  destroyAttachment(this: void, index: number): boolean;

  /**
   * Destroys all attachments.
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  destroyAttachments(this: void): boolean;

  /**
   * Destroys Object. Allows for self.destruct().
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  destruct(this: void): boolean;

  /**
   * Forces an Object, if held by a player, to be dropped.
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  drop(this: void): boolean;

  /**
   * Flips Object over.
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  flip(this: void): boolean;

  /**
   * Removes a highlight from around an Object.
   *
   * @param {ColorLiteral} [color] The color.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  highlightOff(this: void, color?: ColorLiteral): boolean;

  /**
   * Creates a highlight around an Object. duration is optional and specified in seconds, when omitted the Object remains highlighted.
   *
   * @param {ColorLiteral} [color] The color.
   * @param {number} [duration] The duration.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  highlightOn(this: void, color?: ColorLiteral, duration?: number): boolean;

  /**
   * Joints objects together, in the same way the Joint tool does.
   *
   * Using obj.jointTo(), with no object or parameter used as arguments, will remove all joints from that Object.
   *
   * @param {GObject} object The Object that the selected object will be jointed to.
   * @param {JointToParameters} parameters A table of parameters. Which parameters depends on the joint type.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  jointTo(this: void, object: GObject, parameters: JointToParameters): boolean;

  /**
   * Places an object into a container (chip stacks/bags/decks). If neither Object is a container, but they are able to be combined (like with 2 cards), then they form a deck/stack.
   *
   * @param {GObject} put_object The object to place inside this container.
   * @returns {GObject} The container is returned as the Object reference. Either this is the container/deck/stack the other Object was placed into, or the deck/stack that was formed by the putObject action.
   */
  putObject(this: void, put_object: GObject): GObject;

  /**
   * Shuffles deck/bag, rolls dice/coin, lifts other objects into the air. Same as pressing R by default. If the optional parameter color is used, this function will trigger onObjectRandomized(), passing that player color.
   *
   * @param {Color} [color] The color.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  randomize(this: void, color?: ColorLiteral): boolean;

  /**
   * Registers this object for Global collision events.
   *
   * @param {boolean} [stay=false] True to stay.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  registerCollisions(this: void, stay?: boolean): boolean;

  /**
   * Returns Object reference of itself after it respawns itself. This function causes the Object to be deleted and respawned instantly to refresh it, so its old Object reference will no longer be valid.
   *
   * Most often this is used after using setCustomObject(...) to modify a custom object.
   *
   * @param {RespawnParameters} parameters The parameters.
   * @returns {this} The respawned object.
   */
  reload(this: void): this;

  /**
   * Removes a child with the given index. Use getAttachments() to find out the index property.
   *
   * @param {number} index The index of the child to remove.
   * @returns {GObject} The removed attachment.
   */
  removeAttachment(this: void, index: number): GObject;

  /**
   * Detaches the children of this Object. Returns a table of object references
   *
   * @returns {GObject[]} The removed attachments.
   */
  removeAttachments(this: void): GObject[];

  /**
   * Removes object from player's selection.
   *
   * @param {ColorLiteral} player_color The player color of the selection to remove the object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  removeFromPlayerSelection(this: void, player_color: ColorLiteral): boolean;

  /**
   * Resets this Object. Resetting a Deck brings all the Cards back into it. Resetting a Bag clears its contents (works for both Loot and Infinite Bags).
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  reset(this: void): boolean;

  /**
   * Rolls dice/coins.
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  roll(this: void): boolean;

  /**
   * Shuffles/shakes up contents of a deck or bag.
   *
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  shuffle(this: void): boolean;

  /**
   * Returns an Object reference to a new state after randomly selecting and changing to one.
   *
   * @returns {GObject | undefined} The new state. or undefined if no states exist.
   */
  shuffleStates(this: void): GObject | undefined;

  /**
   * Splits a deck, as evenly as possible, into a number of piles.
   *
   * @param {number} piles The number of piles to split into.
   * - If no value is provided, it is split into two piles.
   * - Minimum Value: 2
   * - Maximum Value: Number-Of-Cards-In-Deck / 2
   * @returns {GObject[] | undefined} The split objects. or undefined if the object cannot be split
   */
  split(this: void, piles?: number): GObject[] | undefined;

  /**
   * Uses the spread action on a deck.
   *
   * @important Cards take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
   * @param {number} [distance=0.6] How far apart should the cards be.
   * - Negative values will spread to the left instead of the right.
   * @returns {GObject[] | undefined} The spread objects. or undefined if the object cannot be spread
   */
  spread(this: void, distance?: number): GObject[] | undefined;

  /**
   * Takes an object out of a container (bag/deck/chip stack), returning a reference to the object that was taken out.
   *
   * Objects that are taken out of a container will take one or more frames to spawn. Certain interactions (e.g. physics) will not be able to take place until the object has finished spawning.
   *
   * @param {TakeObjectParameters} parameters A Table of parameters used to determine how takeObject will act.
   * @returns {GObject | undefined} The taken object. or undefined if no object can be taken
   */
  takeObject(this: void, parameters?: TakeObjectParameters): GObject | undefined;

  /**
   * Unregisters this object for Global collision events.
   *
   * @returns {boolean} Returns true if the object was previously registered, false otherwise.
   */
  unregisterCollisions(this: void): boolean;

  /* Component Functions */

  /**
   * Returns a child GameObject matching the specified name.
   *
   * @param {string} name The name.
   * @returns {GameObject | undefined} The child. or undefined if the name cannot be found.
   */
  getChild(this: void, name: string): GameObject | undefined;

  /**
   * Returns the list of children GameObjects.
   *
   * @returns {GameObject[]} The children.
   */
  getChildren(this: void): GameObject[];

  /**
   * Returns a Component matching the specified name from the Object's list of Components.
   *
   * @param {string} name The name.
   * @returns {Component | undefined} The component. or undefined if the name cannot be found.
   */
  getComponent(this: void, name: string): Component | undefined;

  /**
   * Returns a Component matching the specified name. Found by searching the Components of the Object and its children recursively (depth first).
   *
   * @param {string} name The name.
   * @returns {Component} The component in children.
   */
  getComponentInChildren(this: void, name: string): Component;

  /**
   * Returns the Object's list of Components. name is optional, when specified only Components with specified name will be included.
   *
   * @param {string} name The name.
   * @returns {Component[] | undefined} The components. or undefined if the name cannot be found.
   */
  getComponents(this: void, name?: string): Component[] | undefined;

  /**
   * Returns a list of Components found by searching the Object and its children recursively (depth first). name is optional, when specified only Components with specified name will be included.
   *
   * @param {string} name The name.
   * @returns {Component[] | undefined} The components in children. or undefined if the name cannot be found.
   */
  getComponentsInChildren(this: void, name?: string): Component[] | undefined;

  /* Hide Functions */

  /**
   * Hides the Object from the specified players, as if it were in a hand zone. Using an empty table will cause the Object to remove the hiding effect.
   *
   * @param {Player[]} players A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setHiddenFrom(this: void, players?: ColorLiteral[]): boolean;

  /**
   * Hides the Object from the specified players, as if it were in a hidden zone. Using an empty table will cause the Object to remove the hiding effect.
   *
   * @param {Player[]} players A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setInvisibleTo(this: void, players?: ColorLiteral[]): boolean;

  /**
   * A more advanced version of setHiddenFrom(...). This function is also used to hide objects as if they were in a hand zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
   *
   * This function is slightly more complicated to use for basic hiding, but allows for much easier hiding in complex situations.
   *
   * @param {string} id The unique name for this hiding effect.
   * @param {boolean} hidden If the hiding effect is enabled or not.
   * @param {ColorLiteral[]} [players] A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  attachHider(this: void, id: string, hidden: boolean, players?: ColorLiteral[]): boolean;

  /**
   * A more advanced version of setInvisibleTo(...). This function is also used to hide objects as if they were in a hidden zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
   *
   * @param {string} id The unique name for this hiding effect.
   * @param {boolean} hidden If the hiding effect is enabled or not.
   * @param {ColorLiteral[]} [players] A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  attachInvisibleHider(this: void, id: string, hidden: boolean, players?: ColorLiteral[]): boolean;

  UI: UIConstructor;
}

interface GObjectConstructor {
  new: (this: void, value: string) => GObject;
}

/**
 * The Object class represents any entity within tabletop simulator. Once you have a reference to an object in your script you can call functions on it directly. Example: obj.getPosition(...).
 *
 *  Using the self property if your script is on an Object and referring to that Object.
 *
 *  Using getObjectFromGUID(...) with the object's GUID (found by right clicking it with the pointer).
 *
 *  Getting it as a return from another function, like with spawnObject(...).
 */
declare var GObject: GObjectConstructor;
declare var self: GObjectConstructor;

type Bounds = {
  /**
   *
   */
  center: Vector;

  /**
   *
   */
  size: Vector;

  /**
   *
   */
  offset: Vector;
};

type CommonButtonParameters = {
  /**
   * function name for (obj: GObject, player_clicker_color: ColorLiteral, alt_click: boolean) => void
   */
  click_function?: string;

  /**
   *
   */
  function_owner?: GObject | Global;

  /**
   *
   */
  label?: string;

  /**
   *
   */
  position?: VectorInput;

  /**
   *
   */
  rotation?: VectorInput;

  /**
   *
   */
  scale?: VectorInput;

  /**
   *
   */
  width?: number;

  /**
   *
   */
  height?: number;

  /**
   *
   */
  font_size?: number;

  /**
   *
   */
  color?: Color;

  /**
   *
   */
  font_color?: Color;

  /**
   *
   */
  hover_color?: Color;

  /**
   *
   */
  press_color?: Color;

  /**
   *
   */
  tooltip?: string;
};

type CommonInputParameters = {
  /**
   * function name for (
   *   obj: GObject,
   *   player_clicker_color: ColorLiteral,
   *   input_value: string,
   *   selected: boolean
   * ) => void;
   */
  input_function?: string;

  /**
   *
   */
  function_owner?: GObject | Global;

  /**
   *
   */
  label?: string;

  /**
   *
   */
  position?: VectorInput;

  /**
   *
   */
  rotation?: VectorInput;

  /**
   *
   */
  scale?: VectorInput;

  /**
   *
   */
  width?: number;

  /**
   *
   */
  height?: number;

  /**
   *
   */
  font_size?: number;

  /**
   *
   */
  color?: Color;

  /**
   *
   */
  font_color?: Color;

  /**
   *
   */
  tooltip?: string;

  /**
   *
   */
  alignment?: Alignment;

  /**
   *
   */
  value?: string;

  /**
   *
   */
  validation?: Validation;

  /**
   *
   */
  tab?: TabAction;
};

type CreateButtonParameters = {
  /**
   * function name for (obj: GObject, player_clicker_color: ColorLiteral, alt_click: boolean) => void
   */
  click_function: string;
} & CommonButtonParameters;

type CreateInputParameters = {
  /**
   * function name for (
   *   obj: GObject,
   *   player_clicker_color: ColorLiteral,
   *   input_value: string,
   *   selected: boolean
   * ) => void;
   */
  input_function: string;
} & CommonInputParameters;

declare const enum Alignment {
  Automatic = 1,
  Left = 2,
  Center = 3,
  Right = 4,
  Justified = 5
}

declare const enum Validation {
  None = 1,
  Integer = 2,
  Float = 3,
  Alphanumeric = 4,
  Username = 5,
  Name = 6
}

declare const enum TabAction {
  None = 1,
  SelectNextInput = 2,
  Indent = 3
}

type EditButtonParameters = {
  /**
   *
   */
  index: number;
} & CommonButtonParameters;

type EditInputParameters = {
  /**
   *
   */
  index: number;
} & CommonInputParameters;

type RequiredButtonParameters = Required<EditButtonParameters>;
type RequiredInputParameters = Required<EditInputParameters>;

type CustomAssetBundle = {
  /**
   * The path/URL for the AssetBundle.
   */
  assetbundle: string;

  /**
   * The path/URL for the secondary AssetBundle property.
   *
   * Not used by default.
   */
  assetbundle_secondary?: string;

  /**
   * An Int representing the Object's type. Defaults to 0.
   *
   * One of:
   * - 0: Generic
   * - 1: Figurine
   * - 2: Dice
   * - 3: Coin
   * - 4: Board
   * - 5: Chip
   * - 6: Bag
   * - 7: Infinite bag
   */
  type?: CustomObjectTypeOption;

  /**
   * An Int representing the Object's material. Defaults to 0.
   *
   * One of:
   * - 0: Plastic
   * - 1: Wood
   * - 2: Metal
   * - 3: Cardboard
   */
  material?: MaterialType;
};

type CustomBoard = {
  /**
   * The path/URL for the board.
   */
  image: string;
};

type CustomCard = {
  /**
   * The card shape. Defaults to 0.
   *
   * One of:
   * - 0: Rectangle (Rounded)
   * - 1: Rectangle
   * - 2: Hex (Rounded)
   * - 3: Hex
   * - 4: Circle
   */
  type?: ShapeType;

  /**
   * The path/URL of the face image.
   */
  face: string;

  /**
   * The path/URL of the back image.
   */
  back: string;

  /**
   * If the card is horizontal, instead of vertical.
   *
   * Defaults to false.
   */
  sideways?: string;
};

type CustomDeck = {
  /**
   * The path/URL of the face cardsheet.
   */
  face: string;

  /**
   * The path/URL of the back cardsheet or card back.
   */
  back: string;

  /**
   * If each card has a unique card back (via a cardsheet).
   *
   * Defaults to false.
   */
  unique_back?: boolean;

  /**
   * The number of columns on the cardsheet.
   *
   * Defaults to 10.
   */
  width?: number;

  /**
   * The number of rows on the cardsheet.
   *
   * Defaults to 7
   */
  height?: number;

  /**
   * The number of cards on the cardsheet.
   *
   * Defaults to 52.
   */

  number?: number;

  /**
   * Whether the cards are horizontal, instead of vertical.
   *
   * Defaults to false.
   */
  sideways?: boolean;

  /**
   * Whether the card back should be used as the hidden image (instead of the last slot of the face image).
   *
   * Defaults to false.
   */
  back_is_hidden?: boolean;
};

type CustomDice = {
  /**
   * The path/URL for the custom die.
   */
  image: string;

  /**
   * The type of die, which determines its number of sides. Defaults to 0.
   *
   * One of:
   * - 0: 4-sided
   * - 1: 6-sided
   * - 2: 8-sided
   * - 3: 10-sided
   * - 4: 12-sided
   * - 5: 20-sided
   */
  type?: DiceSideType;
};

type CustomFigurine = {
  /**
   * The path/URL for the custom figurine.
   */
  image: string;

  /**
   * The path/URL for the custom figurine's back.
   *
   * Defaults to "image".
   */
  image_secondary?: string;
};

type CustomModel = {
  /**
   * The path/URL for the .obj mesh used on the custom model.
   */
  mesh: string;

  /**
   * The path/URL for the diffuse image.
   */
  diffuse: string;

  /**
   * The path/URL for the normals image.
   *
   * Not used by default.
   */
  normal?: string;

  /**
   * The path/URL for the collider mesh.
   *
   * Defaults to a generic box collider.
   */
  collider?: string;

  /**
   * Whether the object model is convex.
   *
   * Defaults to false.
   */
  convex?: boolean;

  /**
   * An Int representing the Object's type. Defaults to 0. One of:
   *
   * - 0: Generic
   * - 1: Figurine
   * - 2: Dice
   * - 3: Coin
   * - 4: Board
   * - 5: Chip
   * - 6: Bag
   * - 7: Infinite bag
   */
  type?: CustomObjectTypeOption;

  /**
   * An Int representing the Object's material. Defaults to 0.
   *
   * One of:
   * - 0: Plastic
   * - 1: Wood
   * - 2: Metal
   * - 3: Cardboard
   */
  material?: MaterialType;

  /**
   * The specular intensity. Defaults to 0.1.
   */
  specular_intensity?: number;

  /**
   * The specular Color.
   *
   * Defaults to {r: 1, g: 1, b: 1}.
   */
  specular_color?: Color;

  /**
   * The specular sharpness.
   *
   * Defaults to 3.
   */
  specular_sharpness?: number;

  /**
   * The freshnel strength.
   *
   * Defaults to 1.
   */
  freshnel_strength?: number;

  /**
   * Whether the Object casts shadows.
   *
   * Defaults to true.
   */
  cast_shadows?: boolean;
};

type CustomTile = {
  /**
   * The path/URL for the custom tile image.
   */
  image: string;

  /**
   * Determines the shape of the tile.
   *
   * One of:
   * - 0: Square/Rectangle
   * - 1: Hex
   * - 2: Circle
   */
  type?: ShapeSimpleType;

  /**
   * The path/URL for the bottom-side image.
   *
   * Uses the top image by default.
   */
  image_bottom?: string;

  /**
   * How thick the tile is.
   *
   * Defaults to 0.5.
   */
  thickness?: number;

  /**
   * Whether these tiles stack together into a pile.
   *
   * Defaults to false.
   */
  stackable?: boolean;
};

type CustomToken = {
  /**
   * The path/URL for the custom token image.
   */
  image: string;

  /**
   * How thick the token is.
   *
   * Defaults to 0.2.
   */
  thickness?: number;

  /**
   * How accurately the token shape will trace image edge (in pixels).
   *
   * Defaults to 15.
   */
  merge_distance?: number;

  /**
   * Whether these tokens stack together into a pile.
   *
   * Defaults to false.
   */
  stackable?: boolean;
};

declare const enum CustomObjectTypeOption {
  Generic = 0,
  Figurine = 1,
  Dice = 2,
  Coin = 3, 
  Board = 4,
  Chip = 5,
  Bag = 6,
  InfiniteBag = 7
}

declare const enum MaterialType {
  Plastic = 0,
  Wood = 1,
  Metal = 2,
  Cardboard = 3
}

declare const enum ShapeType {
  RectangleRounded = 0,
  Rectangle = 1,
  HexRounded = 2,
  Hex = 3,
  Circle = 4
}

declare const enum DiceSideType {
  FourSided = 0,
  SixSided = 1,
  EightSided = 2,
  TenSided = 3,
  TwelveSided = 4,
  TwentySided = 5,
  '4Sided' = 0,
  '6Sided' = 1,
  '8Sided' = 2,
  '10Sided' = 3,
  '12Sided' = 4,
  '20Sided' = 5
}

declare const enum ShapeSimpleType {
  SquareRectangle = 0,
  Hex = 1,
  Circle = 2
}

type CustomObject =
  | CustomAssetBundle
  | CustomBoard
  | CustomCard
  | CustomDeck
  | CustomDice
  | CustomFigurine
  | CustomModel
  | CustomTile
  | CustomToken;

type FogOfWarReveal = {
  /**
   * Can the Object currently be seen by players?
   */
  reveal?: boolean;

  /**
   * The Fog of War Reveal Color
   *
   * "Black" means "visible to all players."
   * "All" means "visible to all players."
   */
  color?: string;

  /**
   * How far from the Object the reveal effect reaches (radius, inches).
   */
  range?: number;
};

type Joint = {
  /**
   *
   */
  type: string;

  /**
   *
   */
  joint_object_guid: string;

  /**
   *
   */
  collision: boolean;

  /**
   *
   */
  break_force: number;

  /**
   *
   */
  break_torgue: number;

  /**
   *
   */
  axis: Vector;

  /**
   *
   */
  anchor: Vector;

  /**
   *
   */
  connector_anchor: Vector;

  /**
   *
   */
  motor_force: number;

  /**
   *
   */
  motor_velocity: number;

  /**
   *
   */
  motor_free_spin: boolean;

  /**
   *
   */
  spring: number;

  /**
   *
   */
  damper: number;

  /**
   *
   */
  max_distance: number;

  /**
   *
   */
  min_distance: number;
};

type ObjectData = {
  /**
   * Description of the contained object.
   */
  description: string;

  /**
   * GM Notes on the contained object.
   */
  gm_notes: string;

  /**
   * GUID of the contained object.
   */
  guid: string;

  /**
   * Index of the contained object, represents the item's order in the container.
   */
  index: number;

  /**
   * Lua script on the contained object.
   */
  lua_script: string;

  /**
   * Lua script saved state of the contained object.
   */
  lua_script_state: string;

  /**
   * Memo on the contained object.
   */
  memo: string;

  /**
   * Name of the contained object.
   *
   * Will correspond with getName(), unless it's blank, in which case it'll be the internal resource name.
   */
  name: string;

  /**
   * Name of the item.
   *
   * @deprecated Use 'name' instead.
   */
  nickname: string;

  /**
   * A table of representing the tags on the contained object.
   */
  tags: string[];
};

type RotationValuePair = {
  /**
   * Value associated with the rotation. Should be a float, or int.
   *
   * If `value` is a string starting with "#", then it will not be displayed in the Object's tooltip.
   */
  value: string | number;

  /**
   *  The rotation of the Object that corresponds with the provided value.
   */
  rotation: Vector | number | string;
};

type State = {
  /**
   *
   */
  name: string;

  /**
   *
   */
  description: string;

  /**
   *
   */
  guid: string;

  /**
   *
   */
  id: number;

  /**
   *
   */
  lua_script: string;

  /**
   *
   */
  lua_script_state: string;

  /**
   *
   */
  nickname: string;
};

type CloneParameters = {
  /**
   * Where the Object is placed.
   *
   * Defaults to {x=0, y=3, z=0}
   */
  position?: VectorInput;

  /**
   * If the Object snaps to grid.
   *
   * Defaults to false.
   */
  snap_to_grid?: boolean;

  /**
   *
   */
  callback_function?: (this: void, obj: GObject) => void;

  /**
   * param table passed to callback, NOT callback_function
   */
  params?: Record<string, any>;

  /**
   * function name for (this: void, obj: GObject, data?: Record<string, any>) => void
   */
  callback?: string;

  /**
   * 
   */
  callback_owner?: GObject | Global;
};

type CommonTakeObjectParameters = {
  /**
   *
   */
  position?: VectorInput;

  /**
   *
   */
  rotation?: VectorInput;

  /**
   *
   */
  flip?: boolean;

  /**
   *
   */
  top?: boolean;

  /**
   *
   */
  smooth?: boolean;

  /**
   *
   */
  callback_function?: (this: void, obj: GObject) => void;

  /**
   * param table passed to callback, NOT callback_function
   */
  params?: Record<string, any>;

  /**
   * function name for (this: void, obj: GObject, data?: Record<string, any>) => void
   */
  callback?: string;

  /**
   * 
   */
  callback_owner?: GObject | Global;
};

type IndexTakeObjectParameters = {
  /**
   *
   */
  index?: number;
  guid?: never;
} & CommonTakeObjectParameters

type GUIDTakeObjectParameters = {
  /**
   *
   */
  guid?: string;
  index?: never;
} & CommonTakeObjectParameters

type TakeObjectParameters = IndexTakeObjectParameters | GUIDTakeObjectParameters

type AddDecalParameters = {
  /**
   * The name of the decal being placed.
   */
  name: string;

  /**
   * The file path or URL for the image to be displayed.
   */
  url: string;

  /**
   * Position to place Object.
   */
  position?: VectorInput;

  /**
   * Rotation of the Object.
   */
  rotation?: VectorInput;

  /**
   * Image scale multiplier. 1 is normal scale.
   */
  scale?: VectorInput;
};

type SnapPoint = {
  /**
   * Local Position of the snap point. When attached to an object, position is relative to the object's center.
   */
  position?: Vector;

  /**
   * Local Rotation of the snap point. When attached to an object, rotation is relative to the object's rotation.
   */
  rotation?: Vector;

  /**
   * Whether the snap point is a rotation snap point.
   */
  rotation_snap?: boolean;

  /**
   * Table of representing the tags associated with the snap point.
   */
  tags?: string[];
};

type VectorLineParameter = {
  /**
   * Table containing Vector positions for each "point" on the line.
   */
  points: VectorInput[];

  /**
   * Color the line will be.
   *
   * Defaults to {r=1, g=1, b=1}
   */
  color?: Color;

  /**
   * How thick the line is (in Unity units).
   *
   * Defaults to 0.1
   */
  thickness?: number;

  /**
   * Rotation Vector for the line to be angled.
   *
   * Defaults to {0,0,0}
   */
  rotation?: VectorInput;
};

type VectorLine = Required<VectorLineParameter>;

type JointCommon = {
  type: 'Fixed' | 'Spring' | 'Hinge';
  collision?: boolean;
  break_force?: number;
};

type JointSpring = {
  type: 'Spring';
  break_torque?: number;
  spring?: number;
  damper?: number;
  max_distance?: number;
  min_distance?: number;
  axis?: never;
  anchor?: never;
  motor_force?: never;
  motor_velocity?: never;
  motor_free_spin?: never;
} & JointCommon;

type JointHinge = {
  type: 'Hinge';
  axis?: VectorInput;
  anchor?: VectorInput;
  break_torque?: number;
  motor_force?: number;
  motor_velocity?: number;
  motor_free_spin?: boolean;
  spring?: never;
  damper?: never;
  max_distance?: never;
  min_distance?: never;
} & JointCommon;

type JointToParameters = JointCommon | JointSpring | JointHinge;

declare type ForceType = 1 | 2 | 3 | 4
