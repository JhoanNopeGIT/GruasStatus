import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Card({
  icon,
  title,
  description,
}: CardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        h-full
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--primary-light)]
        hover:shadow-2xl
        sm:rounded-3xl
        sm:p-8
        sm:hover:-translate-y-3
      "
    >
      {/* Círculo decorativo */}
      <div
        className="
          absolute
          -right-14
          -top-14
          h-32
          w-32
          rounded-full
          bg-[var(--primary)]/5
          transition-transform
          duration-500
          group-hover:scale-150
        "
      />

      {/* Icono */}
      <div
        className="
          relative
          mb-5
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-[rgba(161,38,114,.08)]
          text-[var(--primary)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-[var(--primary)]
          group-hover:text-white
          sm:mb-6
          sm:h-16
          sm:w-16
        "
      >
        {icon}
      </div>

      {/* Contenedor de texto con flex-grow para empujar el footer hacia abajo */}
      <div className="flex flex-col flex-grow">
        {/* Título */}
        <h3
          className="
            mb-3
            text-lg
            font-bold
            text-gray-900
            transition-colors
            duration-300
            group-hover:text-[var(--primary)]
            sm:mb-4
            sm:text-xl
            lg:text-2xl
          "
        >
          {title}
        </h3>

        {/* Descripción */}
        <p
          className="
            leading-relaxed
            text-sm
            text-[var(--text-light)]
            sm:text-base
            sm:leading-7
          "
        >
          {description}
        </p>
      </div>

      {/* Contenedor Inferior: Línea y Flecha alineadas */}
      <div className="mt-auto pt-6 flex items-center justify-between">
        {/* Línea inferior */}
        <div
          className="
            h-1
            w-10
            rounded-full
            bg-[var(--primary)]
            transition-all
            duration-500
            group-hover:w-20
            sm:w-12
            sm:group-hover:w-24
          "
        />

        {/* Flecha */}
        <div
          className="
            flex
            text-[var(--primary)]
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={20} className="sm:w-[22px] sm:h-[22px]" />
        </div>
      </div>
    </article>
  );
}