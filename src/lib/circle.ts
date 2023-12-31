import { Point } from '../types.js'
import { intPoint } from './point.js'

export const drawEllipse = (
  cx: number, cy: number, rx: number, ry: number
): Point[] => {
  cx |= 0
  cy |= 0
  rx |= 0
  ry |= 0

  let x = 0
  let y = ry
  let d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx)

  const points: Point[] = []

  const addPoint = (x: number, y: number) => points.push(intPoint(x, y))

  // Region 1
  while ((2 * ry * ry * x) < (2 * rx * rx * y)) {
    addPoint(cx + x, cy + y)
    addPoint(cx - x, cy + y)
    addPoint(cx + x, cy - y)
    addPoint(cx - x, cy - y)

    if (d1 < 0) {
      x++;
      d1 = d1 + (2 * ry * ry * x) + (ry * ry);
    } else {
      x++;
      y--;
      d1 = d1 + (2 * ry * ry * x) - (2 * rx * rx * y) + (ry * ry);
    }
  }

  let d2 = ((ry * ry) * (x + 0.5) * (x + 0.5)) + ((rx * rx) * (y - 1) * (y - 1)) - (rx * rx * ry * ry)

  // Region 2
  while (y >= 0) {
    addPoint(cx + x, cy + y)
    addPoint(cx - x, cy + y)
    addPoint(cx + x, cy - y)
    addPoint(cx - x, cy - y)

    if (d2 > 0) {
      y--
      d2 = d2 - (2 * rx * rx * y) + (rx * rx)
    } else {
      y--
      x++
      d2 = d2 + (2 * ry * ry * x) - (2 * rx * rx * y) + (rx * rx);
    }
  }
  return points
}

export const fillEllipse = (
  cx: number, cy: number, rx: number, ry: number
): Point[] => {
  cx |= 0
  cy |= 0
  rx |= 0
  ry |= 0

  const points: Point[] = []

  for (let x = -rx; x <= rx; x++) {
    let yLimit = Math.round(ry * Math.sqrt(1 - (x * x) / (rx * rx)))

    for (let y = -yLimit; y <= yLimit; y++) {  
      // Avoid drawing the spiky pixels
      if ((y === yLimit || y === -yLimit) && Math.abs(yLimit - y) < 0.5) {
        continue
      }  
      points.push(intPoint(cx + x, cy + y))
    }
  }

  return points
}

export const drawCircle = (
  cx: number, cy: number, r: number
) => drawEllipse(cx, cy, r, r)

export const fillCircle = (
  cx: number, cy: number, r: number
) => fillEllipse(cx, cy, r, r)
