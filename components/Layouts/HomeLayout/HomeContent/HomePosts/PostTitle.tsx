import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostTitleProps = PropsWithChildren<{
  title: string,
  link: string,
}>

const PostTitle = ({children, title, link, ...otherProps}: PostTitleProps) => {
  return (
    <Style as={CustomLink} style={PostTitleStyles} href={link} {...otherProps}>
      {title}
    </Style>
  )
}

const PostTitleStyles: CSS = {
  color: theme.colors.textLess,
  fontSize: theme.fontSizes.h3,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h3,

  padding: 0,
  paddingLeft: "0.3rem",
  paddingRight: "0.3rem",
  
  '&:link': {
    textDecoration: "underline",
  },
  '&:hover': {
    color: theme.colors.textActive,
    backgroundColor: "transparent",
  },
}

export default PostTitle;