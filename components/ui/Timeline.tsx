interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      {/* ==============================================
          Línea vertical - Vista Móvil (Izquierda)
      =============================================== */}
      <div
        className="
          absolute
          left-[28px]
          sm:left-[36px]
          top-0
          h-full
          w-[3px]
          overflow-hidden
          rounded-full
          bg-gradient-to-b
          from-[var(--primary-light)]
          via-[var(--primary)]
          to-[var(--primary-dark)]
          lg:hidden
        "
      />

      {/* ==============================================
          Línea vertical - Vista Escritorio (Centro)
      =============================================== */}
      <div
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-[4px]
          -translate-x-1/2
          overflow-hidden
          rounded-full
          bg-gray-200
          lg:block
        "
      >
        <div
          className="
            h-full
            w-full
            rounded-full
            bg-gradient-to-b
            from-[var(--primary-light)]
            via-[var(--primary)]
            to-[var(--primary-dark)]
          "
        />
      </div>

      {/* Contenedor de los items */}
      <div className="space-y-12 lg:space-y-4">
        {children}
      </div>
    </div>
  );
}