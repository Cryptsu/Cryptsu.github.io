import Style from "@/components/Style";
import NextLink from "next/link";
import { theme } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ParsedLinkProps = PropsWithChildren<{

}>

const ParsedLink = ({children, ...otherProps}: ParsedLinkProps) => {
  return (
    <Style as={NextLink} style={ParsedLinkStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const ParsedLinkStyles: CSS = {
  color: theme.colors.linkText,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 4,

  '&:visited': {
    color: theme.colors.clickedLinkText,
  },
  movUnderline: `${theme.colors.linkTextUnderlineHover} 2px 4px 0px`,
  '&:active': {
    color: theme.colors.activeLinkText,
    movUnderlineColor: theme.colors.activeLinkTextUnderlineHover,
  },
};

export default ParsedLink;