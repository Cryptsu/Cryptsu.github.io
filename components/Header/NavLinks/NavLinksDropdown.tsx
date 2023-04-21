import { useState } from "react";
import Style from "@/components/Style";
import NavLink from "./NavLink";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { PropsWithChildren } from "react";
import type { NextRouter } from "next/router";
import type { CSS } from "@stitches/react";

type NavLinksDropdownProps = PropsWithChildren<{
  router: NextRouter
}>

const NavLinksDropdown = ({children, router, ...otherProps}: NavLinksDropdownProps) => {
  const [ 
    isNavBarDropDown, 
    setIsNavBarDropdown 
  ] = useState<boolean>(false);
  
  return (
    <Style style={NavLinksDropdownWrapperStyles}>
      <Style style={NavLinksIconWrapperStyles} onClick={() => setIsNavBarDropdown(!isNavBarDropDown)}>
        <Style 
          style={NavLinksIconStyles} 
          as={
            isNavBarDropDown
              ? NavLinkConfig.openedIcon
              : NavLinkConfig.icon
          } 
        />
      </Style>
      <Style 
        style={NavLinksDropdownStyles}
        css={
          isNavBarDropDown
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        {
          NavLinkConfig.navItems.map((navItem, index) => {
            // Copied from jarv.is
            const isCurrent = navItem.href === `/${router.pathname.split("/")[1]}`;
            return <Style key={index}>
                      <NavLink href={navItem.href} isCurrent={isCurrent}>
                        {navItem.name}
                      </NavLink>
                  </Style>
          })
        }
      </Style>
    </Style>
  )
}

const NavLinksDropdownWrapperStyles: CSS = {
  display: "none",
  position: "relative",
  '@medium': {
    display: "block",
  },
}

const NavLinksDropdownStyles: CSS = {
  backgroundColor: theme.colors.navLinkDropdownBackground,

  position: "absolute",
  left: 16,
  display: "flex",
  flexDirection: "column",
  gap: 16,

  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,

  borderRadius: 16,
  borderWidth: 4,
  borderColor: theme.colors.borderGeneral,
  borderStyle: "solid",
}

const NavLinksIconWrapperStyles: CSS = {
  padding: 8,
  borderRadius: 8,
  borderColor: theme.colors.navLinkDropdownBtnBorder,
  borderWidth: 2,
  borderStyle: "solid",
  backgroundColor: theme.colors.navLinkDropdownBackground,
  '&:active': {
    opacity: "70%",
    transform: "translateY(4px)"
  },
}

const NavLinksIconStyles: CSS = {
  display: "block",
  fill: theme.colors.primary,
  width: 24,
  height: 24,

  fillRule: "nonzero",
  stroke: theme.colors.primary,
}

export default NavLinksDropdown;