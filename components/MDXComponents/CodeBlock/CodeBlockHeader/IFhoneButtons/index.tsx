import Style from "@/components/Style";
import IFhoneButtonGreen from "./IFhoneButtonGreen";
import IFhoneButtonRed from "./IFhoneButtonRed";
import IFhoneButtonYellow from "./IFhoneButtonYellow";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonsProps = PropsWithChildren<{

}>

const IFhoneButtons = ({children, ...otherProps}: IFhoneButtonsProps) => {
  return (
    <Style style={IFhoneButtonsStyles} {...otherProps}>
      <IFhoneButtonRed/>
      <IFhoneButtonYellow/>
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