import { useEffect, useRef } from "react";

const useCloseByClickOutside = (close: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener("click", handler);
    document.addEventListener("touchend", handler);

    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchend", handler);
    };
  });

  return ref;
};

export default useCloseByClickOutside;
