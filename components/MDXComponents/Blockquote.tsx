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
      {children}
    </Style>
  )
}

const BlockquoteStyles: CSS = {
  // margin
  marginTop: "0.75em",
  marginBottom: "0.75em",
  marginLeft: "0.5em",
  marginRight: "0.5em",

  // Create somesort of box-like pattern
  paddingLeft: "2em",
  paddingRight: "2em",
  paddingTop: "0.5em",
  paddingBottom: "0.5em",

  // Box border
  borderLeft: "0.5em",
  borderRight: 0,
  borderTop: 0,
  borderBottom: 0,
  borderStyle: "solid",
  backgroundColor: theme.colors.quoteBackground,
  borderColor: theme.colors.quoteLegend,
  borderRadius: "1.5em",
  boxShadow: theme.shadows.depthShadow,

  // Text color
  color: theme.colors.textLLess,
};

export default Blockquote;
