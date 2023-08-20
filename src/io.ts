import { ACCELERATION } from './const.js'
import { player } from './state.js'

export const keyDown = e => {
  if (e.key === 'ArrowLeft') {
    player.direction = -1
    player.acceleration = ACCELERATION
  } else if (e.key === 'ArrowRight') {
    player.direction = 1
    player.acceleration = -ACCELERATION
  }
}

export const keyUp = e => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    player.acceleration = 0
  }
}
