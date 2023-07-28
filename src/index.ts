import { VMIN, TILESIZE, FONTSIZE } from './constants/config.js'
import { resize, vh, vw } from './host/aspect-ratio.js'
import { updateCamera } from './host/camera.js'
import { cls, drawAt } from './host/drawing.js'
import { loadImage } from './host/load-image.js'
import { potatoMap } from './map/potato.js'

const drawMap = ( _time: number ) => {
  const [
    mapColsW, mapRowsH, mapRow, mapCol, mapX, mapY
  ] = updateCamera(playerCol, playerRow, vw(), vh() )

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
}

const drawHud = ( _time: number ) => {
  // placeholder, just overlay a title top left
  const t = 'RANGER'

  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i)

    drawCharAt(c, i * FONTSIZE, 0)
  }
}

const drawSprites = ( _time: number ) => {
  // now draw player
  drawSpriteAt(
    0,
    Math.floor(vw() / 2 - TILESIZE / 2),
    Math.floor(vh() / 2 - TILESIZE / 2)
  )
}

const tick = (_time: number) => {
  // todo: update game logic here

  cls()

  drawMap(_time)
  drawHud(_time)
  drawSprites(_time)

  requestAnimationFrame(tick)
}

// the camera will track the player for now - we can decouple it later if we
// have time to add eg cutscenes where we want to pan and etc
//
// when we add smooth pixel movement we will add a playerX and playerY
let playerCol = 0
let playerRow = 0
let fontSprites: HTMLImageElement
let tileSprites: HTMLImageElement
let sprites: HTMLImageElement
let map = potatoMap(VMIN, VMIN)

const drawCharAt = (charCode: number, x: number, y: number) =>
  drawAt(fontSprites, FONTSIZE, FONTSIZE, (charCode - 32) * FONTSIZE, x, y)

const drawTileAt = (tileIndex: number, x: number, y: number) =>
  drawAt(tileSprites, TILESIZE, TILESIZE, tileIndex * TILESIZE, x, y)

const drawSpriteAt = (tileIndex: number, x: number, y: number) =>
  drawAt(sprites, TILESIZE, TILESIZE, tileIndex * TILESIZE, x, y)

const start = async () => {
  fontSprites = await loadImage('f.gif')
  sprites = await loadImage('p.gif')
  tileSprites = await loadImage('t.gif')

  // debug - when game is running we will set these to somewhere in map,
  // but for now just the center tile 
  if (!playerCol && !playerRow) {
    playerCol = Math.floor(map[0] / 2)
    playerRow = Math.floor(map[1] / 2)
  }

  onresize = resize
  resize()
  requestAnimationFrame(tick)
}

start().catch( console.error )
