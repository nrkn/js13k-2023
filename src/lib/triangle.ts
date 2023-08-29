import { Point } from '../types.js'
import { intPoint } from './point.js'

const area = (
  x1: number, y1: number, x2: number, y2: number, x3: number, y3: number
) =>
  Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)))

const pointInTriangleArea = (
  p: Point, a: Point, b: Point, c: Point
) => (
  area(a.x, a.y, b.x, b.y, c.x, c.y) ===
  area(p.x, p.y, b.x, b.y, c.x, c.y) +
  area(a.x, a.y, p.x, p.y, c.x, c.y) +
  area(a.x, a.y, b.x, b.y, p.x, p.y)
)

const pointInTriangleBarycentric = (
  p: Point, a: Point, b: Point, c: Point
): boolean => {
  const v0: Point = { x: c.x - a.x, y: c.y - a.y }
  const v1: Point = { x: b.x - a.x, y: b.y - a.y }
  const v2: Point = { x: p.x - a.x, y: p.y - a.y }

  const dot00 = v0.x * v0.x + v0.y * v0.y
  const dot01 = v0.x * v1.x + v0.y * v1.y
  const dot02 = v0.x * v2.x + v0.y * v2.y
  const dot11 = v1.x * v1.x + v1.y * v1.y
  const dot12 = v1.x * v2.x + v1.y * v2.y

  const invDenom = 1 / (dot00 * dot11 - dot01 * dot01)
  const u = (dot11 * dot02 - dot01 * dot12) * invDenom
  const v = (dot00 * dot12 - dot01 * dot02) * invDenom

  return (u >= 0) && (v >= 0) && (u + v < 1)
}

export const triangleFill = (
  a: Point, b: Point, c: Point,
  test = pointInTriangleArea
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

      if (test(p, a, b, c)) {
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
