import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ListItemProps = PropsWithChildren<{

}>

const ListItem = ({children, ...otherProps}: ListItemProps) => {
  return (
    <Style style={ListItemStyles} elementName={HtmlConst.LI}>
      <Style>
        {children}
      </Style>
    </Style>
  )
}

const ListItemStyles: CSS = {
  display: "flex",
  gap: 8,
  '&:before': {
    fontWeight: "bold",
    color: theme.colors.primary,
  }
};

export default ListItem;