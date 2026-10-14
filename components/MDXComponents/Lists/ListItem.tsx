import Style from "@/components/Style";
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
  minWidth: 0, // a codeblock as a list item in a non-wrap mode will fit the container
  [`&> :first-child`]: {
    marginTop: 0,
  },
}

export default ListItem;
