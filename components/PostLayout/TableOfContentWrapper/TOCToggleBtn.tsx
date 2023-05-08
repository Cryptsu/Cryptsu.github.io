import Style from "@/components/Style";
import Button from "@/components/Button";
import { ListOrderedIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type TOCToggleBtnProps = PropsWithChildren<{
  showTOCMobile: boolean,
  onClick?: () => void,
}>

const TOCToggleBtn = ({children, showTOCMobile, ...otherProps}: TOCToggleBtnProps) => {
  return (
    <Style 
      as={Button}
      style={TOCToggleBtnStyles} 
      css={
        showTOCMobile
          ? { zIndex: theme.zIndices.tocBtnClick, }
          : { zIndex: theme.zIndices.tocBtnNormal, }
      }
      {...otherProps}
    >
      <Style 
        style={IconStyles} 
        as={ListOrderedIcon}
      />
    </Style>
  )
}

const TOCToggleBtnStyles: CSS = {
  position: "fixed",
  bottom: "4vh",
  right: "4vw",

  width: "2.25em",
  height: "2.25em",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",

  backgroundColor: theme.colors.pageBackground,
  borderColor: theme.colors.secondary,
  boxShadow: theme.shadows.tocMobileBtnNormal,
  '&:active': {
    backgroundColor: theme.colors.secondary,
    boxShadow: theme.shadows.tocMobileBtnClick,
  },

  display: "none",
  '@larger': {
    display: "flex"
  }
};

const IconStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: "1em",
  height: "1em",
}

export default TOCToggleBtn;