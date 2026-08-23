import { useEffect, useRef, useState } from "react";

const CountUp = ({
  end,
  duration = 1500,
  start = 0,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(start);
  const animationRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(start + (end - start) * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [start, end, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
};

export default CountUp;
