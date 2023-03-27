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
      <Style style={CodeBlockWrapperStyles}>
        <Style style={CodeBlockLayoutStyles}>
          {/* --------------------------------- Header Group --------------------------------- */}
          <CodeBlockHeader content={children} className={className} />
          {/* --------------------------------- Content Group --------------------------------- */}
          <CodeBlockInner>
            {children}
          </CodeBlockInner>
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

const CodeBlockLayoutStyles: CSS = {
  display: "flex",
  flexDirection: "column",
  padding: 16,
  gap: 8,

  // This would create the effect of having opacity to the background
  backgroundImage: `url("${AssetsConst.GRAIN_PNG}"), ${theme.colors.codeBlockBackground}`,
  borderRadius: 12,

  // Limit the height for code view...
  // maxHeight: 240,
}

export default CodeBlock;