import { FONTSIZE, LANDSCAPE, PORTRAIT, SQUARE, VMIN } from './const.js'

declare const c: HTMLCanvasElement
declare const l: HTMLImageElement // loader

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

  for( let rows = 0; rows < ~~( c.height / FONTSIZE ); rows++ ) {
    // only draw left half of screen
    for( let cols = 0; cols < ~~( c.width / FONTSIZE / 2 ); cols++ ) {
      const charsInFont = ~~( fontSprite.width / FONTSIZE )
      const charCode = ~~(Math.random() * charsInFont) + 32

      drawChar(charCode, cols, rows)
    }
  }

  requestAnimationFrame(tick)
}

let fontSprite: HTMLImageElement

const drawChar = (charCode: number, col: number, row: number) => {
  // our sprite starts at 32
  charCode -= 32

  // the sprite is FONTSIZE high
  const x = charCode * FONTSIZE

  ctx.drawImage(
    fontSprite,
    x, 0, FONTSIZE, FONTSIZE,
    col * FONTSIZE, row * FONTSIZE, FONTSIZE, FONTSIZE
  )
}

const start = () => {
  fontSprite = l.cloneNode(true) as HTMLImageElement
  onresize = r
  r()
  requestAnimationFrame(tick)    
}

l.onload = start
l.src = 'f.gif'
