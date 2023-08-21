import { getImageSource } from './anim.js'

import {
  FRICTION, ANIM_THING, PLAYER_THING
} from './const.js'

import { things, timer } from './state.js'

export const update = _t => {
  updateThings(_t)
  updateCollisions()

  for (let i = 0; i < collisions.length; i++) {
    const [a, b] = collisions[i]
    const thingA = things[a]

    if (things[a].intersects && things[b].blocks) {
      if ( typeof thingA.speed === 'number' ) {
        thingA.x += thingA.speed
        thingA.speed = 0
      }
    }
  }
}

const updateThings = _t => {
  for (const t of things) {
    if (t.type === ANIM_THING || t.type === PLAYER_THING) {

      const { elapsedTime } = timer
      const anim = t.image[t.anim]
      const { duration, frames } = anim
      const frameCount = frames.length

      const frame = Math.floor(elapsedTime / duration * frameCount) % frameCount

      anim.frame = frame
    }

    if (t.speed !== undefined && t.acceleration !== undefined) {
      t.speed += t.acceleration
      t.speed *= FRICTION
      t.x -= t.speed

      if (Math.abs(t.speed) < 0.1) {
        t.speed = 0
        if (t.type === ANIM_THING || t.type === PLAYER_THING) {
          t.anim = 'idle'
        }
      } else {
        if (t.type === ANIM_THING || t.type === PLAYER_THING) {
          t.anim = 'walk'
        }
      }
    }
  }
}

export const getCollisions = () => collisions

let collisions: [number, number][] = []

const updateCollisions = () => {
  collisions = []

  for (let a = 0; a < things.length; a++) {
    const thingA = things[a]

    if (thingA.blocks || thingA.intersects) {
      for (let b = 0; b < things.length; b++) {
        const thingB = things[b]

        if (a !== b && (thingB.blocks || thingB.intersects)) {
          const imageA = getImageSource(thingA)
          const imageB = getImageSource(thingB)

          const xA = thingA.x
          const yA = thingA.y
          const wA = imageA.width
          const hA = imageA.height

          const xB = thingB.x
          const yB = thingB.y
          const wB = imageB.width
          const hB = imageB.height

          if (
            xA < xB + wB &&
            xA + wA > xB &&
            yA < yB + hB &&
            yA + hA > yB
          ) {
            collisions.push([a, b])
          }
        }
      }
    }
  }
}
