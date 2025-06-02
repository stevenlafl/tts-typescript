function colorTest(script_state: string) {
  let colors = ['White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink'];
  let colorIds: Record<string, Color> = {
    White: Color.new(254, 254, 254, 255),
    Pink: Color.new(255, 0, 231, 255),
    Purple: Color.new(201, 0, 255, 255),
    Blue: Color.new(0, 0, 255, 255),
    Green: Color.new(0, 128, 0, 255),
    Yellow: Color.new(255, 254, 0, 255),
    Orange: Color.new(255, 168, 0, 255),
    Red: Color.new(255, 0, 0, 255),
  };

  let Purple: Color = Color({ r: 201, g: 0, b: 255 });
  let PurpleAlpha: Color = Color({ r: 201, g: 0, b: 255, a: 255 });

  Purple.get();
  Purple.set(0, 0, 0);
  Purple.setAt('r', 0);
  Purple.setAt(1, 0);
  Purple.setAt('g', 0);
  Purple.setAt(2, 0);
  Purple.setAt('b', 0);
  Purple.setAt(3, 0);
  Purple.setAt('a', 0);
  Purple.setAt(4, 0);

  let col:Color = Purple.lerp(Color.new(0, 0, 0, 255), 0.5);

  colorIds = {
    White: Color([254, 254, 254, 255]),
    Pink: Color([255, 0, 231]),
    Purple: Color({ r: 201, g: 0, b: 255 }),
    Blue: Color({ r: 0, g: 0, b: 255, a: 255 }),
    Green: Color.new(0, 128, 0),
    Yellow: Color.new(255, 254, 0, 255),
    Orange: Color.new(255, 168, 0, 255),
    Red: Color.new(255, 0, 0, 255),
  };
}
