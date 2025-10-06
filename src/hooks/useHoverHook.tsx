import { useCallback, useState } from "react";

const useHoverHook = (initialValue: boolean) => {
  const [isHovered, setIsHovered] = useState(initialValue);
  const handleMouseEnter = useCallback(() => {
    setIsHovered(() => true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(() => false);
  }, []);
  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverHook;
