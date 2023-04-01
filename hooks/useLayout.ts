import { useContext } from "react";
import { LayoutContext } from "@/contexts/LayoutContext";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used inside of a LayoutProvider.")
  }

  return context;
}

export default useLayout;