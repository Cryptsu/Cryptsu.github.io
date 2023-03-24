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
  marginLeft: 48,
  marginRight: 48,
  listStyle: 'none',

  counterReset: "ListItemNo",
  [HtmlConst.LI]: {
    counterIncrement: "ListItemNo",
    marginBottom: 8,
  },
  [`${HtmlConst.LI}:before`]: {    
    position: "absolute",
    left: -24,
    paddingRight: 8,
    content: 'counter(ListItemNo)"."',
    borderRadius: "100%",
    color: theme.colors.listHeading,
    textAlign: "center",
    display: "inline-block",
    fontWeight: "bold",
  }
};

export default OrderedList;