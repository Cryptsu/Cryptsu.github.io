import { createContext } from "react";
import type { Context } from "react";

type ThemeContextType = (
  Context<{
    activeTheme: string;
    setTheme: (theme: string) => void;
  }>
)

export const ThemeContext: ThemeContextType = createContext({
  activeTheme: "",
  setTheme: (_) => {}
})