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
  // Create margin
  marginTop: 12,
  marginBottom: 12,
  wordBreak: "break-word",
};

export default Paragraph;
