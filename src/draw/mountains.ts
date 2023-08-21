import { quadFill } from '../lib/triangle.js'

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