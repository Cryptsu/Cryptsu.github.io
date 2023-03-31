import { useEffect, useState, useMemo } from 'react';
import type { RefObject } from 'react'; 

// Compares the current position of reference with viewport
// and returns 
//    -  0 if ref is in viewport
//    - -1 if ref not in viewport && Y_relative(ref) < 0 
//    -  1 if ref not in viewport && Y_relative(ref) > 0
const useCmpWithViewPort = (ref: RefObject<HTMLElement>) => {
  const [cmpValue, setCmpValue] = useState<0 | -1 | 1>(0);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setCmpValue(
          entry.isIntersecting
            ? 0
            : entry.boundingClientRect.y < 0 ? -1 : 1
        ),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return cmpValue;
}

export default useCmpWithViewPort;