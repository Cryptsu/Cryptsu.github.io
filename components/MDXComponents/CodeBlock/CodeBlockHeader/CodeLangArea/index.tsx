import { cloneElement } from "react";
import Style from "@/components/Style";
import { theme } from "@/lib/styles/stitches.config";
import { getLangIcon } from "./iconfinder";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeLangAreaProps = PropsWithChildren<{
  languageName?: string
}>

const CodeLangArea = ({languageName="", ...otherProps}: CodeLangAreaProps) => {
  // todo: Code language area should be changed to icon display
  // and supports mapping unsupported languages to known language
  // (ex. sagemath -> python)
  return (
    <Style style={CodeLangAreaStyles} {...otherProps}>
      {cloneElement(
        getLangIcon(languageName), {
          style: {
            position: "absolute",
            inset: 0,               // top/right/bottom/left: 0
            margin: "auto",         // centers it both ways
            height: "80%",          // as tall as the row allows
            width: "auto",          // width follows the aspect ratio
            maxWidth: "100%",       // never wider than the cell

            // default filler for fallback icons
            fill: theme.colors.white,
          }
        }
      )}
    </Style>
  )
}

const CodeLangAreaStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  position: "relative",

  color: theme.colors.textLess,
  fontSize: theme.fontSizes.h6,
  letterSpacing: theme.letterSpacings.h6,
  fontWeight: theme.fontWeights.bold,
  transform: "translateY(0.0625em)",
};

export default CodeLangArea;
