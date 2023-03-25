import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type UnorderedListProps = PropsWithChildren<{

}>

const UnorderedList = ({children, ...otherProps}: UnorderedListProps) => {
  return (
    <Style style={UnorderedListStyles} elementName={HtmlConst.UL} {...otherProps}>
      {children}
    </Style>
  )
}

const UnorderedListStyles: CSS = {
  position: "relative",

  fontFamily: theme.fonts.content,
  fontSize: theme.fontSizes.content,
  color: theme.colors.contentText,
  letterSpacing: theme.letterSpacings.content,
  
  margin: 0,
  marginLeft: 48,
  marginRight: 48,
  listStyle: 'none',

  // TODO: This ListItemNo is entangled with the one at OrderedList.
  // If this value is changed in the future, please check here.
  counterReset: "ListItemNo",
  [HtmlConst.LI]: {
    [`${HtmlConst.LI}:before`]: {
      content: "◦",
  },
  },

  [`${HtmlConst.LI}:before`]: {
    content: "•",
    color: theme.colors.listHeading,
    fontWeight: theme.fontWeights.listHeading,
  },
};

export default UnorderedList;