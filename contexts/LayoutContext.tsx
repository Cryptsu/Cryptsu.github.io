import { createContext } from "react";
import type { Context } from "react";

type LayoutContextType = (
  Context<{
    setTheme: (theme: string) => void;
  }>
)

export const LayoutContext: LayoutContextType = createContext({
  setTheme: (_) => {}
})