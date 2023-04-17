/// <reference path="zone.d.ts" />

interface GObject {
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
  held_by_color: string;

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
  AssetBundle: AssetBundle;

  /**
   * "Custom PDF" objects.
   */
  Book: Book;

  /**
   * "Tablet" objects.
   */
  Browser: Browser;

  /**
   * "Digital Clock" objects.
   */
  Clock: Clock;

  /**
   * "Counter" objects.
   */
  Counter: Counter;

  /**
   * Layout zones.
   */
  LayoutZone: LayoutZone;

  /**
   * "RPG Kit" animated figurine objects i.e. type "rpgFigurine".
   */
  RPGFigurine: RPGFigurine;

  /**
   * 3D Text objects e.g. text created with the in-game Text tool.
   */
  TextTool: TextTool;

  /* Transform Functions */

  /**
   * Adds force to an object in a directional Vector.
   *
   * @param {Vector} vector A Vector of the direction and magnitude of force.
   * @param {number} force_type An Int representing the force type to apply. Options below.
   *  - 1: Continuous force, uses mass. (Force)
   *  - 2: Continuous acceleration, ignores mass. (Acceleration)
   *  - 3: Instant force impulse, uses mass. (Impulse)
   *  - 4: Instant velocity change, ignores mass. (Velocity Change)
   * @returns {boolean} - True if the force was applied, false if not.
   */
  addForce(this: void, vector: Vector, force_type?: number): boolean;

  /**
   * Adds torque to an object in a rotational Vector.
   *
   * @param {Vector} vector The direction and magnitude of the torque to apply.
   * @param {number} force_type The type of torque to apply. One of:
   *  - 1: Continuous force, uses mass. (Force)
   *  - 2: Continuous acceleration, ignores mass. (Acceleration)
   *  - 3: Instant force impulse, uses mass. (Impulse)
   *  - 4: Instant velocity change, ignores mass. (Velocity Change)
   * @returns {boolean} - True if the torque was applied, false if not.
   */
  addTorque(this: void, vector: Vector, force_type?: number): boolean;

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
  getPositionSmooth(this: void): Vector;

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
  getRotationSmooth(this: void): Vector;

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
   * @param {Vector} vector The world position to convert into a local position.
   * @returns {Vector} The Local Position Vector.
   */
  positionToLocal(this: void, vector: Vector): Vector;

  /**
   * Returns a Vector after converting a local Vector (Local Position) to a world Vector (World Position).
   *
   * A world Vector is a positional Vector using the world's coordinate system. A Local Vector is a positional Vector that is relative to the position of the given object.
   *
   * @param {Vector} vector The local position to convert into a world position.
   * @returns {Vector} The World Position Vector.
   */
  positionToWorld(this: void, vector: Vector): Vector;

  /**
   * Rotates Object smoothly in the direction of the given Vector.
   *
   * This does not set the Object to face a specific rotation, it rotates the Object around by the number of degrees given for x/y/z.
   *
   * @param {Vector} vector The amount of x/y/z to rotate by.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  rotate(this: void, vector: Vector): boolean;

  /**
   * Scales Object by a multiple.
   *
   * This does not set the Object to a specific scale, it scales the Object by the given multiple.
   *
   * @param {Vector} scale Multiplier for scale. {x=1, y=1, z=1} would not change the scale
   * @returns {boolean} True if the scale was applied, false if not.
   */
  scale(this: void, scale: Vector): boolean;

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
   * @param {Vector} vector The Vector to set as the current angular velocity.
   * @returns {boolean} True if the angular velocity was applied, false if not.
   */
  setAngularVelocity(this: void, vector: Vector): boolean;

  /**
   * Instantly moves an Object to the given Vector. The Vector is interpreted as World Position.
   *
   * @param {Vector} vector The World Position Vector to move to.
   * @returns {boolean} True if the position was applied, false if not.
   */
  setPosition(this: void, vector: Vector): boolean;

  /**
   * Moves the Object smoothly to the given Vector. The Vector is interpreted as World Position.
   *
   * @param {Vector} vector The World Position Vector to move to.
   * @param {boolean} collide If the Object will collide with other Objects while moving.
   * @param {boolean} fast If the Object is moved quickly.
   * @returns {boolean} True if the position was applied, false if not.
   */
  setPositionSmooth(this: void, vector: Vector, collide: boolean, fast: boolean): boolean;

  /**
   * Instantly rotates an Object to the given Vector.
   *
   * @param {Vector} vector The Vector to rotate to.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  setRotation(this: void, vector: Vector): boolean;

  /**
   * Rotates the Object smoothly to the given Vector.
   *
   * @param {Vector} vector The Vector to rotate to.
   * @param {boolean} collide If the Object will collide with other Objects while rotating.
   * @param {boolean} fast If the Object is rotated quickly.
   * @returns {boolean} True if the rotation was applied, false if not.
   */
  setRotationSmooth(this: void, vector: Vector, collide: boolean, fast: boolean): boolean;

  /**
   * Sets a Vector as the current scale.
   *
   * @param {Vector} vector The Vector to set as the current scale.
   * @returns {boolean} True if the scale was applied, false if not.
   */
  setScale(this: void, vector: Vector): boolean;

  /**
   * Sets a Vector as the current velocity.
   *
   * @param {Vector} vector The Vector to set as the current velocity.
   * @returns {boolean} True if the velocity was applied, false if not.
   */
  setVelocity(this: void, vector: Vector): boolean;

  /**
   * Smoothly moves Object by the given Vector offset.
   *
   * @param {Vector} vector The Vector to move by.
   * @param {boolean} collide Whether or not to collide with other objects.
   */
  translate(this: void, vector: Vector): boolean;

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
  getCustomObject(this: void): CustomObject;

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
   * @returns {ObjectData[]} The objects.
   */
  getObjects(this: void): ObjectData[];

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
  getStates(this: void): State[];

  /**
   * Returns the Object's value. This represents something different depending on the Object's type.
   *
   * @returns {string | number} The value.
   */
  getValue(this: void): string | number;

  /**
   * Returns a list of zones that the object is currently occupying.
   *
   * @returns {Zone[]} The zones.
   */
  getZones(this: void): Zone[];

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
  setColorTint(this: void, Color: Color): boolean;

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
   * @param {Vector | number | string} rotation_value A rotation value. Should be a int, or float.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setRotationValue(this: void, rotation_value: Vector | number | string): boolean;

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
   * @returns {GObject} The new state.
   */
  setState(this: void, state_id: number): GObject;

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
   * @param {GObject} object Object in question.
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
      object: GObject
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
   */
  clone(this: void, parameters: CloneParameters): GObject;

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
   * @param {number} offset The x/y/z offset to deal to around the given hand zone.
   * @param {boolean} flip If the card is flipped over when dealt.
   * @param {ColorLiteral} player_color Hand zone Player Color to offset dealing to.
   * @returns {GObject} The new deal to color with offset.
   */
  dealToColorWithOffset(
    this: void,
    offset: number,
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
  randomize(this: void, color?: Color): boolean;

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
   * @returns {GObject} The respawned object.
   */
  reload(this: void): GObject;

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
   * @returns {GObject} The new state.
   */
  shuffleStates(this: void): GObject;

  /**
   * Splits a deck, as evenly as possible, into a number of piles.
   *
   * @param {number} piles The number of piles to split into.
   * - If no value is provided, it is split into two piles.
   * - Minimum Value: 2
   * - Maximum Value: Number-Of-Cards-In-Deck / 2
   * @returns {GObject[]} The split objects.
   */
  split(this: void, piles?: number): GObject[];

  /**
   * Uses the spread action on a deck.
   *
   * @important Cards take a frame to be created. This means trying to act on them immediately will not work. Use a coroutine or timer to add a delay.
   * @param {number} [distance=0.6] How far apart should the cards be.
   * - Negative values will spread to the left instead of the right.
   * @returns {GObject[]} The spread objects.
   */
  spread(this: void, distance?: number): GObject[];

  /**
   * Takes an object out of a container (bag/deck/chip stack), returning a reference to the object that was taken out.
   *
   * Objects that are taken out of a container will take one or more frames to spawn. Certain interactions (e.g. physics) will not be able to take place until the object has finished spawning.
   *
   * @param {TakeObjectParameters} parameters A Table of parameters used to determine how takeObject will act.
   * @returns {GObject} The taken object.
   */
  takeObject(this: void, parameters: TakeObjectParameters): GObject;

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
   * @returns {GameObject} The child.
   */
  getChild(this: void, name: string): GameObject;

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
   * @returns {Component} The component.
   */
  getComponent(this: void, name: string): Component;

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
   * @returns {Component[]} The components.
   */
  getComponents(this: void, name: string): Component[];

  /**
   * Returns a list of Components found by searching the Object and its children recursively (depth first). name is optional, when specified only Components with specified name will be included.
   *
   * @param {string} name The name.
   * @returns {Component[]} The components in children.
   */
  getComponentsInChildren(this: void, name: string): Component[];

  /* Hide Functions */

  /**
   * Hides the Object from the specified players, as if it were in a hand zone. Using an empty table will cause the Object to remove the hiding effect.
   *
   * @param {Player[]} players A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setHiddenFrom(this: void, players: Player[]): boolean;

  /**
   * Hides the Object from the specified players, as if it were in a hidden zone. Using an empty table will cause the Object to remove the hiding effect.
   *
   * @param {Player[]} players A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setInvisibleTo(this: void, players: Player[]): boolean;

  /**
   * A more advanced version of setHiddenFrom(...). This function is also used to hide objects as if they were in a hand zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
   *
   * This function is slightly more complicated to use for basic hiding, but allows for much easier hiding in complex situations.
   *
   * @param {string} id The unique name for this hiding effect.
   * @param {boolean} hidden If the hiding effect is enabled or not.
   * @param {Player[]} [players] A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  attachHider(this: void, id: string, hidden: boolean, players?: Player[]): boolean;

  /**
   * A more advanced version of setInvisibleTo(...). This function is also used to hide objects as if they were in a hidden zone. It allows you to identify multiple sources of "hiding" by an ID and toggle the effect on/off easily.
   *
   * @param {string} id The unique name for this hiding effect.
   * @param {boolean} hidden If the hiding effect is enabled or not.
   * @param {Player[]} [players] A table containing colors to hide the Object from.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  attachInvisibleHider(this: void, id: string, hidden: boolean, players?: Player[]): boolean;

  /* Global Functions */

  /**
   * Add a Decal onto an object or the game world.
   *
   * @important When using this function, the vector parameters (position, rotation) are relative to what the decal is being placed on. For example, if you put a decal at {0,0,0} on Global, it will attach to the center of the game room. If you do the same to an object, it will place the decal on the origin point of the object.
   * @param {AddDecalParameters} parameters A Table of parameters used to determine how the function will act.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  addDecal(this: void, parameters: AddDecalParameters): boolean;

  /**
   * Used to call a Lua function on another entity.
   *
   * @param {string} func_name Function name you want to activate.
   * @param {any} [func_params] A Table containing any data you want to pass to that function.
   * @returns {any} Var is only returned if the function called has a return. Otherwise return is nil. See example.
   */
  call(this: void, func_name: string, func_params?: any): any;

  /**
   * Returns information on all decals attached to this object or the world.
   *
   * @returns {AddDecalParameters[]} Returns a table of sub-tables, each sub-table representing one decal.
   */
  getDecals(this: void): AddDecalParameters[];

  /**
   * Get a Lua script as a string from the entity.
   *
   * @returns {string} The lua script.
   */
  getLuaScript(this: void): string;

  /**
   * Returns a table representing a list of snap points.
   *
   * @returns {SnapPoint[]} The returned value is a list (numerically indexed table) of sub-tables, where each sub-table represents a snap point.
   */
  getSnapPoints(this: void): SnapPoint[];

  /**
   * Data value of a variable in another Object's script. Can only return a table.
   *
   * @param {string} table_name Name of the table.
   * @returns {any} The table.
   */
  getTable(this: void, table_name: string): any;

  /**
   * Data value of a variable in another entity's script. Cannot return a table.
   *
   * @param {string} var_name Name of the variable.
   * @returns {any} The variable.
   */
  getVar(this: void, var_name: string): any;

  /**
   * Returns Table of data representing the current Vector Lines on this entity. See setVectorLines for table format.
   *
   * @returns {VectorLine[]} The vector lines.
   */
  getVectorLines(this: void): VectorLine[];

  /**
   * Sets which decals are on an object. This removes other decals already present, and can remove all decals as well.
   *
   * @important Using this function with an empty table will remove all decals from Global or the object it is used on. Global.setDecals({})
   * @param {AddDecalParameters[]} parameters The main table, which will contain all of the sub-tables consisting of each decal's parameters.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setDecals(this: void, parameters: AddDecalParameters[]): boolean;

  /**
   * Input a string as an entity's Lua script. Generally only used after spawning a new Object.
   *
   * @param {string} script The script.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setLuaScript(this: void, script: string): boolean;

  /**
   * Replaces existing snap points with the specified list of snap points.
   *
   * @param {SnapPoint[]} snap_points The snap points.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setSnapPoints(this: void, snap_points: SnapPoint[]): boolean;

  /**
   * Creates/updates a variable in another entity's script. Only used for tables.
   *
   * @param {string} func_name Name of the function.
   * @param {any} data The data.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setTable(this: void, func_name: string, data: any): boolean;

  /**
   * Creates/updates a variable in another entity's script. Cannot set a table.
   *
   * @param {string} func_name Name of the function.
   * @param {any} data The data.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setVar(this: void, func_name: string, data: any): boolean;

  /**
   * Spawns Vector Lines from a list of parameters on this entity.
   *
   * @param {VectorLineParameter[]} parameters The parameters.
   * @returns {boolean} True if it succeeds, false if it fails.
   */
  setVectorLines(this: void, parameters: VectorLineParameter): boolean;

  UI: UI;
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
   *
   */
  function_owner?: GObject;

  /**
   *
   */
  label?: string;

  /**
   *
   */
  position?: Vector;

  /**
   *
   */
  rotation?: Vector;

  /**
   *
   */
  scale?: Vector;

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

type CreateButtonParameters = {
  /**
   *
   */
  click_function: (obj: GObject, player_clicker_color: string, alt_click: boolean) => void;
} & CommonButtonParameters;

type CommonInputParameters = {
  /**
   *
   */
  function_owner?: GObject;

  /**
   *
   */
  label?: string;

  /**
   *
   */
  position?: Vector;

  /**
   *
   */
  rotation?: Vector;

  /**
   *
   */
  scale?: Vector;

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
  alignment?: number;

  /**
   *
   */
  value?: string;

  /**
   *
   */
  validation?: number;

  /**
   *
   */
  tab?: number;
};

type CreateInputParameters = {
  /**
   *
   */
  input_function: (
    obj: GObject,
    player_clicker_color: string,
    input_value: string,
    selected: boolean
  ) => void;
} & CommonInputParameters;

type EditButtonParameters = {
  /**
   *
   */
  index: number;

  /**
   *
   */
  click_function?: (obj: GObject, player_clicker_color: string, alt_click: boolean) => void;
} & CommonButtonParameters;

type EditInputParameters = {
  /**
   *
   */
  index: number;

  /**
   *
   */
  input_function?: (
    obj: GObject,
    player_clicker_color: string,
    input_value: string,
    selected: boolean
  ) => void;
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
  type?: number;

  /**
   * An Int representing the Object's material. Defaults to 0.
   *
   * One of:
   * - 0: Plastic
   * - 1: Wood
   * - 2: Metal
   * - 3: Cardboard
   */
  material?: number;
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
  type?: number;

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
  type?: number;
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
  type?: number;

  /**
   * An Int representing the Object's material. Defaults to 0.
   *
   * One of:
   * - 0: Plastic
   * - 1: Wood
   * - 2: Metal
   * - 3: Cardboard
   */
  material?: number;

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
  type?: number;

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
  value: string;

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
  position?: Vector;

  /**
   * If the Object snaps to grid.
   *
   * Defaults to false.
   */
  snap_to_grid?: boolean;
};

type TakeObjectParameters = {
  /**
   *
   */
  position?: Vector;

  /**
   *
   */
  rotation?: Vector;

  /**
   *
   */
  flip?: boolean;

  /**
   *
   */
  guid?: string;

  /**
   *
   */
  index?: number;

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
};

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
  position: Vector;

  /**
   * Rotation of the Object.
   */
  rotation: Vector;

  /**
   * Image scale multiplier. 1 is normal scale.
   */
  scale: Vector;
};

type SnapPoint = {
  /**
   * Local Position of the snap point. When attached to an object, position is relative to the object's center.
   */
  position: Vector;

  /**
   * Local Rotation of the snap point. When attached to an object, rotation is relative to the object's rotation.
   */
  rotation: Vector;

  /**
   * Whether the snap point is a rotation snap point.
   */
  rotation_snap: false;

  /**
   * Table of representing the tags associated with the snap point.
   */
  tags: string[];
};

type VectorLineParameter = {
  /**
   * Table containing Vector positions for each "point" on the line.
   */
  points: Vector[];

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
  rotation?: Vector;
};

type VectorLine = Required<VectorLineParameter>;

type JointFixed = {
  type: string;
  collision: boolean;
  break_force: number;
};

type JointSpring = {
  type: string;
  collision: boolean;
  break_force: number;
  break_torque: number;
  spring: number;
  damper: number;
  max_distance: number;
  min_distance: number;
};

type JointHinge = {
  type: string;
  collision: boolean;
  axis: Vector;
  anchor: Vector;
  break_force: number;
  break_torque: number;
  motor_force: number;
  motor_velocity: number;
  motor_free_spin: boolean;
};

type JointToParameters = JointFixed | JointSpring | JointHinge;
