import NavLink from "./NavLink";
import Style from "@/components/Style";
import { LinkConst, TxtConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";

const NavLinks = () => {
  return (
    <Style style={NavLinksStyles}>
      <NavLink href={LinkConst.LINK_HOME}>
        {TxtConst.TXT_NAV_HOME}
      </NavLink>
      <NavLink href={LinkConst.LINK_TEST}>
        {TxtConst.TXT_NAV_TEST}
      </NavLink>
    </Style>
  )
}

const NavLinksStyles: CSS = {
  display: "grid",
  gap: 10,
}

export default NavLinks;