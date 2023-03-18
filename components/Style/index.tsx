import React from "react";
import { styled } from "@/lib/styles/stiches.config";
import type { PropsWithChildren, ReactNode } from "react";

// TODO: This is where if somehow, in the future,
//       if stitches.dev work more on Static Extraction,
//       then we might consider changing this.
type StyleProps = PropsWithChildren<{
  style: any,
  isInline?: boolean
}>;

export default function Style({style, children, isInline=false}: StyleProps)
{
  // Somehow, wrap an element like this will cause 
  // serverside rendering to include all CSS styles
  // of the generated class during page load in <head/>.
  let CSSWrapper = styled("div", style);
  return (
    <CSSWrapper>
      {children}
    </CSSWrapper>
  )
  return (
    isInline
      ? <div style={style}>
          {children}
        </div>
      : <CSSWrapper>
          {children}
        </CSSWrapper>
  )
}