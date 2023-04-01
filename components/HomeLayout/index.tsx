import Style from "@/components/Style";
import HomeIntro from "./HomeIntro";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type HomeLayoutProps = PropsWithChildren<{

}>

const HomeLayout = ({children, ...otherProps}: HomeLayoutProps) => {
  return (
    <Style style={HomeLayoutWrapperStyles} {...otherProps}>
      <Style style={HomeLayoutStyles}>
        <HomeIntro/>
      </Style>
    </Style>
  )
}

const HomeLayoutWrapperStyles: CSS = {
  display: "flex",
  justifyContent: "center",
};

const HomeLayoutStyles: CSS = {
  width: 832,
}

export default HomeLayout;