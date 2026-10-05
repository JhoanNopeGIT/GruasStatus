"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    origin: "",
    destination: "",
    vehicleType: "automovil",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Hola, soy ${formData.name}. Necesito una cotización.%0A- Teléfono: ${formData.phone}%0A- Origen: ${formData.origin}%0A- Destino: ${formData.destination}%0A- Tipo de vehículo: ${formData.vehicleType}`;
    
    window.open(`https://wa.me/573058156056?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <form 
          onSubmit={handleSubmit} 
          className="relative mx-auto rounded-3xl border border-gray-200 bg-[#f8f9fa] p-6 shadow-xl sm:p-10"
        >
          <h3 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Solicita tu cotización en línea
          </h3>
          <p className="mb-8 text-sm text-gray-600 sm:text-base">
            Completa los datos y te responderemos de inmediato con la tarifa exacta.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Tu Nombre</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ej. Carlos Pérez"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Teléfono de contacto</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Ej. 305 815 6056"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Punto de Recogida (Origen)</label>
              <input
                type="text"
                name="origin"
                required
                placeholder="Ej. Calle 100 con 15, Bogotá"
                value={formData.origin}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Destino del traslado</label>
              <input
                type="text"
                name="destination"
                required
                placeholder="Ej. Taller en Chapinero"
                value={formData.destination}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--primary)] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Tipo de Vehículo</label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[var(--primary)] focus:outline-none"
              >
                <option value="automovil">Automóvil / Carro particular</option>
                <option value="camioneta">Camioneta / Camper</option>
                <option value="moto">Motocicleta</option>
                <option value="maquinaria">Maquinaria o Carga pesada</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button variant="primary" className="w-full sm:w-auto">
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}