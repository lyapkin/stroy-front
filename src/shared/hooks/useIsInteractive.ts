import { useEffect, useState } from "react";

const useIsInteractive = () => {
  const [isInterctive, setIsInterctive] = useState(false);

  useEffect(() => {
    setIsInterctive(true);
  }, []);

  return isInterctive;
};

export default useIsInteractive;
