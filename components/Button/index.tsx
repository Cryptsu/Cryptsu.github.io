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
      style={ButtonStyles} 
      css={style}
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

  fontFamily: theme.fonts.content,
  color: theme.colors.contentText,
  
  borderRadius: 8,
  borderColor: theme.colors.black,
  borderStyle: "solid",
  boxShadow: `0 5px ${theme.colors.grey}`,

  '&:hover': {
    backgroundColor: theme.colors.grey,
  },

  '&:active': {
    transform: "translateY(4px)",
    boxShadow: `0 1px ${theme.colors.grey}`,
  }
};

export default Button;