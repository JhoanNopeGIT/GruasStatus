"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";
import TimelineNode from "./TimelineNode";

interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  reverse?: boolean;
  badge?: string;
}

export default function TimelineItem({
  number,
  title,
  description,
  icon,
  reverse = false,
  badge,
}: TimelineItemProps) {
  return (
    <div className="relative">
      
      {/* Nodo central (Número) */}
      <TimelineNode number={number} />

      <Reveal direction={reverse ? "right" : "left"}>
        <div
          className={`
            grid
            items-center
            gap-6
            pl-14
            sm:pl-20
            lg:grid-cols-2
            lg:gap-16
            lg:pl-0
            ${reverse ? "lg:[&>*:first-child]:col-start-2" : ""}
          `}
        >
          {/* Tarjeta */}
          <div
            className="
              group
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-[0_15px_50px_rgba(0,0,0,.06)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[var(--primary)]
              hover:shadow-[0_30px_80px_rgba(0,0,0,.12)]
              sm:rounded-[32px]
              sm:p-8
            "
          >
            {/* Icono */}
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[var(--primary)]/10
                to-[var(--primary)]/5
                text-[var(--primary)]
                shadow-inner
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:-rotate-6
                group-hover:bg-[var(--primary)]
                group-hover:text-white
                sm:h-16
                sm:w-16
                sm:rounded-3xl
              "
            >
              {icon}
            </div>

            {/* Título */}
            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-6 sm:text-2xl lg:text-3xl">
              {title}
            </h3>

            {/* Descripción */}
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-light)] sm:mt-4 sm:text-base sm:leading-8">
              {description}
            </p>

            {/* Línea decorativa */}
            <div
              className="
                my-6
                h-px
                w-full
                bg-gradient-to-r
                from-[var(--primary)]
                to-transparent
                sm:my-8
              "
            />

            {/* Badge */}
            {badge && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--primary)]/10
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  group-hover:bg-[var(--primary)]
                  group-hover:text-white
                  sm:px-5
                  sm:py-2
                  sm:text-sm
                "
              >
                <div
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-current
                    sm:h-2
                    sm:w-2
                  "
                />
                {badge}
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}