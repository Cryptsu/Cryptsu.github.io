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

  fontSize: theme.fontSizes.codeLang,
  letterSpacing: theme.letterSpacings.codeLang,
  color: theme.colors.codeLang,
  fontWeight: theme.fontWeights.codeLang,
  textTransform: "capitalize",
};

export default CodeLangArea;