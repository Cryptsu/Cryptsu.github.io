import { createStitches } from "@stitches/react";
import { AssetsConst } from "@/lib/consts";
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

      // Main page
      //   -> Author section
      authorBackground: hexToRgba("#202220", 0.5),
      authorBoxName: "$tertiary",
      authorBoxDesc: "$white",
      authorBoxBlinking: "$secondary",

      //   -> Posts section
      posts: "$white",
      postDesc: "#6C877A",
      
      // Post page
      //   -> Title metadata
      title: "$white",
      hashtagActive: "$primary",
      hashtagInactive: "#44966E",
      metadata: hexToRgba("#DCFFEE", 0.5),
      metadataIcon: "$tertiary",

      //   -> Footer
      footerText: '#778980',
      
      //   -> Table of Content (toc)
      toc: "#bfddce",
      tocActive: "#FDFDFD",
      tocDivider: "$grey",

      //   -> Button
      buttonHoverBackground: "$grey",

      //   -> CustomLink
      customLinkBackground: hexToRgba("#454C48", 0.5),

      //   -> List
      listHeading: "$primary",
      
      //   -> Header
      logoText: "$primary",
      blurBackground: hexToRgba("#101010", 0.5),
      divider: hexToRgba("#BCDACB", 0.25),
        //       -> navLink
        navLink: "$primary",
        navLinkLineHover: "linear-gradient(90deg, $primary 0%, $secondary 100%)",

      //   -> Layout
      pageBackground: "$blackest",
      pageBackgroundButUsesGradient: "linear-gradient(90deg, $pageBackground 0%, $pageBackground 100%)",

      //   -> Content
      content: "$white",

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
      codeBoxInside: "linear-gradient($pageBackground, $pageBackground)",
      codeHighlight: "$white",
      codeNoHighlight: "$primary",
      codeInnerBackground: "$black",
      codeBlockBackground: `linear-gradient(0deg, #181918, #181918)`,
      codeLang: hexToRgba("#DCFFEE", 0.75),
      codeLineNumber: hexToRgba("#DCFFEE", 0.5),
      codeLineNumberDivider: hexToRgba("#DCFFEE", 0.5),
      codeBoxHidden: hexToRgba("#DCFFEE", 0.5),

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

      //    -> Copy
      copyBtnBorder: "$secondary",
      copyIcon: "$white",
      copiedIcon: "$green",
      copyBtnHoverBackground: "$secondary",

      //   -> Math block
      mathDivider: hexToRgba("#454C48", 0.5),
    },

    fonts: {
      title: `${JetBrainsMono.style.fontFamily}, monospace`,
      footer: `${JetBrainsMono.style.fontFamily}, monospace`,
      content: `${JetBrainsMono.style.fontFamily}, monospace`,
      code: `${JetBrainsMono.style.fontFamily}, monospace`,
      logo: `${JetBrainsMono.style.fontFamily}, monospace`,
      toc: `${JetBrainsMono.style.fontFamily}, monospace`,
      navlink: `${JetBrainsMono.style.fontFamily}, monospace`,
      posts: `${JetBrainsMono.style.fontFamily}, monospace`,
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
      title: "$h0",
      metadata: "$h5",
      footer: "$h5",
      hashTag: "$h5",
      logo: "$h3",
      content: "$h5",
      code: "$h5",
      codeLang: "$h5",
      imgalt: "$content",
      toc: "$h6",
      tocHeader: "$h5",
      authorBoxName: "$h4",
      authorBoxDesc: "$h5",
      postTitle: "$h3",
      postDesc: "$h5",
      postMeta: "$h6",
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
      title: "$h0",
      footer: "bold",
      logo: "$h3",
      hashTag: "bold",
      content: "$h5",
      imgalt: "bold",
      listHeading: "bold",
      codeLang: "bold",
      codeLineNumber: "bold",
      tocHeader: "bold",
      toc: "$h6",
      tocHighlighted: "bold",
      authorBoxName: "$h4",
      authorBoxDesc: "$h5",
      postTitle: "bold",
      postMeta: "bold",
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
      title: "$h0",
      metadata: "$h5",
      footer: "$h5",
      hashTag: "$h5",
      logo: "$h3",
      content: "$h5",
      code: "$h5",
      codeLang: "$h5",
      toc: "-0.05em",
      navlink: "$h5",
      authorBoxName: "$h4",
      authorBoxDesc: "$h5",
      postTitle: "$h3",
      postDesc: "$h5",
      postMeta: "$h6",
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
      code: "$h5",
      authorBoxDesc: "$h5",
    },

    transitions: {
      movUnderline: "background-size 0.4s ease-in-out"
    },

    zIndices: {
      header: 99999,
    },

    shadows: {
      codeCopyBtnNormal: "0 4px #265D8B",
      codeCopyBtnClick: "0 1px #265D8B",
      codeBlockShadow: `0px 0px 20px 20px ${hexToRgba("#000000", 0.25)}`,
      quoteBlockShadow: `0px 0px 20px 20px ${hexToRgba("#000000", 0.25)}`,
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

    // Fix error of font displaying incorrectly
    // on IPhones.
    // textSizeAdjust: "100%",

    // Scroll should be smooth :)
    scrollBehavior: "smooth",
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
    backgroundImage: `url("${AssetsConst.GRAIN_PNG}")`,
  }
});