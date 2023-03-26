import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonYellowProps = PropsWithChildren<{

}>

const IFhoneButtonYellow = ({children, ...otherProps}: IFhoneButtonYellowProps) => {
  return (
    <Style style={IFhoneButtonYellowStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const IFhoneButtonYellowStyles: CSS = {
  width: 12,
  height: 12,
  borderRadius: "100%",
  backgroundColor: theme.colors.yellow,
};

export default IFhoneButtonYellow;