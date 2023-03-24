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
  [HtmlConst.LI]: {
    marginBottom: 8,
    [`${HtmlConst.LI}:before`]: {
      content: "◦",
    },
  },

  [`${HtmlConst.LI}:before`]: {
    content: "•",
  }
};

export default UnorderedList;