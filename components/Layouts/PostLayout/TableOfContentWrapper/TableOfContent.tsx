import { useEffect, useRef, useReducer, useMemo, useLayoutEffect } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentProps = PropsWithChildren<{
  css?: CSS
}>

const TableOfContent = ({children, css, ...otherProps}: TableOfContentProps) => {
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
        else if (headingRect.bottom > (window.innerHeight || document.documentElement.clientHeight) - 72)
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
    <Style ref={scrollRef} style={TableOfContentStyles} css={css} {...otherProps}>
      <Style style={TOCHeaderStyles}>
        {TxtConst.TXT_TOC}
      </Style>
      {
        headingInfos.map((headingInfo, index) => 
          <Style key={index} 
            style={TOCLinkWrapperStyles}
            css={{
              marginLeft: `calc(1.5em * ${headingInfo.level - 1})`,
              marginTop: (
                headingInfo.level === 1 && index !== 0 
                  ? "0.5em" 
                  : 0
              ),
              fontSize: (
                headingInfo.level === 1 
                  ? theme.fontSizes.h5 
                  : theme.fontSizes.h6
              ),
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
              css={{
                position: "absolute",
                height: "100%",        
                borderStyle: "solid",
                borderColor: theme.colors.textLess,
                borderWidth: `0px 0px 0px ${
                  intersections[index] == 0 
                    ? "0.25em" 
                    : 0
                }`,
              }}
            />
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
  letterSpacing: theme.letterSpacings.h4,
  wordBreak: "break-word",

  borderWidth: "0.25em",
  borderColor: theme.colors.borderGeneral,
  borderStyle: "solid",
  scrollBehavior: "auto",
  overflow: "auto",

  userSelect: "none",
  display: "flex",
  flexDirection: "column",

  paddingLeft: "2em",
  paddingRight: "2em",

  '&>:last-child': {
    marginBottom: "1em",
  },

  '&::-webkit-scrollbar:vertical': {
    width: 4,
  },

  '&::-webkit-scrollbar-track:vertical:hover': {
    backgroundImage: `none`,
  }
};

const TOCHeaderStyles: CSS = {
  color: theme.colors.tertiary,
  fontSize: theme.fontSizes.h5,
  fontWeight: theme.fontWeights.bold,
  textAlign: "center",

  border: 0,
  margin: 0,
  borderBottom: "0.125em",
  marginBottom: "1em",
  marginTop: "1em",
  paddingBottom: "0.5em",
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
  position: "relative",
  display: "flex",
}

const TOCLinkStyles: CSS = {
  padding: 0,
  paddingLeft: "0.75em",
  paddingRight: "0.75em",
  '&:visisted': {
    color: theme.colors.textLess,
  },
  '&:hover': {
    color: theme.colors.textActive,
    cursor: "pointer",
  },
  '&:active': {
    transform: "translateY(0.25em)",
    color: theme.colors.textActive
  }
}

export default TableOfContent;