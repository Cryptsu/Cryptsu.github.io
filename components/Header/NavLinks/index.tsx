import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Style from "@/components/Style";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { CSS } from "@stitches/react";

const NavLinks = () => {
  const router = useRouter();
  return (
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
  )
}

const NavLinksStyles: CSS = {
  display: "grid",
  alignItems: "center",
  gap: 10,
}

const NavItemStyles: CSS = {
  // Set space in grid
  gridRow: "1/2",
}

export default NavLinks;