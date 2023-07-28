export const loadImage = ( src: string ) => new Promise<HTMLImageElement>(
  resolve => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = src
  }
)
