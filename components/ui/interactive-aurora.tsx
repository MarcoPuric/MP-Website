"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveAurora() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl"
        animate={{
          x: position.x - 200,
          y: position.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
        }}
      />
    </div>
  );
}
