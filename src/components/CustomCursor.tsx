"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The main dot */}
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -10,
          top: -10,
          scale: isClicked ? 1.5 : 1,
        }}
      />
      {/* The following ring */}
      <motion.div
        className="custom-cursor-outline"
        style={{
          translateX: springX,
          translateY: springY,
          left: -20,
          top: -20,
          scale: isClicked ? 0.8 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
