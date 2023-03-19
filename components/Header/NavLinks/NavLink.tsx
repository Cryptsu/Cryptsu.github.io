import { theme } from "@/lib/styles/stiches.config";
import Link from "next/link";
import Style from "@/components/Style";
import { PropsWithChildren } from "react";

type NavLinkProps = PropsWithChildren <{
  // Need to aquire link
  href: string,

  // Other props
  [x: string]: any,
}>

const NavLink = ({children, ...otherProps}: NavLinkProps) => {
  return (
    <Style as={Link} style={NavLinkStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const NavLinkStyles = {
  color: theme.colors.navLink,
  fontFamily: theme.fonts.navlink,
  letterSpacing: theme.letterSpacings.navlink,
  gridRow: "1/2",

  // To create this nice link line drawing animation 
  // when we hover on the link.
  // Idea of jarv.is!! Not mine.
  backgroundImage: `linear-gradient(${theme.colors.navLink}, ${theme.colors.navLink})`,
  backgroundSize: "0% 2px",
  backgroundPosition: "0% 100%",
  backgroundRepeat: "no-repeat",
  paddingBottom: "3px",
  transition: "background-size 0.2s ease-in-out",
  '&:hover': {
    backgroundSize: "100% 2px",
  }
};

export default NavLink;