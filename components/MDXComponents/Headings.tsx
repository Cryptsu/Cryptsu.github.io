import { useEffect, useRef, useState } from "react";
import useContent from "@/hooks/useContent";
import useOnce from "@/hooks/useOnce";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
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
    UpdateHeadingInfoReducer({
      headingContent: children, 
      headingID: id, 
      headingRef: headingRef,
      level: level,
    });
  }, []);

  return (
    <Style style={HeadingCommonStyles} css={HeadingStyles[level]} elementName={`h${level}`} {...otherProps}>
      <Style style={HeadingSelectStyles} ref={headingRef} id={id}/>
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

const HeadingSelectStyles: CSS = {
  position: "absolute",
  top: "-6rem",
  '@medium': {
    top: "-0.5rem",
  }
}

const HeadingCommonStyles: CSS = {
  position: "relative",
  textTransform: "uppercase",
  wordBreak: "break-word",
}

const HeadingStyles: {[level: number]: CSS} = {
  1: {
    // Font customizing
    fontSize: theme.fontSizes.h1,
    fontWeight: theme.fontWeights.h1,
    letterSpacing: theme.letterSpacings.h1,
    lineHeight: theme.lineHeights.h1,
    
    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  2: {
    // Font customizing
    fontSize: theme.fontSizes.h2,
    fontWeight: theme.fontWeights.h2,
    letterSpacing: theme.letterSpacings.h2,
    lineHeight: theme.lineHeights.h2,

    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  3: {
    // Font customizing
    fontSize: theme.fontSizes.h3,
    fontWeight: theme.fontWeights.h3,
    letterSpacing: theme.letterSpacings.h3,
    lineHeight: theme.lineHeights.h3,

    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  4: {
    // Font customizing
    fontSize: theme.fontSizes.h4,
    fontWeight: theme.fontWeights.h4,
    letterSpacing: theme.letterSpacings.h4,
    lineHeight: theme.lineHeights.h4,

    // Create margin
    marginTop: 16,
    marginBottom: 16,
  },

  5: {
    // Font customizing
    fontSize: theme.fontSizes.h5,
    fontWeight: theme.fontWeights.h5,
    letterSpacing: theme.letterSpacings.h5,
    lineHeight: theme.lineHeights.h5,

    // Create margin
    marginTop: 8,
    marginBottom: 8,
  },

  6: {
    // Font customizing
    fontSize: theme.fontSizes.h6,
    fontWeight: theme.fontWeights.h6,
    letterSpacing: theme.letterSpacings.h6,
    lineHeight: theme.lineHeights.h6,

    // Create margin
    marginTop: 8,
    marginBottom: 8,
  }
}