import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

import {
  Car,
  Bike,
  Truck,
  ShieldCheck,
  Warehouse,
  Package,
  Tractor,
  Clock3,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Automóviles",
    description:
      "Transportamos automóviles de forma segura con equipos especializados para cualquier tipo de traslado.",
  },
  {
    icon: Bike,
    title: "Motocicletas",
    description:
      "Movilización profesional de motocicletas con sistemas de sujeción que garantizan un transporte seguro.",
  },
  {
    icon: Truck,
    title: "Camionetas",
    description:
      "Traslado de camionetas y vehículos utilitarios con grúas adecuadas para su peso y dimensiones.",
  },
  {
    icon: Truck,
    title: "Camiones",
    description:
      "Servicio especializado para el transporte de camiones y vehículos de carga mediante equipos de alta capacidad.",
  },
  {
    icon: Tractor,
    title: "Maquinaria",
    description:
      "Movilización de maquinaria amarilla, agrícola e industrial bajo estrictos protocolos de seguridad.",
  },
  {
    icon: Warehouse,
    title: "Estructuras",
    description:
      "Transporte de estructuras metálicas, equipos industriales y elementos de gran tamaño.",
  },
  {
    icon: Package,
    title: "Carga Especial",
    description:
      "Soluciones para el traslado de cargas especiales que requieren logística y maniobras especializadas.",
  },
  {
    icon: Clock3,
    title: "Disponibilidad 24/7",
    description:
      "Operamos las 24 horas del día para atender tus necesidades de transporte cuando más lo necesites.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-[var(--gray-light)] py-16 sm:py-20 lg:py-24">

      {/* Fondo decorativo */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--primary)]/5 blur-3xl"></div>

      <Container className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones seguras y confiables para el transporte y movilización de vehículos, maquinaria y cargas especiales, disponibles las 24 horas del día."
        />

        <div className="mb-10 sm:mb-14 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-[var(--primary)]"></div>
        </div>

        {/* CONTENEDOR GRID DE LAS TARJETAS - Ajustado para móviles */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.1}
              >
                {/* Movimos las clases a este div interno para evitar el error de TypeScript */}
                <div className="w-full h-full flex">
                   <Card
                     icon={<Icon size={34} strokeWidth={2.5} />}
                     title={service.title}
                     description={service.description}
                   />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Franja de confianza - Ajustada para no desbordar */}
        <div className="mt-12 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-lg sm:mt-16 sm:rounded-3xl sm:p-10">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div className="text-center px-2 sm:px-0">
              <h3 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                &lt; 30 min
              </h3>
              <p className="mt-3 font-semibold text-gray-900">
                Tiempo promedio de respuesta
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                Nuestro equipo trabaja para atender cada servicio con la mayor rapidez posible.
              </p>
            </div>

            <div className="text-center px-2 sm:px-0 relative">
              {/* Separador solo visible en móviles entre elementos */}
              <div className="absolute top-[-1rem] left-[10%] right-[10%] h-px bg-gray-100 md:hidden"></div>
              
              <h3 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                100%
              </h3>
              <p className="mt-3 font-semibold text-gray-900">
                Personal Capacitado
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                Operadores entrenados para realizar cada traslado de forma segura y profesional.
              </p>
            </div>

            <div className="text-center px-2 sm:px-0 relative">
               {/* Separador solo visible en móviles entre elementos */}
               <div className="absolute top-[-1rem] left-[10%] right-[10%] h-px bg-gray-100 md:hidden"></div>

              <h3 className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                Bogotá
              </h3>
              <p className="mt-3 font-semibold text-gray-900">
                Cobertura Principal
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-light)]">
                Atendemos Bogotá y sus alrededores con disponibilidad las 24 horas.
              </p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}