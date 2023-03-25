import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

// Helpers
import hexToRgba from "hex-to-rgba";

// Fonts
import { JetBrainsMono } from "./utils/fonts";

// Consts
import { ThemeConst } from "@/lib/consts";


///////////////////////////////////////////////////////////////////////////
//                              DEFAULT-THEME
///////////////////////////////////////////////////////////////////////////
export const { 
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
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
      //   -> Button
      buttonHoverBackground: "$grey",

      //   -> CustomLink
      customLinkBackground: hexToRgba("#454C48", 0.5),

      //   -> List
      listHeading: "$primary",
      
      //   -> Header
      logoText: "$primary",
      blurBackground: hexToRgba("#101010", 0.5),
        //       -> navLink
        navLink: "$primary",
        navLinkLineHover: "linear-gradient(90deg, $primary 0%, $secondary 100%)",

      //   -> Layout
      pageBackground: "$blackest",

      //   -> Content
      contentText: "$white",
      
      //   -> Intro
      hashtagActive: "$primary",
      hashtagInactive: "#44966E",
      divider: hexToRgba("#BCDACB", 0.25),

      //   -> Table
      tableBorder: "$grey",
      tableText: "$white",

      //   -> Link
      linkText: "$tertiary",
      clickedLinkText: "$senary",
      activeLinkText: "$secondary",
      linkTextUnderlineHover: "linear-gradient(90deg, $tertiary 0%, $tertiary 100%)",
      clickedLinkTextUnderlineHover: "linear-gradient(90deg, $secondary 0%, $secondary 100%)",
      activeLinkTextUnderlineHover: "linear-gradient(90deg, $secondary 0%, $secondary 100%)",

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
      codeBoxBorder: "linear-gradient(90deg, $primary, $secondary)",
      codeBoxBorderInv: "$pageBackground",
      codeBoxInside: "linear-gradient($pageBackground, $pageBackground)",
      codeHighlight: "$white",
      codeNoHighlight: "$primary",
      codeBackground: "$black",
      //    -> Copy
      copyBtnBorder: "$secondary",
      copyIcon: "$white",
      copyBtnHoverBackground: "$secondary",

      //   -> Math block
      mathDivider: hexToRgba("#454C48", 0.5),
    },

    fonts: {
      content: `${JetBrainsMono.style.fontFamily}, monospace`,
      navlink: "$content",
      code: "$content",
      logo: "$content",
    },

    fontSizes: {
      // Headings
      h0: "55px",
      h1: "43px",
      h2: "33.5px",
      h3: "26px",
      h4: "20px",
      h5: "16px",
      h6: "12.5px",

      // Others
      logo: "$h3",
      navlink: "$h5",
      content: "$h5",
      codeBlock: "$h5",
      imgalt: "$content",
    },

    fontWeights: {
      // Headings
      h0: 800,
      h1: 800,
      h2: 800,
      h3: "bold",
      h4: "bold",
      h5: "normal",
      h6: "normal",

      // Others
      logo: "$h3",
      content: "$h5",
      imgalt: "bold",
      listHeading: "bold",
    },

    letterSpacings: {
      // Headings
      h0: "-0.05em",
      h1: "-0.05em",
      h2: "-0.05em",
      h3: "-0.05em",
      h4: "-0.05em",
      h5: "-0.04em",
      h6: "-0.04em",

      // Others
      logo: "$h3",
      navlink: "$h5",
      content: "$h5",
      codeBlock: "$h5",
    },

    lineHeights: {
      // Headings
      h0: "normal",
      h1: "normal",
      h2: "normal",
      h3: "normal",
      h4: "normal",
      h5: "150%",
      h6: "150%",

      content: "$h5",
    },

    transitions: {
      movUnderline: "background-size 0.2s ease-in-out"
    },

    zIndices: {

    },

    shadows: {
      codeCopyBtnNormal: "0 4px #265D8B",
      codeCopyBtnClick: "0 1px #265D8B",
    },

    borderWidths: {

    },

    borderStyles: {

    },

    radii: {

    },

    space: {
      
    }
  },

  utils: {
    movUnderline: (attrsStr: string) => {
      // This code is created from Jarv.is's idea
      // of a moving line under an element :)
      let color = "#101010";
      let thickness = "1px";
      let marginX = "0px";
      let marginY = "0px";

      let attrs = attrsStr.split(" ");
      color              = (attrs[0] === undefined ? color     : attrs[0]);
      thickness          = (attrs[1] === undefined ? thickness : attrs[1]);
      marginX            = (attrs[2] === undefined ? marginX   : attrs[2]);
      marginY            = (attrs[3] === undefined ? marginY   : attrs[3]);

      return {
        backgroundImage: color,
        backgroundSize: `0% ${thickness}`,
        backgroundPosition: `calc(0% + ${marginX}) calc(100% - ${marginY})`,
        backgroundRepeat: "no-repeat",
        transition: "$movUnderline",
        '&:hover': {
          backgroundSize: `calc(100% - ${marginX}*2) ${thickness}`
        }
      }
    },

    movUnderlineColor: (color: string) => ({
      backgroundImage: color,
    })
  }
})

///////////////////////////////////////////////////////////////////////////
//                              SPINOFF-THEME(s)
///////////////////////////////////////////////////////////////////////////
export const lightTheme = createTheme({
  colors: {
    pageBackground: "$white"
  }
})

///////////////////////////////////////////////////////////////////////////
//                              ALL THEMES
///////////////////////////////////////////////////////////////////////////
type ThemeClassMapType = {
  [themeName: string]: string
}

export const ThemeClassMap: ThemeClassMapType = {
  [ThemeConst.THEME_DARK]: theme.className,
  [ThemeConst.THEME_LIGHT]: lightTheme.className,
};


///////////////////////////////////////////////////////////////////////////
//                              GLOBAL CONFIG
///////////////////////////////////////////////////////////////////////////
export const globalStyles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
  },

  // Easier to customize link.
  'a': {
    '&:hover': {
      textDecoration: "none"
    },
    '&:link': {
      textDecoration: "none"
    },
    '&:active': {
      textDecoration: "none"
    }
  }
});