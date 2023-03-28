import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonRedProps = PropsWithChildren<{
  onClick?: () => void
}>

const IFhoneButtonRed = ({children, ...otherProps}: IFhoneButtonRedProps) => {
  return (
    <Style style={IFhoneButtonRedStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const IFhoneButtonRedStyles: CSS = {
  width: 12,
  height: 12,
  borderRadius: "100%",
  backgroundColor: theme.colors.red,
};

export default IFhoneButtonRed;