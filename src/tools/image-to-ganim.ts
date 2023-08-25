import { fromPng } from '@rgba-image/png'
import { readFile, writeFile } from 'fs/promises'
import { GAnim, GAnimFrame } from '../data/types.js'
import { jointColors } from '../data/colors.js'

const ignoreColor = [ 0, 255, 255 ]

const imageToGanim = async ( path: string, frameCount: number ) => {
  const bytes = await readFile( path )
  const imageData = fromPng( bytes )
  const frameWidth = imageData.width / frameCount
  const frameHeight = imageData.height

  const frames: GAnimFrame[] = []  

  const frameToGanimFrame = ( index: number ) => {
    const frame: GAnimFrame = []

    for( let y = 0; y < frameHeight; y++ ){
      for( let x = 0; x < frameWidth; x++ ){
        const sx = x + index * frameWidth
        const i = ( y * imageData.width + sx ) * 4
        const r = imageData.data[i]
        const g = imageData.data[i+1]
        const b = imageData.data[i+2]

        if( r === ignoreColor[0] && g === ignoreColor[1] && b === ignoreColor[2] ) continue
        
        const colorIndex = jointColors.findIndex( color => {
          return color[0] === r && color[1] === g && color[2] === b
        })

        if( colorIndex === -1 ) continue

        const xIndex = colorIndex * 2
        const yIndex = xIndex + 1

        frame[ xIndex ] = x
        frame[ yIndex ] = y
      }
    }

    // make sure the frame defined all 12 points

    if( frame.length !== 24 ) 
      throw Error( `frame ${index} has ${frame.length} joints` )

    for( let i = 0; i < 24; i++ ){
      if( typeof frame[ i ] !== 'number' ) 
        throw Error( `frame ${index} joint ${i} is not a number` )
    }

    return frame
  }

  for( let i = 0; i < frameCount; i++ ){
    frames.push( frameToGanimFrame( i ) )
  }

  const anim: GAnim = [
    [ imageData.width, imageData.height ],
    frames
  ]

  return anim
}

const start = async () => {
  const inPath = './data/junk/new-idle.png'
  const outPath = './data/junk/new-idle.json'

  const anim = await imageToGanim( inPath, 4 )

  await writeFile( outPath, JSON.stringify( anim, null, 2 ) )
}

start().catch( console.error )