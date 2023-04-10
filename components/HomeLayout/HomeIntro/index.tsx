import Style from "@/components/Style";
import AuthorBox from "./AuthorBox";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type HomeIntroProps = PropsWithChildren<{

}>

const HomeIntro = ({children, ...otherProps}: HomeIntroProps) => {
  return (
    <Style style={HomeIntroStyles} {...otherProps}>
      <AuthorBox/>
    </Style>
  )
}

const HomeIntroStyles: CSS = {
  paddingLeft: 120,
  paddingRight: 120,
  paddingTop: 40,
  paddingBottom: 40,
}

export default HomeIntro;