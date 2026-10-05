import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

import { CheckCircle2, MapPinned, Phone } from "lucide-react";

const cities = [
  "Bogotá D.C.",
  "Soacha",
  "Chía",
  "Mosquera",
  "Madrid",
  "Funza",
  "Cota",
  "Cajicá",
  "Zipaquirá",
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative scroll-mt-24 overflow-hidden bg-[var(--gray-light)] py-16 sm:py-20 lg:py-28">
      <Container className="px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div>
            <SectionTitle
              title="Nuestra Cobertura"
              subtitle="Brindamos servicio en Bogotá y municipios cercanos con atención rápida y profesional."
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Contenedor del Mapa */}
          <div className="mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] sm:mt-12 sm:rounded-3xl">
            <Image
              src="/images/coverage/mapa-bogota1.png"
              alt="Cobertura Grúas Status"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              className="h-auto w-full object-cover transition-transform duration-700 sm:hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Grid de Ciudades */}
          <div className="mx-auto mt-8 w-full max-w-5xl sm:mt-12">
            <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 sm:gap-4 md:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    border
                    border-gray-50
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[var(--primary)] sm:w-[22px] sm:h-[22px]"
                  />
                  <span className="text-sm font-medium text-gray-800 sm:text-base">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          {/* Tarjeta Informativa Inferior */}
          <div className="mx-auto mt-10 w-full max-w-5xl rounded-2xl bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:mt-16 sm:rounded-3xl sm:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] sm:h-16 sm:w-16">
                  <MapPinned size={30} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                  Cobertura Regional
                </h3>
                <p className="mt-2 text-sm text-[var(--text-light)] sm:text-base">
                  Bogotá D.C. y municipios cercanos.
                </p>
              </div>

              <div className="text-center relative">
                {/* Separador móvil */}
                <div className="absolute top-[-1.5rem] left-[20%] right-[20%] h-px bg-gray-100 md:hidden"></div>
                
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] sm:h-16 sm:w-16">
                  <CheckCircle2 size={30} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                  Servicio Disponible
                </h3>
                <p className="mt-2 text-sm text-[var(--text-light)] sm:text-base">
                  Atención las 24 horas del día.
                </p>
              </div>

              <div className="text-center relative">
                {/* Separador móvil */}
                <div className="absolute top-[-1.5rem] left-[20%] right-[20%] h-px bg-gray-100 md:hidden"></div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] sm:h-16 sm:w-16">
                  <Phone size={30} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                  ¿No ves tu municipio?
                </h3>
                <p className="mt-2 text-sm text-[var(--text-light)] sm:text-base">
                  Contáctanos y verificamos disponibilidad.
                </p>
              </div>

            </div>

            <div className="mt-8 flex justify-center w-full sm:mt-12">
              <Button href="#contact" className="w-[90%] sm:w-auto px-8 py-3.5 text-sm sm:text-base">
                Solicitar una Grúa
              </Button>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}