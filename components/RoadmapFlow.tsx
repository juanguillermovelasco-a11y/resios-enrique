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
  ChevronLeft,
  ChevronRight,
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
  const activeIdx = roadmapSteps.findIndex((s) => s.number === activeStep.number);

  return (
    <div>
      {/* ── Horizontal stepper — scrollable on mobile ── */}
      <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-stretch gap-0 min-w-[720px] sm:min-w-0">
          {roadmapSteps.map((step, i) => {
            const StepIcon = iconMap[step.icon] || Circle;
            const isActive = activeStep.number === step.number;

            return (
              <div key={step.number} className="flex items-stretch flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`relative flex flex-col items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-2.5 sm:py-3 rounded-xl transition-all duration-200 w-full min-w-[72px] sm:min-w-[90px] cursor-pointer ${
                    isActive
                      ? "bg-navy-800 text-white shadow-lg scale-[1.04] z-10"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:shadow-sm hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <span
                    className={`text-[9px] sm:text-[10px] font-bold tracking-wide ${
                      isActive ? "text-accent-300" : "text-slate-300"
                    }`}
                  >
                    {step.number}
                  </span>

                  <span
                    className={`text-[10px] sm:text-[11px] font-semibold leading-tight text-center line-clamp-2 ${
                      isActive ? "text-white" : "text-navy-700"
                    }`}
                  >
                    {step.title}
                  </span>

                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 rotate-45 rounded-sm" />
                  )}
                </button>

                {i < roadmapSteps.length - 1 && (
                  <div className="flex items-center px-0.5 shrink-0">
                    <div className="w-1.5 sm:w-2 h-[2px] bg-slate-200 rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll hint on mobile */}
      <div className="sm:hidden text-center mt-1 mb-2">
        <span className="text-[10px] text-slate-300">← desliza para ver todos →</span>
      </div>

      {/* ── Detail panel ── */}
      <div className="mt-4 sm:mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header band — stacks on mobile */}
        <div className="bg-navy-800 px-4 sm:px-6 py-4">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent-300">
                  Paso {activeStep.number}
                </span>
                <span className="text-[10px] text-navy-400">·</span>
                <span className="text-[10px] font-medium text-navy-300">
                  {activeStep.week}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                {activeStep.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/10 text-white">
                {activeStep.duration}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium ${
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
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium text-navy-700 mb-1">
            {activeStep.subtitle}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 max-w-3xl">
            {activeStep.description}
          </p>

          {/* Deliverables — stack on mobile */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-3">
              Entregables clave
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeStep.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 sm:p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer — prev/next with bigger touch targets */}
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 flex items-center justify-between">
          <button
            type="button"
            disabled={activeIdx === 0}
            onClick={() => { if (activeIdx > 0) setActiveStep(roadmapSteps[activeIdx - 1]); }}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium text-navy-600 hover:text-accent-500 hover:bg-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Paso anterior</span>
            <span className="sm:hidden">Anterior</span>
          </button>
          <span className="text-[10px] text-slate-400">
            {activeIdx + 1} de {roadmapSteps.length}
          </span>
          <button
            type="button"
            disabled={activeIdx === roadmapSteps.length - 1}
            onClick={() => { if (activeIdx < roadmapSteps.length - 1) setActiveStep(roadmapSteps[activeIdx + 1]); }}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium text-navy-600 hover:text-accent-500 hover:bg-slate-50 disabled:text-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            <span className="hidden sm:inline">Siguiente paso</span>
            <span className="sm:hidden">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
