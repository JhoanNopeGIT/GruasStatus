"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 140);
      mouseY.set(e.clientY - 140);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        hidden
        h-[280px]
        w-[280px]
        rounded-full
        bg-[var(--primary)]/10
        blur-[90px]
        cursor-glow
        lg:block
      "
    />
  );
}