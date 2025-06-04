import useWindowWidth from "@/src/shared/hooks/useWindowWidth";
import { useEffect, useState } from "react";

export const useExtendable = () => {
  const width = useWindowWidth();
  const [isExtendable, setIsExtendable] = useState<boolean | undefined>();

  useEffect(() => {
    if (!width) return;

    if (width < 1380) {
      setIsExtendable(true);
    } else {
      setIsExtendable(false);
    }
  }, [width]);

  return isExtendable;
};
