import { Point } from '../types.js'

// export const intPoint = (x: number, y: number): Point => 
//   ({ x: x | 0, y: y | 0 })

export const intPoint = (x: number, y: number): Point => 
  ({ x: Math.round( x ), y: Math.round( y ) })
