import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  // Lưu vị trí chuột
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  // Tạo hiệu ứng di chuyển mượt
  const springX = useSpring(0, { stiffness: 300, damping: 25 });
  const springY = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      // cập nhật vị trí chuột thật
      setPos({ x: e.clientX, y: e.clientY });
    };

    // xử lý hover
    const handleMouseEnter = (e) => {
      if (e.target.closest(".hoverable")) setHover(true);
    };
    const handleMouseLeave = (e) => {
      if (e.target.closest(".hoverable")) setHover(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  // đồng bộ vị trí của spring với vị trí thật
  useEffect(() => {
    springX.set(pos.x);
    springY.set(pos.y);
  }, [pos.x, pos.y, springX, springY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[9999]
        w-8 h-8 rounded-full mix-blend-difference
        transition-all duration-300 ease-out
        ${hover ? "bg-purple-400 scale-150 blur-[2px]" : "bg-white scale-100"}`}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

export default CustomCursor;
