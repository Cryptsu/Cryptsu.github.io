import { useCallback, useEffect, useState } from "react";
import useOnce from "@/hooks/useOnce";
import { LayoutContext } from "@/contexts/LayoutContext";
import { getLocalStorage, setLocalStorage } from "@/lib/helpers/storage";
import { ThemeClassMap } from "@/lib/styles/stiches.config";
import { ThemeConst, StorageConst, LocaleConst } from "@/lib/consts";
import type { PropsWithChildren } from "react";

type LayoutProviderProps = PropsWithChildren<{}>

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [ currentTheme, setCurrentTheme ] = useState(ThemeConst.THEME_DEFAULT);
  const [ currentLocale, setCurrentLocale ] = useState(LocaleConst.LOCALE_DEFAULT);

  // This component is triggered once during the page visit.
  useOnce(() => {
    // Pull configs (if exists) or set it to default rule :)
    let userConfigTheme = getLocalStorage(StorageConst.KEY_THEME);
    let userConfigLocale = getLocalStorage(StorageConst.KEY_LOCALE);
    userConfigTheme = typeof userConfigTheme === 'string' ? userConfigTheme : ThemeConst.THEME_DEFAULT; 
    userConfigLocale = typeof userConfigLocale === 'string' ? userConfigLocale : LocaleConst.LOCALE_DEFAULT;

    // Save local storage  :)
    setLocalStorage(StorageConst.KEY_THEME, userConfigTheme);
    setLocalStorage(StorageConst.KEY_LOCALE, userConfigLocale);

    // Also set some states so that
    // if we're to retrieve it later,
    // we can get it :)
    setCurrentTheme(userConfigTheme);
    setCurrentLocale(userConfigLocale);

    // TODO: This hack works to prevent flickering
    // during page scrolling, but ugly as hell. 
    // Please change. (or not.)
    let bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.className = ThemeClassMap[userConfigTheme];
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        currentTheme,
        currentLocale,

        setTheme: 
          (theme: string) => { 
            setLocalStorage(StorageConst.KEY_THEME, theme);
            setCurrentTheme(theme);
            
            // TODO: This hack works to prevent flickering
            // during page scrolling, but ugly as hell. 
            // Please change. (or not.)
            let bodyElement = document.getElementsByTagName("body")[0];
            bodyElement.className = ThemeClassMap[theme];
          },

        setLocale: 
          (locale: string) => {
            setLocalStorage(StorageConst.KEY_LOCALE, locale);
            setCurrentLocale(locale);
          }
      }}
    >
      {children}
    </LayoutContext.Provider> 
  )
}

export default LayoutProvider;