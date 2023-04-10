import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeLangAreaProps = {
  languageName?: string
}

const CodeLangArea = ({languageName=""}: CodeLangAreaProps) => {
  return (
    <Style style={CodeLangAreaStyles}>
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
  '@small': {
    fontSize: theme.fontSizes.h6,
    letterSpacing: theme.letterSpacings.h6,
  },
  textTransform: "capitalize",
};

export default CodeLangArea;