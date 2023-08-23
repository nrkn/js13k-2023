import { quadFill, triangleFill } from '../lib/triangle.js'

export const createGround = (
  width = 64,
  height = 16,
  spikes = 8,
  grassColor = '#4f942d',
  dirtColor = '#874718',
) => {
  const canvas = document.createElement( 'canvas' )
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext( '2d' )!

  const third = Math.floor( height / 3 )  
  const twoThirds = Math.floor( height * 2 / 3 )

  const spikeWidth = Math.floor( width / spikes )

  const basePoints = quadFill(
    { x: 0, y: 0 },
    { x: width - 1, y : 0 },
    { x: width - 1, y: height - 1 },
    { x: 0, y: height - 1 },
  )

  ctx.fillStyle = dirtColor

  for( const p of basePoints ) {    
    ctx.fillRect( p.x, p.y, 1, 1 )
  }

  const topPoints = quadFill( 
    { x: 0, y: 0 },
    { x: width - 1, y: 0 },
    { x: width - 1, y: third },
    { x: 0, y: third },
  )

  ctx.fillStyle = grassColor

  for( const p of topPoints ) {
    ctx.fillRect( p.x, p.y, 1, 1 )
  }

  // now draw spikes (triangles) of grass, with the wide side at the top, 
  // against the existing 1/3 grass, and the point at 2/3, against the dirt
  
  for( let i = 0; i < spikes; i++ ){
    const x = i * spikeWidth
    const y = third

    const points = triangleFill(
      { x, y },
      { x: x + spikeWidth - 1, y },
      { x: x + spikeWidth / 2, y: twoThirds }
    )

    for( const p of points ) {
      ctx.fillRect( p.x, p.y, 1, 1 )
    }
  }

  return canvas
}