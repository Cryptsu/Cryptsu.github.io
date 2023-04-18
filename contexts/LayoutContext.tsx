import { createContext } from "react";
import type { Context } from "react";

type LayoutContextType = (
  Context<{
    currentTheme: string;
    currentLocale: string;
    setTheme: (theme: string) => void;
    setLocale: (locale: string) => void;
  }>
)

export const LayoutContext: LayoutContextType = createContext({
  currentTheme: "",
  currentLocale: "",
  setTheme: (_) => {},
  setLocale: (_) => {},
})