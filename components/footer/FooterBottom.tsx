"use client";

import Link from "next/link";

export default function FooterBottom() {

  const year = new Date().getFullYear();

  return (

    <div className="relative">

      {/* Línea */}

      <div
        className="
          h-px

          bg-gradient-to-r

          from-transparent

          via-[var(--primary)]

          to-transparent
        "
      />

      <div
        className="
          mx-auto

          flex

          max-w-7xl

          flex-col

          items-center

          justify-between

          gap-6

          px-4
          py-6
          text-center
          text-sm
          text-gray-400
          sm:px-6
          sm:py-8
          lg:flex-row
          lg:text-left
        "
      >

        <p>

          © {year}

          <span className="mx-2 font-semibold text-white">

            Grúas Status

          </span>

          Todos los derechos reservados.

        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">

          <Link
            href="/politica-de-privacidad"
            className="
              transition

              hover:text-[var(--primary)]
            "
          >
            Política de Privacidad
          </Link>

          <Link
            href="/terminos-y-condiciones"
            className="
              transition

              hover:text-[var(--primary)]
            "
          >
            Términos y Condiciones
          </Link>

        </div>

        <p>

          Desarrollado por

          <span
            className="
              ml-2

              font-bold

              text-white

              transition

              hover:text-[var(--primary)]
            "
          >

            BASTIQ

          </span>

        </p>

      </div>

    </div>

  );

}