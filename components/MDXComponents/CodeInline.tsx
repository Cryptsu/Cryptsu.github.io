import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeInlineProps = PropsWithChildren<{

}>

const CodeInline = ({children, ...otherProps}: CodeInlineProps) => {
  return (
    <Style 
      style={CodeInlineStyles} 
      elementName={HtmlConst.CODE} 
      {...otherProps}
    >
      {children}
    </Style>
  )
}

const CodeInlineStyles: CSS = {
  fontFamily: theme.fonts.code,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.primary,
  
  paddingLeft: 8,
  paddingRight: 8,
  backgroundColor: theme.colors.codeInnerBackground,
  borderRadius: 8,

  textTransform: "none",
  wordBreak: "break-word",
};

export default CodeInline;