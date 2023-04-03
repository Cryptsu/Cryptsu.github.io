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
  color: theme.colors.posts,
  fontSize: theme.fontSizes.postTitle,
  fontWeight: theme.fontWeights.postTitle,
  letterSpacing: theme.letterSpacings.postTitle,

  padding: 0,
  '&:link': {
    textDecoration: "underline",
  },
  '&:hover': {
    backgroundColor: "transparent",
  },
}

export default PostTitle;