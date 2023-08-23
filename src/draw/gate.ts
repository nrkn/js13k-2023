import { strokeLineCorners } from '../lib/bresenham.js'
import { quadFill, triangleFill } from '../lib/triangle.js'

export const createGate = (
  width = 32,
  height = 64,
  verticalBars = 4,
  horizontalBars = 2,
  gateColor = '#333333'
) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')!

  // ok - distribute the vertical bars so each is in the center of eg if 4, a quarter of the width, if 8, an eighth of the width etc
  // same for vertical
  // and draw a triangle for a spike on the top of each

  type Line = { x1: number, y1: number, x2: number, y2: number }

  const verts: Line[] = []

  const vertWidth = Math.floor(width / verticalBars)

  for (let i = 0; i < verticalBars; i++) {
    let x1 = i * vertWidth + ( vertWidth / 2 )
    let x2 = x1
    let y1 = 0
    let y2 = height

    x1 += Math.random() * 5 - 3
    x2 += Math.random() * 5 - 3
    y1 += Math.random() * 3
    y2 -= Math.random() * 3

    verts.push({ x1: x1, y1, x2: x1, y2 })
  }

  const horizs: Line[] = []

  const horizHeight = Math.floor(height / horizontalBars)

  for (let i = 0; i < horizontalBars; i++) {
    let x1 = 0
    let x2 = width
    let y1 = i * horizHeight + ( horizHeight / 2 )
    let y2 = y1

    x1 += Math.random() * 3
    x2 -= Math.random() * 3
    y1 += Math.random() * 5 - 3
    y2 += Math.random() * 5 - 3

    horizs.push({ x1, y1, x2, y2 })
  }

  const drawLine = (line: Line) => {
    const corners = strokeLineCorners(line.x1, line.y1, line.x2, line.y2, 3 )
    const pts = quadFill(...corners)

    for (const { x, y } of pts) {
      ctx.fillRect(x, y, 1, 1)
    }
  }

  ctx.fillStyle = gateColor

  for (const line of verts) {
    drawLine(line)

    const triPts = triangleFill(
      { x: line.x1 - 4, y: line.y1 - 8 },
      { x: line.x1 + 4, y: line.y1 - 8 },
      { x: line.x1, y: line.y1 }
    )

    for (const { x, y } of triPts) {
      ctx.fillRect(x, y, 1, 1)
    }
  }

  for (const line of horizs) {
    drawLine(line)
  }

  return canvas
}