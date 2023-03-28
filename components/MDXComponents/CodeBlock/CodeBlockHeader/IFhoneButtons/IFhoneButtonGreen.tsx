import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonGreenProps = PropsWithChildren<{
  onClick?: () => void
}>

const IFhoneButtonGreen = ({children, ...otherProps}: IFhoneButtonGreenProps) => {
  return (
    <Style style={IFhoneButtonGreenStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const IFhoneButtonGreenStyles: CSS = {
  width: 12,
  height: 12,
  borderRadius: "100%",
  backgroundColor: theme.colors.green,
};

export default IFhoneButtonGreen;