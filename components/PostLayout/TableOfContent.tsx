import { useEffect, useRef, useReducer, useState, useMemo, useLayoutEffect } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { MiscConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren,  RefObject } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentProps = PropsWithChildren<{

}>

const TableOfContent = ({children, ...otherProps}: TableOfContentProps) => {
  ////////////////////////////////////////////////////////////////
  //
  //  This array contains values of -1, 0, or 1.
  //    -1 means that Y(headings[index]) < Y(viewport)
  //     0 means that headings[index] in viewport.
  //     1 means that Y(headings[index]) > Y(viewport)
  //
  ////////////////////////////////////////////////////////////////
  const [ intersections, UpdateIntersectionsArray ] = useReducer(
    (
      oldIntersectValues: number[], 
      newIntersectValues: number[],
    ) => {
            // Make sure something is always highlighted 
            // (except for the very first section with no header.)
            for (let index = 0; index < newIntersectValues.length; ++index) {
              if (index < newIntersectValues.length - 1) {
                if (newIntersectValues[index] == -1 && newIntersectValues[index + 1] == 1) {
                  newIntersectValues[index] = 0;
                  break;
                }
              } 
              else if (newIntersectValues[index] == -1) {
                newIntersectValues[index] = 0;
                break;
              }
            }

            return newIntersectValues;
         }
  , []);

  ////////////////////////////////////////////////////////////////
  //  This part uses the collected refs from the headings.
  //  Observe it and return a value relative to viewport.
  ////////////////////////////////////////////////////////////////
  const { headingInfos } = useContent();
  const onContentScroll = () => {
    let newIntersectValues: number[] = [];
    for (let index = 0; index < headingInfos.length; ++index) {
      let headingRect = headingInfos[index].headingRef.current?.getBoundingClientRect();
      let headingPosition = 2; 
      if (headingRect) {
        if (headingRect.top < -1) 
          headingPosition = -1;
        else if (headingRect.bottom > (window.innerHeight || document.documentElement.clientHeight) - MiscConst.HEADER_SIZE)
          headingPosition = 1;
        else
          headingPosition = 0;
      }  
      newIntersectValues.push(headingPosition);
    }

    // Not always the reducer will set 
    // the headingPosition value correctly.
    // It is intentional when you look at
    // the code :)
    UpdateIntersectionsArray(newIntersectValues);
  }

  // Track scrolling on the website.
  useEffect(() => { 
    window.addEventListener('scroll', onContentScroll);
    return (
      () => window.removeEventListener('scroll', onContentScroll)
    )
  })

  ////////////////////////////////////////////////////////////////
  //  This part anchors the table of content from scrolling 
  //  back to the top when component re-render.
  ////////////////////////////////////////////////////////////////
  const scrollRef = useRef<HTMLElement>(null);
  const scrollXYs = useMemo(() => {
    if (intersections && scrollRef.current)
      return [
        scrollRef.current.scrollLeft,
        scrollRef.current.scrollTop,
      ]
    return [0, 0];
  }, [intersections]);

  useLayoutEffect(() => {
    scrollRef.current?.scrollTo(scrollXYs[0], scrollXYs[1]);
  }, [intersections, scrollXYs])
    
  return (
    <Style ref={scrollRef} style={TableOfContentStyles} {...otherProps}>
      <Style style={TOCHeaderStyles}>
        {TxtConst.TXT_TOC}
      </Style>
      {
        headingInfos.map((headingInfo, index) => 
          <Style key={index} 
            style={TOCLinkWrapperStyles}
            css={{
              marginTop: headingInfo.level === 1 ? 4 : 0,
              marginLeft: `calc(1.5rem * ${headingInfo.level - 1})`,
              borderWidth: `0px 0px 0px ${intersections[index] == 0 ? 4 : 0}px`,
              fontWeight: intersections[index] == 0 ? theme.fontWeights.tocHighlighted : theme.fontWeights.toc,
              color: intersections[index] == 0 ? theme.colors.tocActive : theme.colors.toc,
            }}
          >
            <Style 
              onClick={
                () => {
                  // Has to do this instead of 
                  // using href because appearantly, 
                  // Chrome is unable to scroll
                  // at two places simutaneously...
                  let headingRect = headingInfo.headingRef.current?.getBoundingClientRect();
                  if (headingRect)
                    window.scrollTo({ 
                      top: window.scrollY + headingRect.y, 
                      behavior: "smooth" 
                    })
                }
              }
              style={TOCLinkStyles}
            >
              <Style>
                {headingInfo.headingContent}
              </Style>
            </Style>
          </Style>
        )
      }
    </Style>
  )
}

const TableOfContentStyles: CSS = {
  fontFamily: theme.fonts.toc,
  fontWeight: theme.fontWeights.toc,
  fontSize: theme.fontSizes.toc,
  letterSpacing: theme.letterSpacings.toc,
  color: theme.colors.toc,

  borderWidth: 4,
  borderColor: theme.colors.tocBorder,
  borderStyle: "solid",
  scrollBehavior: "auto",
  overflow: "auto",

  userSelect: "none",

  position: "sticky",
  top: "10vh",
  maxHeight: "calc(80vh)",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",

  marginLeft: 64,
  marginRight: 64,
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 8,
  paddingBottom: 16,
};

const TOCHeaderStyles: CSS = {
  color: theme.colors.tocHeader,
  fontSize: theme.fontSizes.tocHeader,
  fontWeight: theme.fontWeights.tocHeader,
  textAlign: "center",

  border: 0,
  margin: 0,
  borderBottom: 2,
  marginBottom: 16,
  paddingBottom: 8,
  borderStyle: "dashed",
  borderColor: theme.colors.tocDivider,

  '&:before': {
    content: "'< '",
    color: theme.colors.tocDivider,
  },

  '&:after': {
    content: "' />'",
    color: theme.colors.tocDivider,
  }
}

const TOCLinkWrapperStyles: CSS = {
  display: "flex",
  borderStyle: "solid",
  borderColor: theme.colors.toc,
}

const TOCLinkStyles: CSS = {
  padding: 0,
  paddingLeft: 8,
  paddingRight: 8,
  '&:visisted': {
    color: theme.colors.toc,
  },
  '&:hover': {
    color: theme.colors.tocActive
  }
}

export default TableOfContent;