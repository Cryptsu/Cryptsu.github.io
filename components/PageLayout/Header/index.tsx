import Style from "@/components/Style"
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { theme } from "@/lib/styles/stiches.config";
import { ClassConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";

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
  gap: "0.625em",

  // Padding
  paddingLeft: "12.5em",
  paddingRight: "12.5em",
  '@larger': {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  '@large': {
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  // Global font
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,

  // Create the divider
  borderBottom: "0.25em",
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

  paddingTop: "1em",
  paddingBottom: "1em",
  [`&.${ClassConst.CLASS_MOBILE}`]: {
    paddingTop: "0.85em",
    paddingBottom: "0.85em",
  }
}

const LogoGroupStyles: CSS = {
  // For grid display
  gridArea: "logo", 

  // Others
  display: "flex",
  justifyContent: "center",
  color: theme.colors.black,

  // So that the word 'Cryptsu'
  // glows in appropriate area...
  paddingTop: "0.75em",
  paddingBottom: "0.75em",
  [`&.${ClassConst.CLASS_MOBILE}`]: {
    paddingTop: "0.6375em",
    paddingBottom: "0.6375em",
  }
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