import Style from "@/components/Style";
import NextLink from "next/link";
import { theme } from "@/lib/styles/stiches.config";
import { AppConfig } from "@/lib/config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type PostLinkProps = PropsWithChildren<{
  title: string,
  link: string,
}>

const PostLink = ({children, title, link, ...otherProps}: PostLinkProps) => {
  return (
    <Style 
      as={NextLink} 
      href={link} 
      style={PostLinkStyles} 
      {...otherProps}
    >
      {title}
    </Style>
  )
}

const PostLinkStyles: CSS = {
  color: theme.colors.tertiary,
  fontSize: theme.fontSizes.h5,
  lineHeight: theme.lineHeights.h5,

  movUnderline: `${theme.colors.gTertiary} 2px 0px 0px`,
  '&:visited': {
    // color: theme.colors.color23,
  },
  '&:active': {
    color: theme.colors.secondary,
    movUnderlineColor: theme.colors.gSecondary,
  },
};

export default PostLink;