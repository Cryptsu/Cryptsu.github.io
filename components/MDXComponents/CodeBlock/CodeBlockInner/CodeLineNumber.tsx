import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeLineNumberProps = {
  noLines: number
}

const CodeLineNumber = ({noLines}: CodeLineNumberProps) => {
  const lineNoElements = []
  for (let lineNo = 1; lineNo <= noLines; ++lineNo) {
    lineNoElements.push(
      <div key={lineNo}>
        {lineNo}
      </div>
    )
  }

  return (
    <Style style={CodeLineNumberStyles}>
      {lineNoElements}
    </Style>
  )
}

const CodeLineNumberStyles: CSS = {
  // Customize color for code line.
  color: theme.colors.codeLineNumber,
  textAlign: "center",

  userSelect: "none",
  paddingRight: 8,

  height: "max-content", // Needs this so that border height is 100% to overflowed content
  border: 0,
  borderRight: 4,
  borderStyle: "double",
  borderColor: theme.colors.codeLineNumberDivider,
};

export default CodeLineNumber;