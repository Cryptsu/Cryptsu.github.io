import { useContext } from "react";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import IFhoneButtonGreen from "./IFhoneButtonGreen";
import IFhoneButtonRed from "./IFhoneButtonRed";
import IFhoneButtonYellow from "./IFhoneButtonYellow";
import { TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonsProps = PropsWithChildren<{

}>

const IFhoneButtons = ({children, ...otherProps}: IFhoneButtonsProps) => {
  const { ToggleContentFn, ToggleWrapFn, showInner, wrapCode } = useContext(CodeBlockContext);

  return (
    <Style style={IFhoneButtonsStyles} {...otherProps}>
      <IFhoneButtonRed title={TxtConst.TXT_CODE_RED_BUTTON_DESC} showInner={showInner} onClick={ToggleContentFn}/>
      <IFhoneButtonYellow title={TxtConst.TXT_CODE_YELLOW_BUTTON_DESC} wrapCode={wrapCode} onClick={ToggleWrapFn}/>
      <IFhoneButtonGreen title={TxtConst.TXT_CODE_GREEN_BUTTON_DESC}/>
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