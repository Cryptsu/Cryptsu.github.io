import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type MathBlockProps = PropsWithChildren<{

}>

const MathBlock = ({children, ...otherProps}: MathBlockProps) => {
  return (
    <Style style={MathBlockStyles} elementName={HtmlConst.DIV} {...otherProps}>
      {children}
    </Style>
  )
}

const MathBlockStyles: CSS = {
  color: theme.colors.contentText,
  overflowX: "auto",
};

export default MathBlock;