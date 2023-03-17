import Logo from "./Logo";
import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { CSSProperties } from "react";
import hexToRgba from "hex-to-rgba";
import { AssetsConst } from "@/lib/consts";

const Header = () => {
  return (
    <Style style={ExpensiveStyles}>
      <Style style={HeaderStyles} isInline={true}>
        <Style style={LogoGroupStyles} isInline={true}>
          <Logo/>      
        </Style>
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
}

const ExpensiveStyles = {
  backdropFilter: "blur(4px)",
  backgroundColor: theme.colors.blurBackground,
}

export default Header;