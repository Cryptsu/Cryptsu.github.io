import Style from "@/components/Style"
import { theme } from "@/lib/styles/stitches.config";
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
  margin: "0.75em -1em",
  padding: "0.75em 1.5em",

  // Box border
  borderLeft: "0.5em",
  borderRight: 0,
  borderTop: 0,
  borderBottom: 0,
  borderStyle: "groove",
  borderRadius: "1em",
  backgroundColor: theme.colors.quoteBackground,
  backgroundImage: theme.colors.blockBackgroundShade,
  borderColor: theme.colors.quoteLegend,
  boxShadow: theme.shadows.depthShadow,

  // Text color
  color: theme.colors.textLess,
};

export default Blockquote;
