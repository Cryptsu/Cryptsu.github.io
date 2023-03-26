import React from "react";
import Style from "@/components/Style";
import CopyButton from "./CopyButton";
import IFhoneButtonRed from "./IFhoneButtons/IFhoneButtonRed";
import IFhoneButtonYellow from "./IFhoneButtons/IFhoneButtonYellow";
import IFhoneButtonGreen from "./IFhoneButtons/IFhoneButtonGreen";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockProps = PropsWithChildren<{
  className?: string
}>

const CodeBlock = ({children, className, ...otherProps}: CodeBlockProps) => {
  // Parse language name
  const classNames = className?.split(' ');
  const languageClass = ( // TODO: this language detection mechanism may break in the future!
    classNames?.find(className => /language-*/.test(className))
  );
  const languageName = languageClass ? languageClass.slice("language-".length) : "";

  // Get number of lines for display.
  const noLines = React.Children.count(children);
  const lineNoElements = []
  for (let lineNo = 1; lineNo <= noLines; ++lineNo) {
    lineNoElements.push(
      <>
        {lineNo}
        <br/>
      </>
    )
  }

  return (
    <Style className={className} style={CodeBlockStyles} elementName={HtmlConst.CODE} {...otherProps}>
      <Style style={CodeBlockWrapperStyles}>
        <Style style={CodeBlockInnerStyles}>
          {/* Header Group */}
          <Style style={CodeBlockHeaderStyles}>
            <Style style={CodeIFhoneButtonGroupStyles}>
              <IFhoneButtonRed/>
              <IFhoneButtonYellow/>
              <IFhoneButtonGreen/>
            </Style>
            
            <Style style={CodeLangAreaGroupStyles}>
              {languageName}
            </Style>

            <Style style={CodeCopyButtonGroupStyles}>
              <CopyButton content={children}/>
            </Style>
          </Style>

          {/* Content Group */}
          <Style style={CodeBlockContentWrapperStyles}>
            <Style style={CodeBlockLineStyles}>
              {lineNoElements}
            </Style>
            <Style style={CodeBlockContentStyles}>
              {children}
            </Style>
          </Style>

        </Style>
      </Style>
    </Style>
  )
}

const CodeBlockStyles: CSS = {
  fontFamily: theme.fonts.code,
  maxWidth: "100%",
};

const CodeBlockWrapperStyles: CSS = {
  marginTop: 16,
  marginBottom: 16,
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 16,

  // To create some kind of gradient border...
  backgroundImage: `${theme.colors.codeBoxBorder}`,
  backgroundPosition: "-4px -4px",
  backgroundSize: "calc(100% + 8px) calc(100% + 8px)",
  borderColor: theme.colors.codeBoxBorderInv,
  borderStyle: "dashed",
  borderWidth: 4,
};

const CodeBlockInnerStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  padding: 16,
  gap: 8,

  // This would create the effect of having opacity to the background
  backgroundImage: `url("${AssetsConst.GRAIN_PNG}"), ${theme.colors.codeBlockBackground}`,
  borderRadius: 12,

  // Limit the height for code view...
  maxHeight: 240,
}

const CodeBlockHeaderStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'codeblock-ifhone-btn codeblock-lang-area codeblock-copy-btn'",
  gridTemplateColumns: "1fr 1fr 1fr",

  paddingLeft: 16,
  paddingRight: 16,
}

const CodeIFhoneButtonGroupStyles: CSS = {
  gridArea: "codeblock-ifhone-btn",

  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  gap: 8,
}

const CodeLangAreaGroupStyles: CSS = {
  gridArea: "codeblock-lang-area",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  fontSize: theme.fontSizes.codeLang,
  letterSpacing: theme.letterSpacings.codeLang,
  color: theme.colors.codeLang,
  fontWeight: theme.fontWeights.codeLang,
  textTransform: "capitalize",
}

const CodeCopyButtonGroupStyles: CSS = {
  gridArea: "codeblock-copy-btn",

  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  alignItems: "center",
}

const CodeBlockContentWrapperStyles: CSS = {
  fontSize: theme.fontSizes.codeBlock,
  letterSpacing: theme.letterSpacings.codeBlock,
  color: theme.colors.codeHighlight,

  overflow: "auto",
  // In Firefox, the scrollbar will cover content -.-
  // So there need a padding on the bottom... (sigh)
  paddingBottom: 8,   

  display: "flex",
  flexDirection: "row",
  gap: 8,
}

const CodeBlockLineStyles: CSS = {
  fontWeight: theme.fontWeights.codeLine,
  textAlign: "center",
  paddingRight: 8,

  height: "max-content", // Needs this so that border height is 100% to overflowed content
  border: 0,
  borderRight: 4,
  borderStyle: "double",
  borderColor: theme.colors.codeLineDivider,
}

const CodeBlockContentStyles: CSS = {
  marginLeft: 10,

  ////////////////////// CODE HIGHLIGHTING //////////////////////
  // TODO: This part in the future might be changed
  // due to the fact that the class names corresponding to code
  // elements of rehype-prism might change.
  '.token': {
  },
}

export default CodeBlock;