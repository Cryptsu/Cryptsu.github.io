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
  color: theme.colors.tertiary,
  paddingBottom: 4,

  '&:visited': {
    color: theme.colors.color23,
  },
  movUnderline: `${theme.colors.gTertiary} 2px 0px 0px`,
  '&:active': {
    color: theme.colors.secondary,
    movUnderlineColor: theme.colors.gSecondary,
  },
};

export default ParsedLink;