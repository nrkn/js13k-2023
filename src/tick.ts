import { draw } from './draw.js'
import { timer } from './state.js'
import { update } from './update.js'

export const tick = t => {
  if (!timer.startTime) {
    timer.startTime = t
    timer.lastTime = t
  }

  timer.elapsedTime = t - timer.startTime
  timer.deltaTime = t - timer.lastTime
  timer.lastTime = t

  update(t)
  draw(t)

  requestAnimationFrame(tick)
}
