import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type SectionProps = PropsWithChildren<{

}>

const Section = ({children, ...otherProps}: SectionProps) => {
  return (
    <Style style={SectionStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const SectionStyles: CSS = {
  width: "min(600px, calc(100% - 1em))",
  margin: "1em",
  '&:first-of-type': {
    paddingTop: "2em",
  },
  '&:last-of-type': {
    paddingBottom: "2em",
  },

  fontFamily: theme.fonts.global,
};

export default Section;