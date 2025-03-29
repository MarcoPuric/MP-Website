// components/ui/scroll-aurora.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAurora() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const x = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 blur-3xl z-[-1]"
      style={{
        x,
        y,
        background: "radial-gradient(circle at center, rgba(0, 120, 255, 0.2), transparent 70%)",
      }}
    />
  );
}
