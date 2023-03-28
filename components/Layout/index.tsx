import Style from "@/components/Style";
import useTheme from "@/hooks/useTheme";
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <div className={ThemeClassMap[activeTheme]}>
      <Style style={LayoutStyles}>
        {children}
      </Style>
    </div>
  )
}

const LayoutStyles: CSS = {
  // Spans the whole window
  position: "relative",
  minHeight: "100vh",

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

export default Layout;