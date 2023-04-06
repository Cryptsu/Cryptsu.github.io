import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostTitleProps = PropsWithChildren<{

}>

const PostTitle = ({children, ...otherProps}: PostTitleProps) => {
  return (
    <Style style={PostTitleStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const PostTitleStyles: CSS = {
  color: theme.colors.textGeneral,
  fontSize: theme.fontSizes.h0,
  fontWeight: theme.fontWeights.h0,
  letterSpacing: theme.letterSpacings.h0,
  textDecoration: "underline",
  textAlign: "center",
  width: "75%", 
}

export default PostTitle;