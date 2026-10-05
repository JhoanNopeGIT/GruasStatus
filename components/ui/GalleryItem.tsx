"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

interface GalleryItemProps {
  src: string;
  alt: string;
  large?: boolean;
  delay?: number;
  onClick?: () => void;
}

export default function GalleryItem({
  src,
  alt,
  large = false,
  delay = 0,
  onClick,
}: GalleryItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      onClick={onClick}
      className={`
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-2xl
        shadow-[0_20px_50px_rgba(0,0,0,.08)]
        transition-all
        duration-300
        hover:shadow-[0_25px_60px_rgba(0,0,0,.15)]
        sm:rounded-[28px]
        
        /* Dejamos que el Grid de Gallery.tsx controle el alto y ancho real */
        w-full
        h-full
        min-h-[200px]

        /* Si es large, ocupa 2 filas desde pantallas medianas en adelante */
        ${large ? "md:row-span-2" : ""}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* =========================================================
          OVERLAY Y BOTÓN DE EXPANDIR
      ========================================================== */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          transition-all
          duration-500
          group-hover:bg-black/45
        "
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[var(--primary)]
            opacity-0
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:opacity-100
            sm:h-16
            sm:w-16
          "
        >
          <Expand size={28} className="sm:w-[30px] sm:h-[30px]" />
        </div>
      </div>
    </motion.div>
  );
}