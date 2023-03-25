import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H1Props = PropsWithChildren<{

}>

const H1 = ({children, ...otherProps}: H1Props) => {
  return (
    <Style style={H1Styles} elementName={HtmlConst.H1} {...otherProps}>
      {children}
    </Style>
  )
}

const H1Styles: CSS = {
  // Font customizing
  fontFamily: `${theme.fonts.content} !important`,
  fontSize: `${theme.fontSizes.h1} !important`,
  fontWeight: `${theme.fontWeights.h1} !important`,
  letterSpacing: `${theme.letterSpacings.h1} !important`,
  lineHeight: theme.lineHeights.h1,
  color: theme.colors.contentText,
  textTransform: "uppercase",

  // Create a padding to divider
  paddingBottom: 8,

  // Create the divider
  borderBottom: 4,
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderStyle: "dashed",
  borderColor: theme.colors.divider,

  // Create margin
  marginTop: 16,
  marginBottom: 16,
};

export default H1;