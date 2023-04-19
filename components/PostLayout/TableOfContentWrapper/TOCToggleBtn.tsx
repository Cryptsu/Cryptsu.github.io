import Style from "@/components/Style";
import Button from "@/components/Button";
import { NoteIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TOCToggleBtnProps = PropsWithChildren<{
  onClick?: () => void,
}>

const TOCToggleBtn = ({children, ...otherProps}: TOCToggleBtnProps) => {
  return (
    <Style 
      as={Button}
      style={TOCToggleBtnStyles} 
      {...otherProps}
    >
      <Style 
        style={IconStyles} 
        as={NoteIcon}
      />
    </Style>
  )
}

const TOCToggleBtnStyles: CSS = {
  zIndex: theme.zIndices.tocToggleMobile,
  position: "fixed",
  bottom: "4vw",
  right: "4vh",

  width: 36,
  height: 36,
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",

  backgroundColor: theme.colors.pageBackground,
  borderColor: theme.colors.secondary,
  boxShadow: theme.shadows.codeCopyBtnNormal,
  '&:active': {
    boxShadow: theme.shadows.codeCopyBtnClick,
  },

  display: "none",
  '@larger': {
    display: "flex"
  }
};

const IconStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: 16,
  height: 16,
}

export default TOCToggleBtn;