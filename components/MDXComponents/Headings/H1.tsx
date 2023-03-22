import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H1Props = PropsWithChildren<{

}>

const H1 = ({children, ...otherProps}: H1Props) => {
  return (
    <Style style={H1Styles}>
      {children}
    </Style>
  )
}

const H1Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h1,
  fontWeight: theme.fontWeights.h1,
  letterSpacing: theme.letterSpacings.h1,
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
};

export default H1;
