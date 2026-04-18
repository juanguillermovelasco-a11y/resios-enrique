"use client";

import { RoadmapFlow } from "@/components/RoadmapFlow";

export default function RoadmapPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-500 mb-1">
          Plan de implementación
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 mb-2">
          ResiOS en CITA — de demo a producción
        </h1>
        <p className="text-[15px] text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-navy-900">Objetivo:</strong> conectar los sistemas que ya usa CITA (Sage, HubSpot)
          para que los 5 roles clave — finanzas, crecimiento, ocupación, back office y dirección —
          trabajen con datos reales en una sola plataforma, con un copiloto de IA que ayude a tomar decisiones.
        </p>
        <p className="text-[15px] text-slate-600 max-w-3xl leading-relaxed mt-2">
          <strong className="text-navy-900">Meta julio 2026:</strong> piloto funcionando con datos reales en CITA Barcelona.
          Los 5 roles usando ResiOS diariamente. Validar el modelo antes de replicar en Málaga y futuras adquisiciones.
        </p>
      </div>

      {/* Roadmap flow */}
      <div className="mb-4">
        <h2 className="font-display text-xl font-semibold text-navy-900 mb-1">
          Los 9 pasos para llegar a producción
        </h2>
        <p className="text-xs text-slate-400 mb-6">
          Click en cualquier paso para ver qué se hace, qué se entrega y qué se necesita
        </p>
      </div>

      <RoadmapFlow />
    </div>
  );
}
