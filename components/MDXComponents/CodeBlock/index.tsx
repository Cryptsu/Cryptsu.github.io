import Style from "@/components/Style";
import CopyButton from "./CopyButton";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockProps = PropsWithChildren<{
  className?: string
}>

const CodeBlock = ({children, className, ...otherProps}: CodeBlockProps) => {
  const classNames = className?.split(' ');
  const isCodeBlockHighlighted = (
    classNames?.find(className => /language-*/.test(className))
  ) !== undefined;

  return (
    <Style className={className} style={CodeBlockStyles} elementName={HtmlConst.CODE} {...otherProps}>
      <Style style={CodeBlockWrapperStyles}>
        <Style style={CodeBlockInnerStyles}>
          
          <Style style={CodeBlockHeaderStyles}>
            <CopyButton content={children}/>
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
  color: theme.colors.codeHighlight,
  
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
  gap: 8,

  padding: 16,
  backgroundImage: `url("${AssetsConst.GRAIN_PNG}"), ${theme.colors.codeBlockBackground}`,
  borderRadius: 12,

  maxHeight: 240,
}

const CodeBlockHeaderStyles: CSS = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",

  paddingLeft: 16,
  paddingRight: 16,
}

const CodeBlockContentStyles: CSS = {
  overflowX: "auto",
}

export default CodeBlock;