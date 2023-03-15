import useTheme from "@/hooks/useTheme";
import { ThemeClassMap } from "@/lib/styles/stiches.config";
import Wrapper from "./Wrapper";
import type { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <div className={ThemeClassMap[activeTheme]}>
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  )
}

export default Layout;