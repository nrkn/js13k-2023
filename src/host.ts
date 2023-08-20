import { vmin } from './const.js'

declare const c: HTMLCanvasElement

export const canvas = c

canvas.width = vmin
canvas.height = vmin

export const ctx = canvas.getContext('2d')!

export const resize = ( width = innerWidth, height = innerHeight ) => {
  const isLandscape = width > height

  const scale = isLandscape ? height / vmin : width / vmin

  canvas.width = Math.floor( width / scale )
  canvas.height = Math.floor( height / scale )
}

addEventListener('resize', () => resize() )
