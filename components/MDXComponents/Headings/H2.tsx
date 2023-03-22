import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H2Props = PropsWithChildren<{

}>

const H2 = ({children, ...otherProps}: H2Props) => {
  return (
    <Style style={H2Styles}>
      {children}
    </Style>
  )
}

const H2Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h2,
  fontWeight: theme.fontWeights.h2,
  letterSpacing: theme.letterSpacings.h2,
  lineHeight: theme.lineHeights.h2,
  color: theme.colors.contentText,
  textTransform: "uppercase",
};

export default H2;
