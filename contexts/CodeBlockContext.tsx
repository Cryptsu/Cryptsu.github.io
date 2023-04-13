import { createContext } from "react";
import type { Context } from "react";

type CodeBlockContextType = (
  Context<{
    // Code block states
    showInner: boolean;
    wrapCode: boolean;
  
    // Layout change functions
    ToggleContentFn: () => void;
    ToggleWrapFn: () => void;
  }>
)

export const CodeBlockContext: CodeBlockContextType = createContext({
  // Code block states
  showInner: true as boolean,
  wrapCode: false as boolean,

  // Template change functions
  ToggleContentFn: () => {},
  ToggleWrapFn: () => {},
})