import { useEffect, useRef, useReducer, useState } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
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
      content: number[], 
      action: { type: "modify", intersectValue: number, index: number }
    ) => {
            // Make sure something is always highlighted 
            // (except for the very first section with no header.)
            if (action.index >= 1 && action.intersectValue === 1 && content[action.index - 1] === -1)
              content[action.index - 1] = 0;

            // This also does the same but with the last element :)
            if (action.index === content.length - 1 && action.intersectValue === -1)
              content[action.index] = 0;
            else 
              content[action.index] = action.intersectValue;

            // Return the modified array so that they can detect change :)
            return [...content];
         }
  , []);

  ////////////////////////////////////////////////////////////////
  //  This part uses the collected refs from the headings.
  //  Observe it and return a value relative to viewport.
  ////////////////////////////////////////////////////////////////
  const { headingInfos } = useContent();
  const onContentScroll = () => {
    for (let index = 0; index < headingInfos.length; ++index) {
      let headingRect = headingInfos[index].headingRef.current?.getBoundingClientRect();
      let headingPosition = 2; 
      if (headingRect) {
        if (headingRect.top < 0) 
          headingPosition = -1;
        else if (headingRect.bottom > (window.innerHeight || document.documentElement.clientHeight))
          headingPosition = 1;
        else
          headingPosition = 0;
      }  
        
      // Not always the reducer will set 
      // the headingPosition value correctly.
      // It is intentional when you look at
      // the code :)
      UpdateIntersectionsArray({
        type: "modify",
        intersectValue: headingPosition,
        index: index
      })
    }
  }

  // Track scrolling across website.
  useEffect(() => { 
    window.addEventListener('scroll', onContentScroll);
    return (
      () => window.removeEventListener('scroll', onContentScroll)
    )
  })

  return (
    <Style style={TableOfContentStyles} {...otherProps}>
      <Style style={TOCHeaderStyles}>
        {TxtConst.TXT_TOC}
      </Style>
      {
        headingInfos.map((headingInfo, index) => 
          <Style key={index} 
            style={TOCLinksWrapperStyles}
            css={{
              marginLeft: `calc(16px * ${headingInfo.level - 1})`,
              borderWidth: intersections[index] == 0 ? 4 : 0,
              fontWeight: intersections[index] == 0 ? theme.fontWeights.tocHighlighted : theme.fontWeights.toc,
              borderTop: 0,
              borderBottom: 0,
              borderRight: 0,
            }}
          >
            <Style 
              elementName={HtmlConst.A} 
              href={`#${headingInfo.headingID}`} 
              style={TOCLinksStyles}
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

  borderWidth: 2,
  borderColor: theme.colors.tableBorder,
  borderStyle: "solid",

  position: "sticky",
  top: "10vh",
  maxHeight: "calc(70vh)",
  maxWidth: "400px",
  overflow: "auto",

  marginLeft: 64,
  marginRight: 64,
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 16,
  paddingBottom: 16,
};

const TOCHeaderStyles: CSS = {
  fontSize: theme.fontSizes.tocHeader,
  fontWeight: theme.fontWeights.tocHeader,
  textAlign: "center",

  border: 0,
  margin: 0,
  borderBottom: 4,
  marginBottom: 16,
  paddingBottom: 4,
  borderStyle: "solid",
  borderColor: theme.colors.tocDivider,
}

const TOCLinksWrapperStyles: CSS = {
  display: "flex",
  borderStyle: "solid",
  borderColor: theme.colors.toc,
}

const TOCLinksStyles: CSS = {
  padding: 0,
  paddingLeft: 8,
  color: theme.colors.toc,
  '&:visisted': {
    color: theme.colors.toc,
  },
}

export default TableOfContent;