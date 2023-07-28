import { VMIN } from '../constants/config.js'
import { SQUARE, LANDSCAPE, PORTRAIT } from '../constants/enum.js'

let _orient = SQUARE
let _vmax = VMIN // square

export const resize = () => {
  _orient = innerWidth > innerHeight ? LANDSCAPE : PORTRAIT

  _vmax = Math.floor(
    (_orient === LANDSCAPE ? innerWidth : innerHeight) /
    (_orient === LANDSCAPE ? innerHeight : innerWidth) * VMIN
  )
}

export const vo = () => _orient
export const vw = () => _orient === LANDSCAPE ? _vmax : VMIN
export const vh = () => _orient === LANDSCAPE ? VMIN : _vmax
