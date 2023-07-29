import { 
  T_GRASS_SIZE, T_GRASS_START, T_TREE_SIZE, T_TREE_START 
} from '../constants/tile-indices.js'

import { MapTile, MapGrid } from './types.js'

// 75% grass and 25% trees
// grass is indices 3 thru 8 I think
// trees are 9 thru 12
export const potatoMap = (width: number, height: number): MapGrid => {
  const data: MapTile[] = []

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const r = Math.random()
      
      const isGrass = r < 0.75

      const offset = isGrass ? T_GRASS_START : T_TREE_START
      const size = isGrass ? T_GRASS_SIZE : T_TREE_SIZE
      const variant = Math.floor(Math.random() * size) + offset

      data.push([variant])
    }
  }

  return [width, height, data]
}
