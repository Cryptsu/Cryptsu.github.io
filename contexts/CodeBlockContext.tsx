import { createContext } from "react";
import type { Context } from "react";

type CodeBlockContextType = (
  Context<{
    // Code block states
    showInner: number;
  
    // Layout change functions
    ToggleContentFn: () => void;
  }>
)

export const CodeBlockContext: CodeBlockContextType = createContext({
  // Code block states
  showInner: 0,

  // Template change functions
  ToggleContentFn: () => {},
})