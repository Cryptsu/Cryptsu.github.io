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
  overflow: "auto",
  
  display: "flex",
  alignItems: "center",
  '&::before, &::after': {
    content: " ",
    margin: "auto",
  },

  margin: "auto",
  marginTop: "2em",
  marginBottom: "2em",
}

const TableStyles: CSS = {
  marginLeft: "1em",
  marginRight: "1em",
  borderCollapse: "collapse",
  [`${HtmlConst.TH}, ${HtmlConst.TD}`]: {
    border: "4px solid",
    borderColor: theme.colors.borderGeneral,
    padding: 8,
  }
};

export default Table;