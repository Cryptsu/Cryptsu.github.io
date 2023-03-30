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
  color: theme.colors.title,
  fontSize: theme.fontSizes.title,
  fontWeight: theme.fontWeights.title,
  letterSpacing: theme.letterSpacings.title,
  textDecoration: "underline",
  textAlign: "center",
}

export default PostTitle;