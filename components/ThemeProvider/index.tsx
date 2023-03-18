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

  // This component is triggered once during the page visit.
  useOnce(() => {
    let userConfigTheme = getLocalStorage(StorageConst.KEY_THEME);
    userConfigTheme = typeof userConfigTheme === 'string' ? userConfigTheme : ThemeConst.THEME_DEFAULT; 

    setCurrentTheme(userConfigTheme);
    setLocalStorage(StorageConst.KEY_THEME, userConfigTheme);

    // Remove "prepended-theme" class in body
    // TODO: This hack works, but ugly as hell. Please change.
    let bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.removeAttribute("class");
    bodyElement.removeAttribute("style");
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