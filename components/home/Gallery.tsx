"use client";

import { useState, useEffect } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryItem from "@/components/ui/GalleryItem";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery/grua-1.jpg",
    alt: "Servicio de grúa 1",
    large: true,
  },
  {
    src: "/images/gallery/grua-2.jpg",
    alt: "Servicio de grúa 2",
  },
  {
    src: "/images/gallery/grua-3.jpg",
    alt: "Servicio de grúa 3",
  },
  {
    src: "/images/gallery/grua-4.jpg",
    alt: "Servicio de grúa 4",
    large: true,
  },
  {
    src: "/images/gallery/grua-5.jpg",
    alt: "Servicio de grúa 5",
  },
  {
    src: "/images/gallery/grua-6.jpg",
    alt: "Servicio de grúa 6",
  },
  {
    src: "/images/gallery/grua-7.jpg",
    alt: "Servicio de grúa 7",
  },
  {
    src: "/images/gallery/grua-8.jpg",
    alt: "Servicio de grúa 8",
  },
  {
    src: "/images/gallery/grua-9.jpg",
    alt: "Servicio de grúa 9",
  },
  {
    src: "/images/gallery/grua-10.jpg",
    alt: "Servicio de grúa 10",
  },  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // =========================================================
  // Bloquear scroll de la página cuando el Lightbox está abierto
  // =========================================================
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const previousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      
      {/* Glow */}
      <div className="absolute -left-40 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nuestra Galería"
          subtitle="Conoce algunos de los servicios realizados por nuestro equipo. Cada traslado refleja nuestro compromiso con la seguridad, el cuidado y la confianza de nuestros clientes."
        />

        {/* Línea decorativa */}
        <div className="mb-10 flex justify-center sm:mb-16">
          <div className="h-1 w-24 sm:w-28 rounded-full bg-[var(--primary)]" />
        </div>

        {/* =========================================================
            GRID DE IMÁGENES
        ========================================================== */}
        <div
          className="
            grid
            grid-cols-1
            auto-rows-[250px]
            gap-4
            sm:grid-cols-2
            sm:auto-rows-[240px]
            sm:gap-5
            md:auto-rows-[280px]
            md:gap-6
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {images.map((image, index) => (
            <GalleryItem
              key={image.src}
              src={image.src}
              alt={image.alt}
              large={image.large}
              delay={index * 0.08}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </Container>

      {/* =========================================================
          LIGHTBOX (Pantalla completa)
      ========================================================== */}
      {selectedImage !== null && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/95
            backdrop-blur-md
          "
        >
          {/* Botón Cerrar */}
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar galería"
            className="
              absolute
              right-4
              top-4
              z-50
              rounded-full
              bg-white/10
              p-2.5
              text-white
              transition
              hover:bg-white/20
              sm:right-8
              sm:top-8
              sm:p-3
            "
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* Botón Anterior (Centrado verticalmente) */}
          <button
            onClick={previousImage}
            aria-label="Imagen anterior"
            className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-50
              rounded-full
              bg-black/50
              p-2
              text-white
              transition
              hover:bg-[var(--primary)]
              sm:left-8
              sm:bg-white/10
              sm:p-4
            "
          >
            <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>

          {/* Contenedor de la Imagen */}
          <div
            className="
              relative
              h-[70vh]
              w-[100vw]
              max-w-6xl
              px-12
              sm:h-[85vh]
              sm:w-[90vw]
              sm:px-0
            "
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Botón Siguiente (Centrado verticalmente) */}
          <button
            onClick={nextImage}
            aria-label="Imagen siguiente"
            className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-50
              rounded-full
              bg-black/50
              p-2
              text-white
              transition
              hover:bg-[var(--primary)]
              sm:right-8
              sm:bg-white/10
              sm:p-4
            "
          >
            <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>
        </div>
      )}
    </section>
  );
}