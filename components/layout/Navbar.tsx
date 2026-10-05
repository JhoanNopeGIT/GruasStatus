"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#services" },
  { label: "Cobertura", href: "#coverage" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = scrolled || menuOpen
    ? "text-[var(--text)] hover:text-[var(--primary)]"
    : "text-white hover:text-[var(--primary)]";

  return (
    <header
      className={`
        fixed left-0 right-0 z-50 transition-all duration-500
        ${
          scrolled
            ? `
              top-2 mx-2 max-w-7xl rounded-2xl
              bg-white/95 shadow-[0_15px_45px_rgba(0,0,0,0.10),0_0_0_1px_rgba(181,35,123,0.15)]
              ring-1 ring-[rgba(181,35,123,0.30)] backdrop-blur-xl
              sm:top-4 sm:mx-4 lg:mx-auto
            `
            : menuOpen
            ? "top-0 bg-white shadow-lg sm:top-10 sm:bg-white/95 sm:backdrop-blur-xl"
            : "top-4 sm:top-10"
        }
      `}
    >
      <div
        className={`
          mx-auto flex max-w-7xl items-center justify-between px-4
          transition-all duration-500 sm:px-6 lg:px-8
          ${scrolled ? "h-16 sm:h-20" : "h-[4.5rem] sm:h-24 lg:h-28"}
        `}
      >
        <a href="#hero" className="flex shrink-0 items-center z-10" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo/logo-gruas-status.png"
            alt="Logo Grúas Status"
            width={112}
            height={112}
            priority
            className={`
              h-auto transition-all duration-500 hover:scale-105
              ${scrolled ? "w-12 sm:w-20" : "w-14 sm:w-[88px] lg:w-[100px]"}
            `}
          />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 font-medium xl:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`cursor-pointer font-medium transition-all duration-300 ${linkClass}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 z-10">
          <div className="hidden md:block">
            <Button
              href="#contact"
              variant={scrolled ? "primary" : "secondary"}
              className="px-4 py-2.5 text-sm sm:px-6"
            >
              Solicitar una Grúa
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`
              inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl
              transition-colors lg:hidden
              ${
                scrolled || menuOpen
                  ? "text-[var(--primary)] hover:bg-[var(--primary)]/10"
                  : "text-white hover:bg-white/10"
              }
            `}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 border-t border-black/5 bg-white px-4 py-6 shadow-xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-[var(--text)] transition-colors hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 md:hidden">
            <Button href="#contact" className="w-full py-4 text-base" onClick={() => setMenuOpen(false)}>
              Solicitar una Grúa
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}