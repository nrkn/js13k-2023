import { quadFill, triangleFill } from '../lib/triangle.js'

export const createMountains = (
  width = 800, height = 300,
  farColor = '#a4b1bd',
  medColor = '#628099',
  nearColor = '#1f65a1',
  farMaxHeight = 0.5,
  medMaxHeight = 0.4,
  nearMaxHeight = 0.3
) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!

  const generateMountainRange = (color: string, maxHeightFactor: number, variance: number) => {
    const baseHeight = height * maxHeightFactor;
    let lastHeight = baseHeight + (Math.random() * variance - variance / 2);
  
    for (let x = 1; x < width; x++) {
      // Random walk for height changes
      let change = (Math.random() * variance - variance / 2);
      
      // If the mountain height is near its maximum, increase the likelihood of it descending
      if (lastHeight > baseHeight + maxHeightFactor * height - variance) {
        change = Math.abs(change) * -1; // Force a decrease
      }
  
      let mountainHeight = lastHeight + change;
      
      // Clamp mountainHeight
      mountainHeight = Math.min(baseHeight + maxHeightFactor * height, mountainHeight); // Max value
      mountainHeight = Math.max(height * 0.1, mountainHeight); // Min value, assuming 10% of height is the minimum
  
      const mountainTop = height - mountainHeight;
      const lastMountainTop = height - lastHeight;
  
      const quadPoints = quadFill(
        { x: x-1, y: lastMountainTop },
        { x: x, y: mountainTop },
        { x: x, y: height },
        { x: x-1, y: height }
      );
  
      ctx.fillStyle = color;
      quadPoints.forEach(({ x, y }) => {
        x = (x + canvas.width) % canvas.width
        y = (y + canvas.height) % canvas.height

        ctx.fillRect(x, y, 1, 1)
      });
  
      lastHeight = mountainHeight;
    }
  }

  // Now, generate the three mountain ranges
  generateMountainRange(farColor, farMaxHeight, 15);
  generateMountainRange(medColor, medMaxHeight, 10);
  generateMountainRange(nearColor, nearMaxHeight, 5);

  return canvas;
}

const fade = ( t: number ) => t * t * t * ( t * ( t * 6 - 15 ) + 10 )

const lerp = ( a: number, b: number, x: number ) => a + x * ( b - a )

const grad = ( hash: number, x: number ) => {
  const h = hash & 15
  const grad = 1 + ( h & 7 ) // Gradient value is one of 1, 2, ..., 8
  return grad * x // Compute the dot product
}

// Permutation table. This is just a random jumble of all 8-bit values,
// repeated twice to avoid wrapping the index at each each step.
const permutation = [ ...Array( 256 ) ].map( ( _, i ) => i )
permutation.sort( () => Math.random() - 0.5 )
permutation.push( ...permutation )

const perlin = ( x: number ) => {
  const X = x & 255
  x -= Math.floor( x )
  const u = fade( x )
  
  // Hash lookup
  const a = permutation[ X ]
  const b = permutation[ X + 1 ]
  
  return lerp( grad( a, x ), grad( b, x - 1 ), u )
}

const generateMountainRange = ( 
  width: number, height: number, 
  baseHeight: number, maxHeight: number, frequency: number 
) => {
  const mountainPoints: number[] = []

  for ( let x = 0; x < width; x++ ) {
    const noiseValue = perlin( x * frequency )
    const mountainPoint = baseHeight + noiseValue * maxHeight
    mountainPoints.push( mountainPoint )
  }
  
  return mountainPoints
}

/*
import random
import math
from typing import List, Tuple

def fade(t: float) -> float:
    """Fade function as defined by Ken Perlin."""
    return t * t * t * (t * (t * 6 - 15) + 10)

def lerp(a: float, b: float, x: float) -> float:
    """Linear interpolation."""
    return a + x * (b - a)

def grad(hash_: int, x: float) -> float:
    """Gradiant function."""
    h = hash_ & 15
    grad = 1 + (h & 7)  # Gradient value is one of 1, 2, ..., 8
    return (grad * x)  # Compute the dot product

# Permutation table. This is just a random jumble of all 8-bit values,
# repeated twice to avoid wrapping the index at each each step.
permutation = [i for i in range(256)]
random.shuffle(permutation)
permutation += permutation

def perlin(x: float) -> float:
    """Simple Perlin noise function in 1D."""
    X = int(x) & 255
    x -= math.floor(x)
    u = fade(x)
    
    # Hash lookup
    a = permutation[X]
    b = permutation[X + 1]
    
    return lerp(grad(a, x), grad(b, x - 1), u)

def generate_mountain_range(width: int, height: int, base_height: float, max_height: float, frequency: float) -> List[int]:
    """Generate a mountain range using Perlin noise."""
    mountain_points = []
    for x in range(width):
        noise_value = perlin(x * frequency)
        mountain_point = int(base_height + noise_value * max_height)
        mountain_points.append(mountain_point)
    return mountain_points

# Parameters
width = 800
height = 300
base_height = height * 0.5
max_height = height * 0.3
frequency = 0.02

# Generate the mountain range
mountain_range = generate_mountain_range(width, height, base_height, max_height, frequency)
mountain_range[:10]  # Display the first 10 points for a quick check

*/