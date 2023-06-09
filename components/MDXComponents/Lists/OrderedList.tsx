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

  listStyle: 'none',
  margin: 0,
  marginLeft: 48,
  marginRight: 48,
  '@small': {
    marginLeft: 16,
    marginRight: 16,
  },

  // * TODO: This ListItemNo is entangled with the one at UnorderedList.
  // * If this value is changed in the future, please check here.
  counterReset: "ListItemNo",
  [`& ${HtmlConst.LI}`]: {
    counterIncrement: "ListItemNo",
  },

  [`& ${HtmlConst.LI}:before`]: {    
    content: 'counters(ListItemNo, ".")"."',
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold
  },
};

export default OrderedList;