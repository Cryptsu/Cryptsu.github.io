import { useState } from "react";
import { CodeBlockContext, CodeBlockStateEnum, CodeBlockStates } from "@/contexts/CodeBlockContext";
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
  const [codeBlockStateIndex, setCodeBlockStateIndex] = useState<CodeBlockStateEnum>(CodeBlockStateEnum.wrapCode);
  const [showInner, setShowInner] = useState<boolean>(true);
  const [wrapCode, setWrapCode] = useState<boolean>(true);
  const [blockHeight, setBlockHeight] = useState<number | null>(null);
  const [shouldToggleAnimation, setShouldToggleAnimation] = useState<boolean>(false);

  // ----------- For Desktop -----------
  const ToggleContentFn = () => {
    setShouldToggleAnimation(true);
    setShowInner(!showInner);
  }

  const ToggleWrapFn = () => {
    setShouldToggleAnimation(false);
    setWrapCode(!wrapCode);
  }
  
  // ----------- For Mobile -----------
  const UpdateVisualStateFn = () => {
    let nextCodeBlockStateIndex = (codeBlockStateIndex + 1) % CodeBlockStates.length;
    setCodeBlockStateIndex(nextCodeBlockStateIndex);

    console.log(nextCodeBlockStateIndex, CodeBlockStates[nextCodeBlockStateIndex])

    switch (CodeBlockStates[nextCodeBlockStateIndex]) {
      case CodeBlockStateEnum.wrapCode:
        setShouldToggleAnimation(true);
        setWrapCode(true);
        setShowInner(true);
        break;
      case CodeBlockStateEnum.stretch:
        setShouldToggleAnimation(false);
        setWrapCode(false);
        setShowInner(true);
        break;
      case CodeBlockStateEnum.closeBox:
        setShouldToggleAnimation(true);
        setWrapCode(false);
        setShowInner(false);
        break;
    }
  }

  return (
    <CodeBlockContext.Provider
      value={{
        showInner,
        wrapCode,
        codeBlockState: CodeBlockStates[codeBlockStateIndex],
        blockHeight,
        shouldToggleAnimation,

        ToggleContentFn,
        ToggleWrapFn,
        UpdateVisualStateFn,
        UpdateBlockHeightFn: setBlockHeight,
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
  marginTop: "1em",
  marginBottom: "1em",
  marginLeft: "2em",
  marginRight: "2em",
  borderRadius: "1em",
  '@large': {
    marginLeft: 0,
    marginRight: 0,
  },

  display: "flex",
  flexDirection: "column",
  padding: "1em",
  gap: "1em",

  // This would create the effect of having opacity to the background
  // Stops phones from keeping selecting background image instead of content.
  // while making children elements selectable.
  backgroundImage: `${theme.colors.codeBlockBackground}`,
  boxShadow: theme.shadows.depthShadow,

  // Limit the height for code view...
  // maxHeight: 240,
}

export default CodeBlock;