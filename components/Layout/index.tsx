import Style from "@/components/Style";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useTheme from "@/hooks/useTheme";
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children, ...otherProps }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <div className={ThemeClassMap[activeTheme]}>
      <Style style={LayoutStyles} {...otherProps}>
        <Style as={Header} style={LayoutHeaderStyles}/>
        <Style>
          {children}
        </Style>
        <Footer/>
      </Style>
    </div>
  )
}

const LayoutStyles: CSS = {
  // Spans the whole window
  position: "relative",
  minHeight: "100vh",

  display: "grid",
  gridTemplateRows: "auto 1fr auto",

  // Background with something sprinkle in.
  backgroundColor: theme.colors.pageBackground,
  backgroundImage: `url("${AssetsConst.GRAIN_PNG}")`,

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