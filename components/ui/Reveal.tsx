"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "bottom" | "left" | "right";
}

export default function Reveal({
  children,
  delay = 0,
  direction = "bottom",
}: RevealProps) {
  const hidden = {
    opacity: 0,
    x:
      direction === "left"
        ? -24
        : direction === "right"
        ? 24
        : 0,
    y: direction === "bottom" ? 40 : 0,
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}