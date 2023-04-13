import Style from "@/components/Style";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonRedProps = PropsWithChildren<{
  showInner: boolean,
  onClick?: () => void,
  title: string,
}>

const IFhoneButtonRed = ({children, showInner, ...otherProps}: IFhoneButtonRedProps) => {
  return (
    <Style style={IFhoneButtonRedStyles} {...otherProps}>
      <Style style={IFhoneButtonIconStyles} as={showInner ? ChevronUpIcon : ChevronDownIcon} />
    </Style>
  )
}

const IFhoneButtonRedStyles: CSS = {
  width: 12,
  height: 12,
  borderRadius: "100%",
  cursor: "pointer",
  display: "flex",

  backgroundColor: theme.colors.red,
  '&:hover': {
    backgroundColor: theme.colors.brightRed,
  },
  '&:active': {
    backgroundColor: theme.colors.darkRed,
  }
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.black,
  width: 12,
  height: 12,

  opacity: "0%",
  '&:hover': {
    opacity: "100%",
  }
}
export default IFhoneButtonRed;