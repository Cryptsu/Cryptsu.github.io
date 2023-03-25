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
      {
        isCodeBlockHighlighted
          ? <Style style={CodeBlockHighlightStyles}>
              {children}
            </Style>
          : <Style style={CodeBlockNonStyles}>
              {children}
            </Style>
      }
    </Style>
  )
}

const CodeBlockStyles: CSS = {
  fontFamily: theme.fonts.code,
  fontSize: theme.fontSizes.codeBlock,
  letterSpacing: theme.letterSpacings.codeBlock,
  width: "100%",
};

const CodeBlockHighlightStyles: CSS = {
  color: theme.colors.codeHighlight,

  marginLeft: 32,
  marginRight: 32,
  padding: 16,
  borderRadius: 16,

  // backgroundImage: "linear-gradient(90deg, $primary, $secondary)",
  borderStyle: "solid",
  borderWidth: 4,

  // borderColor: theme.colors.codeBoxBorderInv,
  // borderStyle: "dashed",
  // borderWidth: 4,

  // backgroundImage: `${theme.colors.codeBoxInside}`,
  // backgroundPosition: "0% 0%, calc(0% + 4px) calc(0% + 4px)",

  overflowX: "auto",

};

const CodeBlockNonStyles: CSS = {
  color: theme.colors.codeNoHighlight,

};


export default CodeBlock;