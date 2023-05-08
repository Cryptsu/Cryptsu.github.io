import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type ButtonProps = PropsWithChildren<{
  style?: CSS,
}>

const Button = ({children, style, ...otherProps}: ButtonProps) => {
  return (
    <Style 
      css={style}
      style={ButtonStyles} 
      {...otherProps}
    >
      {children}
    </Style>
  )
}

const ButtonStyles: CSS = {
  display: "flex",
  justifyContent: "center",
  userSelect: "none",

  borderRadius: 8,
  borderStyle: "solid",
  '&@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.buttonHoverBackground,
      cursor: "pointer",
    },
  },
  '&:active': {
    transform: "translateY(4px)",
  }
};

export default Button;