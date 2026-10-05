"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FooterItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  items: FooterItem[];
}

export default function FooterColumn({
  title,
  items,
}: FooterColumnProps) {
  return (
    <div>

      {/* Título */}

      <h3 className="relative mb-8 inline-block text-xl font-bold text-white">

        {title}

        <span
          className="
            absolute
            -bottom-3
            left-0

            h-[3px]
            w-14

            rounded-full

            bg-gradient-to-r
            from-[var(--primary)]
            to-transparent
          "
        />

      </h3>

      {/* Links */}

      <div className="space-y-5">

        {items.map((item) => (

          <motion.div
            key={item.label}
            whileHover={{
              x: 8,
            }}
            transition={{
              duration: .25,
            }}
          >

            <Link
              href={item.href}
              className="
                group

                flex
                items-center
                gap-3

                text-gray-400

                transition-all
                duration-300

                hover:text-white
              "
            >

              <ChevronRight
                size={17}
                className="
                  text-[var(--primary)]

                  transition-all

                  duration-300

                  group-hover:translate-x-1
                "
              />

              {item.label}

            </Link>

          </motion.div>

        ))}

      </div>

    </div>
  );
}