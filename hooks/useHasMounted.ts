import { useEffect, useState } from "react";

/////////////////////////////////////////////////////
//  This code is copied from jarv.is
/////////////////////////////////////////////////////

const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

export default useHasMounted;
