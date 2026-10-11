import Style from "@/components/Style";
import { theme } from "@/lib/styles/stitches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type MathBlockProps = PropsWithChildren<{

}>

const MathBlock = ({children, ...otherProps}: MathBlockProps) => {
  return (
    <Style style={MathBlockStyles} elementName={HtmlConst.SPAN} {...otherProps}>
      {children}
    </Style>
  )
}

const MathBlockStyles: CSS = {
  // for some reason, the math block
  // is scrollable despite the height
  // is right?
  '& > *': {
    overflowY: "hidden",
  },

  paddingTop: 12,
  paddingBottom: 12,
};

export default MathBlock;
