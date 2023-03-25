import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
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
          <Style style={CodeBlockInnerInnerStyles}>
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
  width: "100%",
};

const CodeBlockWrapperStyles: CSS = {
  color: theme.colors.codeHighlight,

  marginLeft: 32,
  marginRight: 32,
  borderRadius: 16,

  // To create some kind of gradient border...
  backgroundImage: theme.colors.codeBoxBorder,
  backgroundPosition: "-4px -4px",
  backgroundSize: "calc(100% + 8px) calc(100% + 8px)",
  borderColor: theme.colors.codeBoxBorderInv,
  borderStyle: "dashed",
  borderWidth: 4,
};

const CodeBlockInnerStyles: CSS = {
  padding: 16,
  backgroundImage: `linear-gradient(0deg, ${theme.colors.codeBackground}, ${theme.colors.codeBackground})`,
  borderRadius: 12,
}

const CodeBlockInnerInnerStyles: CSS = {
  overflowX: "auto",
}

export default CodeBlock;