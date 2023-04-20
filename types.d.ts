export interface Character {
  catchphrase?: string
  name: string
}

declare let declared: string
declare let initializer: string = "Wanda"

declare function canGrantWish(wish: string): boolean
declare function grantWish(wish: string) { return true }

declare class Fairy {
  canGrantWish(wish: string): boolean
  grantWish(wish: string) {
    return true
  }
}

interface Writer { }
declare interface Writer { }

declare const fullName: string
declare const firstname: "Liz"

const lastName = "Lemon"

global.d.ts
declare const version: string

interface Window {
  myVersion: string
}

import { Data } from "./data"

declare global {
  const globallyDeclared: Data
}

declare const locallyDeclared: Data
