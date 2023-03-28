import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TableProps = PropsWithChildren<{

}>

const Table = ({children, ...otherProps}: TableProps) => {
  return (
    <Style style={TableWrapperStyles}>
      <Style style={TableStyles} elementName={HtmlConst.TABLE} {...otherProps}>
        {children}
      </Style>
    </Style>
  )
}

const TableWrapperStyles: CSS = {
  color: theme.colors.contentText,
  fontSize: theme.fontSizes.content,
  fontFamily: theme.fonts.content,
  letterSpacing: theme.letterSpacings.content,
  wordBreak: "break-all",
  overflowWrap: "break-word",
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginTop: 32,
  marginBottom: 32,
}

const TableStyles: CSS = {
  maxWidth: "100%",
  marginLeft: 16,
  marginRight: 16,
  borderCollapse: "collapse",
  [`${HtmlConst.TH}, ${HtmlConst.TD}`]: {
    border: "4px solid",
    borderColor: theme.colors.tableBorder,
    padding: 8,
  }
};

export default Table;