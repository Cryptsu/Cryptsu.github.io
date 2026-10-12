import Style from "@/components/Style";
import { ChevronUpIcon, ReplyIcon, ArrowBothIcon } from "@/components/Icons";
import { CodeBlockStateEnum } from "@/contexts/CodeBlockContext";
import { theme } from "@/lib/styles/stitches.config";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonCombineProps = PropsWithChildren<{
  codeBlockState: CodeBlockStateEnum,
  onClick?: () => void,
}>

const IconMap = {
  [CodeBlockStateEnum.stretch]: ArrowBothIcon,
  [CodeBlockStateEnum.closeBox]: ChevronUpIcon,
  [CodeBlockStateEnum.wrapCode]: ReplyIcon,
}

const CSSMap = {
  [CodeBlockStateEnum.stretch]: {},
  [CodeBlockStateEnum.closeBox]: {},
  [CodeBlockStateEnum.wrapCode]: { 
    transform: "scaleY(-1)"
  },
}

const IFhoneButtonCombine = ({children, codeBlockState, ...otherProps}: IFhoneButtonCombineProps) => {
  return (
    <Style style={IFhoneButtonCombineStyles} {...otherProps}>
      <Style 
        css={CSSMap[codeBlockState]} 
        style={IFhoneButtonIconStyles} 
        as={IconMap[codeBlockState]}
      />
    </Style>
  )
}

const IFhoneButtonCombineStyles: CSS = {
  width: "1.5em",
  height: "1.5em",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",

  borderRadius: "8px !important",
  borderWidth: "0.125em",
  borderStyle: "dashed !important",
  borderColor: theme.colors.tertiary,
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.buttonHoverBackground,
      cursor: "pointer",
    },
  },
  '&:active': {
    backgroundColor: theme.colors.tertiary,
  },
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: "1em",
  height: "1em",
}

export default IFhoneButtonCombine;
