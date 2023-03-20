import NavLink from "./NavLink";
import Style from "@/components/Style";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { CSS } from "@stitches/react";

const NavLinks = () => {
  return (
    <Style style={NavLinksStyles}>
      {NavLinkConfig.navItems.map((navItem, index) => 
        <NavLink key={index} href={navItem.href}>
          {navItem.name}
        </NavLink>
      )}
    </Style>
  )
}

const NavLinksStyles: CSS = {
  display: "grid",
  gap: 10,
}

export default NavLinks;