import Logo from "./Logo";
import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";

const Header = () => {
  return (
    <Style style={HeaderStyles}>
      <Style style={NavLinkGroupStyles}>
        defadsfasfsdaffdsfsafa
      </Style>
      <Style style={LogoGroupStyles}>
        <Logo/>      
      </Style>
      <Style style={ButtonsGroupStyles}>
        abc
      </Style>
    </Style>
  )
}

const HeaderStyles = {
  display: "grid",
  gridTemplateAreas: "'navlinks logo buttons'",
  gridTemplateColumns: "2fr 1fr 2fr",
  gap: "10px",

  // Padding
  paddingLeft: 200,
  paddingRight: 200,

  // Create the divider
  borderBottom: 4,
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,

  // Blur background
  backdropFilter: "blur(4px)",
  backgroundColor: theme.colors.blurBackground,
}

const NavLinkGroupStyles = {
  // For grid display
  gridArea: "navlinks",

  // Others
  color: theme.colors.primary,
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
}

const LogoGroupStyles = {
  // For grid display
  gridArea: "logo", 

  // Others
  display: "flex",
  justifyContent: "center",
  color: theme.colors.black,
  paddingTop: 12,
  paddingBottom: 12,
}

const ButtonsGroupStyles = {
  // For grid display
  gridArea: "buttons",

  // Others
  color: theme.colors.primary,
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
}

export default Header;