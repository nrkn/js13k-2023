import { loadAssets } from './lib/state/assets.js'

declare const b: HTMLBodyElement
declare const c: HTMLCanvasElement

const ctx = c.getContext('2d')!

const start = async () => {
  const assets = await loadAssets()

  for( const key in assets ){
    const asset = assets[key]

    if( Array.isArray(asset) ){
      asset.forEach( (frame, i) => {
        ctx.drawImage(frame, i * 64, 0)
      })
    } else {
      ctx.drawImage(asset, 0, 0)
    }
  }
}

start().catch(console.error)
