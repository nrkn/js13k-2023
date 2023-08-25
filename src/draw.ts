import { getImageSource } from './anim.js'
import {
  GROUND_HEIGHT,
  PLAYER_THING, TILE_BOTTOM, TILE_CENTERED
} from './const.js'

import { canvas, ctx } from './host.js'
import { things, player } from './state.js'

export const draw = _t => {
  canvas.width = canvas.width

  const cx = canvas.width / 2
  const cy = canvas.height / 2

  // Drawing things
  for (const t of things) {
    const image = getImageSource(t)

    // Apply moveSpeed if present, else assume moveSpeed is 1 (i.e., move at 
    // the same speed as the player)
    const parallaxAdjustment = t.moveSpeed ? (1 - t.moveSpeed) * player.x : 0

    let tDrawX = Math.floor(
      t.x + parallaxAdjustment - player.x - image.width / 2 + cx
    )

    let tDrawY: number

    if (t.tiling === TILE_BOTTOM) {
      tDrawY = canvas.height - image.height
    } else if (t.tiling === TILE_CENTERED) {
      tDrawY = cy - image.height / 2 + t.y
    } else {
      // default case
      tDrawY = canvas.height - image.height - GROUND_HEIGHT + t.y
    }

    if (t.type === PLAYER_THING) {
      tDrawX = cx - image.width / 2
      tDrawY = canvas.height - image.height - GROUND_HEIGHT
    }

    const drawThingImage = (x: number, y: number) => {
      ctx.save()

      if (t.direction === -1) {
        ctx.translate(x + image.width, y)
        ctx.scale(-1, 1)
        ctx.drawImage(image, 0, 0)
      } else {
        ctx.drawImage(image, x, y)
      }

      ctx.restore()
    }

    // Only draw the thing if it's within the canvas' view
    // tiled are always inside the view
    if (t.tiling || (tDrawX + image.width > 0 && tDrawX < canvas.width)) {
      drawThingImage(tDrawX, tDrawY)

      if (t.tiling) {
        // Extend to the left
        let leftTileX = tDrawX - image.width
        while (leftTileX + image.width > 0) {
          drawThingImage(leftTileX, tDrawY)
          leftTileX -= image.width
        }

        // Extend to the right
        let rightTileX = tDrawX + image.width
        while (rightTileX < canvas.width) {
          drawThingImage(rightTileX, tDrawY)
          rightTileX += image.width
        }
      }
    }
  }

  ctx.fillStyle = 'white'
  ctx.font = '10px monospace'
  ctx.fillText(`x: ${player.x.toFixed(2)}`, 4, 12 )
  ctx.fillText(`speed: ${Math.abs(player.speed).toFixed(2)}`, 4, 24 )
}
