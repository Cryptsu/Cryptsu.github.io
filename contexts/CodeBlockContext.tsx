import { createContext } from "react";
import type { Context } from "react";

type CodeBlockContextType = (
  Context<{
    // Code block states
    showInner: boolean;
    wrapCode: boolean;
    codeBlockState: CodeBlockStateEnum;
    blockHeight: number | null;
    isFirstTime: boolean;
  
    // Layout change functions
    ToggleContentFn: () => void;
    ToggleWrapFn: () => void;
    UpdateVisualStateFn: () => void;
    UpdateBlockHeightFn: (x: number) => void;
  }>
)

export enum CodeBlockStateEnum {
  normal,
  wrapCode,
  closeBox,
}

export const CodeBlockStates: CodeBlockStateEnum[] = [
  CodeBlockStateEnum.normal,
  CodeBlockStateEnum.wrapCode,
  CodeBlockStateEnum.closeBox,
]

export const CodeBlockContext: CodeBlockContextType = createContext({
  // Code block states
  showInner: true as boolean,
  wrapCode: false as boolean,
  codeBlockState: CodeBlockStateEnum.normal as CodeBlockStateEnum,
  blockHeight: null as (number | null),
  isFirstTime: true as boolean,

  // Template change functions
  ToggleContentFn: () => {},
  ToggleWrapFn: () => {},
  UpdateVisualStateFn: () => {},
  UpdateBlockHeightFn: (_) => {},
})