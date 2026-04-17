"use client";

import { RoadmapFlow } from "@/components/RoadmapFlow";

export default function RoadmapPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-500 mb-1">
          Roadmap 90 días
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 mb-2">
          Piloto ResiOS en CITA
        </h1>
        <p className="text-[15px] text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-navy-900">Objetivo:</strong> desplegar inteligencia artificial en las funciones
          críticas de Clínica CITA — finanzas, ocupación, crecimiento y back office — como
          plataforma de despliegue replicable para las demás clínicas del grupo.
        </p>
        <p className="text-[15px] text-slate-600 max-w-3xl leading-relaxed mt-2">
          <strong className="text-navy-900">Meta julio 2026:</strong> tener operativos los módulos de finanzas
          y gestión de ocupación con IA funcionando en CITA, validando el modelo antes de
          escalar a Barcelona y las futuras adquisiciones.
        </p>
      </div>

      {/* Roadmap flow */}
      <div className="mb-4">
        <h2 className="font-display text-xl font-semibold text-navy-900 mb-1">
          Las 9 fases del piloto
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Click en cualquier paso para expandir descripción y entregables
        </p>
      </div>

      <RoadmapFlow />
    </div>
  );
}
