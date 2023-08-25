export const GANIM_BG = 0
export const GANIM_FRAMES = 1

export const GANIM_SHOULDER_FRONT = 0
export const GANIM_ELBOW_FRONT = 1
export const GANIM_WRIST_FRONT = 2
export const GANIM_SHOULDER_BACK = 3
export const GANIM_ELBOW_BACK = 4
export const GANIM_WRIST_BACK = 5
export const GANIM_HIP_FRONT = 6
export const GANIM_KNEE_FRONT = 7
export const GANIM_ANKLE_FRONT = 8
export const GANIM_HIP_BACK = 9
export const GANIM_KNEE_BACK = 10
export const GANIM_ANKLE_BACK = 11

// actually we need X and Y for each
export const GANIM_SHOULDER_FRONT_X = 0
export const GANIM_SHOULDER_FRONT_Y = 1
export const GANIM_ELBOW_FRONT_X = 2
export const GANIM_ELBOW_FRONT_Y = 3
export const GANIM_WRIST_FRONT_X = 4
export const GANIM_WRIST_FRONT_Y = 5
export const GANIM_SHOULDER_BACK_X = 6
export const GANIM_SHOULDER_BACK_Y = 7
export const GANIM_ELBOW_BACK_X = 8
export const GANIM_ELBOW_BACK_Y = 9
export const GANIM_WRIST_BACK_X = 10
export const GANIM_WRIST_BACK_Y = 11
export const GANIM_HIP_FRONT_X = 12
export const GANIM_HIP_FRONT_Y = 13
export const GANIM_KNEE_FRONT_X = 14
export const GANIM_KNEE_FRONT_Y = 15
export const GANIM_ANKLE_FRONT_X = 16
export const GANIM_ANKLE_FRONT_Y = 17
export const GANIM_HIP_BACK_X = 18
export const GANIM_HIP_BACK_Y = 19
export const GANIM_KNEE_BACK_X = 20
export const GANIM_KNEE_BACK_Y = 21
export const GANIM_ANKLE_BACK_X = 22
export const GANIM_ANKLE_BACK_Y = 23

export type GAnimBg = [ w: number, h: number ]
export type GAnimFrame = number[] // we could go hard and tuple it as [ number, number etc * 24 ] but lol nope

export type GAnim = [ bg: GAnimBg, frames: GAnimFrame[] ]
