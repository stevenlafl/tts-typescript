function objectTest(script_state: string) {
  let obj = getAllObjects()[0];
  obj.alt_view_angle = [0, 0, 0];

  let obj2 = GObject.new('x');

  obj2.UI.getXml();
}

function buttonFunction(obj: GObject, player_clicker_color: ColorLiteral, alt_click: boolean) {
  
}

function objectButtonTest(script_state: string) {
  let obj = getAllObjects()[0];
  obj.createButton({
    label: 'Stand',
    // TODO
    click_function: buttonFunction,
    function_owner: undefined,
    position: Vector(-1, 0.25, 0),
    rotation: Vector(0, 0, 0),
    width: 400,
    height: 350,
    font_size: 130
})
}
