"use client";

import { useState } from "react";
import {
  Rocket,
  Database,
  Users,
  MessageSquare,
  GitBranch,
  Sparkles,
  BarChart3,
  Link,
  TrendingUp,
  CheckCircle2,
  Clock,
  Circle,
} from "lucide-react";
import { roadmapSteps, type RoadmapStep } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Database,
  Users,
  MessageSquare,
  GitBranch,
  Sparkles,
  BarChart3,
  Link,
  TrendingUp,
};

const statusConfig = {
  done: { color: "bg-emerald-500", text: "text-emerald-600", label: "Completado", Icon: CheckCircle2 },
  active: { color: "bg-accent", text: "text-accent-500", label: "En curso", Icon: Clock },
  upcoming: { color: "bg-slate-300", text: "text-slate-400", label: "Próximo", Icon: Circle },
};

export function RoadmapFlow() {
  const [activeStep, setActiveStep] = useState<RoadmapStep>(roadmapSteps[0]);

  const Icon = iconMap[activeStep.icon] || Circle;
  const status = statusConfig[activeStep.status];

  return (
    <div>
      {/* ── Horizontal stepper ── */}
      <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
        {roadmapSteps.map((step, i) => {
          const StepIcon = iconMap[step.icon] || Circle;
          const isActive = activeStep.number === step.number;

          return (
            <div key={step.number} className="flex items-stretch flex-1 min-w-0">
              <button
                type="button"
                onClick={() => setActiveStep(step)}
                className={`relative flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl transition-all duration-200 w-full min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-navy-800 text-white shadow-lg scale-[1.04] z-10"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:shadow-sm hover:bg-slate-50"
                }`}
              >
                {/* Step number pill */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <StepIcon className="w-4 h-4" />
                </div>

                {/* Number */}
                <span
                  className={`text-[10px] font-bold tracking-wide ${
                    isActive ? "text-accent-300" : "text-slate-300"
                  }`}
                >
                  {step.number}
                </span>

                {/* Title — truncated */}
                <span
                  className={`text-[11px] font-semibold leading-tight text-center line-clamp-2 ${
                    isActive ? "text-white" : "text-navy-700"
                  }`}
                >
                  {step.title}
                </span>

                {/* Active indicator arrow */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 rotate-45 rounded-sm" />
                )}
              </button>

              {/* Connector line between steps */}
              {i < roadmapSteps.length - 1 && (
                <div className="flex items-center px-0.5 shrink-0">
                  <div className="w-2 h-[2px] bg-slate-200 rounded-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Detail panel ── */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header band */}
        <div className="bg-navy-800 px-6 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent-300" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-300">
                Paso {activeStep.number}
              </span>
              <span className="text-[10px] text-navy-400">·</span>
              <span className="text-[10px] font-medium text-navy-300">
                {activeStep.week}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-white">
              {activeStep.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-white">
              {activeStep.duration}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${
              activeStep.status === "done"
                ? "bg-emerald-500/20 text-emerald-300"
                : activeStep.status === "active"
                ? "bg-accent-500/20 text-accent-300"
                : "bg-white/10 text-slate-300"
            }`}>
              <status.Icon className="w-3 h-3" />
              {status.label}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 lg:p-8">
          {/* Subtitle */}
          <p className="text-sm font-medium text-navy-700 mb-1">
            {activeStep.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">
            {activeStep.description}
          </p>

          {/* Deliverables */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-3">
              Entregables clave
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeStep.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer — step navigation */}
        <div className="px-6 lg:px-8 pb-5 flex items-center justify-between">
          <button
            type="button"
            disabled={activeStep.number === "01"}
            onClick={() => {
              const idx = roadmapSteps.findIndex((s) => s.number === activeStep.number);
              if (idx > 0) setActiveStep(roadmapSteps[idx - 1]);
            }}
            className="text-xs font-medium text-navy-600 hover:text-accent-500 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            ← Paso anterior
          </button>
          <span className="text-[10px] text-slate-400">
            {roadmapSteps.findIndex((s) => s.number === activeStep.number) + 1} de {roadmapSteps.length}
          </span>
          <button
            type="button"
            disabled={activeStep.number === "09"}
            onClick={() => {
              const idx = roadmapSteps.findIndex((s) => s.number === activeStep.number);
              if (idx < roadmapSteps.length - 1) setActiveStep(roadmapSteps[idx + 1]);
            }}
            className="text-xs font-medium text-navy-600 hover:text-accent-500 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente paso →
          </button>
        </div>
      </div>
    </div>
  );
}
