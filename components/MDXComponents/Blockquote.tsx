import Style from "@/components/Style"
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type BlockquoteProps = PropsWithChildren<{

}>

const Blockquote = ({children, ...otherProps}: BlockquoteProps) => {
  return (
    <Style style={BlockquoteStyles} elementName={HtmlConst.BLOCKQUOTE} {...otherProps}>
      <Style style={BlockquoteInnerStyles}>
        {children}
      </Style>
    </Style>
  )
}

const BlockquoteStyles: CSS = {
  // Font customizing
  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.content,
  fontWeight: theme.fontWeights.content,
  letterSpacing: theme.letterSpacings.content,
  lineHeight: theme.lineHeights.content,

  // margin
  marginTop: 12,
  marginBottom: 12,
  marginLeft: 8,
  marginRight: 8,

  // Create somesort of box-like pattern
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 8,
  paddingBottom: 8,

  // Box border
  borderLeft: 8,
  borderRight: 0,
  borderTop: 0,
  borderBottom: 0,
  borderStyle: "solid",
  backgroundColor: theme.colors.quoteBackground,
  borderColor: theme.colors.quoteLegend,
  borderRadius: 24,
};

const BlockquoteInnerStyles: CSS = {
  opacity: 0.75,
}

export default Blockquote;