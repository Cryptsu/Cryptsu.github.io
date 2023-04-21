import { useState } from "react";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { CSS } from "@stitches/react";
import { HtmlConst } from "@/lib/consts";

const NavLinks = () => {
  const router = useRouter();
  const [ isNavBarDropDown, setIsNavBarDropdown ] = useState<boolean>(false);

  return (
    <>
      <Style style={NavLinksDropdownWrapperStyles}>
        <Style 
          style={NavLinksIconStyles} 
          as={NavLinkConfig.icon} 
          onClick={() => setIsNavBarDropdown(!isNavBarDropDown)}
        />
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
              return <Style key={index} style={NavItemStyles}>
                        <NavLink href={navItem.href} isCurrent={isCurrent}>
                          {navItem.name}
                        </NavLink>
                    </Style>
            })
          }
        </Style>
      </Style>

      <Style style={NavLinksStyles}>
        {
          NavLinkConfig.navItems.map((navItem, index) => {
            // Copied from jarv.is
            const isCurrent = navItem.href === `/${router.pathname.split("/")[1]}`;
            return <Style key={index} style={NavItemStyles}>
                      <NavLink href={navItem.href} isCurrent={isCurrent}>
                        {navItem.name}
                      </NavLink>
                  </Style>
          })
        }
      </Style>
    </>
  )
}

const NavLinksDropdownWrapperStyles: CSS = {
  display: "none",
  position: "relative",
  '@medium': {
    display: "block",
  }
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

const NavLinksIconStyles: CSS = {
  fill: theme.colors.primary,
  width: 24,
  height: 24,
}

const NavLinksStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  '@medium': {
    display: "none",
  }
}

const NavItemStyles: CSS = {
  
}

export default NavLinks;