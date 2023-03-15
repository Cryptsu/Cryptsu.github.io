import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

import { getLocalStorage, setLocalStorage } from "@/lib/helpers/storage";
import { ThemeConst, StorageConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type ThemeProviderProps = PropsWithChildren<{}>

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const userConfigTheme = getLocalStorage(StorageConst.KEY_THEME);
  const [ 
    currentTheme, 
    setCurrentTheme 
  ] = useState(typeof userConfigTheme === "string" ? userConfigTheme : ThemeConst.THEME_DEFAULT);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme: currentTheme,
        setTheme: 
          (theme: string) => { 
            setCurrentTheme(theme);
            setLocalStorage(StorageConst.KEY_THEME, theme);
          },
      }}
    >
      {children}
    </ThemeContext.Provider> 
  )
}

export default ThemeProvider;