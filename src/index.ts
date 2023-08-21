import { 
  ANIM_THING, STATIC_THING, TILE_BOTTOM, TILE_CENTERED 
} from './const.js'
import { createMountains } from './draw/mountains.js'
import { createSky } from './draw/sky.js'

import { resize } from './host.js'
import { keyDown, keyUp } from './io.js'
import { loadImage, imageToFrames } from './lib/image.js'
import { images, player, things } from './state.js'
import { tick } from './tick.js'

const start = async () => {
  const treeImage = await loadImage('tree-100-100.png')
  const tree2Image = await loadImage('tree2-100-100.png')
  const gateImage = await loadImage('gate-32-64.png')
  const girlIdleImage = await loadImage( 'girl-idle.png')
  const girlWalkImage = await loadImage( 'girl-walk.png')

  //images.skyImage = await loadImage('sky-800-300.png')
  images.skyImage = createSky( 800, 300 )
  //images.mountainImage = await loadImage('mountain-800-300.png')
  images.mountainImage = createMountains( 800, 300 )

  images.groundImage = await loadImage('ground-64-32.png')
  images.girlIdleFrames = imageToFrames(girlIdleImage, 4)
  images.girlWalkFrames = imageToFrames(girlWalkImage, 6)
 
  const girlAnim = {
    idle: { frames: images.girlIdleFrames, frame: 0, duration: 1000 },
    walk: { frames: images.girlWalkFrames, frame: 0, duration: 500 }
  }

  player.image = girlAnim

  things.push(
    // x and y are offsets from it's tiling position eg center of world or center+bottom of screen etc
    { type: STATIC_THING, x: 0, y: 0, image: images.skyImage, moveSpeed: 0.5, tiling: TILE_CENTERED },
    { type: STATIC_THING, x: 0, y: 0, image: images.mountainImage, moveSpeed: 0.8, tiling: TILE_CENTERED },

    { type: STATIC_THING, x: -10000, y: 0, image: gateImage, blocks: 1 },
    { type: STATIC_THING,x: -1200, y: 0, image: treeImage }, 

    { type: ANIM_THING, x: 100, y: 0, image: girlAnim, anim: 'idle', direction: -1 },

    { type: STATIC_THING, x: 150, y: 2, image: tree2Image, moveSpeed: 0.95 }, 
    { type: STATIC_THING, x: 200, y: 0, image: treeImage }, 
    { type: STATIC_THING, x: 1400, y: 0, image: treeImage },

    { type: STATIC_THING, x: 10000, y: 0, image: gateImage, blocks: 1 },

    // ground
    { type: STATIC_THING, x: 0, y: 0, image: images.groundImage, moveSpeed: 1, tiling: TILE_BOTTOM },

    player
  )

  addEventListener('keydown', keyDown)
  addEventListener('keyup', keyUp)

  resize()
  requestAnimationFrame(tick)
}

start().catch(console.error)
