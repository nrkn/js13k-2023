import { Point } from '../types.js'
import { intPoint } from './point.js'

const area = (
  x1: number, y1: number, x2: number, y2: number, x3: number, y3: number
) =>
  Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)))

const pointInTriangle = (
  p: Point, a: Point, b: Point, c: Point
) => (
  area(a.x, a.y, b.x, b.y, c.x, c.y) ===
  area(p.x, p.y, b.x, b.y, c.x, c.y) +
  area(a.x, a.y, p.x, p.y, c.x, c.y) +
  area(a.x, a.y, b.x, b.y, p.x, p.y)
)

export const triangleFill = (
  a: Point, b: Point, c: Point
): Point[] => {
  a = intPoint(a.x, a.y)
  b = intPoint(b.x, b.y)
  c = intPoint(c.x, c.y)
  
  const points: Point[] = []

  const minX = Math.min(a.x, b.x, c.x)
  const maxX = Math.max(a.x, b.x, c.x)
  const minY = Math.min(a.y, b.y, c.y)
  const maxY = Math.max(a.y, b.y, c.y)

  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      const p = { x, y }

      if (pointInTriangle(p, a, b, c)) {
        points.push({ x: x | 0, y: y | 0 })
      }
    }
  }

  return points
}

// some points are duplicated, but who cares lol
export const quadFill = (
  a: Point, b: Point, c: Point, d: Point
): Point[] =>
  [...triangleFill(a, b, c), ...triangleFill(a, c, d)]
