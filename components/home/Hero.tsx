import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        scroll-mt-24
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =========================================================
          IMAGEN DE FONDO
      ========================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          sm:bg-center
        "
        style={{
          backgroundImage: "url('/images/hero/hero-grua.jpg')",
        }}
      />

      {/* =========================================================
          CAPA OSCURA
      ========================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-black/60
          sm:bg-black/55
        "
      />

      {/* Degradado inferior para integrar con la siguiente sección */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-black/80
          to-transparent
        "
      />

      {/* =========================================================
          CONTENIDO
      ========================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-4
          pb-16
          pt-28
          text-center

          sm:px-6
          sm:pb-20
          sm:pt-36

          lg:px-8
          lg:pb-24
          lg:pt-40

          xl:max-w-[1400px]
        "
      >
        {/* =====================================================
            BADGE
        ====================================================== */}
        <span
          className="
            mb-4
            inline-flex
            max-w-[90vw]
            items-center
            justify-center
            rounded-full
            border
            border-[var(--primary)]/40
            bg-[var(--primary)]/90
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.1em]
            shadow-[0_10px_40px_rgba(181,35,123,.25)]

            sm:mb-6
            sm:px-5
            sm:py-2
            sm:text-xs
            sm:tracking-[0.16em]

            lg:text-sm
          "
        >
          Servicio de Grúas 24 Horas
        </span>

        {/* =====================================================
            TITULO
        ====================================================== */}
        <h1
          className="
            mb-4
            w-full
            max-w-4xl
            text-[2rem]
            font-extrabold
            leading-[1.1]
            tracking-tight
            drop-shadow-[0_5px_25px_rgba(0,0,0,.45)]
            
            min-[400px]:text-[2.5rem]
            sm:mb-6
            sm:max-w-5xl
            sm:text-[clamp(3rem,6vw,5.5rem)]
            sm:leading-[1]

            lg:text-[clamp(4rem,6vw,6.5rem)]

            xl:max-w-6xl
          "
        >
          Tu tranquilidad es nuestro{" "}
          <span className="text-[var(--primary)] block sm:inline">
            Estatus
          </span>
        </h1>

        {/* =====================================================
            DESCRIPCIÓN
        ====================================================== */}
        <p
          className="
            mb-6
            mt-2
            w-full
            max-w-2xl
            px-2
            text-sm
            font-medium
            leading-relaxed
            text-gray-200
            drop-shadow-lg

            sm:mt-5
            sm:max-w-3xl
            sm:px-0
            sm:text-base
            sm:leading-7

            lg:mt-6
            lg:text-lg
            lg:leading-8

            xl:text-xl
          "
        >
          Atención inmediata para automóviles, camionetas y motocicletas.
          Servicio profesional de rescate y transporte especializado las
          24 horas del día.
        </p>

        {/* =====================================================
            TELEFONO
        ====================================================== */}
        <a
          href="tel:+573058156056"
          className="
            group
            flex
            w-[90%]
            max-w-sm
            items-center
            justify-center
            gap-x-2
            rounded-full
            bg-[var(--primary)]
            px-4
            py-3.5
            text-xs
            font-extrabold
            uppercase
            tracking-wider
            text-white
            shadow-[0_12px_40px_rgba(181,35,123,.4)]
            transition-all
            duration-300
            hover:shadow-[0_16px_50px_rgba(181,35,123,.55)]
            
            sm:w-auto
            sm:max-w-md
            sm:px-7
            sm:py-3.5
            sm:text-base
            sm:hover:scale-105
            lg:text-lg
          "
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            📞
          </span>
          <span className="hidden min-[380px]:inline">LLAMA AHORA</span>
          <span className="whitespace-nowrap">305 815 6056</span>
        </a>

        {/* =====================================================
            BOTONES
        ====================================================== */}
        <div
          className="
            mt-6
            flex
            w-[90%]
            max-w-sm
            flex-col
            gap-3

            sm:mt-10
            sm:w-full
            sm:max-w-none
            sm:flex-row
            sm:justify-center
            sm:gap-4

            lg:mt-12
          "
        >
          <Button
            href="#contact"
            className="
              w-full
              min-h-[3rem]
              px-6
              text-sm

              sm:w-auto
              sm:min-h-0
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Solicitar una Grúa
          </Button>

          <Button
            href="#services"
            variant="secondary"
            className="
              w-full
              min-h-[3rem]
              px-6
              text-sm

              sm:w-auto
              sm:min-h-0
              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Ver Servicios
          </Button>
        </div>

        {/* =====================================================
            INDICADOR INFERIOR
        ====================================================== */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/50

            lg:flex
          "
        >
          <span>Descubre nuestros servicios</span>

          <span
            className="
              h-8
              w-px
              bg-gradient-to-b
              from-[var(--primary)]
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}