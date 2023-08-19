import { imageToFrames, loadImage } from '../image.js'
import { SourceImage } from '../types.js'

export type StaticAssets = {
  gate: SourceImage
  ground: SourceImage
  mountain: SourceImage
  sky: SourceImage
  tree: SourceImage
}

export type AnimAssets = {
  girlIdle: SourceImage[]
  girlWalk: SourceImage[]
}

export type Assets = StaticAssets & AnimAssets

export const loadAssets = async () => {
  const gate = await loadImage('gate-32-64.png')
  const ground = await loadImage('ground-64-32.png')
  const mountain = await loadImage('mountain-800-300.png')
  const sky = await loadImage('sky-800-300.png')
  const tree = await loadImage('tree-100-100.png')

  const girlIdleFrames = await loadImage( 'girl-idle.png')
  const girlWalkFrames = await loadImage( 'girl-walk.png')

  const girlIdle = imageToFrames(girlIdleFrames, 4)
  const girlWalk = imageToFrames(girlWalkFrames, 6)

  return {
    gate, ground, mountain, sky, tree,

    girlIdle, girlWalk
  }
}
