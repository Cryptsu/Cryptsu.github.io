import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type OrderedListProps = PropsWithChildren<{

}>

const OrderedList = ({children, ...otherProps}: OrderedListProps) => {
  return (
    <Style style={OrderedListStyles} elementName={HtmlConst.OL}>
      {children}
    </Style>
  )
}

const OrderedListStyles: CSS = {
  fontFamily: theme.fonts.list,
  fontSize: theme.fontSizes.list,
  color: theme.colors.contentText,
  letterSpacing: theme.letterSpacings.list,
  
  display: "grid",
  gap: 8,
  margin: 8,
  marginLeft: 60,
  marginRight: 60,

};

export default OrderedList;