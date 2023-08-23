import { strokeLineCorners } from '../lib/bresenham.js'
import { fillCircle } from '../lib/circle.js'
import { quadFill } from '../lib/triangle.js'
import { Parsed } from '../temp/svg-to-data.js'
import { AnimState, Point } from '../types.js'

const armBackColor = '#002a60'
const armFrontColor = '#0043e6'
const torsoColor = 'red'
const legFrontColor = '#f2de00'
const legBackColor= '#008a31'

export const drawPersonAnim = ( data: Parsed ) => {
  const { width, height } = data.bg

  const frameCount = data.frames.length
  const frameWidth = width / frameCount

  const frames: HTMLCanvasElement[] = []
  // to draw a line, get the corners with strokeLineCorners and a width of 2
  // and then fill with quadFill 
  // for leg, draw a line from hip to knee, knee to heel
  // for arm, draw a line from shoulder to elbow, elbow to hand
  // draw back, then torso, then front
  for ( let i = 0; i < frameCount; i++ ) {
    const frameCanvas = document.createElement( 'canvas' )
    frameCanvas.width = frameWidth
    frameCanvas.height = height

    const frameCtx = frameCanvas.getContext( '2d' )!

    const frame = data.frames[ i ]

    const {
      shoulderBack, elbowBack, handBack, hipBack, kneeBack, heelBack,
      shoulderFront, elbowFront, handFront, hipFront, kneeFront, heelFront, 
      torso
    } = frame

    const drawLimb = ( 
      color: string, from: Point, to: Point, width: number 
    ) => {
      const aPoints = fillCircle( from.x, from.y, width )
      const bPoints = fillCircle( to.x, to.y, width )

      const corners = strokeLineCorners( from.x, from.y, to.x, to.y, width )
      const points = [ ...aPoints, ...bPoints, ...quadFill( ...corners ) ]

      frameCtx.fillStyle = color

      for( const { x, y } of points ) {
        frameCtx.fillRect( x, y, 1, 1 )
      }
    }

    // draw back
    drawLimb( armBackColor, shoulderBack, elbowBack, 2 )
    drawLimb( armBackColor, elbowBack, handBack, 2 )
    drawLimb( legBackColor, hipBack, kneeBack, 2 )
    drawLimb( legBackColor, kneeBack, heelBack, 2 )

    // draw torso
    frameCtx.fillStyle = torsoColor
    const tpoints = quadFill(
      { x: torso.x, y: torso.y },
      { x: torso.x + torso.width, y: torso.y },
      { x: torso.x + torso.width, y: torso.y + torso.height },
      { x: torso.x, y: torso.y + torso.height }
    )

    for( const { x, y } of tpoints ) {
      frameCtx.fillRect( x, y, 1, 1 )
    }

    // draw front
    drawLimb( armFrontColor, shoulderFront, elbowFront, 2 )
    drawLimb( armFrontColor, elbowFront, handFront, 2 )
    drawLimb( legFrontColor, hipFront, kneeFront, 2  )
    drawLimb( legFrontColor, kneeFront, heelFront, 2 )

    frames.push( frameCanvas )
  }

  const animState: AnimState = {
    frames,
    frame: 0,
    duration: 1000
  }

  return animState
}
