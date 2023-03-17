import Style from "@/components/Style";
import useTheme from "@/hooks/useTheme";
import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <div className={ThemeClassMap[activeTheme]}>
      <Style style={LayoutStyles} isInline={true}>
        {children}
      </Style>
    </div>
  )
}

const LayoutStyles = {
  // Spans the whole window
  // display: "flex",
  // flexDirection: "column",
  minHeight: "100vh",

  // Background with something sprinkle in.
  background: theme.colors.pageBackground,
  backgroundImage: `url("${AssetsConst.GRAIN_PNG}")`,
}

export default Layout;