import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonGreenProps = PropsWithChildren<{
  onClick?: () => void
  title?: string,
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
  cursor: "pointer",
  
  backgroundColor: theme.colors.green,  
  '&:hover': {
    backgroundColor: theme.colors.brightGreen,
  },
  '&:active': {
    backgroundColor: theme.colors.darkGreen,
  }
};

export default IFhoneButtonGreen;