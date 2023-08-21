import { fillEllipse } from '../lib/circle.js'

export const createSky = (
  width = 800, height = 300,
  numClouds = 10,
  skyColor = '#33d5fe', cloudColor = '#caebfb',
  minWidth = 20, deltaWidth = 40,
  minHeight = 10, deltaHeight = 20
) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!

  // Fill the sky
  ctx.fillStyle = skyColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < numClouds; i++) {
    const cloudX = Math.random() * canvas.width
    const cloudY = (Math.random() * canvas.height) / 2
    const ellipsesInCloud = 3 + Math.floor(Math.random() * 3)   

    for (let j = 0; j < ellipsesInCloud; j++) {
      const rx = minWidth + Math.random() * deltaWidth
      const ry = minHeight + Math.random() * deltaHeight
      const offsetX = (Math.random() - 0.5) * deltaWidth
      const offsetY = (Math.random() - 0.5) * deltaHeight

      const cloudPixels = fillEllipse(cloudX + offsetX, cloudY + offsetY, rx, ry)
      ctx.fillStyle = cloudColor
      cloudPixels.forEach(({ x, y }) => {               
        // x and y may be negative or > canvas.width/height, wrap them around, it's a tiling image
        x = (x + canvas.width) % canvas.width
        y = (y + canvas.height) % canvas.height
        
        ctx.fillRect(x, y, 1, 1)
      })
    }
  }

  return canvas
}
