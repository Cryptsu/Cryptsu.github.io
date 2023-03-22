import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ParagraphProps = PropsWithChildren<{

}>

const Paragraph = ({children, ...otherProps}: ParagraphProps) => {
  console.log(children)
  return (
    <Style style={ParagraphStyles} elementName={HtmlConst.P}>
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
};

export default Paragraph;
