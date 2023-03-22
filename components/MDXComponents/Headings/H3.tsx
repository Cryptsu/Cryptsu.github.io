import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H3Props = PropsWithChildren<{

}>

const H3 = ({children, ...otherProps}: H3Props) => {
  return (
    <Style style={H3Styles} elementName={HtmlConst.H3}>
      {children}
    </Style>
  )
}

const H3Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h3,
  fontWeight: theme.fontWeights.h3,
  letterSpacing: theme.letterSpacings.h3,
  lineHeight: theme.lineHeights.h3,
  color: theme.colors.contentText,
  textTransform: "uppercase",
};

export default H3;
