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
  marginLeft: 48,
  marginRight: 48,
  listStyle: 'none',

  [HtmlConst.LI]: {
    color: "blue",
  }
};

export default UnorderedList;