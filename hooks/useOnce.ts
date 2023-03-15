import { useEffect } from "react";
import useFirstMountState from "./useFirstMountState";

// identical to `useEffect()` but only uses at the first invocation
const useOnce: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  useEffect(() => {
    if (isFirstMount) {
      return effect();
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useOnce;
