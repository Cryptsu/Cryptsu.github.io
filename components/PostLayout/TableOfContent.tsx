import { useEffect, useRef, useReducer, useState, useMemo, useLayoutEffect } from "react"
import useOnce from "@/hooks/useOnce";
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
  //     0 means that headings[index] in viewport ( or is the parent of headings[index] )
  //    -1 means that Y(headings[index]) < Y(viewport)
  //     1 means that Y(headings[index]) > Y(viewport)
  //
  ////////////////////////////////////////////////////////////////
  const { headingInfos } = useContent();
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

            // Now when the 0 values is known, also set 0 to
            // the parents of it.
            let indexHasZero = newIntersectValues.findIndex(intersectValue => intersectValue === 0);
            if (indexHasZero !== -1) {
              let currentLevel = headingInfos[indexHasZero].level;
              let currentIndex = indexHasZero - 1;
              while (currentIndex >= 0 && currentLevel >= 1) {
                while (currentIndex >= 0) {
                  if (headingInfos[currentIndex].level < currentLevel) {
                    newIntersectValues[currentIndex] = 0;
                    currentLevel = headingInfos[currentIndex].level;
                    break;
                  }
                  currentIndex--;
                }
              }
            }

            // This allows component to re-render only when
            // new values are updated.
            return (
              JSON.stringify(oldIntersectValues) === JSON.stringify(newIntersectValues)
                ? oldIntersectValues
                : newIntersectValues
            )
         }
  , []);

  ////////////////////////////////////////////////////////////////
  //  This part uses the collected refs from the headings.
  //  Observe it and return a value relative to viewport.
  ////////////////////////////////////////////////////////////////
  const onUpdateTableOfContent = () => {
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
    // Update during first load :)
    if (intersections.length === 0 && headingInfos.length !== 0)
      onUpdateTableOfContent();

    window.addEventListener('scroll', onUpdateTableOfContent);
    return (
      () => window.removeEventListener('scroll', onUpdateTableOfContent)
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
              marginTop: headingInfo.level === 1 && index !== 0 ? 4 : 0,
              marginLeft: `calc(24px * ${headingInfo.level - 1})`,
              borderWidth: `0px 0px 0px ${intersections[index] == 0 ? 4 : 0}px`,
              fontWeight: (
                intersections[index] == 0 
                  ? theme.fontWeights.bold 
                  : theme.fontWeights.normal
              ),
              color: (
                intersections[index] == 0 
                  ? theme.colors.textActive 
                  : theme.colors.textLess
              ),
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
            >
              <Style style={TOCLinkStyles}>
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
  fontFamily: theme.fonts.global,
  fontWeight: theme.fontWeights.h6,
  fontSize: theme.fontSizes.h6,
  letterSpacing: theme.letterSpacings.h4,
  color: theme.colors.textLess,
  wordBreak: "break-word",

  borderWidth: 4,
  borderColor: theme.colors.borderGeneral,
  borderStyle: "solid",
  scrollBehavior: "auto",
  overflow: "auto",

  userSelect: "none",

  position: "sticky",
  top: MiscConst.HEADER_SIZE + 32,
  maxHeight: `calc((100vh - ${MiscConst.HEADER_SIZE + 32}px) * 0.9)`,
  width: "110%",
  maxWidth: "320px",
  display: "flex",
  flexDirection: "column",

  marginLeft: "min(20%, 96px)",
  marginRight: "15%",
  paddingLeft: 32,
  paddingRight: 32,

  '&>:last-child': {
    marginBottom: 16,
  }
};

const TOCHeaderStyles: CSS = {
  color: theme.colors.tertiary,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.bold,
  textAlign: "center",

  border: 0,
  margin: 0,
  borderBottom: 2,
  marginBottom: 16,
  marginTop: 16,
  paddingBottom: 8,
  borderStyle: "dashed",
  borderColor: theme.colors.divider25,

  '&:before': {
    content: "'< '",
    color: theme.colors.divider25,
  },

  '&:after': {
    content: "' />'",
    color: theme.colors.divider25,
  },
}

const TOCLinkWrapperStyles: CSS = {
  display: "flex",
  borderStyle: "solid",
  borderColor: theme.colors.textLess,
}

const TOCLinkStyles: CSS = {
  padding: 0,
  paddingLeft: 8,
  paddingRight: 8,
  '&:visisted': {
    color: theme.colors.textLess,
  },
  '&:hover': {
    color: theme.colors.textActive,
    cursor: "pointer",
  },
  '&:active': {
    transform: "translateY(4px)",
    color: theme.colors.textActive
  }
}

export default TableOfContent;