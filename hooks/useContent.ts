import { useContext } from "react";
import { ContentContext } from "@/contexts/ContentContext";

/////////////////////////////////////////////////////
//  This code is inspired from jarv.is
/////////////////////////////////////////////////////

const useContent = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent must be used inside of a ContentContext.Provider.")
  }

  return context;
}

export default useContent;