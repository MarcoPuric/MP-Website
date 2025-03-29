// components/ui/animated-background.tsx
'use client';

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="w-[140%] h-[140%] absolute top-[-20%] left-[-20%] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl animate-aurora" />
    </div>
  );
}
