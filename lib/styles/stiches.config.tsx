import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

// Helpers
import hexToRgba from "hex-to-rgba";

// Fonts
import { JetBrainsMono } from "./utils/fonts";


///////////////////////////////////////////////////////////////////////////
//                              DEFAULT-THEME
///////////////////////////////////////////////////////////////////////////
export const { 
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme: defaultTheme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Main colors - the threedom.
      primary: "#1CC674",
      secondary: "#008AFF",
      tertiary: "#F23F3C",

      // Mix of them
      quaternary: "#0FABB3", // 1 + 2
      quinary: "#FBE281",    // 1 + 3
      senary: "#79659E",     // 2 + 3

      // Gradient
      gradient: "linear-gradient(90deg, $primary 0%, $secondary 100%)",

      // Colors in theme
      red: "$tertiary",
      yellow: "$quinary",
      green: "$primary",
      blue: "$secondary",
      cyan: "$quaternary",
      purple: "$senary",
      black: "#202220",
      blackest: "#101010",
      grey: "#454C48",
      white: "#DCFFEE",
      
      // Purpose
      //   -> Layout
      pageBackground: "$blackest",

      //   -> Content
      contentText: "$white",
      
      //   -> Header
      hashtagActive: "$primary",
      hashtagInactive: "#44966E",
      divider: hexToRgba("#BCDACB", 0.25),

      //   -> Table
      tableBorder: "$grey",
      tableText: "$white",

      //   -> Quoteblock
      quoteLegend: "$black",
      quoteBackground: hexToRgba("#A8EFCD", 0.02),
      quoteText: hexToRgba("#DCFFEE", 0.75),

      //   -> Navigation buttons
      prevButtonTop: "$tertiary",
      prevButtonShade: "#B03836",
      nextButtonTop: "$secondary",
      nextButtonInactive: "#265D8B",

      //   -> Code area
      codeBoxClose: "$red",
      codeBoxMinimize: "$yellow",
      codeBoxMaximize: "$green",
      codeBoxCopy: "$secondary",

      codeText: "$white",
    },

    fonts: {
      content: `${JetBrainsMono.style.fontFamily}, monospace`,
      code: `${JetBrainsMono.style.fontFamily}, monospace`
    },

    fontSizes: {
      h0: "48px",
      h1: "42px",
      h2: "33px",
      h3: "26px",
      h4: "20px",
      h5: "16px",
      h6: "12.5px",
    },

    fontWeights: {
      h0: 800,
      h1: 800,
      h2: 800,
      h3: "bold",
      h4: "bold",
      h5: "normal",
      h6: "normal",
    }
  },

  utils: {

  }
})

///////////////////////////////////////////////////////////////////////////
//                              SPINOFF-THEME(s)
///////////////////////////////////////////////////////////////////////////
const lightTheme = createTheme({

})

///////////////////////////////////////////////////////////////////////////
//                              ALL THEMES
///////////////////////////////////////////////////////////////////////////
export type ThemeType = typeof defaultTheme;
export const themes = [
  defaultTheme,
];

///////////////////////////////////////////////////////////////////////////
//                              GLOBAL CONFIG
///////////////////////////////////////////////////////////////////////////
export const globalStyles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
  }
});