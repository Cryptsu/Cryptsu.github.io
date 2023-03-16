import { ThemeClassMap, theme } from "@/lib/styles/stiches.config";
import { styled } from "@stitches/react";
import useTheme from "@/hooks/useTheme";
import { AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <div className={ThemeClassMap[activeTheme]}>
      <CSSWrapper>
        {children}
      </CSSWrapper>
    </div>
  )
}

const CSSWrapper = styled("div", 
  {
    // Spans the whole window
    // display: "flex",
    // flexDirection: "column",
    minHeight: "100vh",

    background: theme.colors.pageBackground,
    backgroundImage: `url("${AssetsConst.GRAIN_PNG}")`,
  }
)

export default Layout;