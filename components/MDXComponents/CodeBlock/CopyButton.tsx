import Style from "@/components/Style";
import Button from "@/components/Button";
import { ClipboardIcon } from "@/components/Icons";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CopyButtonProps = PropsWithChildren<{

}>

const CopyButton = ({children, ...otherProps}: CopyButtonProps) => {
  return (
    <Style as={Button} style={CopyButtonStyles} {...otherProps}>
      <ClipboardIcon style={CopyIconStyles}/>
    </Style>
  )
}

const CopyButtonStyles: CSS = {
  borderColor: theme.colors.copyBtnBorder,
  boxShadow: theme.shadows.codeCopyBtnNormal,
  '&:active': {
    backgroundColor: theme.colors.copyBtnHoverBackground,
    boxShadow: theme.shadows.codeCopyBtnClick,
  },

  // Size of button!
  width: 24,
  height: 24,

  // Center a div...
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CopyIconStyles: CSS = {
  fill: theme.colors.copyIcon,
  width: 12,
  height: 12,
}

export default CopyButton;