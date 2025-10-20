import type { TAnimateWrapper } from "@/lib/types";
import { useInView } from "react-intersection-observer";

const AnimateToRight: React.FC<TAnimateWrapper> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      } transition-all ease-in-out duration-1000 `}
    >
      {children}
    </div>
  );
};

export default AnimateToRight;
