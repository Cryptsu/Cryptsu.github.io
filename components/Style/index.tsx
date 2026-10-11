import React from "react";
import { styled } from "@/lib/styles/stitches.config";
import { HtmlConst } from "@/lib/consts";
import type { CSS } from "@stitches/react";
import type { PropsWithChildren, ForwardedRef } from "react";
import type { NextNode } from "@/types/next.d";

type StyleProps = PropsWithChildren<{
  // Default style
  style?: CSS,
  styles?: CSS[],

  // CSS overwrite!
  css?: CSS,

  // Inline style to children
  as?: NextNode,

  // Customize element name
  elementName?: typeof HtmlConst[keyof (typeof HtmlConst)],

  // Other props
  [x: string]: any,
}>;

function processStyles(styles?: CSS | CSS[]) {
  if (!styles)
    return [];

  if (Array.isArray(styles))
    return styles.filter((style) => style && Object.keys(style).length)

  // fallback to CSS
  return Object.keys(styles).length ? [styles] : [];
}

const StyleWithRef = ({
    style={},
    styles=[],
    children, 
    elementName=HtmlConst.DIV, 
    ...otherProps
  }: StyleProps, 
  
  ref: ForwardedRef<HTMLElement>
) => {
  const processedStyles = [
    ...processStyles(style),
    ...processStyles(styles)
  ];

  // Somehow, wrap an element like this will cause 
  // serverside rendering to include all CSS styles
  // of the generated class during page load in <head/>.
  const CSSWrapper = styled(elementName, ...processedStyles);
  return (
    <CSSWrapper ref={ref} {...otherProps}>
      {children}
    </CSSWrapper>
  )
}

const Style = React.forwardRef<HTMLElement, StyleProps>(StyleWithRef);

export default Style;
