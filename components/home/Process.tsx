import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import Timeline from "@/components/ui/Timeline";
import TimelineItem from "@/components/ui/TimelineItem";
import Button from "@/components/ui/Button";

import {
  PhoneCall,
  MapPinned,
  Truck,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Contáctanos",
    description:
      "Comunícate con nosotros por llamada o WhatsApp. Nuestro equipo estará disponible para atender tu solicitud de manera inmediata.",
    badge: "Disponible 24/7",
    icon: <PhoneCall size={32} strokeWidth={2.2} className="sm:w-9 sm:h-9" />,
  },
  {
    number: 2,
    title: "Comparte tu ubicación",
    description:
      "Indícanos dónde te encuentras y cuéntanos qué tipo de vehículo, maquinaria o estructura necesitas movilizar.",
    badge: "Ubicación en tiempo real",
    icon: <MapPinned size={32} strokeWidth={2.2} className="sm:w-9 sm:h-9" />,
  },
  {
    number: 3,
    title: "Despachamos una unidad",
    description:
      "Asignamos el vehículo más adecuado para tu servicio y te informamos el tiempo estimado de llegada.",
    badge: "Tiempo estimado informado",
    icon: <Truck size={32} strokeWidth={2.2} className="sm:w-9 sm:h-9" />,
  },
  {
    number: 4,
    title: "Servicio realizado",
    description:
      "Realizamos el traslado de forma segura y profesional hasta el destino indicado, cuidando en todo momento tu vehículo o carga.",
    badge: "Transporte seguro",
    icon: <CircleCheckBig size={32} strokeWidth={2.2} className="sm:w-9 sm:h-9" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden bg-[var(--gray-light)] py-16 sm:py-24 lg:py-32">

      {/* Glow superior */}
      <div
        className="
          absolute
          -top-40
          left-0
          h-72
          w-72
          sm:-top-52
          sm:h-96
          sm:w-96
          rounded-full
          bg-[var(--primary)]/10
          blur-3xl
        "
      />

      {/* Glow inferior */}
      <div
        className="
          absolute
          -bottom-40
          right-0
          h-72
          w-72
          sm:-bottom-52
          sm:h-96
          sm:w-96
          rounded-full
          bg-[var(--primary)]/10
          blur-3xl
        "
      />

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">

        <SectionTitle
          title="¿Cómo funciona?"
          subtitle="Solicitar un servicio con Grúas Status es un proceso rápido, transparente y completamente acompañado por nuestro equipo."
        />

        {/* CONTENEDOR TIMELINE */}
        <div className="mt-10 sm:mt-16 lg:mt-24 w-full">
          <Timeline>
            {steps.map((step, index) => (
              <TimelineItem
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                badge={step.badge}
                icon={step.icon}
                reverse={index % 2 !== 0}
              />
            ))}
          </Timeline>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-24 lg:mt-32 px-2 text-center w-full max-w-4xl mx-auto">
          <h3
            className="
              text-2xl
              font-bold
              leading-tight
              text-[var(--primary)]
              sm:text-[clamp(2rem,4.5vw,2.5rem)]
            "
          >
            Tu tranquilidad comienza desde el primer contacto.
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-[var(--text-light)]
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Desde el momento en que nos contactas, nuestro equipo trabaja para
            ofrecerte una solución rápida, segura y confiable, acompañándote
            durante todo el proceso.
          </p>

          <div className="mt-8 flex justify-center w-full sm:mt-10">
            <Button className="w-[90%] sm:w-auto px-8 py-3.5 text-sm sm:text-base">
              Solicitar una Grúa
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}