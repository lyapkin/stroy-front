import useCloseByClickOutside from "@/src/shared/hooks/useCloseByClickOutside";
import { useState } from "react";

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const outsideClickCloseRef = useCloseByClickOutside(() => {
    setOpen(false);
  });

  return { open, setOpen, outsideClickCloseRef };
};

export default useToggle;
