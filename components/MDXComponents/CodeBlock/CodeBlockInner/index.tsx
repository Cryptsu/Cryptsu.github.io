import React, { useContext, useRef, useLayoutEffect, useState, useEffect } from "react";
import useOnce from "@/hooks/useOnce";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import CodeBlockContent from "./CodeBlockContent";
import { theme, keyframes } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockInnerProps = PropsWithChildren<{}>

const CodeBlockInner = ({children, ...otherProps}: CodeBlockInnerProps) => {
  // Get number of lines for display.
  const blockRef = useRef<HTMLElement>(null);
  const { 
    showInner, 
    wrapCode, 
    blockHeight,
    isFirstTime,

    UpdateBlockHeightFn
  } = useContext(CodeBlockContext);

  useLayoutEffect(() => {
    let blockItem = blockRef.current;
    if (blockItem && showInner && blockHeight === null) {
      UpdateBlockHeightFn(blockItem.clientHeight);
    }
  });

  return (
    <Style>
      <Style
        ref={blockRef}
        style={CodeBlockInnerStyles} 
        css={
          !isFirstTime
            ? {...(
                    showInner
                      ? CodeBlockIfShowStyles
                      : CodeBlockIfHiddenStyles
                  ), height: blockHeight
              }
            : {}
        }
        {...otherProps}
      >
        <CodeBlockContent wrapCode={wrapCode}>
          {children}
        </CodeBlockContent>
      </Style>
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