import { useRef } from "react";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

const useFirstMountState = (): boolean => {
  const isFirstMount = useRef(true);

  if (isFirstMount.current) {
    isFirstMount.current = false;

    return true;
  }

  return isFirstMount.current;
};

export default useFirstMountState;
