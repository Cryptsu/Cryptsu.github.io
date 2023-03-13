import { createStitches } from "@stitches/react";

export const { 
  styled,
  css,
  getCssText,
  globalCss,
  keyframes,
  createTheme,
  theme,
} = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSizes: {
      h1: '13px',
      h2: '15px',
      h3: '17px',
    },
  },
})