import Style from "@/components/Style";
import CopyButton from "./CopyButton";
import { TxtConst } from "@/lib/consts";
import type { PropsWithChildren, ReactNode } from "react";
import type { CSS } from "@stitches/react";

type CodeActionButtonsProps = PropsWithChildren<{
  content: string | ReactNode,
}>

const CodeActionButtons = ({content, ...otherProps}: CodeActionButtonsProps) => {
  return (
    <Style title={TxtConst.TXT_CODE_COPY_BUTTON_DESC} style={CodeActionButtonsStyles} {...otherProps}>
      <CopyButton content={content}/>
    </Style>
  )
}

const CodeActionButtonsStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  alignItems: "center",
};

export default CodeActionButtons;