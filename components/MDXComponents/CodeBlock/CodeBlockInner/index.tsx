import React from "react";
import Style from "@/components/Style";
import CodeLineNumber from "./CodeLineNumber";
import CodeBlockContent from "./CodeBlockContent";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockInnerProps = PropsWithChildren<{

}>

const CodeBlockInner = ({children, ...otherProps}: CodeBlockInnerProps) => {
  // Get number of lines for display.
  const noLines = React.Children.count(children);

  return (
    <Style style={CodeBlockInnerStyles} {...otherProps}>
      <CodeLineNumber noLines={noLines}/>
      <CodeBlockContent>
        {children}
      </CodeBlockContent>
    </Style>
  )
}

const CodeBlockInnerStyles: CSS = {
  fontSize: `${theme.fontSizes.codeBlock} !important`,
  letterSpacing: theme.letterSpacings.codeBlock,
  lineHeight: theme.lineHeights.code,

  overflow: "auto",
  // In Firefox, the scrollbar will cover content -.-
  // So there need a padding on the bottom... (sigh)
  paddingBottom: 8,   

  display: "flex",
  flexDirection: "row",
  gap: 8,
};

export default CodeBlockInner;