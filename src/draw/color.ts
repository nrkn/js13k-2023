
// a and b are hex strings eg '#ff0000', we have to parse them, then
// interpolate using ratio, then back to string
export const interpolateColor = (a: string, b: string, ratio = 0.5): string => {
  const aRgb = parseColor(a)
  const bRgb = parseColor(b)

  const rRgb = interpolateRgb(aRgb, bRgb, ratio)

  return rgbToHexColor(rRgb)
}

export const parseColor = (c: string): [number, number, number] => {
  const rgb = parseInt(c.slice(1), 16)

  const r = rgb >> 16
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff

  return [r, g, b]
}

export const interpolateRgb = (
  a: [number, number, number],
  b: [number, number, number],
  ratio = 0.5
): [number, number, number] => {
  const [aR, aG, aB] = a
  const [bR, bG, bB] = b

  const rR = Math.round(aR + (bR - aR) * ratio)
  const rG = Math.round(aG + (bG - aG) * ratio)
  const rB = Math.round(aB + (bB - aB) * ratio)

  return [rR, rG, rB]
}

export const rgbToHexColor = (rgb: [number, number, number]) => {
  const [r, g, b] = rgb;

  // Convert each color channel to its hex representation and pad it.
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')

  return `#${hexR}${hexG}${hexB}`
}
