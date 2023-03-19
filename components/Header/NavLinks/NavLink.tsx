import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";

import type { PropsWithChildren } from "react";

type NavLinkProps = PropsWithChildren <{
  // Need to aquire link
  href: string,

  // Other props
  [x: string]: any,
}>

const NavLink = ({children, href, ...otherProps}: NavLinkProps) => {
  return (
    <CustomLink 
      href={href} 
      style={NavLinkStyles} 
      hasMovingUnderline={true}
      {...otherProps}
    >
      {children}
    </CustomLink>
  )
}

const NavLinkStyles = {
  // Font customize
  fontFamily: theme.fonts.navlink,
  fontSize: theme.fontSizes.navlink,
  letterSpacing: theme.letterSpacings.navlink,
  color: theme.colors.navLink,

  // Set line
  backgroundImage: theme.colors.navLinkLineHover,

  // Set space in grid
  gridRow: "1/2",
};

export default NavLink;