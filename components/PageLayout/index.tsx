import Style from "@/components/Style";
import Header from "./Header";
import Footer from "./Footer";
import TinyPage from "./TinyPage";
import { theme } from "@/lib/styles/stiches.config";
import { ClassConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PageLayoutProps = PropsWithChildren<{}>;

const PageLayout = ({ children, ...otherProps }: PageLayoutProps) => {
  return (
    <>
      <Style style={PageLayoutStyles} {...otherProps}>
        <Style style={PageLayoutHeaderStyles}>
          <Header/>
        </Style>
        <Style>
          {children}
        </Style>
        <Footer/>
      </Style>

      {/* Putting class names so that when people f12, they wouldn't thought it was a hidden insult */}
      {/* (although it is slightly is for people having too old of a browser...) */}
      {/* (sorry but you do really need to get a new one though...) */}
      {/* 8% of browsers will probably sees this text (why I'm I even considering this..?) */}
      {/* (just for fun I guess) */}
      {/* (i really need to get a job...) */}
      {/* (sigh...) */}
      <Style style={AltPageLayoutStyles} className={ClassConst.CLASS_TOO_OLD}>
        {TxtConst.TXT_UR_BROWSER_SUCKS} 
      </Style>

      <Style style={AltPageLayout2Styles} className={ClassConst.CLASS_TOO_SMALL}>
        <TinyPage/>
      </Style>
    </>
  )
}

const PageLayoutStyles: CSS = {
  // Spans the whole window
  position: "relative",
  "@supports (min-height: 100dvh)": {
    minHeight: "100dvh",
  },

  "@supports (not (min-height: 100dvh))": {
    minHeight: "100vh"
  },

  // If browser too old / outdated,
  // don't display shits
  display: "none",
  "@supports (display: grid)": {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
  },
  "@pepper": {
    display: "none"
  },

  // Stops phones from keeping selecting background image instead of content.
  // while making children elements selectable.
  '*': {
    pointerEvents: "auto"
  }
}

const PageLayoutHeaderStyles: CSS = {
  // Sticky bars block too much content on
  // mobile screens :(
  position: "sticky",
  '@medium': {
    position: "relative"
  },

  top: 0,
  zIndex: theme.zIndices.header,
}

const AltPageLayoutStyles: CSS = {
  marginLeft: 32,
  marginRight: 32,
  marginTop: 32,
  marginBottom: 32,

  fontFamily: theme.fonts.global,
  fontWeight: theme.fontWeights.extrabold,
  color: theme.colors.white,
  fontSize: 40,

  "@supports (display: grid)": {
    display: "none",
  }
}

const AltPageLayout2Styles: CSS = {
  display: "none",
  "@pepper": {
    "@supports (display: grid)": {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      fontFamily: theme.fonts.global,
      fontWeight: theme.fontWeights.extrabold,
      fontSize: "33vw",
      color: theme.colors.primary,
    },
  },
}

export default PageLayout;