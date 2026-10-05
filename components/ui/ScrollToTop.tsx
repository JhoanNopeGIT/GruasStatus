"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.8,
          }}
          transition={{
            duration: 0.35,
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          aria-label="Volver arriba"
          className="
            group
            fixed
            right-4
            bottom-24
            z-[998]
            flex
            h-12
            w-12
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-[var(--primary)]/30
            bg-white/90
            backdrop-blur-2xl
            text-[var(--primary)]
            shadow-[0_10px_40px_rgba(181,35,123,.25)]
            transition-all
            sm:right-8
            sm:bottom-28
            sm:h-14
            sm:w-14
          "
        >
          {/* Glow de fondo */}
          <span
            className="
              absolute
              inset-0
              rounded-2xl
              bg-[var(--primary)]
              opacity-0
              blur-xl
              transition-all
              duration-500
              group-hover:opacity-20
            "
          />

          {/* Flecha */}
          <ArrowUp
            size={22}
            className="
              relative
              transition-all
              duration-300
              group-hover:-translate-y-1
            "
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}