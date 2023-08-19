import { SourceImage } from './types.js'

export const loadImage = (url: string) =>
  new Promise<HTMLImageElement>(
    (resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
      image.src = url;
    }
  )

export const imageToFrames = (
  sourceImage: SourceImage, 
  frameCount: number 
) => {
  const frameW = Math.floor(sourceImage.width / frameCount)
  const frameH = sourceImage.height

  const frames: SourceImage[] = []

  for (let i = 0; i < frameCount; i++) {
    const frameCanvas = document.createElement('canvas')
    frameCanvas.width = frameW
    frameCanvas.height = frameH

    const frameCtx = frameCanvas.getContext('2d')!

    frameCtx.drawImage(
      sourceImage, i * frameW, 0, frameW, frameH, 0, 0, frameW, frameH
    )

    frames.push(frameCanvas)
  }

  return frames
}  
