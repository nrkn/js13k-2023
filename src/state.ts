import { ANIM_THING, PLAYER_THING } from './const.js'
import { Anim, AnimThing, ImageSource, Player, Thing } from './types.js'

export const timer = {
  startTime: 0,
  lastTime: 0,
  elapsedTime: 0,
  deltaTime: 0
}

export const things: Thing[] = []

const emptyImage = new Image() as ImageSource
const emptyFrames: ImageSource[] = []

export const images = {
  skyImage: emptyImage,
  mountainImage: emptyImage,
  groundImage: emptyImage,
  treeImage: emptyImage,
  girlIdleFrames: emptyFrames,
  girlWalkFrames: emptyFrames
} 

export const player: Player = { 
  type: PLAYER_THING, x: 0, y: 0, image: ( undefined as unknown as Anim ) , 
  anim: 'idle',
  speed: 0,
  acceleration: 0,
  direction: 1,
  intersects: 1
}
