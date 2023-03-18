import Logo from "./Logo";
import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";

const Header = () => {
  return (
    <Style style={HeaderStyles}>
      <Style style={LogoGroupStyles}>
        <Logo/>      
      </Style>
    </Style>
  )
}

const LogoGroupStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.colors.black,
  paddingTop: 12,
  paddingBottom: 12,
}

const HeaderStyles = {
  width: "100%",
  borderBottom: 4,
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,
  position: "relative",
  backdropFilter: "blur(4px)",
  backgroundColor: theme.colors.blurBackground,
}

export default Header;