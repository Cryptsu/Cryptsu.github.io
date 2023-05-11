import { createStitches } from "@stitches/react";
import { AssetsConst, ClassConst } from "@/lib/consts";
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
      secondary: "#0090ff",
      tertiary: "#fd4e47",
      gPrimary: "linear-gradient($primary, $primary)",
      gSecondary: "linear-gradient($secondary, $secondary)",
      gTertiary: "linear-gradient($tertiary, $tertiary)",

      // Mix of them
      color12: "#0FABB3", // 1 + 2
      color13: "#FBE281", // 1 + 3
      color23: "#79659E", // 2 + 3

      // Inactive versions of them.
      primaryInactive: "#112D1F",
      secondaryInactive: "#44525F",
      tertiaryInactive: "#73403F",
      primaryShadow: "#44966E",
      secondaryShadow: "#265D8B",
      tertiaryShadow: "#B03836",
      primaryActive: "#87ffc2",
      secondaryActive: "#75B6EE",
      tertiaryActive: "#F6ABA9",

      // Gradient
      gradient12: "linear-gradient(90deg, $primary 0%, $secondary 100%)",

      // Colors in theme
      red: "$tertiary",
      yellow: "$color13",
      green: "$primary",
      blue: "$secondary",
      cyan: "$color12",
      purple: "$color23",
      black: "#202220",
      blackest: "#101010",
      grey: "#454C48",
      white: "#DCFFEE",
      veryWhite: "#fdfdfd",
      brightRed: "$tertiaryActive",
      brightGreen: "$primaryActive",
      brightYellow: "#f3fbc1",
      darkRed: "$tertiaryInactive",
      darkGreen: "$primaryInactive",
      darkYellow: "#625500",

      // Utils
      //=> text
      textActive: "$veryWhite",
      textGeneral: "$white",
      textLess: "#bfddce",
      textLesser: "#778980",
      textLeast: "#454C48",

      //=> divider
      divider25: hexToRgba("#BCDACB", 0.25),
      divider50: hexToRgba("#454C48", 0.5),

      //=> general color for stuffs
      borderGeneral: "$grey",
      iconGeneral: "$white",

      //=> prev-next
      prev: "$tertiary",
      next: "$secondary",
      prevInactive: "$tertiaryInactive",
      nextInactive: "$secondaryInactive",
      prevShadow: "$tertiaryShadow",
      nextShadow: "$secondaryShadow",
      prevActive: "$tertiaryActive",
      nextActive: "$secondaryActive",

      //=> status
      success: "$green",
      error: "$red",
      warning: "$yellow",

      // ========================== Main page ==============================
      //   -> Author section
      authorBackground: hexToRgba("#202220", 0.5),
      postsBackground: "$black",

      // ========================== Post page ==============================
      //   -> Button
      buttonHoverBackground: "$grey",

      //   -> CustomLink
      customLinkBackground: hexToRgba("#454C48", 0.5),

      //   -> Header
      headerBlur: hexToRgba("#101010", 0.5),

      //   -> TOC
      tocBlur: hexToRgba("#101010", 0.75),

      //   -> Layout
      pageBackground: "$blackest",
      navLinkDropdownBackground: "$black",
      navLinkDropdownBtnBorder: "#050505",

      //   -> Quoteblock
      quoteLegend: "$black",
      quoteBackground: hexToRgba("#A8EFCD", 0.02),

      //   -> Code area
      codeInnerBackground: "$black",
      codeBlockBackground: `linear-gradient(0deg, #181918, #181918)`,

      //      -> Code text area
      codeComment: "#8F8F8F",
      codeKeyword: "#F23F3C",
      codeAttribute: "#70a800",
      codeNamespace: "#d77d00",
      codeFunction: "#88d169",
      codePunctuation: "#d77d00",
      codeOperator: "#00c2ff",
      codeVariable: "#1CC674",
      codeAddition: "#44a248",
      codeDeletion: "#ff1b1b",
      codeLiteral: "#fbe281",

      // Scrollbar
      scrollbarThumb: "#4d4d4d",
      scrollbarTrack: "#44525F",
    },

    fonts: {
      global: `${JetBrainsMono.style.fontFamily}, monospace`,
      content: `${JetBrainsMono.style.fontFamily}, monospace`,
      code: `${JetBrainsMono.style.fontFamily}, monospace`,
    },

    fontSizes: {
      h0: "55px",
      h1: "43px",
      h2: "33.5px",
      h3: "26px",
      h4: "20px",
      h5: "16px",
      h6: "14px",

      err: "128px",
      date: "18px",
    },

    fontWeights: {
      h0: 800,
      h1: 800,
      h2: "normal",
      h3: "bold",
      h4: "bold",
      h5: "normal",
      h6: "normal",

      normal: "normal",
      bold: "bold",
      extrabold: 800,
    },

    letterSpacings: {
      h0: "-0.05em",
      h1: "-0.05em",
      h2: "-0.05em",
      h3: "-0.05em",
      h4: "-0.05em",
      h5: "-0.04em",
      h6: "-0.04em",
    },

    lineHeights: {
      h0: "normal",
      h1: "normal",
      h2: "normal",
      h3: "normal",
      h4: "normal",
      h5: "150%",
      h6: "150%",
    },

    transitions: {
      movUnderline: "background-size 0.4s ease-in-out"
    },

    zIndices: {
      header: 2,
      tocBackground: 3,
      tocBtnNormal: 1, 
      tocBtnClick: 3,
      footer: 2,
    },

    shadows: {
      depthShadow: `0px 0px 20px 20px ${hexToRgba("#000000", 0.25)}`,
      homePostCoverHover: "0.375em 0.375em #454C48",
      homePostCoverClick: "0.0625em 0.0625em #454C48",
      navLinkDropdown: "0.25em 0.25em #454C48",
      codeCopyBtnNormal: "0 0.25em #265D8B",
      codeCopyBtnClick: "0 0.0625em #265D8B",
      codeBlockMobileBtnNormal: "0 0.25em #73403F",
      codeBlockMobileBtnClick: "0 0.0625em #73403F",
      tocMobileBtnNormal: "0 0.375em #265D8B",
      tocMobileBtnClick: "0 0.125em #265D8B",
      prevBtn: "0 0.375em #B03836",
      prevBtnClick: "0 0.125em #B03836",
      nextBtn: "0 0.375em #265D8B",
      nextBtnClick: "0 0.125em #265D8B",
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

  media: {
    // This is where table of content is not displayed anymore,
    larger: "(max-width: 1365px)", 
    // This is where the middle part of homepage begin to change :)
    large: "(max-width: 1000px)",
    // most responsive styles will go here:
    medium: "(max-width: 792px)",
    // used for narrow windows:
    small: "(max-width: 428px)",
    // for someone who is still using iphone 5...
    tiny: "(max-width: 350px)",
    // hmmm... are you still using nokia or sth...?
    pepper: "(max-width: 100px)",
  },

  utils: {
    staticUnderline: (attrsStr: string) => {
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
        backgroundSize: `calc(100% - ${marginX}*2) ${thickness}`,
        backgroundPosition: `calc(0% + ${marginX}) calc(100% - ${marginY})`,
        backgroundRepeat: "no-repeat",
      }
    },

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
    }),
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
  },

  'body': {
    backgroundColor: "$pageBackground",
    backgroundImage: `url("${AssetsConst.GRAIN}")`,
    pointerEvents: "none",  
  },

  [`.${ClassConst.CLASS_IOS}, .${ClassConst.CLASS_SAFARI}`]: {
    'body': {
      // The reason I have to do this is because 
      // Safari has an auto text size adjust
      // mechanism. When screen is rotated,
      // this mechanism does not distribute evenly
      // into the elements, making the page appears
      // really unbalanced :(
      textSizeAdjust: "100%",
    }
  },

  // ==============================================================
  //
  //                THIS WHOLE SECTION IS DEDICATED
  //                      TO SCROLL-BAR STYLES
  //
  // ==============================================================
  '::-webkit-scrollbar': {
    width: "12px",
    height: "12px",
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: "24px",
    '&:vertical': {
      backgroundImage: `linear-gradient($scrollbarThumb, $scrollbarThumb)`,
      backgroundSize: "6px 100%",
      backgroundPositionX: "3px",
      backgroundRepeat: "no-repeat",
    },
    '&:horizontal': {
      backgroundImage: `linear-gradient($scrollbarThumb, $scrollbarThumb)`,
      backgroundSize: "100% 6px",
      backgroundPositionY: "3px",
      backgroundRepeat: "no-repeat",
    }
  },

  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.colors.primary,
    backgroundImage: `none`,
  },

  '::-webkit-scrollbar-track': {
    borderRadius: '10px',
  },

  '::-webkit-scrollbar-track:vertical:hover': {
    backgroundImage: `linear-gradient($scrollbarTrack, $scrollbarTrack)`,
    backgroundSize: "2px 100%",
    backgroundPositionX: "5px",
    backgroundRepeat: "repeat-y",
  },

  '::-webkit-scrollbar-track:horizontal:hover': {
    backgroundImage: `linear-gradient($scrollbarTrack, $scrollbarTrack)`,
    backgroundSize: "100% 2px",
    backgroundPositionY: "5px",
    backgroundRepeat: "repeat-x"
  }
});