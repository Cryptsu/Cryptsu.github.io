import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import CustomLink from "@/components/CustomLink";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

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
      {...otherProps}
    >
      {children}
    </CustomLink>
  )
}

const NavLinkStyles: CSS = {
  // Font customize
  color: theme.colors.navLink,

  // Set moving underline
  movUnderline: `${theme.colors.navLinkLineHover} 2px 12px 6px`,
};

export default NavLink;