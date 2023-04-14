import Style from "@/components/Style";
import Button from "@/components/Button";
import { ChevronUpIcon, ReplyIcon, ChevronDownIcon } from "@/components/Icons";
import { CodeBlockStateEnum } from "@/contexts/CodeBlockContext";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonCombineProps = PropsWithChildren<{
  codeBlockState: CodeBlockStateEnum,
  onClick?: () => void,
}>

const IconMap = {
  [CodeBlockStateEnum.normal]: ChevronDownIcon,
  [CodeBlockStateEnum.closeBox]: ChevronUpIcon,
  [CodeBlockStateEnum.wrapCode]: ReplyIcon,
}

const CSSMap = {
  [CodeBlockStateEnum.normal]: {},
  [CodeBlockStateEnum.closeBox]: {},
  [CodeBlockStateEnum.wrapCode]: { 
    transform: "scaleY(-1)"
  },
}

const IFhoneButtonCombine = ({children, codeBlockState, ...otherProps}: IFhoneButtonCombineProps) => {
  return (
    <Style 
      as={Button}
      style={IFhoneButtonCombineStyles} 
      {...otherProps}
    >
      <Style 
        css={CSSMap[codeBlockState]} 
        style={IFhoneButtonIconStyles} 
        as={IconMap[codeBlockState]}
      />
    </Style>
  )
}

const IFhoneButtonCombineStyles: CSS = {
  width: 48,
  height: 24,
  borderRadius: "24px !important",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",

  borderColor: theme.colors.tertiary,
  boxShadow: theme.shadows.codeBlockMobileBtnNormal,
  '&:active': {
    boxShadow: theme.shadows.codeBlockMobileBtnClick,
  },
};

const IFhoneButtonIconStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: 20,
  height: 20,
}

export default IFhoneButtonCombine;