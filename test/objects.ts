function objectTest(script_state: string) {
  let obj = getAllObjects()[0];
  obj.alt_view_angle = [0, 0, 0];

  let obj2 = GObject.new('x');

  obj2.UI.getXml();
}
