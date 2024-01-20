/// <reference path="./color.d.ts" />

interface Global {}
interface GlobalConstructor {}
declare var Global: GlobalConstructor;

//declare const _G: Record<string, any>;

declare function type(obj: any): string;

interface os {}
interface osConstructor {
  /**
   *
   */
  time(this: void, timeString?: string): number;

  /**
   *
   */
  date(this: void, format: string): string;
}
declare var os: osConstructor;
