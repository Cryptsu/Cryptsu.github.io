import { createContext } from "react";
import type { Context } from "react";

type CodeBlockContextType = (
  Context<{
    // Code block states
    showInner: number;
    wrapCode: boolean;
  
    // Layout change functions
    ToggleContentFn: () => void;
    ToggleWrapFn: () => void;
  }>
)

export const CodeBlockContext: CodeBlockContextType = createContext({
  // Code block states
  showInner: 0,
  wrapCode: false as boolean,

  // Template change functions
  ToggleContentFn: () => {},
  ToggleWrapFn: () => {},
})