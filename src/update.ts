import { 
  FRICTION, skyMovementSpeed, mountainMovementSpeed, groundMovementSpeed, ANIM_THING 
} from './const.js'

import { canvas } from './host.js'

import { things, timer, player, images, bgPosition } from './state.js'
import { ImageSource } from './types.js'

export const update = _t => {
  updatePlayer(_t)
  updateBg(_t)
  updateThings(_t)
}

const updateThings = _t => {
  for( const t of things ){
    if( t.type !== ANIM_THING ) continue

    const { elapsedTime } = timer
    const anim = t.image[ t.anim ]
    const { duration, frames } = anim
    const frameCount = frames.length

    const frame = Math.floor( elapsedTime / duration * frameCount ) % frameCount

    anim.frame = frame
  }
}

const updatePlayer = _t => {
  const cx = canvas.width / 2
  
  player.speed += player.acceleration
  player.speed *= FRICTION

  if (Math.abs(player.speed) < 0.1) {
    player.frame = 0
  } else {
    player.frame = (
      Math.floor(timer.elapsedTime * Math.abs(player.speed) / 500) %
      images.girlWalkFrames.length
    )
  }

  player.x -= player.speed

  let isIntersecting = false

  for (const t of things) {  
    if( !t.blocks ) continue

    let image: ImageSource

    if( t.type === ANIM_THING ){
      const anim = t.image[ t.anim ]
      image = anim.frames[ anim.frame]
    } else {
      image = t.image
    }

    const tDrawX = Math.floor(t.x - player.x - image.width / 2 + cx)
    const tDrawY = canvas.height - image.height - images.groundImage.height // This assumes the thing sits just above the ground

    const pRight = cx + images.girlWalkFrames[player.frame].width / 2
    const pLeft = cx - images.girlWalkFrames[player.frame].width / 2
    const pTop = canvas.height - images.girlWalkFrames[player.frame].height - images.groundImage.height
    const pBottom = pTop + images.girlWalkFrames[player.frame].height

    const tRight = tDrawX + image.width
    const tLeft = tDrawX
    const tTop = tDrawY
    const tBottom = tTop + image.height

    isIntersecting = (
      pLeft < tRight &&
      pRight > tLeft &&
      pTop < tBottom &&
      pBottom > tTop
    )

    if( isIntersecting ) break
  }

  if( isIntersecting ){
    player.x += player.speed
    player.speed = 0
  }
}

const updateBg = _t => {
  bgPosition.sky.x += player.speed * skyMovementSpeed
  bgPosition.mountain.x += player.speed * mountainMovementSpeed
  bgPosition.ground.x += player.speed * groundMovementSpeed

  // Reset sky position if it has completely moved out of view
  if (bgPosition.sky.x < -images.skyImage.width) {
    bgPosition.sky.x += images.skyImage.width
  }
  if (bgPosition.sky.x > images.skyImage.width) {
    bgPosition.sky.x -= images.skyImage.width
  }

  // Reset mountain position in a similar manner
  if (bgPosition.mountain.x < -images.mountainImage.width) {
    bgPosition.mountain.x += images.mountainImage.width
  }
  if (bgPosition.mountain.x > images.mountainImage.width) {
    bgPosition.mountain.x -= images.mountainImage.width
  }

  // Reset ground position in a similar manner
  if (bgPosition.ground.x < -images.groundImage.width) {
    bgPosition.ground.x += images.groundImage.width
  }
  if (bgPosition.ground.x > images.groundImage.width) {
    bgPosition.ground.x -= images.groundImage.width
  }
}
