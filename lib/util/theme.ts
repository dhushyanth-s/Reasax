import { createCss } from '@stitches/react'

export const {styled} = createCss({
  theme: {
    colors: {
      primary: '#1A5CFF',
      primaryBg: 'rgba(26, 92, 255, 0.15)',
    },
    shadows: {
        primary: '0 0 0 2px #1A5CFF'
    }
  },
})
