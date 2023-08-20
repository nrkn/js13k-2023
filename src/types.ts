import { ANIM_THING, STATIC_THING, TILE_BOTTOM, TILE_CENTERED, TILE_NONE } from './const.js'

export type ImageSource = HTMLCanvasElement | HTMLImageElement

export type Point = {
  x: number
  y: number
}

// ok let's try typing things
export type AnimState = { 
  frames: ImageSource[] 
  frame: number
  duration: number // locked to one duration for every frame - consider making frames an array of [ ImageSource, duration ]
}

export type Anim = Record<string,AnimState>

export type BaseThing = Point & {
  moveSpeed?: number
  direction?: -1 | 1
  blocks?: 0 | 1
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

export type Thing = StaticThing | AnimThing