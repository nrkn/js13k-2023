export const randInt = (exclMax: number) =>
  Math.floor(Math.random() * exclMax)

export const seq = <T>(length: number, cb: (i: number) => T) =>
  Array.from({ length }, (_v, k) => cb(k))

export const pick = <T>(arr: T[]) => arr[randInt(arr.length)]  
