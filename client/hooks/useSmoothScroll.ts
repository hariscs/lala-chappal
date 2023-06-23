import { useAnimation } from "framer-motion";
import { MutableRefObject, useEffect } from "react";

const useSmoothScroll = (
  ref: MutableRefObject<HTMLElement | null>,
  threshold: number = 0.1
) => {
  const animation = useAnimation();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        } else {
          animation.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, animation, threshold]);

  return animation;
};

export default useSmoothScroll;
