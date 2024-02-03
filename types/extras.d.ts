/// <reference path="./color.d.ts" />

interface Global {}
interface GlobalConstructor {}
declare var Global: GlobalConstructor;

//declare const _G: Record<string, any>;

declare function type(obj: any): string;

type CustomTableObject = {
  [key: string]: any
}
