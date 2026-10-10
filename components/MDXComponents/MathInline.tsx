import Style from "@/components/Style";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type MathInlineProps = PropsWithChildren<{

}>

const MathInline = ({children, ...otherProps}: MathInlineProps) => {
  return (
    <Style style={MathInlineStyles} elementName={HtmlConst.SPAN} {...otherProps}>
      {children}
    </Style>
  )
}

const MathInlineStyles: CSS = {
  overflowX: "auto",
  textTransform: "none",
};

export default MathInline;
