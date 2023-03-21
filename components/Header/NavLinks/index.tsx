import NavLink from "./NavLink";
import Style from "@/components/Style";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { CSS } from "@stitches/react";

const NavLinks = () => {
  return (
    <Style style={NavLinksStyles}>
      {NavLinkConfig.navItems.map((navItem, index) => 
        <Style key={index} style={NavItemStyles}>
          <NavLink href={navItem.href}>
            {navItem.name}
          </NavLink>
        </Style>
      )}
    </Style>
  )
}

const NavLinksStyles: CSS = {
  display: "grid",
  gap: 10,
}

const NavItemStyles: CSS = {
  // Set space in grid
  gridRow: "1/2",
}

export default NavLinks;