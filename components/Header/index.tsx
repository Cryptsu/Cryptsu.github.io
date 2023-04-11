import Style from "@/components/Style"
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { theme } from "@/lib/styles/stiches.config";
import type { CSS } from "@stitches/react";
import { MiscConst } from "@/lib/consts";

const Header = () => {
  return (
    <Style style={HeaderStyles}>
      <Style style={NavLinkGroupStyles}>
        <NavLinks/>
      </Style>
      <Style style={LogoGroupStyles}>
        <Logo/>      
      </Style>
      <Style style={ToggleButtonsGroupStyles}>
        
      </Style>
    </Style>
  )
}

const HeaderStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'navlinks logo buttons'",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 10,
  height: MiscConst.HEADER_SIZE,

  // Padding
  paddingLeft: 200,
  paddingRight: 200,
  '@larger': {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  '@large': {
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  // Create the divider
  borderBottom: 4,
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderStyle: "dashed",
  borderColor: theme.colors.divider25,

  // Blur background
  backdropFilter: "blur(4px)",
  backgroundColor: theme.colors.headerBlur,
}

const NavLinkGroupStyles: CSS = {
  // For grid display
  gridArea: "navlinks",

  // Others
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
}

const LogoGroupStyles: CSS = {
  // For grid display
  gridArea: "logo", 

  // Others
  display: "flex",
  justifyContent: "center",
  color: theme.colors.black,
  paddingTop: 12,
  paddingBottom: 12,
}

const ToggleButtonsGroupStyles: CSS = {
  // For grid display
  gridArea: "buttons",

  // Others
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
}

export default Header;