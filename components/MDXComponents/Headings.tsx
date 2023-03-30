import { useEffect, useRef, useState } from "react";
import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type HeadingProps = PropsWithChildren<{
  level: 1 | 2 | 3 | 4 | 5 | 6,
  id?: string,
}>

const Heading = ({children, level=1, id="", ...otherProps}: HeadingProps) => {
  const headingRef = useRef<HTMLElement>(null);
  const { UpdateHeadingInfoReducer } = useContent();

  useOnce(() => {
    UpdateHeadingInfoReducer(
      {
        name: "append",
        data: {
          headingContent: children, 
          headingID: id, 
          cmpViewPort: -1,
          level: level,
        }
      }
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log("changing", id)
      UpdateHeadingInfoReducer(
        {
          name: "updateVisibility",
          data: {
            headingContent: children, 
            headingID: id, 
            cmpViewPort: (
              entry.isIntersecting
                ? 0
                : entry.boundingClientRect.y < 0 ? 1 : -1
            ),
            level: level,
          }
        }
      );
    });
    observer.observe(headingRef?.current!);
    return () => observer.disconnect();
  });

  return (
    <Style ref={headingRef} style={HeadingStyles[level]} elementName={`h${level}`} id={id} {...otherProps}>
      {children}
    </Style>
  )
}

export const H1 = (props: PropsWithChildren<{}>) => <Heading level={1} {...props}/>
export const H2 = (props: PropsWithChildren<{}>) => <Heading level={2} {...props}/>
export const H3 = (props: PropsWithChildren<{}>) => <Heading level={3} {...props}/>
export const H4 = (props: PropsWithChildren<{}>) => <Heading level={4} {...props}/>
export const H5 = (props: PropsWithChildren<{}>) => <Heading level={5} {...props}/>
export const H6 = (props: PropsWithChildren<{}>) => <Heading level={6} {...props}/>

const HeadingStyles: {[level: number]: CSS} = {
  1: {
    // Font customizing
    fontFamily: `${theme.fonts.content} !important`,
    fontSize: `${theme.fontSizes.h1} !important`,
    fontWeight: `${theme.fontWeights.h1} !important`,
    letterSpacing: `${theme.letterSpacings.h1} !important`,
    lineHeight: theme.lineHeights.h1,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create a padding to divider
    paddingBottom: 8,

    // Create the divider
    borderBottom: 4,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderStyle: "dashed",
    borderColor: theme.colors.divider,

    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  2: {
    // Font customizing
    fontFamily: theme.fonts.content,
    fontSize: theme.fontSizes.h2,
    fontWeight: theme.fontWeights.h2,
    letterSpacing: theme.letterSpacings.h2,
    lineHeight: theme.lineHeights.h2,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  3: {
    // Font customizing
    fontFamily: theme.fonts.content,
    fontSize: theme.fontSizes.h3,
    fontWeight: theme.fontWeights.h3,
    letterSpacing: theme.letterSpacings.h3,
    lineHeight: theme.lineHeights.h3,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create margin
    marginTop: 12,
    marginBottom: 12,
  },

  4: {
    // Font customizing
    fontFamily: theme.fonts.content,
    fontSize: theme.fontSizes.h4,
    fontWeight: theme.fontWeights.h4,
    letterSpacing: theme.letterSpacings.h4,
    lineHeight: theme.lineHeights.h4,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create margin
    marginTop: 12,
    marginBottom: 12,
  },

  5: {
    // Font customizing
    fontFamily: theme.fonts.content,
    fontSize: theme.fontSizes.h5,
    fontWeight: theme.fontWeights.h5,
    letterSpacing: theme.letterSpacings.h5,
    lineHeight: theme.lineHeights.h5,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create margin
    marginTop: 8,
    marginBottom: 8,
  },

  6: {
    // Font customizing
    fontFamily: theme.fonts.content,
    fontSize: theme.fontSizes.h6,
    fontWeight: theme.fontWeights.h6,
    letterSpacing: theme.letterSpacings.h6,
    lineHeight: theme.lineHeights.h6,
    color: theme.colors.contentText,
    textTransform: "uppercase",

    // Create margin
    marginTop: 8,
    marginBottom: 8,
  }
}