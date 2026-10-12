import Style from "@/components/Style";
import { ChevronUpIcon, ChevronDownIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stitches.config";
import { ClassConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonRedProps = PropsWithChildren<{
  showInner: boolean,
  onClick?: () => void,
  title: string,
}>

const IFhoneButtonRed = ({children, showInner, ...otherProps}: IFhoneButtonRedProps) => {
  return (
    <Style className={ClassConst.CLASS_CODEBLOCK_BTN} style={IFhoneButtonRedStyles} {...otherProps}>
      <Style style={IFhoneButtonIconStyles} as={showInner ? ChevronUpIcon : ChevronDownIcon} />
    </Style>
  )
}

const IFhoneButtonRedStyles: CSS = {
  width: "0.75em",
  height: "0.75em",
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
  width: "0.75em",
  height: "0.75em",

  opacity: "0%",
  [`.${ClassConst.CLASS_CODEBLOCK_BTN}:hover &`]: {
    opacity: "100%",
  }
}
export default IFhoneButtonRed;
