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

  let Purple: Color = { r: 201, g: 0, b: 255 };
  let PurpleAlpha: Color = { r: 201, g: 0, b: 255, a: 255 };

  colorIds = {
    White: [254, 254, 254, 255],
    Pink: [255, 0, 231],
    Purple: { r: 201, g: 0, b: 255 },
    Blue: { r: 0, g: 0, b: 255, a: 255 },
    Green: Color.new(0, 128, 0),
    Yellow: Color.new(255, 254, 0, 255),
    Orange: Color.new(255, 168, 0, 255),
    Red: Color.new(255, 0, 0, 255),
  };
}
