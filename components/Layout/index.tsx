import Style from "@/components/Style";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children, ...otherProps }: LayoutProps) => {
  return (
    <Style style={LayoutStyles} {...otherProps}>
      <Style style={LayoutHeaderStyles}>
        <Header/>
      </Style>
      <Style>
        {children}
      </Style>
      <Footer/>
    </Style>
  )
}

const LayoutStyles: CSS = {
  // Spans the whole window
  position: "relative",
  minHeight: "100vh",

  display: "grid",
  gridTemplateRows: "auto 1fr auto",

  // Stops phones from keeping selecting background image instead of content.
  // while making children elements selectable.
  pointerEvents: "none",  
  '*': {
    pointerEvents: "auto"
  }
}

const LayoutHeaderStyles: CSS = {
  position: "sticky",
  top: 0,
  zIndex: theme.zIndices.header,
}

export default Layout;