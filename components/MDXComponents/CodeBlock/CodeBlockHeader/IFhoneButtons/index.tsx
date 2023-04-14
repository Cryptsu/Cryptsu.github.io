import { useContext } from "react";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import IFhoneButtonGreen from "./IFhoneButtonGreen";
import IFhoneButtonRed from "./IFhoneButtonRed";
import IFhoneButtonYellow from "./IFhoneButtonYellow";
import IFhoneButtonCombine from "./IFhoneButtonCombine";
import { ClassConst, TxtConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type IFhoneButtonsProps = PropsWithChildren<{

}>

const IFhoneButtons = ({children, ...otherProps}: IFhoneButtonsProps) => {
  const { 
    ToggleContentFn, 
    ToggleWrapFn, 
    UpdateVisualStateFn,
    showInner, 
    wrapCode, 
    codeBlockState 
  } = useContext(CodeBlockContext);

  return (
    <>
      <Style style={IFhoneButtonsMobileStyles} {...otherProps}>
        <IFhoneButtonCombine codeBlockState={codeBlockState} onClick={UpdateVisualStateFn} />
      </Style>
      <Style style={IFhoneButtonsStyles} {...otherProps}>
        <IFhoneButtonRed title={TxtConst.TXT_CODE_RED_BUTTON_DESC} showInner={showInner} onClick={ToggleContentFn}/>
        <IFhoneButtonYellow title={TxtConst.TXT_CODE_YELLOW_BUTTON_DESC} wrapCode={wrapCode} onClick={ToggleWrapFn}/>
        <IFhoneButtonGreen title={TxtConst.TXT_CODE_GREEN_BUTTON_DESC}/>
      </Style>
    </>
  )
}

const IFhoneButtonsStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  gap: 8,
  [`.${ClassConst.CLASS_MOBILE} &`]: {
    display: "none"
  },
  [`.${ClassConst.CLASS_TABLET} &`]: {
    display: "none"
  }
};

const IFhoneButtonsMobileStyles: CSS = {
  display: "none",
  [`.${ClassConst.CLASS_MOBILE} &`]: {
    display: "block"
  },
  [`.${ClassConst.CLASS_TABLET} &`]: {
    display: "block"
  }
};

export default IFhoneButtons;