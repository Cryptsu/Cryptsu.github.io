import React, { useContext } from "react";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import CodeBlockContent from "./CodeBlockContent";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockInnerProps = PropsWithChildren<{}>

const CodeBlockInner = ({children, ...otherProps}: CodeBlockInnerProps) => {
  // Get number of lines for display.
  const { showInner } = useContext(CodeBlockContext);
  return (
    <Style>
      <Style
        style={CodeBlockInnerStyles} 
        css={{
          display: showInner ? "" : "none"
        }}
        {...otherProps}
      >
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