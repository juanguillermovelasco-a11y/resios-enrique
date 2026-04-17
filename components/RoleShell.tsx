"use client";

import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  BedDouble,
  Settings,
  Building2,
  ChevronRight,
  X,
  Sparkles,
  AlertCircle,
  Lightbulb,
  Zap,
  Send,
} from "lucide-react";
import { roleViews, copilotByRole, roleTabs, type RoleKey, type BlockItem } from "@/lib/mock-data";
import {
  OcupacionMapa, OcupacionTendencias, OcupacionMovimientos,
  FinanzasIngresos, FinanzasCobros, FinanzasCashflow,
  CrecimientoPipeline, CrecimientoCanales, CrecimientoScoring,
  BackofficeFacturacion, BackofficeNomina, BackofficeEquipo,
  MulticlinicaComparativa, MulticlinicaPL, MulticlinicaExpansion,
} from "@/components/RoleSections";

const tabComponents: Record<string, React.ComponentType> = {
  mapa: OcupacionMapa,
  tendencias: OcupacionTendencias,
  movimientos: OcupacionMovimientos,
  ingresos: FinanzasIngresos,
  cobros: FinanzasCobros,
  cashflow: FinanzasCashflow,
  pipeline: CrecimientoPipeline,
  canales: CrecimientoCanales,
  scoring: CrecimientoScoring,
  facturacion: BackofficeFacturacion,
  nomina: BackofficeNomina,
  equipo: BackofficeEquipo,
  comparativa: MulticlinicaComparativa,
  pl: MulticlinicaPL,
  expansion: MulticlinicaExpansion,
};

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  TrendingUp,
  BedDouble,
  Settings,
  Building2,
};

const severityDot: Record<string, string> = {
  high: "bg-rose-500",
  medium: "bg-amber-400",
  normal: "bg-slate-300",
};

const suggestionIcon: Record<string, React.ElementType> = {
  alert: AlertCircle,
  insight: Lightbulb,
  action: Zap,
};

const suggestionBorder: Record<string, string> = {
  alert: "border-l-rose-500",
  insight: "border-l-blue-500",
  action: "border-l-accent-400",
};

const suggestionIconColor: Record<string, string> = {
  alert: "text-rose-500",
  insight: "text-blue-500",
  action: "text-accent-500",
};

export function RoleShell({ roleKey }: { roleKey: RoleKey }) {
  const role = roleViews[roleKey];
  const copilot = copilotByRole[roleKey];
  const [drawerItem, setDrawerItem] = useState<BlockItem | null>(null);
  const [copilotAnswer, setCopilotAnswer] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("resumen");

  const tabs = roleTabs[roleKey];
  const TabContent = activeTab !== "resumen" ? tabComponents[activeTab] : null;

  const Icon = iconMap[role.icon] || Settings;
  const initials = role.persona
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const handleQuestion = (question: string) => {
    const match = copilot.qa.find((qa) => qa.question === question);
    if (match) setCopilotAnswer(match.answer);
  };

  return (
    <div className="relative">
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-accent-500 mb-1">
            Vista por rol · {role.label}
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-700 flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-navy-900 truncate">
                {role.persona}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">{role.description}</p>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {role.kpis.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4">
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1 truncate">
                {kpi.label}
              </div>
              <div className="font-display text-xl sm:text-2xl font-semibold text-navy-900">{kpi.value}</div>
              {kpi.trend && (
                <div className={`text-xs mt-1 ${
                  kpi.trendDirection === "up" || kpi.trendDirection === "down"
                    ? "text-emerald-600"
                    : "text-slate-400"
                }`}>
                  {kpi.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tabs — scrollable on mobile */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-6">
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 sm:px-4 py-2 rounded-md text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-white text-navy-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content: 2-column layout — content left, copilot right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Content (2/3 width) */}
          <div className="lg:col-span-2">
            {TabContent ? (
              <TabContent />
            ) : (
            <div className="space-y-6">
            {role.blocks.map((block) => (
              <div key={block.title}>
                <h2 className="font-display text-lg font-semibold text-navy-900 mb-3">
                  {block.title}
                </h2>
                <div className="space-y-2">
                  {block.items.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setDrawerItem(item)}
                      className="w-full text-left bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${severityDot[item.severity || "normal"]}`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-navy-900">{item.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.detail}</div>
                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {item.tags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-navy-100 text-navy-600">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 mt-0.5 shrink-0" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
            )}
          </div>

          {/* Right: Copilot panel (1/3 width) — always visible */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              {/* Copilot header */}
              <div className="bg-navy-800 text-white p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-300">Tu copiloto</span>
                </div>
                <h3 className="text-sm font-semibold">Sugerencias y preguntas</h3>
              </div>

              {/* Suggestions with action buttons */}
              <div className="p-4 space-y-3 border-b border-slate-100">
                {copilot.suggestions.map((s, i) => {
                  const SIcon = suggestionIcon[s.type] || Sparkles;
                  return (
                    <div
                      key={i}
                      className={`border-l-[3px] ${suggestionBorder[s.type]} bg-white rounded-r-lg p-3`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <SIcon className={`w-4 h-4 mt-0.5 shrink-0 ${suggestionIconColor[s.type]}`} />
                        <p className="text-xs text-slate-700 leading-relaxed">{s.text}</p>
                      </div>
                      {s.actions && s.actions.length > 0 && (
                        <div className="flex flex-wrap gap-2 ml-6">
                          {s.actions.map((action, j) => (
                            <button
                              key={j}
                              type="button"
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                                action.variant === "primary"
                                  ? "bg-navy-800 text-white hover:bg-navy-900"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Answer area */}
              {copilotAnswer && (
                <div className="p-4 border-b border-slate-100 bg-navy-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500">Respuesta</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{copilotAnswer}</p>
                  <button
                    type="button"
                    onClick={() => setCopilotAnswer(null)}
                    className="text-[10px] text-slate-400 hover:text-slate-600 mt-2"
                  >
                    Cerrar
                  </button>
                </div>
              )}

              {/* Conversational section */}
              <div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-3">
                  Pregúntame
                </div>

                {/* Greeting */}
                <div className="bg-slate-50 rounded-lg p-3 mb-3">
                  <p className="text-xs text-slate-600 leading-relaxed">{copilot.greeting}</p>
                </div>

                {/* Suggested questions */}
                <div className="space-y-1 mb-3">
                  {copilot.suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleQuestion(q)}
                      className="w-full text-left text-xs text-navy-600 hover:text-accent-500 hover:bg-accent-50 rounded-lg px-3 py-2 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-accent-400 focus:ring-1 focus:ring-accent-200"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && inputValue.trim()) {
                        const match = copilot.qa.find((qa) =>
                          qa.question.toLowerCase().includes(inputValue.toLowerCase().slice(0, 20))
                        );
                        if (match) setCopilotAnswer(match.answer);
                        else setCopilotAnswer("Estoy procesando tu pregunta. En la versión completa, consultaré los datos en tiempo real para darte una respuesta contextualizada.");
                        setInputValue("");
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="p-2 rounded-lg bg-navy-800 text-white hover:bg-navy-900 transition-colors"
                    onClick={() => {
                      if (inputValue.trim()) {
                        const match = copilot.qa.find((qa) =>
                          qa.question.toLowerCase().includes(inputValue.toLowerCase().slice(0, 20))
                        );
                        if (match) setCopilotAnswer(match.answer);
                        else setCopilotAnswer("Estoy procesando tu pregunta. En la versión completa, consultaré los datos en tiempo real para darte una respuesta contextualizada.");
                        setInputValue("");
                      }
                    }}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail drawer */}
      {drawerItem && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button type="button" onClick={() => setDrawerItem(null)} className="hidden sm:block flex-1 bg-black/30" />
          <div className="w-full sm:max-w-md bg-white shadow-2xl p-4 sm:p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-semibold text-navy-900">Detalle</h3>
              <button type="button" onClick={() => setDrawerItem(null)} className="p-1.5 rounded-lg hover:bg-slate-100">
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${severityDot[drawerItem.severity || "normal"]}`} />
              <span className="text-xs font-medium text-slate-500 uppercase">
                {drawerItem.severity === "high" ? "Prioridad alta" : drawerItem.severity === "medium" ? "Atención" : "Normal"}
              </span>
            </div>
            <h4 className="text-base font-semibold text-navy-900 mb-3">{drawerItem.label}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{drawerItem.detail}</p>
            {drawerItem.tags && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {drawerItem.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-navy-100 text-navy-600">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
