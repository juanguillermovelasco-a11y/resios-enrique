"use client";

import { RoadmapFlow } from "@/components/RoadmapFlow";
import { clinics } from "@/lib/mock-data";
import { Building2, BedDouble, TrendingUp, Target } from "lucide-react";

const summaryKpis = [
  { label: "Clínicas", value: "2", icon: Building2 },
  { label: "Camas totales", value: "78", icon: BedDouble },
  { label: "Ocupación media", value: "81%", icon: TrendingUp },
  { label: "Target EBITDA", value: "24%", icon: Target },
];

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

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {summaryKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center shrink-0">
              <kpi.icon className="w-5 h-5 text-navy-600" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-navy-900">
                {kpi.value}
              </div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wide">
                {kpi.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clinic badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-slate-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-navy-900">{clinic.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    clinic.status === "Operando"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {clinic.status}
                </span>
              </div>
              <div className="text-xs text-slate-500">
                {clinic.city} · {clinic.beds} camas · {clinic.occupancy}% ocupación
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-navy-900">{clinic.revenue}k €</div>
              <div className="text-[10px] text-slate-400">rev/mes</div>
            </div>
          </div>
        ))}
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
