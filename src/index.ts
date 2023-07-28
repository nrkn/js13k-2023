import {
  FONTSIZE, LANDSCAPE, PORTRAIT, SQUARE, TILESIZE, VMIN
} from './const.js'

import { potatoMap } from './map.js'

declare const c: HTMLCanvasElement
declare let l: HTMLImageElement // loader

// we will likely move state to an array or functional pattern etc but this is 
// fine for now, don't golf too early
let orient = SQUARE
let vmax = VMIN // square

const resize = () => {
  orient = innerWidth > innerHeight ? LANDSCAPE : PORTRAIT

  vmax = Math.floor(
    (orient === LANDSCAPE ? innerWidth : innerHeight) /
    (orient === LANDSCAPE ? innerHeight : innerWidth) * VMIN
  )

  setCamera()
}

// the camera will track the player for now - we can decouple it later if we
// have time to add eg cutscenes where we want to pan and etc
//
// when we add smooth pixel movement we will add a playerX and playerY
let playerCol = 0
let playerRow = 0

// the width and height in cols and rows to draw from
let mapColsW = 0
let mapRowsH = 0
// given the player position, the row and col within map to start drawing from
let mapRow = 0
let mapCol = 0

// and then the pixel offset, as centering the tile may leave eg partial tiles at
// the edges - this is the pixel pos to start drawing to viewport from, so its
// relative to viewport, not player or map
let mapX = 0
let mapY = 0

const setCamera = () => {
  // debug - when game is running we will set these to somewhere in map,
  // but for now just the center tile 
  if (!playerCol && !playerRow) {
    playerCol = Math.floor(map[0] / 2)
    playerRow = Math.floor(map[1] / 2)
  }

  const w = orient === LANDSCAPE ? vmax : VMIN
  const h = orient === LANDSCAPE ? VMIN : vmax

  mapColsW = Math.ceil(w / TILESIZE)
  mapRowsH = Math.ceil(h / TILESIZE)

  // ensure they are odd
  mapColsW = mapColsW % 2 ? mapColsW : mapColsW + 1
  mapRowsH = mapRowsH % 2 ? mapRowsH : mapRowsH + 1

  // ok now the step - we know they're odd so exactly half after -1
  const stepW = (mapColsW - 1) / 2
  const stepH = (mapRowsH - 1) / 2

  mapCol = playerCol - stepW
  mapRow = playerRow - stepH

  mapX = Math.floor((w / 2) - (TILESIZE / 2) - (stepW * TILESIZE))
  mapY = Math.floor((h / 2) - (TILESIZE / 2) - (stepH * TILESIZE))
}

const ctx = c.getContext('2d')!

const tick = (_time: number) => {
  c.width = orient === LANDSCAPE ? vmax : VMIN
  c.height = orient === LANDSCAPE ? VMIN : vmax

  const [mw, mh, md] = map

  let dx = mapX
  let dy = mapY

  for (let row = mapRow; row < mapRow + mapRowsH; row++) {
    if (row < 0 || row >= mh) continue

    for (let col = mapCol; col < mapCol + mapColsW; col++) {
      if (col < 0 || col >= mw) continue

      const t = md[row * mw + col][0]

      drawTileAt(t, dx, dy)
      dx += TILESIZE
    }
    dx = mapX
    dy += TILESIZE
  }

  const t = 'RANGER'

  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i)

    drawChar(c, i, 0)
  }

  // now draw player
  drawSpriteAt(
    0, 
    Math.floor( c.width / 2 - TILESIZE / 2 ),
    Math.floor( c.height / 2 - TILESIZE / 2 )
  )

  requestAnimationFrame(tick)
}

let fontSprites: HTMLImageElement
let tileSprites: HTMLImageElement
let sprites: HTMLImageElement

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

const drawTileAt = (tileIndex: number, x: number, y: number) => {
  // our sprites start at 0
  // the sprite is TILESIZE high
  const i = tileIndex * TILESIZE

  ctx.drawImage(
    tileSprites,
    i, 0, TILESIZE, TILESIZE,
    x, y, TILESIZE, TILESIZE
  )
}

const drawSpriteAt = (tileIndex: number, x: number, y: number) => {
  // our sprites start at 0
  // the sprite is TILESIZE high
  const i = tileIndex * TILESIZE

  ctx.drawImage(
    sprites,
    i, 0, TILESIZE, TILESIZE,
    x, y, TILESIZE, TILESIZE
  )
}

const loadImg = (src: string, cb: () => void) => {
  l.onload = cb
  l.src = src
}

const start = () => {
  onresize = resize
  resize()
  requestAnimationFrame(tick)
}

loadImg('f.gif', () => {
  fontSprites = l.cloneNode(true) as HTMLImageElement

  loadImg('p.gif', () => {
    sprites = l.cloneNode(true) as HTMLImageElement

    loadImg('t.gif', () => {
      tileSprites = l.cloneNode(true) as HTMLImageElement

      console.log({ fontSprites, tileSprites })

      start()
    })
  })
})
