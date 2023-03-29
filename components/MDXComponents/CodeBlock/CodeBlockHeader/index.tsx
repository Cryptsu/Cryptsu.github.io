import Style from "@/components/Style";
import IFhoneButtons from "./IFhoneButtons";
import CodeActionButtons from "./CodeActionButtons";
import CodeLangArea from "./CodeLangArea";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren, ReactNode } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockHeaderProps = PropsWithChildren<{
  className?: string,
  content: string | ReactNode,
}>

const CodeBlockHeader = ({content, className, ...otherProps}: CodeBlockHeaderProps) => {
  // Parse language name
  const classNames = className?.split(' ');
  const languageClass = ( // TODO: this language detection mechanism may break in the future!
    classNames?.find(className => /language-*/.test(className))
  );
  const languageName = languageClass ? languageClass.slice("language-".length) : "";

  return (
    <Style style={CodeBlockHeaderStyles} {...otherProps}>
      <Style as={IFhoneButtons} style={CodeIFhoneButtonGroupStyles}/>
      <Style as={CodeLangArea} style={CodeLangAreaGroupStyles} languageName={languageName}/>
      <Style as={CodeActionButtons} style={CodeActionButtonGroupStyles} content={content}/>
    </Style>
  )
}

const CodeBlockHeaderStyles: CSS = {
  display: "grid",
  gridTemplateAreas: "'codeblock-header-ifhone-btn codeblock-header-lang-area codeblock-header-action-btn'",
  gridTemplateColumns: "1fr 1fr 1fr",

  paddingLeft: 16,
  paddingRight: 16,
};

const CodeIFhoneButtonGroupStyles: CSS = {
  gridArea: "codeblock-header-ifhone-btn",
}

const CodeLangAreaGroupStyles: CSS = {
  gridArea: "codeblock-header-lang-area",
}

const CodeActionButtonGroupStyles: CSS = {
  gridArea: "codeblock-header-action-btn",
}

export default CodeBlockHeader;