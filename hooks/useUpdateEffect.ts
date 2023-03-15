import { useEffect } from "react";
import useFirstMountState from "./useFirstMountState";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

// identical to `useEffect()` but ignores the first invocation
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useUpdateEffect;
