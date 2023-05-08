import Style from "@/components/Style";
import { DotIcon } from "@/components/Icons";
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
      <Style style={IFhoneButtonIconStyles} as={DotIcon} />
    </Style>
  )
}

const IFhoneButtonGreenStyles: CSS = {
  width: "0.75em",
  height: "0.75em",
  borderRadius: "100%",
  cursor: "pointer",
  display: "flex",
  
  backgroundColor: theme.colors.green,  
  '&:hover': {
    backgroundColor: theme.colors.brightGreen,
  },
  '&:active': {
    backgroundColor: theme.colors.darkGreen,
  }
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.black,
  width: "0.75em",
  height: "0.75em",

  opacity: "0%",
  '&:hover': {
    opacity: "100%",
  }
}

export default IFhoneButtonGreen;