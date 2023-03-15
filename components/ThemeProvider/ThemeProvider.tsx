import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeType } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";

type ThemeProviderProps = PropsWithChildren<{
  themes: [ThemeType];
}>

export default function ThemeProvider ({ themes, children }: ThemeProviderProps) {
  const [ currentTheme, setCurrentTheme ] = useState(themes[0]);

  return (
    <>
      {children}
    </> 
  )
}