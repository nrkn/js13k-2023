import { vh, vw } from './aspect-ratio.js'

declare const c: HTMLCanvasElement

const ctx = c.getContext('2d')!

export const drawAt = (
  sheet: HTMLImageElement,
  w: number, h: number,
  sx: number,
  dx: number, dy: number
) =>
  ctx.drawImage(
    sheet,
    sx, 0, w, h,
    dx, dy, w, h
  )


export const cls = () => {
  c.width = vw()
  c.height = vh()
}  
