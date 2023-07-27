import { LANDSCAPE, PORTRAIT, SQUARE, VMIN } from './const.js'

declare const c: HTMLCanvasElement

// might move state to an array but this is fine for now, don't golf too early
let orient = SQUARE
let vmax = VMIN // square

const r = () => {
  orient = innerWidth > innerHeight ? LANDSCAPE : PORTRAIT

  vmax = ~~(
    (orient === LANDSCAPE ? innerWidth : innerHeight) / 
    (orient === LANDSCAPE ? innerHeight : innerWidth) * VMIN
  )
}

const ctx = c.getContext('2d')!

const tick = (_time: number) => {
  c.width = orient === LANDSCAPE ? vmax : VMIN
  c.height = orient === LANDSCAPE ? VMIN : vmax

  for( let y = 0; y < c.height; y++ ) {
    for( let x = 0; x < c.width; x++ ) {
      // checkerboard white and black
      ctx.fillStyle = (x + y) % 2 ? '#fff' : '#000'
      ctx.fillRect(x, y, 1, 1)
    }
  }

  requestAnimationFrame(tick)
}

requestAnimationFrame(tick)

onresize = r
r()
