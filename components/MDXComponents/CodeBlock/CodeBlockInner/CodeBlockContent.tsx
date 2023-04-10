import Style from "@/components/Style";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockContentProps = PropsWithChildren<{
  wrapCode: boolean;
}>

const CodeBlockContent = ({children, wrapCode, ...otherProps}: CodeBlockContentProps) => {
  return (
    <Style 
      style={CodeBlockContentStyles} 
      css={
        wrapCode
          ? { whiteSpace: "pre-wrap", lineBreak: "anywhere" }
          : { overflow: "auto" }
      }
      {...otherProps}
    >
      {children}
    </Style>
  )
}

const CodeBlockContentStyles: CSS = {
  // In Firefox, the scrollbar will cover content -.-
  // So there need a padding on the bottom... (sigh)
  // And set scroll-bar width to thin :) 
  paddingBottom: 8,
  scrollbarWidth: "thin", // This attribute only applies on Firefox.

  // Not styled code text
  color: theme.colors.textGeneral,

  // Add a bit of padding
  marginLeft: 4,

  ////////////////////// CODE HIGHLIGHTING //////////////////////
  // TODO: This part in the future might be changed
  // due to the fact that the class names corresponding to code
  // elements generated by rehype-prism might change.
  //
  // For more details on how I got the class names:
  //  https://github.com/PrismJS/prism-themes/blob/master/template/prism-theme-template.css
  //  https://prismjs.com/tokens.html
  //
  // Nonetheless, classifing the class names is a really hard task
  // for me, so I decided to copy some from Jarv.is's style.
  //
  ".token": {
    "&.keyword": {
      fontWeight: "bold"
    },
    "&.comment, &.prolog, &.cdata": {
      color: theme.colors.codeComment,
    },
    "&.delimiter, &.boolean, &.keyword, &.selector, &.important, &.doctype, &.atrule, &.url": {
      color: theme.colors.codeKeyword,
    },
    "&.tag, &.builtin, &.regex": {
      color: theme.colors.codeNamespace,
    },
    "&.property, &.variable, &.attr-value, &.class-name, &.string, &.char": {
      color: theme.colors.codeVariable,
    },
    "&.literal-property, &.attr-name": {
      color: theme.colors.codeAttribute,
    },
    "&.function": {
      color: theme.colors.codeFunction,
    },
    "&.tag .punctuation, &.attr-value .punctuation": {
      color: theme.colors.codePunctuation,
    },
    '&.operator': {
      color: theme.colors.codeOperator,
    },
    '&.boolean, &.number, &.constant': {
      color: theme.colors.codeLiteral,
    },
    "&.inserted": {
      color: theme.colors.codeAddition,
    },
    "&.deleted": {
      color: theme.colors.codeDeletion,
    },
    "&.url": { textDecoration: "underline" },
    "&.bold, &.important": { fontWeight: "bold" },
    "&.italic": { fontStyle: "italic" },
  },
}

export default CodeBlockContent;