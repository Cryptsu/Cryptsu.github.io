import React, { useMemo } from "react";
import { styled } from "@/lib/styles/stitches.config";
import { HtmlConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";
import type { PropsWithChildren, ForwardedRef } from "react";
import type { NextNode } from "@/types/next.d";

type StyleProps = PropsWithChildren<{
  // Default style
  style?: CSS, // TODO: remove this
  styles?: CSS | CSS[],

  // CSS overwrite!
  css?: CSS,

  // Inline style to children
  as?: NextNode,

  // Customize element name
  elementName?: typeof HtmlConst[keyof (typeof HtmlConst)],

  // Other props
  [x: string]: any,
}>;

const StyleWithRef = ({
    style={}, 
    styles={},
    children, 
    elementName=HtmlConst.DIV, 
    ...otherProps
  }: StyleProps, 
  
  ref: ForwardedRef<HTMLElement>
) => {
  // TODO: remove this backward-compatible stuffs
  const composedStyles = useMemo(
    () => [
      ...(style && Object.keys(style).length ? [style] : []),
      ...(Array.isArray(styles) ? styles : (Object.keys(styles).length ? [styles] : [])),
    ],
    [JSON.stringify(style), JSON.stringify(styles)]
  )

  // Somehow, wrap an element like this will cause 
  // serverside rendering to include all CSS styles
  // of the generated class during page load in <head/>.
  const CSSWrapper = styled(elementName, ...composedStyles);
  return (
    <CSSWrapper ref={ref} {...otherProps}>
      {children}
    </CSSWrapper>
  )
}

const Style = React.forwardRef<HTMLElement, StyleProps>(StyleWithRef);

export default Style;
