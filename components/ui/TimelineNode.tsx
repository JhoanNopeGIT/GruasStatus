"use client";

import { motion } from "framer-motion";

interface TimelineNodeProps {
  number: number;
}

export default function TimelineNode({ number }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="
        absolute
        left-[12px]
        top-6
        z-20
        flex
        sm:left-[12px]
        sm:top-8
        lg:left-1/2
        lg:top-1/2
        lg:-translate-x-1/2
        lg:-translate-y-1/2
      "
    >
      {/* Glow animado */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-6
          -top-6
          h-20
          w-20
          rounded-full
          bg-[var(--primary)]/20
          blur-2xl
        "
      />

      {/* Nodo (Círculo con el número) */}
      <div
        className="
          relative
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border-4
          border-white
          bg-gradient-to-br
          from-[var(--primary-light)]
          via-[var(--primary)]
          to-[var(--primary-dark)]
          text-xs
          font-bold
          text-white
          shadow-[0_15px_45px_rgba(161,38,114,.45)]
          transition-all
          duration-500
          hover:scale-110
          hover:rotate-6
          sm:h-12
          sm:w-12
          sm:text-base
          lg:h-16
          lg:w-16
          lg:text-xl
        "
      >
        {number}
      </div>
    </motion.div>
  );
}