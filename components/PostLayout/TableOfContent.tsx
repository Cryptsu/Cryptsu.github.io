import { useEffect, useState } from "react"
import useContent from "@/hooks/useContent";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentProps = PropsWithChildren<{}>

const TableOfContent = ({children, ...otherProps}: TableOfContentProps) => {
  const { headingInfos } = useContent();

  return (
    <Style style={TableOfContentStyles} {...otherProps}>
      {
        headingInfos.map((headingInfo, index) => 
          <Style key={index}>
            <Style elementName={HtmlConst.A} href={`#${headingInfo.headingID}`}
              style={TOCLinkStyles}
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
  fontSize: theme.fontSizes.toc,
  fontWeight: theme.fontWeights.toc,
  letterSpacing: theme.letterSpacings.toc,

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

const TOCLinkStyles: CSS = {
  color: theme.colors.toc,
  '&:visisted': {
    color: theme.colors.toc,
  },
}

export default TableOfContent;