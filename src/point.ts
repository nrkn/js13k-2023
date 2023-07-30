export type Point = [x: number, y: number]
export type Size = [width: number, height: number]
export type PointPredicate = (p: Point) => boolean

export type PtAction = (p: Point) => void
export const isInBounds = ([width, height]: Size) =>
  ([x, y]: Point) =>
    x >= 0 && x < width && y >= 0 && y < height

export const getIndex = (width: number) =>
  ([x, y]: Point) => y * width + x

export const ptsEq = ( a: Point, b: Point ) => 
  a[0] === b[0] && a[1] === b[1]

export const ptUp = ([x, y]: Point): Point => [x, y - 1]
export const ptDown = ([x, y]: Point): Point => [x, y + 1]
export const ptLeft = ([x, y]: Point): Point => [x - 1, y]
export const ptRight = ([x, y]: Point): Point => [x + 1, y] 
  
export const ptUpLeft = ([x, y]: Point): Point => [x - 1, y - 1]
export const ptUpRight = ([x, y]: Point): Point => [x + 1, y - 1]
export const ptDownLeft = ([x, y]: Point): Point => [x - 1, y + 1]
export const ptDownRight = ([x, y]: Point): Point => [x + 1, y + 1]

export const getNeighboursCardinal = ([x, y]: Point): Point[] => [
  ptUp([x, y]),
  ptDown([x, y]),
  ptLeft([x, y]),
  ptRight([x, y])
]

export const getNeighboursAll = ([x, y]: Point): Point[] => [
  ptUp([x, y]),
  ptDown([x, y]),
  ptLeft([x, y]),
  ptRight([x, y]),
  ptUpLeft([x, y]),
  ptUpRight([x, y]),
  ptDownLeft([x, y]),
  ptDownRight([x, y])
]

export const includesPt = ( pts: Point[] ) => ( p: Point ) =>
  pts.some( e => ptsEq( e, p ) )
