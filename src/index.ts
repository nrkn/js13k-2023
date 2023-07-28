import { FONTSIZE, LANDSCAPE, PORTRAIT, SQUARE, TILESIZE, VMIN } from './const.js'
import { potatoMap } from './map.js'

declare const c: HTMLCanvasElement
declare let l: HTMLImageElement // loader

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

  // for( let y = 0; y < c.height; y++ ) {
  //   for( let x = 0; x < c.width; x++ ) {
  //     // checkerboard white and black
  //     ctx.fillStyle = (x + y) % 2 ? '#fff' : '#000'
  //     ctx.fillRect(x, y, 1, 1)
  //   }
  // }

  for (let row = 0; row < map[1]; row++) {
    for (let col = 0; col < map[0]; col++) {
      const t = map[2][row * map[0] + col][0]

      drawTile(t, col, row)

      console.log({ t, col, row })
    }
  }

  let i = 65

  for (let rows = 0; rows < ~~(c.height / FONTSIZE); rows++) {
    // only draw left half of screen
    for (let cols = 0; cols < ~~(c.width / FONTSIZE / 2); cols++) {
      drawChar(i, cols, rows)

      i++

      // repeat the uppercase alphabet and wrap around
      if (i > 90) i = 65
    }
  }

  requestAnimationFrame(tick)
}

let fontSprites: HTMLImageElement
let tileSprites: HTMLImageElement
let map = potatoMap(VMIN, VMIN)

// temp
console.log(map)

const drawChar = (charCode: number, col: number, row: number) => {
  // our sprite starts at 32
  // the sprite is FONTSIZE high
  const x = (charCode - 32) * FONTSIZE

  ctx.drawImage(
    fontSprites,
    x, 0, FONTSIZE, FONTSIZE,
    col * FONTSIZE, row * FONTSIZE, FONTSIZE, FONTSIZE
  )
}

const drawTile = (tileIndex: number, col: number, row: number) => {
  // our sprites start at 0
  // the sprite is TILESIZE high
  const x = tileIndex * TILESIZE

  ctx.drawImage(
    tileSprites,
    x, 0, TILESIZE, TILESIZE,
    col * TILESIZE, row * TILESIZE, TILESIZE, TILESIZE
  )
}

const loadImg = (src: string, cb: () => void) => {
  l.onload = cb
  l.src = src
}

const start = () => {
  onresize = r
  r()
  requestAnimationFrame(tick)
}

loadImg('f.gif', () => {
  fontSprites = l.cloneNode(true) as HTMLImageElement

  loadImg('t.gif', () => {
    tileSprites = l.cloneNode(true) as HTMLImageElement

    console.log({ fontSprites, tileSprites })

    start()
  })
})

