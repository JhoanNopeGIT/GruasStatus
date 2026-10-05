"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#090909]
          "
        >
          {/* Glow de fondo */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [.15, .3, .15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[220px]
              w-[220px]
              rounded-full
              bg-[var(--primary)]
              blur-[140px]
              sm:h-[450px]
              sm:w-[450px]
            "
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: .6,
              }}
            >
              <Image
                src="/images/logo/logo-gruas-status.png"
                alt="Grúas Status"
                width={150}
                height={150}
              />
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .25,
              }}
              className="
                mt-6
                text-2xl
                font-bold
                tracking-[4px]
                text-white
                sm:text-3xl
                sm:tracking-[8px]
              "
            >
              STATUS
            </motion.h1>

            <div className="mt-10 flex gap-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [.3, 1, .3],
                  }}
                  transition={{
                    duration: .8,
                    delay: i * .2,
                    repeat: Infinity,
                  }}
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-[var(--primary)]
                  "
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}