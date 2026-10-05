"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  const phone = "573058156056"; // <-- Cambia por tu número

  const message = encodeURIComponent(
    "Hola, estoy interesado en un servicio de grúa. ¿Podrían brindarme información?"
  );

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 640px)");
    setExpanded(desktop.matches);

    const interval = setInterval(() => {
      if (desktop.matches) {
        setExpanded((prev) => !prev);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        y: 80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.03,
      }}
      onMouseEnter={() => setExpanded(true)}
      className="
        group
        fixed
        right-4
        bottom-[max(1.25rem,env(safe-area-inset-bottom))]
        z-[999]
        sm:bottom-8
        sm:right-8
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[var(--primary)]
          blur-xl
          opacity-25
          animate-pulse
        "
      />

      {/* Botón */}

      <div
        className="
          relative

          flex
          items-center
          gap-3
          rounded-full
          border
          border-white/20
          bg-white/90
          px-3
          py-3
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(181,35,123,.25)]
          transition-all
          duration-500
          sm:gap-4
          sm:px-5
          sm:py-4
        "
      >
        {/* Icono */}

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[var(--primary)]
            text-white
            shadow-lg
            sm:h-14
            sm:w-14
          "
        >
          <MessageCircle size={28} />
        </div>

        {/* Texto */}

        <motion.div
          animate={{
            width: expanded ? "210px" : "0px",
            opacity: expanded ? 1 : 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="hidden overflow-hidden sm:block"
        >
          <div className="whitespace-nowrap">

            <p className="font-bold text-gray-900">

              ¿Necesitas una grúa?

            </p>

            <div className="mt-1 flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm text-gray-500">

                Asesor en línea

              </span>

            </div>

          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}