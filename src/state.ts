import { ImageSource, Thing } from './types.js'

export const timer = {
  startTime: 0,
  lastTime: 0,
  elapsedTime: 0,
  deltaTime: 0
}

export const bgPosition = {
  sky: { x: 0, y: 0 },
  mountain: { x: 0, y: 0 },
  ground: { x: 0, y: 0 }
}

export const things: Thing[] = []

export const player = {
  frame: 0,
  direction: 1,
  speed: 0,
  acceleration: 0,
  x: 0,
  y: 0
}

const emptyImage: ImageSource = new Image()
const emptyFrames: ImageSource[] = []

export const images = {
  skyImage: emptyImage,
  mountainImage: emptyImage,
  groundImage: emptyImage,
  treeImage: emptyImage,
  girlIdleFrames: emptyFrames,
  girlWalkFrames: emptyFrames
} 
