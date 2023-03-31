import { useEffect, useState, useReducer } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentProps = PropsWithChildren<{}>

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
      action: { type: "add" | "modify", intersectValue: number, index: number }
    ) => {
            if (action.type === 'add')
              return [...content, action.intersectValue]
            content[action.index] = action.intersectValue;
            return [...content];
         }
  , []);

  ////////////////////////////////////////////////////////////////
  //  This part uses the collected refs from the headings.
  //  Observe it and return a value relative to viewport.
  ////////////////////////////////////////////////////////////////
  const { headingInfos } = useContent();
  useEffect(() => {
    let observers: IntersectionObserver[] = [];
    for (let index = 0; index < headingInfos.length; ++index) {
      UpdateIntersectionsArray({
        type: "add",
        intersectValue: 0,
        index: -1,
      });

      const observer = new IntersectionObserver(([entry]) => {
        UpdateIntersectionsArray({
          type: "modify",
          intersectValue: (
            entry.isIntersecting 
              ? 0 
              : entry.boundingClientRect.y < 0 
                  ? -1 
                  : 1
          ),
          index: index,
        });
      });
      observer.observe(headingInfos[index].headingRef.current!);
      observers.push(observer);
    }

    return () => {
      for (let observer of observers)
        observer.disconnect();
    };
  }, [headingInfos]);

  ////////////////////////////////////////////////////////////////
  //  This part uses changed intersections value
  //  to note which value is there right now.
  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log(intersections)
  }, [intersections])

  return (
    <Style style={TableOfContentStyles} {...otherProps}>
      <Style style={TOCHeaderStyles}>
        {TxtConst.TXT_TOC}
      </Style>
      {
        headingInfos.map((headingInfo, index) => 
          <Style key={index}>
            <Style elementName={HtmlConst.A} href={`#${headingInfo.headingID}`}
              style={TOCLinksStyles}
              css={{ 
                paddingLeft: `calc(16px * ${headingInfo.level - 1})`
              }} 
            >
              {headingInfo.headingContent} {` ${intersections[index]}`}
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

const TOCLinksStyles: CSS = {
  color: theme.colors.toc,
  '&:visisted': {
    color: theme.colors.toc,
  },
}

export default TableOfContent;