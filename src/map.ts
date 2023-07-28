export type GridData<T = number> = [
  width: number, height: number, data: T[]
]

export type MapTile = [tileIndex: number]

export type Map = GridData<MapTile>

// 75% grass and 25% trees
// grass is indices 3 thru 8 I think
// trees are 9 thru 12
export const potatoMap = (width: number, height: number): Map => {
  const data: MapTile[] = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const r = Math.random()
      
      const i = (
        Math.floor(Math.random() * (r < 0.25 ? 4 : 6)) +
        (r < 0.25 ? 9 : 3)
      )

      data.push([i])
    }
  }

  return [width, height, data]
}
