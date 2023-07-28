export type GridData<T = number> = [
  width: number, height: number, data: T[]
]

export type Action = () => void
