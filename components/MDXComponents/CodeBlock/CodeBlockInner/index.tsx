import React, { useContext, useRef, useLayoutEffect, useState, useEffect } from "react";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import CodeBlockContent from "./CodeBlockContent";
import { theme, keyframes } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockInnerProps = PropsWithChildren<{}>

const CodeBlockInner = ({children, ...otherProps}: CodeBlockInnerProps) => {
  const innerRef = useRef<HTMLElement>(null);
  const { 
    showInner, 
    wrapCode, 
    blockHeight,
    shouldToggleAnimation,
    UpdateBlockHeightFn
  } = useContext(CodeBlockContext);

  useLayoutEffect(() => {
    let innerItem = innerRef.current;
    if (innerItem) {
      UpdateBlockHeightFn(innerItem.scrollHeight);
    }
  });

  return (
    <Style
      style={CodeBlockInnerStyles} 
      css={
        !shouldToggleAnimation
          ? {
              height: showInner 
                        ? "auto" 
                        : "0px",
              opacity: showInner
                        ? 1
                        : 0
            }
          : {...(
                  showInner
                    ? CodeBlockIfShowStyles
                    : CodeBlockIfHiddenStyles
                ), height: blockHeight
            }
      }
      {...otherProps}
    >
      <CodeBlockContent 
        wrapCode={wrapCode} 
        elementRef={innerRef}
      >
        {children}
      </CodeBlockContent>
    </Style>
  )
}

const CodeBlockIfShowStyles: CSS = {
  animation: `${keyframes({
    "0%": {
      opacity: 0,
      height: 0,
    },
    "100%": {
      opacity: 1,
    }
  })} 1s ease forwards`,
}

const CodeBlockIfHiddenStyles: CSS = {
  animation: `${keyframes({
    "100%": {
      opacity: 0,
      height: 0,
    }
  })} 1s ease forwards`,
}

const CodeBlockInnerStyles: CSS = {
  // Code line number and content
  // must have exact font styles
  // since they have to be matched to
  // be aligned correctly.
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  lineHeight: theme.lineHeights.h5,
  '@small': {
    fontSize: theme.fontSizes.h6,
    letterSpacing: theme.letterSpacings.h6,
    lineHeight: theme.lineHeights.h6,
  },

  display: "flex",
  flexDirection: "row",
  gap: 8,
};

export default CodeBlockInner;