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
  X,
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
  const [activeStep, setActiveStep] = useState<RoadmapStep | null>(null);

  return (
    <div className="relative">
      {/* Flow grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {roadmapSteps.map((step, i) => {
          const Icon = iconMap[step.icon] || Circle;
          const status = statusConfig[step.status];

          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(activeStep?.number === step.number ? null : step)}
              className={`relative group text-left rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer ${
                activeStep?.number === step.number
                  ? "border-accent bg-accent-50/50 shadow-lg scale-[1.02]"
                  : step.status === "done"
                  ? "border-emerald-200 bg-white hover:border-emerald-300 hover:shadow-md"
                  : step.status === "active"
                  ? "border-accent-200 bg-white hover:border-accent-300 hover:shadow-md"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Step number + status */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      step.status === "done"
                        ? "bg-emerald-100"
                        : step.status === "active"
                        ? "bg-accent-100"
                        : "bg-slate-100"
                    }`}
                  >
                    <Icon
                      className={`w-[18px] h-[18px] ${
                        step.status === "done"
                          ? "text-emerald-600"
                          : step.status === "active"
                          ? "text-accent-500"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wide">
                    {step.number}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <status.Icon className={`w-3.5 h-3.5 ${status.text}`} />
                  <span className={`text-[10px] font-medium ${status.text}`}>{status.label}</span>
                </div>
              </div>

              {/* Title + subtitle */}
              <h3 className="font-display text-base font-semibold text-navy-900 mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3">{step.subtitle}</p>

              {/* Week + duration badges */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-navy-100 text-navy-700">
                  {step.week}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                  {step.duration}
                </span>
              </div>

              {/* Expand hint */}
              <div className="absolute bottom-2 right-3 text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                click para ver más
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail popup / expanded panel */}
      {activeStep && (
        <div className="mt-6 rounded-2xl border-2 border-accent-200 bg-white shadow-xl p-6 lg:p-8 animate-in">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-accent-100 flex items-center justify-center">
                {(() => {
                  const Icon = iconMap[activeStep.icon] || Circle;
                  return <Icon className="w-5 h-5 text-accent-500" />;
                })()}
              </div>
              <div>
                <div className="text-xs font-bold text-accent-500 tracking-wide">
                  PASO {activeStep.number} · {activeStep.week}
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {activeStep.title}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveStep(null)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {activeStep.description}
          </p>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
              Entregables
            </h4>
            <ul className="space-y-2">
              {activeStep.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
              activeStep.status === "done"
                ? "bg-emerald-100 text-emerald-700"
                : activeStep.status === "active"
                ? "bg-accent-100 text-accent-600"
                : "bg-slate-100 text-slate-600"
            }`}>
              {statusConfig[activeStep.status].label}
            </span>
            <span className="text-xs text-slate-400">Duración: {activeStep.duration}</span>
          </div>
        </div>
      )}
    </div>
  );
}
