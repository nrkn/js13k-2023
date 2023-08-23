import { 
  ANIM_THING, STATIC_THING, TILE_BOTTOM, TILE_CENTERED 
} from './const.js'
import { idleData } from './data/idle-data.js'
import { walkData } from './data/walk-data.js'
import { createMountains } from './draw/mountains.js'
import { createSky } from './draw/sky.js'
import { drawPersonAnim } from './draw/person-anim.js'

import { resize } from './host.js'
import { keyDown, keyUp } from './io.js'
import { loadImage } from './lib/image.js'
import { images, player, things } from './state.js'
import { tick } from './tick.js'
import { createGround } from './draw/ground.js'
import { createGate } from './draw/gate.js'
import { createTree } from './draw/tree.js'

const start = async () => {
  const genWalkFrames = drawPersonAnim( walkData )
  const genIdleFrames = drawPersonAnim( idleData )

  const treeImage = createTree( 100, 100 )
  const tree2Image = createTree( 100, 100, '#225027', '#422429' )
  const gateImage = createGate(32,64)
 
  images.skyImage = createSky( 800, 300 )
  images.mountainImage = createMountains( 800, 300 )
  images.groundImage = createGround( 64, 16 )
 
  const girlAnim = {
    idle: genIdleFrames,
    walk: genWalkFrames
  }

  player.image = girlAnim

  things.push(
    // x and y are offsets from it's tiling position eg center of world or center+bottom of screen etc
    { type: STATIC_THING, x: 0, y: 0, image: images.skyImage, moveSpeed: 0.5, tiling: TILE_CENTERED },
    { type: STATIC_THING, x: 0, y: 0, image: images.mountainImage, moveSpeed: 0.8, tiling: TILE_CENTERED },

    { type: STATIC_THING, x: -500, y: 0, image: gateImage, blocks: 1 },
    { type: STATIC_THING,x: -200, y: 0, image: treeImage }, 

    { type: ANIM_THING, x: 100, y: 0, image: girlAnim, anim: 'idle', direction: -1 },

    { type: STATIC_THING, x: 150, y: 2, image: tree2Image, moveSpeed: 0.95 }, 
    { type: STATIC_THING, x: 200, y: 0, image: treeImage }, 
    { type: STATIC_THING, x: 500, y: 0, image: treeImage },

    { type: STATIC_THING, x: 800, y: 0, image: gateImage, blocks: 1 },

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


