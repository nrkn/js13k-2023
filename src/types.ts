import { ANIM_THING, PLAYER_THING, STATIC_THING, TILE_BOTTOM, TILE_CENTERED, TILE_NONE } from './const.js'

export type ImageSource = HTMLCanvasElement | HTMLImageElement

export type Point = {
  x: number
  y: number
}


export type AnimState = { 
  frames: ImageSource[] 
  frame: number
  duration: number 
  // locked to one duration for every frame - consider making frames an 
  // array of [ ImageSource, duration ] - or we could make duration 
  // number|number[] - length doesn't have to match frames, we can % it
}

export type Anim = Record<string,AnimState>

export type BaseThing = Point & {
  moveSpeed?: number
  direction?: -1 | 1
  acceleration?: number
  speed?: number
  blocks?: 0 | 1
  intersects?: 0 | 1
  tiling?: Tiling
}

export type StaticThing = BaseThing & {
  type: typeof STATIC_THING
  image: ImageSource
}

export type AnimThing = BaseThing & {
  type: typeof ANIM_THING
  image: Anim
  anim: string
}

export type Tiling = (
  typeof TILE_NONE | typeof TILE_CENTERED | typeof TILE_BOTTOM
)

export type Thing = StaticThing | AnimThing | Player

export type Player = BaseThing & {
  type: typeof PLAYER_THING
  image: Anim
  anim: string
  acceleration: number
  speed: number
  direction: -1 | 1
}
