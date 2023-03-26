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
  const classNames = className?.split(' ');
  const languageClass = ( // TODO: this language detection mechanism may break in the future!
    classNames?.find(className => /language-*/.test(className))
  );
  const languageName = languageClass ? languageClass.slice("language-".length) : "";

  return (
    <Style className={className} style={CodeBlockStyles} elementName={HtmlConst.CODE} {...otherProps}>
      <Style style={CodeBlockWrapperStyles}>
        <Style style={CodeBlockInnerStyles}>
          
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

          <Style style={CodeBlockContentStyles}>
            {children}
          </Style>

        </Style>
      </Style>
    </Style>
  )
}

const CodeBlockStyles: CSS = {
  fontFamily: theme.fonts.code,
  fontSize: theme.fontSizes.codeBlock,
  letterSpacing: theme.letterSpacings.codeBlock,
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

  color: theme.colors.codeLang,
  fontWeight: theme.fontWeights.codeLang,
}

const CodeCopyButtonGroupStyles: CSS = {
  gridArea: "codeblock-copy-btn",

  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
}


const CodeBlockContentStyles: CSS = {
  color: theme.colors.codeHighlight,
  overflowX: "auto",
}

export default CodeBlock;