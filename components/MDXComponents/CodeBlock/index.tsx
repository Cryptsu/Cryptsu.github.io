import { useState } from "react";
import { CodeBlockContext } from "@/contexts/CodeBlockContext";
import Style from "@/components/Style";
import CodeBlockHeader from "./CodeBlockHeader";
import CodeBlockInner from "./CodeBlockInner";
import { theme } from "@/lib/styles/stiches.config";
import { HtmlConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";
import type { CSS } from "@stitches/react";

type CodeBlockProps = PropsWithChildren<{
  className?: string
}>

const CodeBlock = ({children, className, ...otherProps}: CodeBlockProps) => {
  const [showInner, setShowInner] = useState<boolean>(true);
  const [wrapCode, setWrapCode] = useState<boolean>(false);
  const ToggleContentFn = () => {
    setShowInner(!showInner);
  }
  const ToggleWrapFn = () => {
    setWrapCode(!wrapCode);
  }

  return (
    <CodeBlockContext.Provider
      value={{
        showInner,
        wrapCode,

        ToggleContentFn,
        ToggleWrapFn,
      }}
    >
      <Style style={CodeBlockStyles} elementName={HtmlConst.CODE} {...otherProps}>
        <Style style={CodeBlockLayoutStyles}>
          <CodeBlockHeader content={children} className={className}/>
          <CodeBlockInner>
            {children}
          </CodeBlockInner>
        </Style>
      </Style>
    </CodeBlockContext.Provider>
  )
}

const CodeBlockStyles: CSS = {
  fontFamily: theme.fonts.code,
};

const CodeBlockLayoutStyles: CSS = {
  marginTop: 16,
  marginBottom: 16,
  marginLeft: 32,
  marginRight: 32,
  borderRadius: 16,
  '@large': {
    marginLeft: 0,
    marginRight: 0,
  },

  display: "flex",
  flexDirection: "column",
  padding: 16,
  gap: 8,

  // This would create the effect of having opacity to the background
  // Stops phones from keeping selecting background image instead of content.
  // while making children elements selectable.
  backgroundImage: `${theme.colors.codeBlockBackground}`,
  boxShadow: theme.shadows.depthShadow,
  pointerEvents: "none",  
  '*': {
    pointerEvents: "auto"
  },

  // Limit the height for code view...
  // maxHeight: 240,
}

export default CodeBlock;