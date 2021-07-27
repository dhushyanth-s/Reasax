import { createCss } from '@stitches/react'

export const primary = '#663BE1'

export const {styled} = createCss({
  theme: {
    colors: {
      primary: primary,
      primaryBg: hexToRGB(primary, 0.15),
    },
    shadows: {
        primary: `0 0 0 2px ${primary}`,
        raised: '0 8px 15px 0px rgba(0,0,0,0.15)'
    }
  },
})

export function hexToRGB(hex: string, alpha?: number) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
