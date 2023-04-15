import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { ClassConst, HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeLangAreaProps = PropsWithChildren<{
  languageName?: string
}>

const CodeLangArea = ({languageName="", ...otherProps}: CodeLangAreaProps) => {
  return (
    <Style style={CodeLangAreaStyles} {...otherProps}>
      {languageName}
    </Style>
  )
}

const CodeLangAreaStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  
  color: theme.colors.textLess,
  fontSize: theme.fontSizes.h5,
  letterSpacing: theme.letterSpacings.h5,
  fontWeight: theme.fontWeights.bold,
  textTransform: "capitalize",
  transform: "translateY(2px)",
};

export default CodeLangArea;