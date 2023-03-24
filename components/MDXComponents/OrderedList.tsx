import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type OrderedListProps = PropsWithChildren<{

}>

const OrderedList = ({children, ...otherProps}: OrderedListProps) => {
  return (
    <Style style={OrderedListStyles} elementName={HtmlConst.OL} {...otherProps}>
      {children}
    </Style>
  )
}

const OrderedListStyles: CSS = {
  position: "relative",

  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.content,
  color: theme.colors.contentText,
  letterSpacing: theme.letterSpacings.content,

  margin: 8,
  marginLeft: 32,
  marginRight: 32,
  listStyle: 'none',

  // TODO: This would not work if ListItem is not <li></li>
  // Please keep this in mind when update content in the 
  // future.
  counterReset: "ListItemNo",
  [`${HtmlConst.LI}`]: {
    counterIncrement: "ListItemNo",
  },
  [`${HtmlConst.LI}:before`]: {
    content: 'counters(ListItemNo, ".")"."',
  },

};

export default OrderedList;