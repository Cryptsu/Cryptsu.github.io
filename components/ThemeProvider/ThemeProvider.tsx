import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { getLocalStorage, setLocalStorage } from "@/lib/helpers/storage";
import useOnce from "@/hooks/useOnce";
import { ThemeConst, StorageConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type ThemeProviderProps = PropsWithChildren<{}>

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ 
    currentTheme, 
    setCurrentTheme 
  ] = useState("");

  // Set theme to whatever we're having
  useOnce(() => {
    let userConfigTheme = getLocalStorage(StorageConst.KEY_THEME);
    userConfigTheme = typeof userConfigTheme === 'string' ? userConfigTheme : ThemeConst.THEME_DEFAULT; 

    setCurrentTheme(userConfigTheme);
    setLocalStorage(StorageConst.KEY_THEME, userConfigTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme: currentTheme,
        setTheme: 
          (theme: string) => { 
            setLocalStorage(StorageConst.KEY_THEME, theme);
            setCurrentTheme(theme);
          },
      }}
    >
      {children}
    </ThemeContext.Provider> 
  )
}

export default ThemeProvider;