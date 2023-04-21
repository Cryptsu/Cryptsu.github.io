import Style from "@/components/Style";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TinyPage from "@/components/TinyPage";
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children, ...otherProps }: LayoutProps) => {
  return (
    <>
      <Style style={LayoutStyles} {...otherProps}>
        <Style style={LayoutHeaderStyles}>
          <Header/>
        </Style>
        <Style>
          {children}
        </Style>
        <Footer/>
      </Style>
      <Style style={AltLayoutStyles}>
        {TxtConst.TXT_UR_BROWSER_SUCKS} {/* 8% of browsers will probably sees this (why I'm I even considering this..?) */}
      </Style>
      <Style style={AltLayout2Styles}>
        <TinyPage/>
      </Style>
    </>
  )
}

const LayoutStyles: CSS = {
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

const LayoutHeaderStyles: CSS = {
  position: "sticky",
  top: 0,
  zIndex: theme.zIndices.header,
}

const AltLayoutStyles: CSS = {
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

const AltLayout2Styles: CSS = {
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

export default Layout;