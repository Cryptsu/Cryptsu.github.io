import { useContext } from "react";
import { LayoutContext } from "@/contexts/LayoutContext";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

const useTheme = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useTheme must be used inside of a LayoutProvider.")
  }

  return context;
}

export default useTheme;