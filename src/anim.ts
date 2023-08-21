import { ANIM_THING, PLAYER_THING } from './const.js'
import { ImageSource, Thing } from './types.js'

export const getImageSource = ( t: Thing ) => {
  let image: ImageSource

  if ( t.type === ANIM_THING|| t.type === PLAYER_THING ) {
    const anim = t.image[t.anim]
    image = anim.frames[anim.frame]
  } else {
    image = t.image
  }

  return image
}
