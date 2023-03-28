import Style from "@/components/Style";
import CodeBlockHeader from "./CodeBlockHeader";
import CodeBlockInner from "./CodeBlockInner";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst, AssetsConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockProps = PropsWithChildren<{
  className?: string
}>

const CodeBlock = ({children, className, ...otherProps}: CodeBlockProps) => {
  return (
    <Style style={CodeBlockStyles} elementName={HtmlConst.CODE} {...otherProps}>
      <Style style={CodeBlockLayoutStyles}>
        {/* --------------------------------- Header Group --------------------------------- */}
        <CodeBlockHeader content={children} className={className} />
        {/* --------------------------------- Content Group --------------------------------- */}
        <CodeBlockInner>
          {children}
        </CodeBlockInner>
      </Style>
    </Style>
  )
}

const CodeBlockStyles: CSS = {
  fontFamily: theme.fonts.code,
  maxWidth: "100%",
};

const CodeBlockLayoutStyles: CSS = {
  marginTop: 16,
  marginBottom: 16,
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 16,

  display: "flex",
  flexDirection: "column",
  padding: 16,
  gap: 8,

  // This would create the effect of having opacity to the background
  // Stops phones from keeping selecting background image instead of content.
  // while making children elements selectable.
  backgroundImage: `${theme.colors.codeBlockBackground}`,
  pointerEvents: "none",  
  '*': {
    pointerEvents: "auto"
  },

  // Limit the height for code view...
  // maxHeight: 240,
}

export default CodeBlock;