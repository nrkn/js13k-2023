import { strokeLineCorners } from '../lib/bresenham.js'
import { fillEllipse } from '../lib/circle.js'
import { quadFill } from '../lib/triangle.js'

export const createTree = (
  width = 100,
  height = 100,
  leafColor = '#2e6d35',
  trunkColor = '#5b3138',
) => {
  const branches = Math.random() * 3 + 5

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')!

  const trunkWidth = Math.floor(width / 15)
  const trunkHeight = Math.floor(height / 2)

  const trunkPoints = quadFill(
    { x: (width - trunkWidth) / 2, y: height - trunkHeight },
    { x: (width + trunkWidth) / 2, y: height - trunkHeight },
    { x: (width + trunkWidth) / 2, y: height },
    { x: (width - trunkWidth) / 2, y: height },
  )

  ctx.fillStyle = trunkColor
  for (const p of trunkPoints) {
    ctx.fillRect(p.x, p.y, 1, 1)
  }

  const branchWidth = Math.floor( trunkWidth * 3 / 4 )
  const branchLength = Math.floor(height / 4)

  for (let i = 0; i < branches; i++) {
    const angle = (Math.random() * Math.PI / 2) - Math.PI / 4 + Math.PI / 2

    const startX = (width / 2) 
    const startY = height - trunkHeight
    const endX = startX + branchLength * Math.cos(angle)
    const endY = startY - branchLength * Math.sin(angle)

    const branchPoints = strokeLineCorners(startX, startY, endX, endY, branchWidth)
    const filledBranch = quadFill(...branchPoints)

    ctx.fillStyle = trunkColor
    for (const p of filledBranch) {
      ctx.fillRect(p.x, p.y, 1, 1)
    }

    // Draw the ellipse for leaves at the end of the branch
    const ellipsePoints = fillEllipse(endX, endY, branchWidth * 2, branchWidth )
    ctx.fillStyle = leafColor
    for (const p of ellipsePoints) {
      ctx.fillRect(p.x, p.y, 1, 1)
    }
  }

  return canvas
}
