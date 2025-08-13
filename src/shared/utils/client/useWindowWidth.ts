import { useEffect, useState } from "react";
import { debounce } from "../debounce";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const resizeWidthHandler = debounce(() => {
      setWidth(window.innerWidth);
    }, 500);
    window.addEventListener("resize", resizeWidthHandler);

    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", resizeWidthHandler);
    };
  }, []);

  return width;
};

export default useWindowWidth;
