interface Zone extends Omit<GObject, 'getObjects'> {
  /**
   *
   */
  guid: string;

  /**
   *
   */
  getOptions(this: void): any;

  /**
   *
   */
  getObjects(this: void): GObject[];

  /**
   *
   */
  layout(this: void): boolean;
}

interface ZoneConstructor {}

declare var Zone: ZoneConstructor;
