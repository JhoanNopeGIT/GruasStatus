import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import {
  ShieldCheck,
  Clock3,
  Truck,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Atención rápida",
    description:
      "Respondemos oportunamente para brindarte la asistencia que necesitas.",
  },
  {
    icon: Users,
    title: "Personal capacitado",
    description:
      "Nuestro equipo cuenta con experiencia y entrenamiento para cada servicio.",
  },
  {
    icon: Truck,
    title: "Equipos especializados",
    description:
      "Disponemos de grúas y equipos adecuados para diferentes tipos de transporte.",
  },
  {
    icon: ShieldCheck,
    title: "Traslados seguros",
    description:
      "Protegemos tu vehículo o carga durante todo el proceso de movilización.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container className="px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* =========================================================
              TEXTO Y BENEFICIOS
          ========================================================== */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div>
                <SectionTitle
                  title="¿Por qué elegir Grúas Status?"
                  subtitle="Nos comprometemos a ofrecer un servicio confiable, seguro y profesional, respaldado por un equipo humano altamente capacitado."
                />
              </div>
            </FadeIn>

            <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <FadeIn key={benefit.title} delay={index * 0.1}>
                    <div className="flex items-start gap-4 sm:gap-5 w-full">
                      
                      {/* Icono */}
                      <div className="shrink-0 flex items-center justify-center rounded-2xl bg-[var(--primary)]/10 p-3 text-[var(--primary)] sm:p-4">
                        <Icon size={24} className="sm:w-7 sm:h-7" />
                      </div>

                      {/* Texto del beneficio */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--text-light)] sm:mt-2 sm:text-base sm:leading-7">
                          {benefit.description}
                        </p>
                      </div>

                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              IMAGEN
          ========================================================== */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none order-1 lg:order-2">
            
            {/* Efecto de luz de fondo */}
            <div className="absolute -top-10 -right-10 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-[var(--primary)]/10 blur-3xl"></div>

            <FadeIn>
              <div className="w-full flex justify-center">
                <Image
                  src="/images/why/grua.png"
                  alt="Grúa Grúas Status"
                  width={700}
                  height={700}
                  className="
                    relative
                    z-10
                    h-auto
                    w-[90%]
                    sm:w-full
                    max-w-[400px]
                    lg:max-w-full
                    drop-shadow-2xl
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </FadeIn>
          </div>

        </div>

      </Container>
    </section>
  );
}