import { Point } from '../types.js'
import { intPoint } from './point.js'

export const bresenhamLine = (
  x1: number, y1: number,
  x2: number, y2: number
): Point[] => {
  x1 |= 0
  y1 |= 0
  x2 |= 0
  y2 |= 0

  const points: Point[] = []

  const dx = Math.abs(x2 - x1)
  const dy = Math.abs(y2 - y1)

  const sx = x1 < x2 ? 1 : -1
  const sy = y1 < y2 ? 1 : -1

  let err = dx - dy

  while (true) {
    points.push({ x: x1, y: y1 })

    if (x1 === x2 && y1 === y2) break

    const e2 = 2 * err

    if (e2 > -dy) {
      err -= dy
      x1 += sx
    }

    if (e2 < dx) {
      err += dx
      y1 += sy
    }
  }

  return points
}


export const bresenhamLineFlatPoints = (
  x1: number, y1: number,
  x2: number, y2: number
): number[] => {
  x1 |= 0
  y1 |= 0
  x2 |= 0
  y2 |= 0

  const points: number[] = []

  const dx = Math.abs(x2 - x1)
  const dy = Math.abs(y2 - y1)

  const sx = x1 < x2 ? 1 : -1
  const sy = y1 < y2 ? 1 : -1

  let err = dx - dy

  while (true) {
    points.push(x1, y1)

    if (x1 === x2 && y1 === y2) break

    const e2 = 2 * err

    if (e2 > -dy) {
      err -= dy
      x1 += sx
    }

    if (e2 < dx) {
      err += dx
      y1 += sy
    }
  }

  return points
}

export const strokeLineCorners = (
  x1: number, y1: number,
  x2: number, y2: number,
  width: number
): [Point, Point, Point, Point] => {
  x1 |= 0
  y1 |= 0
  x2 |= 0
  y2 |= 0

  const dx = x2 - x1
  const dy = y2 - y1

  const angle = Math.atan2(dy, dx)

  const halfWidth = width / 2

  // top right (nb it may not be actual TR, but so long as order is maintained)
  const x3 = x1 + Math.cos(angle - Math.PI / 2) * halfWidth
  const y3 = y1 + Math.sin(angle - Math.PI / 2) * halfWidth

  // top left
  const x4 = x1 + Math.cos(angle + Math.PI / 2) * halfWidth
  const y4 = y1 + Math.sin(angle + Math.PI / 2) * halfWidth

  // bottom left
  const x5 = x2 + Math.cos(angle + Math.PI / 2) * halfWidth
  const y5 = y2 + Math.sin(angle + Math.PI / 2) * halfWidth

  // bottom right
  const x6 = x2 + Math.cos(angle - Math.PI / 2) * halfWidth
  const y6 = y2 + Math.sin(angle - Math.PI / 2) * halfWidth

  // return in clockwise order from "top left" 
  return [
    intPoint(x4, y4),
    intPoint(x3, y3),
    intPoint(x6, y6),
    intPoint(x5, y5)
  ]
}
