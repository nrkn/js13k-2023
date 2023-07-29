import { VMIN, TILESIZE, FONTSIZE, ANIMTIME, MOVETIME } from './constants/config.js'
import { SCENE_MAP, SCENE_MESSAGE } from './constants/scenes.js'
import { SH_FONT, SH_SPRITES, SH_TILES } from './constants/sheet-indices.js'
import { T_BLOCKING_END, T_TREE_END, T_TREE_START } from './constants/tile-indices.js'
import { resize, vh, vw } from './host/aspect-ratio.js'
import { updateCamera } from './host/camera.js'
import { cls, drawAt } from './host/drawing.js'
import { isDown, isExit, isLeft, isRight, isUp } from './host/input.js'
import { loadImage } from './host/load-image.js'
import { potatoMap } from './map/potato.js'

declare const b: HTMLBodyElement

const drawMap = () => {
  const [
    mapColsW, mapRowsH, mapRow, mapCol, mapX, mapY
  ] = updateCamera(playerCol, playerRow, vw(), vh())

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

const formatTime = (v: number) => `${v}`.padStart(2, '0')
const formatDate = (v: number) => `${v}`.padEnd(4, ' ')
const dateStr = () => `${formatDate(days)}`
const timeStr = () => `${formatTime(hours)}:${formatTime(minutes)}`
const dateTimeStr = () => `DAY ${dateStr()} ${timeStr()}`

const drawHud = () => {
  // placeholder, just overlay a title top left
  const t = dateTimeStr()

  for (let i = 0; i < t.length; i++) {
    const c = t.charCodeAt(i)

    drawCharAt(c, i * FONTSIZE, 0)
  }
}

const drawSprites = () => {
  // now draw player
  drawSpriteAt(
    0 + animFrame,
    Math.floor(vw() / 2 - TILESIZE / 2),
    Math.floor(vh() / 2 - TILESIZE / 2)
  )
}

let days = 1
let hours = 16
let minutes = 0

// one minute
const advanceTimeStep = () => {
  minutes++

  if (minutes >= 60) {
    minutes = 0
    hours++
  }

  if (hours >= 24) {
    hours = 0
    days++
  }

  b.classList.toggle('n', !isDay())
}

const isDay = () => hours >= 6 && hours < 18

let firstTime = 0
let elapsed = 0
let animFrame: 0 | 1 = 0

const advance = (time: number) => {
  if (!firstTime) {
    firstTime = time
  }

  elapsed = time - firstTime

  animFrame = Math.floor(elapsed / ANIMTIME) % 2 as 0 | 1
}

let moveCooldown = 0
let moved = 0
let oc
let or

const playerUpdateMap = () => {
  const isMoveWarm = elapsed - moveCooldown > MOVETIME

  oc = playerCol
  or = playerRow

  if (isUp() && isMoveWarm) {
    playerRow--
    moveCooldown = elapsed
    moved = 1
  }

  if (isDown() && isMoveWarm) {
    playerRow++
    moveCooldown = elapsed
    moved = 1
  }

  if (isLeft() && isMoveWarm) {
    playerCol--
    moveCooldown = elapsed
    moved = 1
  }

  if (isRight() && isMoveWarm) {
    playerCol++
    moveCooldown = elapsed
    moved = 1
  }

  // we are currently using potato map, so trees are 9-12
  const mapTile = map[2][playerRow * map[0] + playerCol][0]

  if (mapTile <= T_BLOCKING_END) {
    playerCol = oc
    playerRow = or
    moved = 0
  }

  if (moved) advanceTimeStep()

  moved = 0 // otherwise we'll keep advancing time
}

const mapTick = () => {
  playerUpdateMap()
  // other logic - monster et al

  cls()

  drawMap()
  drawHud()
  drawSprites()
}

// might be nice to debounce this for 500ms so they can't accidentally skip
// - consider later when we're spending our bytes
const playerUpdateMessage = () => {
  if (isExit()) {
    scene = SCENE_MAP
  }
}

const messageTick = () => {
  if (message.length === 0) {
    scene = SCENE_MAP
  }

  // we are letting it fall through, as it doesn't matter that these are run
  // and it's cheaper for both bytes and perf not to use else, or early return

  playerUpdateMessage()

  cls()

  const hRows = Math.floor(vh() / FONTSIZE)
  const hCols = Math.floor(vw() / FONTSIZE)

  let dy = Math.floor((hRows - message.length) / 2) * FONTSIZE

  for (let row = 0; row < message.length; row++) {
    const t = message[row]

    for (let col = 0; col < t.length; col++) {
      const c = t.charCodeAt(col)

      const dx = Math.floor((hCols - t.length) / 2) * FONTSIZE + col * FONTSIZE

      drawCharAt(c, dx, dy)
    }

    dy += FONTSIZE
  }
}

let scene = SCENE_MESSAGE

let message: string[] = [
  'Lost contact with',
  'RANGER. Take boat',
  'and investigate.'
]

const tick = (time: number) => {
  advance(time)

  if (scene === SCENE_MAP) {
    mapTick()
  }

  if (scene === SCENE_MESSAGE) {
    messageTick()
  }

  requestAnimationFrame(tick)
}

// the camera will track the player for now - we can decouple it later if we
// have time to add eg cutscenes where we want to pan and etc
//
// when we add smooth pixel movement we will add a playerX and playerY
let playerCol = 0
let playerRow = 0
let sheet: HTMLImageElement
let map = potatoMap(VMIN, VMIN)

const drawCharAt = (charCode: number, x: number, y: number) =>
  drawAt(
    sheet,
    FONTSIZE, FONTSIZE,
    (charCode - 32) * FONTSIZE, SH_FONT,
    x, y
  )

const drawTileAt = (tileIndex: number, x: number, y: number) =>
  drawAt(
    sheet,
    TILESIZE, TILESIZE,
    tileIndex * TILESIZE, SH_TILES,
    x, y
  )

// todo we now have masks instead of alpha  
const drawSpriteAt = (tileIndex: number, x: number, y: number) =>
  drawAt(
    sheet,
    TILESIZE, TILESIZE,
    tileIndex * TILESIZE, SH_SPRITES,
    x, y
  )

const start = async () => {
  sheet = await loadImage('a.png')

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

start().catch(console.error)
