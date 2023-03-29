import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableOfContentProps = PropsWithChildren<{

}>

const TableOfContent = ({children, ...otherProps}: TableOfContentProps) => {
  return (
    <Style style={TableOfContentStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const TableOfContentStyles: CSS = {
  fontFamily: theme.fonts.toc,
  fontSize: theme.fontSizes.toc,
  fontWeight: theme.fontWeights.toc,
  letterSpacing: theme.letterSpacings.toc,
  color: theme.colors.toc,

  borderWidth: 2,
  borderColor: theme.colors.tableBorder,
  borderStyle: "solid",

  position: "sticky",
  top: 80,

  marginLeft: 40,
  marginRight: 40,
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 16,
  paddingBottom: 16,
};

export default TableOfContent;