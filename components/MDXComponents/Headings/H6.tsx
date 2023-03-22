import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H6Props = PropsWithChildren<{

}>

const H6 = ({children, ...otherProps}: H6Props) => {
  return (
    <Style style={H6Styles}>
      {children}
    </Style>
  )
}

const H6Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h6,
  fontWeight: theme.fontWeights.h6,
  letterSpacing: theme.letterSpacings.h6,
  lineHeight: theme.lineHeights.h6,
  color: theme.colors.contentText,
  textTransform: "uppercase",
};

export default H6;
