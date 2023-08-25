import { jointColors } from '../data/colors.js'

import {
  GAnim, GAnimFrame,
  GANIM_BG, GANIM_FRAMES,

  GANIM_SHOULDER_FRONT, GANIM_ELBOW_FRONT, GANIM_WRIST_FRONT,

  GANIM_SHOULDER_BACK, GANIM_ELBOW_BACK, GANIM_WRIST_BACK,

  GANIM_HIP_FRONT, GANIM_KNEE_FRONT, GANIM_ANKLE_FRONT,

  GANIM_HIP_BACK, GANIM_KNEE_BACK, GANIM_ANKLE_BACK
} from '../data/types.js'

import { bresenhamLineFlatPoints } from '../lib/bresenham.js'
import { AnimState } from '../types.js'
import { interpolateRgb, rgbToHexColor } from './color.js'

const _neckHeight = 4 // we may make this a parameter later

const createFrameCanvas = (
  width: number, height: number
): HTMLCanvasElement => {
  const frameCanvas = document.createElement('canvas')
  frameCanvas.width = width
  frameCanvas.height = height

  return frameCanvas
}

type DrawnLimb = [
  points: number[],
  mid: [number, number, number]
]

const L_POINTS = 0
const L_MID = 1

const _drawLimb = (
  fromColor: [number, number, number], toColor: [number, number, number],
  x1: number, y1: number, x2: number, y2: number
): DrawnLimb => {
  const points = bresenhamLineFlatPoints(x1, y1, x2, y2)
  const mid = interpolateRgb(fromColor, toColor)

  return [points, mid]
}

const drawLimb = (
  frame: GAnimFrame, fromIndex: number, toIndex: number
) => {
  const x1 = frame[fromIndex * 2]
  const y1 = frame[fromIndex * 2 + 1]
  const x2 = frame[toIndex * 2]
  const y2 = frame[toIndex * 2 + 1]

  const fromColor = jointColors[fromIndex]
  const toColor = jointColors[toIndex]

  return _drawLimb(
    fromColor, toColor,
    x1, y1, x2, y2
  )
}

const drawInferredLines = (
  frame: GAnimFrame, neckHeight: number
): DrawnLimb[] => {
  const shoulder = drawLimb(frame, GANIM_SHOULDER_FRONT, GANIM_SHOULDER_BACK)
  const hip = drawLimb(frame, GANIM_HIP_FRONT, GANIM_HIP_BACK)

  const spineX1 = (
    frame[GANIM_SHOULDER_FRONT * 2] + frame[GANIM_SHOULDER_BACK * 2]
  ) / 2

  const spineY1 = (
    frame[GANIM_SHOULDER_FRONT * 2 + 1] + frame[GANIM_SHOULDER_BACK * 2 + 1]
  ) / 2

  const spineX2 = (
    frame[GANIM_HIP_FRONT * 2] + frame[GANIM_HIP_BACK * 2]
  ) / 2

  const spineY2 = (
    frame[GANIM_HIP_FRONT * 2 + 1] + frame[GANIM_HIP_BACK * 2 + 1]
  ) / 2

  const spine = _drawLimb(
    shoulder[L_MID], hip[L_MID],
    spineX1, spineY1, spineX2, spineY2
  )

  const neck = _drawLimb(
    shoulder[L_MID], spine[L_MID],
    spineX1, spineY1,
    // up 4px
    spineX1, spineY1 - neckHeight
  )

  return [shoulder, hip, spine, neck]
}

const renderLimb = (
  frameCtx: CanvasRenderingContext2D, limb: DrawnLimb
) => {
  frameCtx.fillStyle = rgbToHexColor(limb[L_MID])

  for (let i = 0; i < limb[L_POINTS].length; i += 2) {
    const x = limb[L_POINTS][i]
    const y = limb[L_POINTS][i + 1]

    frameCtx.fillRect(x, y, 1, 1)
  }
}

const drawBack = (frameCtx: CanvasRenderingContext2D, frame: GAnimFrame) => {
  renderLimb(frameCtx, drawLimb(frame, GANIM_SHOULDER_BACK, GANIM_ELBOW_BACK))
  renderLimb(frameCtx, drawLimb(frame, GANIM_ELBOW_BACK, GANIM_WRIST_BACK))
  renderLimb(frameCtx, drawLimb(frame, GANIM_HIP_BACK, GANIM_KNEE_BACK))
  renderLimb(frameCtx, drawLimb(frame, GANIM_KNEE_BACK, GANIM_ANKLE_BACK))
}

const drawInferred = (
  frameCtx: CanvasRenderingContext2D, frame: GAnimFrame, neckHeight: number
) => {
  // inferred
  const inferred = drawInferredLines(frame, neckHeight)

  for (const limb of inferred) {
    renderLimb(frameCtx, limb)
  }
}

const drawFront = (frameCtx: CanvasRenderingContext2D, frame: GAnimFrame) => {
  renderLimb(frameCtx, drawLimb(frame, GANIM_SHOULDER_FRONT, GANIM_ELBOW_FRONT))
  renderLimb(frameCtx, drawLimb(frame, GANIM_ELBOW_FRONT, GANIM_WRIST_FRONT))
  renderLimb(frameCtx, drawLimb(frame, GANIM_HIP_FRONT, GANIM_KNEE_FRONT))
  renderLimb(frameCtx, drawLimb(frame, GANIM_KNEE_FRONT, GANIM_ANKLE_FRONT))
}

const drawPoints = (frameCtx: CanvasRenderingContext2D, frame: GAnimFrame) => {
  const jointColorsArrLen = jointColors.length

  for (let j = 0; j < jointColorsArrLen; j++) {
    const color = jointColors[j]

    const x = frame[j * 2]
    const y = frame[j * 2 + 1]

    frameCtx.fillStyle = rgbToHexColor(color)
    frameCtx.fillRect(x, y, 1, 1)
  }
}

const drawLines = (
  frameCtx: CanvasRenderingContext2D,
  frame: GAnimFrame,
  isDrawInferred: boolean,
  isDrawBack: boolean,
  isDrawFront: boolean
) => {
  // back
  if (isDrawBack) drawBack(frameCtx, frame)
  // inferred
  if (isDrawInferred) drawInferred(frameCtx, frame, _neckHeight)
  // front
  if (isDrawFront) drawFront(frameCtx, frame)
}

export const drawPersonAnim = (
  data: GAnim,
  isDrawLines = true,
  isDrawPoints = true,
  isDrawInferred = true,
  isDrawBack = true,
  isDrawFront = true
) => {
  const bg = data[GANIM_BG]
  const animFrames = data[GANIM_FRAMES]

  const [width, height] = bg

  const frameCount = animFrames.length
  const frameWidth = width / frameCount

  const frames: HTMLCanvasElement[] = []

  for (let i = 0; i < frameCount; i++) {
    const frameCanvas = createFrameCanvas(frameWidth, height)
    const frameCtx = frameCanvas.getContext('2d')!
    const frame = animFrames[i]

    if (isDrawLines) {
      drawLines(frameCtx, frame, isDrawInferred, isDrawBack, isDrawFront)
    }

    // finally, draw a single pixel of each jointColor at the joint
    if (isDrawPoints) {
      drawPoints(frameCtx, frame)
    }

    frames.push(frameCanvas)
  }

  const animState: AnimState = {
    frames,
    frame: 0,
    duration: 1000
  }

  return animState
}
