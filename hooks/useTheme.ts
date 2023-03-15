import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside of a ThemeProvider.")
  }

  return context;
}

export default useTheme;