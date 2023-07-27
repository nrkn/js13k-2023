export type GridData<T = number> = [
  width: number, height: number, data: T[]
]

export type MapTile = [tileIndex: number]

export type Map = GridData<MapTile>

// 75% grass and 25% trees
// grass is indices 3 thru 6 I think
// trees are 7 thru 10
export const potatoMap = (width: number, height: number): Map => {
  const data: MapTile[] = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const r = Math.random()
      const i = ~~(Math.random() * 4) + (r < 0.25 ? 7 : 3)

      data.push([i])
    }
  }

  return [width, height, data]
}
