import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockContentProps = PropsWithChildren<{

}>

const CodeBlockContent = ({children, ...otherProps}: CodeBlockContentProps) => {
  return (
    <Style style={CodeBlockContentStyles} {...otherProps}>
      {children}
    </Style>
  )
}

const CodeBlockContentStyles: CSS = {
  marginLeft: 4,

  fontSize: `${theme.fontSizes.code} !important`,
  letterSpacing: theme.letterSpacings.code,
  lineHeight: theme.lineHeights.code,
  color: theme.colors.codeHighlight,

  ////////////////////// CODE HIGHLIGHTING //////////////////////
  // TODO: This part in the future might be changed
  // due to the fact that the class names corresponding to code
  // elements of rehype-prism might change.
  // https://github.com/PrismJS/prism-themes/blob/master/template/prism-theme-template.css
  ".token": {
    "&.comment, &.prolog, &.cdata": {
      color: theme.colors.codeComment,
    },
    "&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url": {
      color: theme.colors.codeKeyword,
    },
    "&.tag, &.builtin, &.regex": {
      color: theme.colors.codeNamespace,
    },
    "&.property, &.constant, &.variable, &.attr-value, &.class-name, &.string, &.char": {
      color: theme.colors.codeVariable,
    },
    "&.literal-property, &.attr-name": {
      color: theme.colors.codeAttribute,
    },
    "&.function": {
      color: theme.colors.codeLiteral,
    },
    "&.tag .punctuation, &.attr-value .punctuation": {
      color: theme.colors.codePunctuation,
    },
    "&.inserted": {
      color: theme.colors.codeAddition,
    },
    "&.deleted": {
      color: theme.colors.codeDeletion,
    },
    "&.url": { textDecoration: "underline" },
    "&.bold": { fontWeight: "bold" },
    "&.italic": { fontStyle: "italic" },
  },
}

export default CodeBlockContent;