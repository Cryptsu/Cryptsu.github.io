import React from "react";
import Style from "@/components/Style";
import CodeLineNumber from "./CodeLineNumber";
import CodeBlockContent from "./CodeBlockContent";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { CodeBlockLayoutFnsType, CodeBlockLayoutStatesType } from "../";

type CodeBlockInnerProps = PropsWithChildren<{
  layoutFns: CodeBlockLayoutFnsType,
  layoutStates: CodeBlockLayoutStatesType,
}>

const CodeBlockInner = ({children, layoutFns, layoutStates, ...otherProps}: CodeBlockInnerProps) => {
  // Get number of lines for display.
  const noLines = React.Children.count(children);

  return (
    <Style>
      <Style
        style={CodeBlockInnerStyles} 
        css={{
          display: layoutStates.showInner ? "" : "none"
        }}
        {...otherProps}
      >
        <CodeLineNumber noLines={noLines}/>
        <CodeBlockContent>
          {children}
        </CodeBlockContent>
      </Style>
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

  display: "flex",
  flexDirection: "row",
  gap: 8,
};

export default CodeBlockInner;