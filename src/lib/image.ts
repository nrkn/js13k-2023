import { ImageSource } from '../types.js'

export const imageToFrames = (img: ImageSource, frameCount: number) => {
  const frameW = Math.floor(img.width / frameCount)
  const frameH = img.height

  const frames: ImageSource[] = []

  for (let i = 0; i < frameCount; i++) {
    const frameCanvas = document.createElement('canvas')
    frameCanvas.width = frameW
    frameCanvas.height = frameH

    const frameCtx = frameCanvas.getContext('2d')!

    frameCtx.drawImage(
      img, i * frameW, 0, frameW, frameH, 0, 0, frameW, frameH
    )

    frames.push(frameCanvas)
  }

  return frames
}

export const loadImage = (src: string) => new Promise<HTMLImageElement>(
  (resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = reject
  }
)

export const framesToCanvas = ( frames: ImageSource[] ) => {
  let width = 0
  let height = 0 

  for( const frame of frames ){
    width += frame.width
    height = Math.max( height, frame.height )
  }

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')!

  let x = 0

  for( const frame of frames ){
    ctx.drawImage( frame, x, 0 )
    x += frame.width
  }

  return canvas
}