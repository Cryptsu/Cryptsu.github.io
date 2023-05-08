import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type NavLinkProps = PropsWithChildren <{
  // Need to acquire link
  href: string,
  isCurrent: boolean,

  // Other props
  [x: string]: any,
}>

const NavLink = ({children, href, isCurrent, ...otherProps}: NavLinkProps) => {
  return (
    <CustomLink 
      href={href} 
      style={isCurrent ? NavLinkCurrentStyles : NavLinkStyles} 
      {...otherProps}
    >
      {children}
    </CustomLink>
  )
}

const NavLinkStyles: CSS = {
  // Font customize
  fontFamily: theme.fonts.global,
  letterSpacing: theme.letterSpacings.h5,
  color: theme.colors.primary,

  // Set moving underline
  movUnderline: `${theme.colors.gradient12} 2px 12px 6px`,
};

const NavLinkCurrentStyles: CSS = {
  // Font customize
  fontFamily: theme.fonts.global,
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  color: theme.colors.primary,

  // Set moving underline
  staticUnderline: `${theme.colors.gPrimary} 2px 8px 6px`,
};


export default NavLink;