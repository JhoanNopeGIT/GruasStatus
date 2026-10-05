export default function TopBar() {
  return (
    <div className="relative z-[60] bg-[var(--primary)] text-white shadow-md">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs font-medium sm:h-11 sm:px-6 sm:text-sm">
        
        {/* Teléfono de emergencia directo */}
        <a 
          href="tel:+573058156056" 
          className="flex items-center gap-1.5 transition hover:opacity-90 font-bold"
        >
          <span className="animate-pulse">📞</span> 
          <span>305 815 6056</span>
        </a>

        {/* Eslogan central visible en tablet/escritorio */}
        <div className="hidden sm:flex items-center gap-2 text-white/90">
          <span>🚛</span>
          <span>Servicio de Grúas 24/7</span>
        </div>

        {/* Cobertura visible en computadoras */}
        <div className="hidden md:flex items-center gap-1.5 text-white/90">
          <span>📍</span>
          <span>Bogotá y alrededores</span>
        </div>

      </div>
    </div>
  );
}