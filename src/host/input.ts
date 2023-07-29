import { A_UP, A_DOWN, A_LEFT, A_RIGHT, A_EXIT } from '../constants/enum.js'

const actions: (1|0|undefined)[] = []

// todo: if player presses space or esc or return or e, A_EXIT

onkeydown = e => {
  if( e.keyCode === 87 || e.keyCode === 38 ) actions[ A_UP ] = 1
  if( e.keyCode === 83 || e.keyCode === 40 ) actions[ A_DOWN ] = 1
  if( e.keyCode === 65 || e.keyCode === 37 ) actions[ A_LEFT ] = 1
  if( e.keyCode === 68 || e.keyCode === 39 ) actions[ A_RIGHT ] = 1
  if(
    e.keyCode === 32 || // space
    e.keyCode === 13 || // return
    e.keyCode === 27 || // esc
    e.keyCode === 69    // e
  ){
    actions[ A_EXIT ] = 1
  }
}

onkeyup = e => {
  if( e.keyCode === 87 || e.keyCode === 38 ) actions[ A_UP ] = 0
  if( e.keyCode === 83 || e.keyCode === 40 ) actions[ A_DOWN ] = 0
  if( e.keyCode === 65 || e.keyCode === 37 ) actions[ A_LEFT ] = 0
  if( e.keyCode === 68 || e.keyCode === 39 ) actions[ A_RIGHT ] = 0
  if(
    e.keyCode === 32 || // space
    e.keyCode === 13 || // return
    e.keyCode === 27 || // esc
    e.keyCode === 69    // e
  ){
    actions[ A_EXIT ] = 0
  }
}

export const isUp = () => actions[ A_UP ]
export const isDown = () => actions[ A_DOWN ]
export const isLeft = () => actions[ A_LEFT ]
export const isRight = () => actions[ A_RIGHT ]
export const isExit = () => actions[ A_EXIT ]
// todo touch/mouse/gamepad(?)
