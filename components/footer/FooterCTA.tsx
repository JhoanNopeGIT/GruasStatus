"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24">

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          mx-auto
          h-72
          w-full
          max-w-[650px]
          rounded-full
          bg-[var(--primary)]
          blur-[150px]
        "
      />

      <div
        className="
          relative

          overflow-hidden

          rounded-[24px]
          border
          border-white/10
          bg-white/5
          px-5
          py-10
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,.25)]
          sm:rounded-[32px]
          sm:px-10
          sm:py-16
        "
      >

        {/* Shine */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.06),transparent)]

            translate-x-[-150%]

            hover:animate-[shine_2.5s_linear]
          "
        />

        {/* Badge */}

        <div className="flex justify-center">

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-[var(--primary)]/30

              bg-[var(--primary)]/10

              px-5
              py-2

              text-sm
              font-semibold
              text-[var(--primary)]
            "
          >

            <ShieldCheck size={18} />

            Atención inmediata 24/7

          </div>

        </div>

        {/* Título */}

        <h2
          className="
            mt-6
            text-center
            text-[clamp(1.6rem,5vw,3rem)]
            font-extrabold
            leading-tight
            lg:text-5xl
          "
        >

          ¿Necesitas una grúa ahora mismo?

        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-center
            text-sm
            leading-7
            text-gray-300
            sm:mt-6
            sm:text-lg
            sm:leading-8
          "
        >

          Nuestro equipo está disponible las 24 horas para atender
          emergencias, traslados programados y asistencia especializada
          para vehículos, motocicletas y maquinaria.

        </p>

        {/* Rating */}

        <div className="mt-6 flex justify-center px-2 sm:mt-8">

          <div className="flex flex-wrap items-center justify-center gap-2">

            {[1,2,3,4,5].map((i)=>(
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            <span className="ml-3 text-gray-300">

              +500 servicios realizados

            </span>

          </div>

        </div>

        {/* Botones */}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-5">

          <Button
            href="https://wa.me/573058156056"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3.5 text-base sm:w-auto sm:px-9 sm:py-4 sm:text-lg"
          >
            <MessageCircle size={22} />

            WhatsApp
          </Button>

          <Button
            href="tel:+573001234567"
            variant="secondary"
            className="w-full px-6 py-3.5 text-base sm:w-auto sm:px-9 sm:py-4 sm:text-lg"
          >
            <Phone size={20} />

            Llamar ahora
          </Button>

        </div>

      </div>

    </section>
  );
}