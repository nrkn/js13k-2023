import { LANDBORDER_PERC } from '../constants/config.js'
import { T_WATER_0 } from '../constants/tile-indices.js'
import { MapGrid, MapTile } from '../map/types.js'

import { 
  Point, PointPredicate, getIndex, getNeighboursCardinal, includesPt, ptDown, 
  ptLeft, ptRight, ptUp 
} from '../point.js'

import { pick, randInt, seq } from '../util.js'

/*
1. Place 4 points along the edges that will bound the island
2. Place a random amount of points within the island - these will be used to 
   place quests
3. Randomly join points that are near to each other until every point is joined.   
   Also join some of the already joined paths to other paths.
   Some paths will close off interior areas from the sea.
4. Make clearings around the quest points
5. Pick random points next to existing land points and add them to the land
   until the landmass reaches the desired size
6. Pick the leftmost land tile - this will be where the player starts.
7. For each of the closed off interior areas, randomly pick one of these biomes
   and fill it with:
   - Forest,
   - Meadow,
   - Mountains, or
   - Lake
8. Decoration step that adds sand around water, randomly places different 
   grass tiles, trees, rocks etc.
9. Clear original paths between quests to an empty land tile, as a visual clue 
   for the user when exploring   
10. Randomly place a different quest at each of the quest locations in the 
    following proportion, and place one of each quest type near to the player 
    start. Make the furthest location from the player the satellite.
    - Ruins 50%
    - Huts 25%
    - Portals 15%
    - None 10%
*/

export const createIsland = (width: number, height: number) => {
  const data: MapTile[] = seq(width * height, () => [T_WATER_0])

  const islandMap: MapGrid = [width, height, data]

  // todo - implement above - lol - easier than it sounds tho, done it a few 
  // times now

  const leftEdge = Math.floor( (width / 100) * LANDBORDER_PERC )
  const rightEdge = width - leftEdge
  const topEdge = Math.floor( (height / 100) * LANDBORDER_PERC )
  const bottomEdge = height - topEdge

  const topX = randInt( width )
  const bottomX = randInt( width )
  const leftY = randInt( height )
  const rightY = randInt( height )

  const startPoints: Point[] = [
    [topX, topEdge ],
    [rightEdge, rightY],
    [bottomX, bottomEdge],
    [leftEdge, leftY]
  ]

  console.log({ width, height, startPoints })
}

const stepTowards = (
  from: Point, to: Point,
  // chance we will ignore the best step and choose randomly
  drunk = 0
): Point => {
  const [x1, y1] = from
  const [x2, y2] = to

  let candidates = getNeighboursCardinal(from)

  if (Math.random() >= drunk) {
    candidates = []

    if (x2 > x1) {
      candidates.push(ptRight(from))
    }

    if (x2 < x1) {
      candidates.push(ptLeft(from))
    }

    if (y2 > y1) {
      candidates.push(ptDown(from))
    }

    if (y2 < y1) {
      candidates.push(ptUp(from))
    }

    if (candidates.length === 2) {
      candidates = [pick(candidates)]
    }
  }

  if (candidates.length === 0) return from

  return pick(candidates)
}

// pick an existing point, and pick one if its neighbours that isnt already in
// the list of points and is in bounds, try ten times to find a point with no neighbours and 
// then give up
const grow = (inb: PointPredicate, maxTries = 10) =>
  (existing: Point[]) => {
    if (existing.length === 0) return

    for (let tries = 0; tries < maxTries; tries++) {
      const current = pick(existing)

      const candidates = getNeighboursCardinal(current).filter(
        p => inb(p) && !includesPt(existing)(p)
      )

      if (candidates.length > 0) {
        const next = pick(candidates)
        existing.push(next)

        return
      }
    }
  }

const floodfill = (inb: PointPredicate) =>
  (
    grid: MapGrid,
    startX: number,
    startY: number,
    target: MapTile,
    replacement: MapTile
  ): void => {
    const [width, _height, data] = grid

    const stack: Point[] = [[startX, startY]]
    const seen: number[] = []

    while (stack.length) {
      const p = stack.pop()!
      const index = getIndex(width)(p)

      if (
        inb(p) &&
        data[index][0] === target[0] &&
        !seen[index]
      ) {
        data[index] = [...replacement]

        seen[index] = 1

        stack.push(...getNeighboursCardinal(p))
      }
    }
  }
