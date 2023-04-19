import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { AssetsConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type FooterProps = PropsWithChildren<{

}>

const Footer = ({children, ...otherProps}: FooterProps) => {
  return (
    <Style style={FooterStyles} {...otherProps}>
      {TxtConst.TXT_FOOTER}
    </Style>
  )
}

const FooterStyles: CSS = {
  paddingTop: 24,
  paddingBottom: 24,
  textAlign: "center",

  color: theme.colors.textLesser,
  fontFamily: theme.fonts.global,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: theme.letterSpacings.h5,

  border: 0,
  borderTop: 4,
  borderStyle: "dashed",
  borderColor: theme.colors.divider25,
};

export default Footer;