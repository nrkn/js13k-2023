import { TILESIZE } from '../constants/config.js'
import { CameraData } from './types.js'

export const updateCamera = (
  camCol: number, camRow: number, w: number, h: number 
): CameraData => {
  // the width and height in cols and rows to draw from
  let mapColsW = Math.ceil(w / TILESIZE)
  let mapRowsH = Math.ceil(h / TILESIZE)

  // ensure they are odd
  mapColsW = mapColsW % 2 ? mapColsW : mapColsW + 1
  mapRowsH = mapRowsH % 2 ? mapRowsH : mapRowsH + 1

  // ok now the step - we know they're odd so exactly half after -1
  const stepW = (mapColsW - 1) / 2
  const stepH = (mapRowsH - 1) / 2

  // given the player position, the row and col within map to start drawing from
  const mapCol = camCol - stepW
  const mapRow = camRow - stepH

  // and then the pixel offset, as centering the tile may leave eg partial tiles at
  // the edges - this is the pixel pos to start drawing to viewport from, so its
  // relative to viewport, not player or map
  const mapX = Math.floor((w / 2) - (TILESIZE / 2) - (stepW * TILESIZE))
  const mapY = Math.floor((h / 2) - (TILESIZE / 2) - (stepH * TILESIZE))

  return [mapColsW, mapRowsH, mapRow, mapCol, mapX, mapY]
}
