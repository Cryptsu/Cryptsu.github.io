import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type H5Props = PropsWithChildren<{

}>

const H5 = ({children, ...otherProps}: H5Props) => {
  return (
    <Style style={H5Styles} elementName={HtmlConst.H5}>
      {children}
    </Style>
  )
}

const H5Styles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.h5,
  letterSpacing: theme.letterSpacings.h5,
  lineHeight: theme.lineHeights.h5,
  color: theme.colors.contentText,
  textTransform: "uppercase",
};

export default H5;
