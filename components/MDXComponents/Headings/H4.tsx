import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H4Props = PropsWithChildren<{

}>

const H4 = ({children, ...otherProps}: H4Props) => {
  return (
    <Style style={H4Styles} elementName={HtmlConst.H4} {...otherProps}>
      {children}
    </Style>
  )
}

const H4Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h4,
  fontWeight: theme.fontWeights.h4,
  letterSpacing: theme.letterSpacings.h4,
  lineHeight: theme.lineHeights.h4,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create margin
  marginTop: 12,
  marginBottom: 12,
};

export default H4;
