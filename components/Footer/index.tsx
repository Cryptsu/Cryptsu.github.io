import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
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

  fontFamily: theme.fonts.footer,
  fontSize: theme.fontSizes.footer,
  fontWeight: theme.fontWeights.footer,
  letterSpacing: theme.letterSpacings.footer,
  color: theme.colors.footerText,

  border: 0,
  borderTop: 4,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,
};

export default Footer;