import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type UnorderedListProps = PropsWithChildren<{

}>

const UnorderedList = ({children, ...otherProps}: UnorderedListProps) => {
  return (
    <Style style={UnorderedListStyles} elementName={HtmlConst.UL}>
      {children}
    </Style>
  )
}

const UnorderedListStyles: CSS = {
  fontFamily: theme.fonts.list,
  fontSize: theme.fontSizes.list,
  color: theme.colors.contentText,
  letterSpacing: theme.letterSpacings.list,
  
  display: "grid",
  gap: 8,
  margin: 8,
  marginLeft: 48,
  marginRight: 48,

};

export default UnorderedList;