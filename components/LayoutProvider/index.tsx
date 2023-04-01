import { useCallback, useEffect, useState } from "react";
import useOnce from "@/hooks/useOnce";
import { LayoutContext } from "@/contexts/LayoutContext";
import { getLocalStorage, setLocalStorage } from "@/lib/helpers/storage";
import { ThemeClassMap } from "@/lib/styles/stiches.config";
import { ThemeConst, StorageConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type LayoutProviderProps = PropsWithChildren<{}>

const LayoutProvider = ({ children }: LayoutProviderProps) => {
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
    <LayoutContext.Provider
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
    </LayoutContext.Provider> 
  )
}

export default LayoutProvider;