import Style from "@/components/Style";
import NavLink from "./NavLink";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import NavLinkConfig from "@/lib/config/navlink.config";
import type { PropsWithChildren } from "react";
import type { NextRouter } from "next/router";
import type { CSS } from "@stitches/react";

type NavLinksNormalProps = PropsWithChildren<{
  router: NextRouter
}>

const NavLinksNormal = ({children, router, ...otherProps}: NavLinksNormalProps) => {
  return (
    <Style style={NavLinksNormalStyles}>
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
  )
}

const NavLinksNormalStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  '@medium': {
    display: "none",
  }
};

export default NavLinksNormal;