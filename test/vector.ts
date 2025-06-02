function vectorTest(script_state: string) {
  let vectors = ['White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];
  let vectorIds: Record<string, Vector> = {
    White: Vector.new(254, 254, 254),
    Pink: Vector.new(255, 0, 231),
    Purple: Vector.new(201, 0, 255),
    Blue: Vector.new(0, 0, 255),
    Green: Vector.new(0, 128, 0),
    Yellow: Vector.new(255, 254, 0),
    Orange: Vector.new(255, 168, 0),
    Red: Vector.new(255, 0, 0),
  };

  let Purple: Vector = Vector({ x: 201, y: 0, z: 255 });

  Purple.lerp(Vector.new(0, 0, 0), 0.5);

  Purple.set(0,0,0);
  Purple.setAt('x', 0);
  let vals = Purple.get();
  vals[0];
  vals[1];
  vals[2];

  Purple = Purple.add(Vector.new(0, 0, 0));

  Purple.rotateOver('x', 0.5);

  Purple.magnitude();
  Vector.magnitude(Purple);

  let copy: Vector = Purple.copy();

  vectorIds = {
    White: Vector([254, 254, 254]),
    Pink: Vector([255, 0, 231]),
    Purple: Vector({ x: 201, y: 0, z: 255 }),
    Blue: Vector({ x: 0, y: 0, z: 255 }),
    Green: Vector.new(0, 128, 0),
    Yellow: Vector.new(255, 254, 0),
    Orange: Vector.new(255, 168, 0),
    Red: Vector.new(255, 0, 0),
  };

  Vector.min(Vector.new(0, 0, 0), Vector.new(0, 0, 0));
}
