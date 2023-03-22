import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ParagraphProps = PropsWithChildren<{

}>

const Paragraph = ({children, ...otherProps}: ParagraphProps) => {
  return (
    <Style style={ParagraphStyles} elementName={HtmlConst.P} {...otherProps}>
      {children}
    </Style>
  )
}

const ParagraphStyles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.content,
  fontWeight: theme.fontWeights.content,
  letterSpacing: theme.letterSpacings.content,
  lineHeight: theme.lineHeights.content,
  color: theme.colors.contentText,

  // Create margin
  marginTop: 12,
  marginBottom: 12,
};

export default Paragraph;
