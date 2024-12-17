import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltCard = ({ options, children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options || {});
    }

    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, [options]);

  return (
    <div ref={tiltRef} className="tilt-card">
      {children}
    </div>
  );
};

export default TiltCard;
