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
  // Code line number and content
  // must have exact font styles
  // since they have to be matched to
  // be aligned correctly.
  fontSize: `${theme.fontSizes.code} !important`,
  letterSpacing: theme.letterSpacings.code,
  lineHeight: theme.lineHeights.code,

  // In Firefox, the scrollbar will cover content -.-
  // So there need a padding on the bottom... (sigh)
  paddingBottom: 8,   
  overflow: "auto",

  display: "flex",
  flexDirection: "row",
  gap: 8,
};

export default CodeBlockInner;