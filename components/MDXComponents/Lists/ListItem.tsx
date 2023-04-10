import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ListItemProps = PropsWithChildren<{

}>

const ListItem = ({children, ...otherProps}: ListItemProps) => {
  return (
    <Style style={ListItemWrapperStyles} elementName={HtmlConst.LI} {...otherProps}>
      <Style elementName={HtmlConst.SPAN} style={ListItemStyles}>
        {children}
      </Style>
    </Style>
  )
}

const ListItemWrapperStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  gap: 8,
  marginBottom: 8,
  marginTop: 8,
};

const ListItemStyles: CSS = {
  maxWidth: "100%",
  [`&> :first-child`]: {
    marginTop: 0,
  },
}

export default ListItem;