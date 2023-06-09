import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type YearProps = PropsWithChildren<{

}>

const Year = ({children, ...otherProps}: YearProps) => {
  return (
    <Style style={YearStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const YearStyles: CSS = {
  color: theme.colors.textLess,
  fontSize: theme.fontSizes.h2,
  fontWeight: theme.fontWeights.extrabold,

  borderWidth: "0.075em",
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  borderStyle: "solid",
  borderColor: theme.colors.borderGeneral,
};

export default Year;