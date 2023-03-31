import { useEffect, useState } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import useIsInViewport from "@/hooks/useIsInViewPort";

type TableOfContentProps = PropsWithChildren<{}>

const TableOfContent = ({children, ...otherProps}: TableOfContentProps) => {
  const { headingInfos } = useContent();
  const headingCmpViews = headingInfos.map(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    headingInfo => useIsInViewport(headingInfo.headingRef)
  )
  console.log(headingCmpViews)

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
              {headingInfo.headingContent}
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