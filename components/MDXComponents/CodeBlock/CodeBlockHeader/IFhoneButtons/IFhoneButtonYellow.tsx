import Style from "@/components/Style";
import { ArrowBothIcon, ReplyIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonYellowProps = PropsWithChildren<{
  onClick?: () => void,
  wrapCode: boolean,
  title?: string,
}>

const IFhoneButtonYellow = ({children, wrapCode, ...otherProps}: IFhoneButtonYellowProps) => {
  return (
    <Style style={IFhoneButtonYellowStyles} {...otherProps}>
      <Style style={IFhoneButtonIconStyles} as={wrapCode ? ArrowBothIcon : ReplyIcon} />
    </Style>
  )
}

const IFhoneButtonYellowStyles: CSS = {
  width: 12,
  height: 12,
  borderRadius: "100%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: theme.colors.yellow,  
  '&:hover': {
    backgroundColor: theme.colors.brightYellow,
  },
  '&:active': {
    backgroundColor: theme.colors.darkYellow,
  }
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.black,
  width: 10,
  height: 10,

  transform: "scaleY(-1)",
  opacity: "0%",
  '&:hover': {
    opacity: "100%",
  }
}

export default IFhoneButtonYellow;