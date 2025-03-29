"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AuroraBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-transparent",
        className
      )}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-purple-600 via-blue-500 to-transparent opacity-20 blur-3xl"
        initial={{ scale: 0.9, opacity: 0.4 }}
        animate={{
          scale: [0.9, 1.05, 0.9],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
