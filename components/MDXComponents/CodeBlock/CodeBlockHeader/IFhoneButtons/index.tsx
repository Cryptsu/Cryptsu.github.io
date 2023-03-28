import Style from "@/components/Style";
import IFhoneButtonGreen from "./IFhoneButtonGreen";
import IFhoneButtonRed from "./IFhoneButtonRed";
import IFhoneButtonYellow from "./IFhoneButtonYellow";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";
import type { CodeBlockLayoutFnsType, CodeBlockLayoutStatesType } from "../..";

type IFhoneButtonsProps = PropsWithChildren<{
  layoutFns: CodeBlockLayoutFnsType,
  layoutStates: CodeBlockLayoutStatesType,
}>

const IFhoneButtons = ({children, layoutFns, layoutStates, ...otherProps}: IFhoneButtonsProps) => {
  return (
    <Style style={IFhoneButtonsStyles} {...otherProps}>
      <IFhoneButtonRed/>
      <IFhoneButtonYellow onClick={layoutFns.ToggleShowCodeBlockFn}/>
      <IFhoneButtonGreen/>
    </Style>
  )
}

const IFhoneButtonsStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  gap: 8,
};

export default IFhoneButtons;