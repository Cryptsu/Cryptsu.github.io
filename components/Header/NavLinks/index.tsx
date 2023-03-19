import NavLink from "./NavLink";
import Style from "@/components/Style";
import { LinkConst, TxtConst } from "@/lib/consts";
import { theme } from "@/lib/styles/stiches.config";

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

const NavLinksStyles = {
  display: "grid",
  gap: 10,
  fontSize: theme.fontSizes.navlink,
  letterSpacing: theme.letterSpacings.navlink,
}

export default NavLinks;