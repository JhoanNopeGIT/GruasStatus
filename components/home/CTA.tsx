"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

import {
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-32">

      {/* Fondo Degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[#b5237b] to-[#7f1d5a]" />

      {/* Glows decorativos */}
      <div className="absolute -left-40 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* =========================================================
              TEXTO Y ACCIONES
          ========================================================== */}
          <FadeIn>
            <div className="w-full">
              
              {/* Badge */}
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md sm:px-5 sm:py-2 sm:text-xs">
                Servicio Disponible 24/7
              </span>

              {/* Título */}
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
                ¿Necesitas una grúa ahora mismo?
              </h2>

              {/* Descripción */}
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
                Nuestro equipo está preparado para atender cualquier emergencia
                o traslado programado con rapidez, seguridad y atención
                profesional.
              </p>

              {/* Botones de Contacto */}
              <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                
                {/* Botón WhatsApp (Forzado con estilos directos para evitar que falle el componente Button) */}
                <a
                  href="https://wa.me/573058156056?text=Hola,%20necesito%20solicitar%20un%20servicio%20de%20grúa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2.5
                    w-full
                    sm:w-auto
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-extrabold
                    uppercase
                    tracking-wider
                    text-[#25D366]
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-300
                    hover:bg-gray-100
                    hover:scale-105
                    sm:text-base
                  "
                >
                  <MessageCircle size={22} className="shrink-0 fill-[#25D366] text-white" />
                  <span>Solicitar por WhatsApp</span>
                </a>
                
                {/* Botón Llamar */}
                <Button
                  href="tel:+573058156056"
                  variant="secondary"
                  className="w-full sm:w-auto px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base border-white/40 text-white hover:bg-white/10"
                >
                  <Phone size={18} className="shrink-0" />
                  <span>Llamar ahora</span>
                </Button>

              </div>

              {/* Beneficios rápidos */}
              <div className="mt-10 grid grid-cols-1 gap-3 min-[450px]:grid-cols-3 sm:mt-12 sm:gap-4">
                <div className="flex items-center gap-2.5 text-white text-sm sm:text-base font-medium">
                  <CheckCircle2 size={20} className="shrink-0 text-white/90" />
                  <span>24/7 Disponible</span>
                </div>

                <div className="flex items-center gap-2.5 text-white text-sm sm:text-base font-medium">
                  <CheckCircle2 size={20} className="shrink-0 text-white/90" />
                  <span>Bogotá y alrededores</span>
                </div>

                <div className="flex items-center gap-2.5 text-white text-sm sm:text-base font-medium">
                  <CheckCircle2 size={20} className="shrink-0 text-white/90" />
                  <span>Personal capacitado</span>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* =========================================================
              IMAGEN DE LA SECCIÓN CTA
          ========================================================== */}
          <FadeIn delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              <Image
                src="/images/cta/grua-cta.png"
                alt="Grúa Grúas Status"
                width={700}
                height={700}
                sizes="(max-width: 768px) 90vw, 500px"
                className="
                  relative
                  z-10
                  h-auto
                  w-[85%]
                  sm:w-full
                  max-w-[420px]
                  lg:max-w-full
                  drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}