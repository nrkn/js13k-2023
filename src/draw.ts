import { ANIM_THING } from './const.js'
import { canvas, ctx } from './host.js'
import { images, bgPosition, things, player } from './state.js'
import { ImageSource } from './types.js'

export const draw = _t => {
  canvas.width = canvas.width

  const cx = canvas.width / 2
  const cy = canvas.height / 2

  const drawTile = (
    image: ImageSource, offsetX: number, offsetY: number, 
    isStuckToBottom = false
  ) => {
    const imageOffsetX = image.width / -2
    let imageOffsetY = image.height / -2

    let drawX = Math.floor(offsetX + imageOffsetX + cx)
    let drawY = Math.floor(offsetY + imageOffsetY + cy)

    if (isStuckToBottom) {
      drawY = canvas.height - image.height
    }

    // Draw the main tile
    ctx.drawImage(image, drawX, drawY)

    // Extend to the left
    while (drawX > 0) {
      drawX -= image.width
      ctx.drawImage(image, drawX, drawY)
    }

    drawX = Math.floor(offsetX + imageOffsetX + cx) + image.width

    // Extend to the right
    while (drawX < canvas.width) {
      ctx.drawImage(image, drawX, drawY)
      drawX += image.width
    }
  }

  drawTile(images.skyImage, bgPosition.sky.x, bgPosition.sky.y)
  drawTile(images.mountainImage, bgPosition.mountain.x, bgPosition.mountain.y)

  // Drawing things
  for (const t of things) {
    let image: ImageSource

    if (t.type === ANIM_THING) {
      const anim = t.image[t.anim]
      image = anim.frames[anim.frame]
    } else {
      image = t.image
    }

    // Apply moveSpeed if present, else assume moveSpeed is 1 (i.e., move at the same speed as the player)
    const parallaxAdjustment = t.moveSpeed ? (1 - t.moveSpeed) * player.x : 0

    // Calculate the thing's position relative to the current view
    const tDrawX = Math.floor(t.x + parallaxAdjustment - player.x - image.width / 2 + cx)
    const tDrawY = canvas.height - image.height - images.groundImage.height + t.y // This assumes the thing sits just above the ground

    // Only draw the thing if it's within the canvas' view
    if (
      tDrawX + image.width > 0 &&
      tDrawX < canvas.width
    ) {
      ctx.save()
      
      if (t.direction === -1) {
        // Translate to the position where we want to place the image's pivot point (its center in this case).
        ctx.translate(tDrawX + image.width / 2, tDrawY + image.height / 2);

        // Flip the image horizontally.
        ctx.scale(-1, 1);

        // Since we've translated to the center of the image, we need to draw the image offset by half its width and height.
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
      } else {
        ctx.drawImage(image, tDrawX, tDrawY);
      }

      ctx.restore()

      // Check if the thing is intersecting with the player
      const pRight = cx + images.girlWalkFrames[player.frame].width / 2
      const pLeft = cx - images.girlWalkFrames[player.frame].width / 2
      const pTop = canvas.height - images.girlWalkFrames[player.frame].height - images.groundImage.height
      const pBottom = pTop + images.girlWalkFrames[player.frame].height

      const tRight = tDrawX + image.width
      const tLeft = tDrawX
      const tTop = tDrawY
      const tBottom = tTop + image.height

      const isIntersecting =
        pLeft < tRight &&
        pRight > tLeft &&
        pTop < tBottom &&
        pBottom > tTop;

      if (isIntersecting) {
        // Draw a red rectangle over the thing
        ctx.fillStyle = 'rgba(255, 0, 0, 0.05)'
        ctx.fillRect(tDrawX, tDrawY, image.width, image.height)
      }
    }
  }

  // ground after things so things can be offset behind it
  drawTile(images.groundImage, bgPosition.ground.x, bgPosition.ground.y, true)


  // player is fixed, everything else is relative
  const pOffsetX = images.girlWalkFrames[player.frame].width / -2
  const pOffsetY = canvas.height - images.girlWalkFrames[player.frame].height - images.groundImage.height

  ctx.save()

  if (player.direction === -1) {
    ctx.translate(cx * 2, 0)
    ctx.scale(player.direction, 1)
  }

  ctx.drawImage(
    images.girlWalkFrames[player.frame],
    Math.floor(pOffsetX + cx),
    Math.floor(pOffsetY)
  )

  ctx.restore()

  // let's show the current x position at top left
  ctx.fillStyle = 'white'
  ctx.font = '16px monospace'
  ctx.fillText(`x: ${Math.floor(player.x)}`, 10, 20)
}
