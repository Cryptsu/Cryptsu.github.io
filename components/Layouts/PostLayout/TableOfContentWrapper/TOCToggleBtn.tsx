import Style from "@/components/Style";
import Button from "@/components/Button";
import { ListOrderedIcon, XIcon } from "@/components/Icons";
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
          ? { 
              zIndex: theme.zIndices.tocBtnClick, 
              display: "none", 
              '@larger': {
                display: "flex"
              },
            }
          : { 
              zIndex: theme.zIndices.tocBtnNormal, 
              display: "none", 
              '@larger': {
                display: "flex"
              },
            }
      }
      {...otherProps}
    >
      {
        showTOCMobile
          ? <Style
              style={IconTOCOffStyles} 
              as={XIcon}
            />
          : <Style 
              style={IconTOCOnStyles} 
              as={ListOrderedIcon}
            />
      }
      
    </Style>
  )
}

const TOCToggleBtnStyles: CSS = {
  position: "fixed",
  bottom: "4vh",
  right: "4vw",

  borderWidth: 4,
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
};

const IconTOCOnStyles: CSS = {
  fill: theme.colors.iconGeneral,
  width: "1em",
  height: "1em",
}

const IconTOCOffStyles: CSS = {
  fill: theme.colors.error,
  width: "1.5em",
  height: "1.5em",
}

export default TOCToggleBtn;