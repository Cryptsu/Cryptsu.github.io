import { createContext } from "react";
import type { Context } from "react";

type ThemeContextType = (
  Context<{
    setTheme: (theme: string) => void;
  }>
)

export const ThemeContext: ThemeContextType = createContext({
  setTheme: (_) => {}
})