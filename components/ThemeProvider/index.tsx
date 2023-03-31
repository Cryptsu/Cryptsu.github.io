import { useCallback, useEffect, useState } from "react";
import useOnce from "@/hooks/useOnce";
import { ThemeContext } from "@/contexts/ThemeContext";
import { getLocalStorage, setLocalStorage } from "@/lib/helpers/storage";
import { ThemeClassMap } from "@/lib/styles/stiches.config";
import { ThemeConst, StorageConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type ThemeProviderProps = PropsWithChildren<{}>

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // This component is triggered once during the page visit.
  useOnce(() => {
    let userConfigTheme = getLocalStorage(StorageConst.KEY_THEME);
    userConfigTheme = typeof userConfigTheme === 'string' ? userConfigTheme : ThemeConst.THEME_DEFAULT; 
    setLocalStorage(StorageConst.KEY_THEME, userConfigTheme);

    // TODO: This hack works to prevent flickering
    // during page scrolling, but ugly as hell. 
    // Please change. (or not.)
    let bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.className = ThemeClassMap[userConfigTheme];
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        setTheme: 
          (theme: string) => { 
            // Set to local storage.
            setLocalStorage(StorageConst.KEY_THEME, theme);
            
            // TODO: This hack works to prevent flickering
            // during page scrolling, but ugly as hell. 
            // Please change. (or not.)
            let bodyElement = document.getElementsByTagName("body")[0];
            bodyElement.className = ThemeClassMap[theme];
          },
      }}
    >
      {children}
    </ThemeContext.Provider> 
  )
}

export default ThemeProvider;