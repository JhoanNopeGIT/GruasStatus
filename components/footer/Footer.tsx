"use client";

import Image from "next/image";

import Container from "@/components/ui/Container";

import FooterCTA from "./FooterCTA";
import FooterBottom from "./FooterBottom";
import FooterColumn from "./FooterColumn";

import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const services = [
  {
    label: "Grúas para vehículos",
    href: "#services",
  },
  {
    label: "Grúas para motocicletas",
    href: "#services",
  },
  {
    label: "Maquinaria",
    href: "#services",
  },
  {
    label: "Transporte especializado",
    href: "#services",
  },
];

const company = [
  {
    label: "Cobertura",
    href: "#coverage",
  },
  {
    label: "Nuestro proceso",
    href: "#process",
  },
  {
    label: "Galería",
    href: "#gallery",
  },
  {
    label: "Contáctanos",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F1014] text-white">

      {/* Glow superior */}
      <div className="absolute left-1/2 top-0 h-60 sm:h-80 w-full max-w-[700px] -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-[150px] pointer-events-none" />

      {/* Glow izquierdo */}
      <div className="absolute -left-44 bottom-0 h-60 sm:h-80 w-60 sm:w-80 rounded-full bg-[var(--primary)]/15 blur-[130px] pointer-events-none" />

      {/* Glow derecho */}
      <div className="absolute -right-40 top-40 h-60 sm:h-80 w-60 sm:w-80 rounded-full bg-[var(--primary)]/10 blur-[140px] pointer-events-none" />

      {/* Línea superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">

        {/* Sección CTA superior del footer */}
        <FooterCTA />

        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">

          {/* =========================================================
              COLUMNA 1: LOGO Y REDES
          ========================================================== */}
          <div className="flex flex-col">
            <a
              href="#hero"
              className="group inline-flex items-center gap-3.5"
            >
              <Image
                src="/images/logo/logo-gruas-status.png"
                alt="Grúas Status"
                width={70}
                height={70}
                className="
                  h-auto
                  w-14
                  sm:w-[70px]
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:rotate-3
                "
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Grúas Status
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  Asistencia especializada
                </p>
              </div>
            </a>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-400">
              Brindamos soluciones rápidas y seguras para el traslado
              de vehículos, motocicletas y maquinaria en Bogotá y
              municipios cercanos.
            </p>

            {/* Redes Sociales (WhatsApp actualizado al número real) */}
            <div className="mt-8 flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  href: "https://facebook.com",
                  label: "Facebook"
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com",
                  label: "Instagram"
                },
                {
                  icon: MessageCircle,
                  href: "https://wa.me/573058156056?text=Hola,%20necesito%20información",
                  label: "WhatsApp"
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="
                      group
                      flex
                      h-11
                      w-11
                      sm:h-12
                      sm:w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[var(--primary)]
                      hover:bg-[var(--primary)]
                      hover:shadow-[0_10px_30px_rgba(181,35,123,.45)]
                    "
                  >
                    <Icon
                      size={18}
                      className="
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-12
                        sm:w-5
                        sm:h-5
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              COLUMNA 2: SERVICIOS
          ========================================================== */}
          <FooterColumn
            title="Servicios"
            items={services}
          />

          {/* =========================================================
              COLUMNA 3: EMPRESA
          ========================================================== */}
          <FooterColumn
            title="Empresa"
            items={company}
          />

          {/* =========================================================
              COLUMNA 4: CONTACTO
          ========================================================== */}
          <div>
            <h3 className="relative mb-6 sm:mb-8 inline-block text-lg sm:text-xl font-bold">
              Contacto
              <span
                className="
                  absolute
                  -bottom-2.5
                  left-0
                  h-[3px]
                  w-12
                  rounded-full
                  bg-gradient-to-r
                  from-[var(--primary)]
                  to-transparent
                "
              />
            </h3>

            <div className="space-y-5 text-sm sm:text-base">
              
              {/* Teléfono actualizado */}
              <a
                href="tel:+573058156056"
                className="group flex gap-3.5 items-start"
              >
                <Phone className="mt-0.5 shrink-0 text-[var(--primary)]" size={20} />
                <div>
                  <p className="text-xs text-gray-400">
                    Llámanos
                  </p>
                  <p className="transition group-hover:text-white font-medium">
                    305 815 6056
                  </p>
                </div>
              </a>

              {/* Correo */}
              <a
                href="mailto:contacto@gruasstatus.com"
                className="group flex gap-3.5 items-start"
              >
                <Mail className="mt-0.5 shrink-0 text-[var(--primary)]" size={20} />
                <div>
                  <p className="text-xs text-gray-400">
                    Correo
                  </p>
                  <p className="transition group-hover:text-white break-all font-medium text-xs sm:text-sm">
                    contacto@gruasstatus.com
                  </p>
                </div>
              </a>

              {/* Cobertura */}
              <div className="flex gap-3.5 items-start">
                <MapPin className="mt-0.5 shrink-0 text-[var(--primary)]" size={20} />
                <div>
                  <p className="text-xs text-gray-400">
                    Cobertura
                  </p>
                  <p className="font-medium">
                    Bogotá D.C. y alrededores
                  </p>
                </div>
              </div>

            </div>

            {/* Badge de disponibilidad */}
            <div
              className="
                mt-8
                rounded-2xl
                border
                border-[var(--primary)]/20
                bg-[var(--primary)]/10
                p-4
                sm:p-5
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-white">
                  Atención disponible 24/7
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">
                Estamos listos para atender emergencias y programar
                traslados cuando lo necesites.
              </p>
            </div>

          </div>

        </div>

      </Container>

      {/* Pie de página inferior (Copyright, etc.) */}
      <FooterBottom />

    </footer>
  );
}