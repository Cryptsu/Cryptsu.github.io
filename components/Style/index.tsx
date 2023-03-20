import React from "react";
import { styled } from "@/lib/styles/stiches.config";
import type { CSS } from "@stitches/react";
import type { PropsWithChildren } from "react";
import type { NextNode } from "@/types/next.d";

// TODO: This is where if somehow, in the future,
//       if stitches.dev work more on Static Extraction,
//       then we might consider changing this.
type StyleProps = PropsWithChildren<{
  // Default style
  style: CSS,

  // CSS overwrite!
  css?: CSS,

  // Inline style to children
  as?: NextNode,

  // Other props
  [x: string]: any,
}>;

export default function Style({style, children, ...otherProps}: StyleProps)
{
  // Somehow, wrap an element like this will cause 
  // serverside rendering to include all CSS styles
  // of the generated class during page load in <head/>.
  let CSSWrapper = styled("div", style);
  return (
    <CSSWrapper {...otherProps}>
      {children}
    </CSSWrapper>
  )
}