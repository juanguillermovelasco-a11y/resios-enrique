"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, ComposedChart, Legend, Cell,
} from "recharts";
import {
  bedMap, occupancyTrend, occupancyForecast, movements, patientsByPhase,
  revenueVsPlan, receivablesAging, cashFlow, weeklyForecast, invoices, marginBreakdown,
  pipelineFunnel, leadsBySource, conversionTrend, scoredLeads, channelROI,
  fteComparison, automationByProcess, savingsOverTime, shiftCoverage, complianceTracker,
  clinicComparison, consolidatedPL, acquisitionPipeline, vcpMilestones,
  type BedStatus,
} from "@/lib/mock-data";
import { AlertTriangle, CheckCircle2, Clock, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

const bedColor: Record<BedStatus, string> = {
  occupied: "bg-navy-600",
  available: "bg-emerald-400",
  maintenance: "bg-amber-400",
  reserved: "bg-blue-400",
};
const bedLabel: Record<BedStatus, string> = {
  occupied: "Ocupada",
  available: "Disponible",
  maintenance: "Mantenimiento",
  reserved: "Reservada",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

const moveColor = { ingreso: "text-emerald-600 bg-emerald-50", alta: "text-blue-600 bg-blue-50", traslado: "text-amber-600 bg-amber-50" };
const moveLabel = { ingreso: "Ingreso", alta: "Alta", traslado: "Traslado" };
const invoiceColor = { paid: "bg-emerald-100 text-emerald-700", pending: "bg-amber-100 text-amber-700", overdue: "bg-rose-100 text-rose-700", partial: "bg-blue-100 text-blue-700" };
const invoiceLabel = { paid: "Pagada", pending: "Pendiente", overdue: "Vencida", partial: "Parcial" };
const compColor = { ok: "text-emerald-600", warning: "text-amber-600", expired: "text-rose-600" };
const compIcon = { ok: CheckCircle2, warning: Clock, expired: AlertTriangle };
const vcpColor = { ahead: "bg-emerald-100 text-emerald-700", "on-track": "bg-blue-100 text-blue-700", behind: "bg-slate-100 text-slate-500" };

// ═══════════════════════════════════════════════════════════════════
// OCUPACIÓN
// ═══════════════════════════════════════════════════════════════════

export function OcupacionMapa() {
  return (
    <div className="space-y-5">
      <Section title="Mapa de camas — estado en tiempo real">
        <div className="flex flex-wrap gap-4 mb-4">
          {(["occupied", "available", "maintenance", "reserved"] as BedStatus[]).map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded ${bedColor[s]}`} />
              <span className="text-[11px] text-slate-500">{bedLabel[s]}</span>
            </div>
          ))}
        </div>
        {bedMap.map((floor) => {
          const occupied = floor.beds.filter((b) => b.status === "occupied").length;
          const pct = Math.round((occupied / floor.beds.length) * 100);
          return (
            <div key={floor.name + floor.clinic} className="mb-5 last:mb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-navy-800">{floor.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{floor.clinic}</span>
                </div>
                <span className={`text-xs font-semibold ${pct >= 85 ? "text-emerald-600" : pct >= 75 ? "text-amber-600" : "text-rose-600"}`}>
                  {occupied}/{floor.beds.length} ({pct}%)
                </span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-18 gap-1">
                {floor.beds.map((bed) => (
                  <div key={bed.id} className={`group relative rounded-md sm:rounded-lg h-8 sm:h-10 flex items-center justify-center text-[8px] sm:text-[9px] font-medium text-white cursor-default ${bedColor[bed.status]} ${bed.status === "available" ? "ring-2 ring-emerald-300 ring-offset-1" : ""}`}
                    title={bed.patient ? `${bed.id}: ${bed.patient} (${bed.phase}, día ${bed.daysSinceAdmission})` : `${bed.id}: ${bedLabel[bed.status]}`}>
                    {bed.id}
                    {bed.patient && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden sm:group-hover:block z-10 w-44 bg-navy-900 text-white rounded-lg p-2.5 shadow-lg pointer-events-none">
                        <div className="text-[10px] font-semibold">{bed.patient}</div>
                        <div className="text-[9px] text-navy-300">{bed.phase} · Día {bed.daysSinceAdmission}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Section>
      <Section title="Distribución por fase terapéutica">
        <div className="space-y-3">
          {patientsByPhase.map((p) => (
            <div key={p.phase}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-navy-900">{p.phase}</span>
                <span className="text-xs text-slate-500">{p.bcn + p.mlg} pacientes · avg {p.avgDays}d</span>
              </div>
              <div className="flex gap-1 h-6">
                <div className="rounded-l-md flex items-center justify-center text-[9px] font-semibold text-white" style={{ width: `${(p.bcn / 20) * 100}%`, backgroundColor: p.color }}>{p.bcn} BCN</div>
                <div className="rounded-r-md flex items-center justify-center text-[9px] font-semibold text-white" style={{ width: `${(p.mlg / 20) * 100}%`, backgroundColor: p.color, opacity: 0.7 }}>{p.mlg} MLG</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function OcupacionTendencias() {
  return (
    <div className="space-y-5">
      <Section title="Tendencia de ocupación — últimas 12 semanas">
        <ResponsiveContainer width="100%" height={260}>
          <ComposedChart data={occupancyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 10 }} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="6 3" dot={false} name="Target 85%" />
            <Area type="monotone" dataKey="bcn" fill="#1E2761" fillOpacity={0.15} stroke="#1E2761" strokeWidth={2} name="BCN" />
            <Area type="monotone" dataKey="mlg" fill="#F5A623" fillOpacity={0.15} stroke="#F5A623" strokeWidth={2} name="MLG" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Section>
      <Section title="Forecast de ocupación — próximas 4 semanas">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={occupancyForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 10 }} />
            <YAxis domain={[70, 95]} tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="bcn" fill="#1E2761" fillOpacity={0.2} stroke="#1E2761" strokeWidth={2} name="BCN %" />
            <Area type="monotone" dataKey="mlg" fill="#F5A623" fillOpacity={0.2} stroke="#F5A623" strokeWidth={2} name="MLG %" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-navy-50 rounded-lg p-3"><div className="text-[10px] font-semibold text-navy-500 uppercase">BCN S+4</div><div className="text-lg font-display font-semibold text-navy-900">90%</div><div className="text-[10px] text-emerald-600">+6pp vs hoy</div></div>
          <div className="bg-accent-50 rounded-lg p-3"><div className="text-[10px] font-semibold text-accent-600 uppercase">MLG S+4</div><div className="text-lg font-display font-semibold text-navy-900">86%</div><div className="text-[10px] text-emerald-600">+8pp vs hoy</div></div>
        </div>
      </Section>
    </div>
  );
}

export function OcupacionMovimientos() {
  return (
    <div className="space-y-5">
      <Section title="Movimientos programados — próximos 7 días">
        <div className="space-y-2">
          {movements.map((m, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 ${moveColor[m.type]}`}>{moveLabel[m.type]}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-navy-900">{m.patient}</span>
                  <span className="text-[10px] text-slate-400">· {m.day}</span>
                </div>
                <div className="text-[11px] text-slate-500">{m.detail}</div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{m.clinic}</span>
                <div className="text-[10px] text-slate-400 mt-0.5">Hab. {m.room}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100"><div className="text-2xl font-display font-semibold text-emerald-700">3</div><div className="text-[10px] text-emerald-600 font-medium">Ingresos</div></div>
        <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100"><div className="text-2xl font-display font-semibold text-blue-700">2</div><div className="text-[10px] text-blue-600 font-medium">Altas</div></div>
        <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100"><div className="text-2xl font-display font-semibold text-amber-700">1</div><div className="text-[10px] text-amber-600 font-medium">Traslado</div></div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FINANZAS
// ═══════════════════════════════════════════════════════════════════

export function FinanzasIngresos() {
  return (
    <div className="space-y-5">
      <Section title="Revenue real vs plan — últimos 6 meses (k€)">
        <ResponsiveContainer width="100%" height={260}>
          <ComposedChart data={revenueVsPlan}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Bar dataKey="real" fill="#1E2761" radius={[4, 4, 0, 0]} name="Real" />
            <Line type="monotone" dataKey="plan" stroke="#F5A623" strokeWidth={2} dot={{ r: 3 }} name="Plan" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Section>
      <Section title="Forecast semanal de ingresos (k€)">
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart data={weeklyForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Bar dataKey="real" fill="#1E2761" radius={[4, 4, 0, 0]} name="Real" />
            <Line type="monotone" dataKey="forecast" stroke="#F5A623" strokeWidth={2} strokeDasharray="6 3" dot={{ r: 3 }} name="Forecast" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Section>
      <Section title="Márgenes por línea de servicio">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-slate-200"><th className="text-left py-2 px-3 text-slate-400 font-semibold">Servicio</th><th className="text-right py-2 px-3 text-slate-400 font-semibold">Revenue (k€)</th><th className="text-right py-2 px-3 text-slate-400 font-semibold">Coste (k€)</th><th className="text-right py-2 px-3 text-slate-400 font-semibold">Margen</th></tr></thead>
            <tbody>
              {marginBreakdown.map((r) => (
                <tr key={r.category} className="border-b border-slate-100">
                  <td className="py-2.5 px-3 font-medium text-navy-900">{r.category}</td>
                  <td className="py-2.5 px-3 text-right text-navy-800">{r.revenue}</td>
                  <td className="py-2.5 px-3 text-right text-rose-600">{r.cost}</td>
                  <td className="py-2.5 px-3 text-right font-semibold text-emerald-600">{r.margin}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

export function FinanzasCobros() {
  return (
    <div className="space-y-5">
      <Section title="Cuentas por cobrar — aging">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {receivablesAging.map((b) => (
            <div key={b.bucket} className="text-center">
              <div className="text-xl sm:text-2xl font-display font-semibold text-navy-900">{b.amount}k</div>
              <div className="text-[10px] font-semibold mt-1" style={{ color: b.color }}>{b.bucket}</div>
              <div className="text-[10px] text-slate-400">{b.count} facturas</div>
              <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${(b.amount / 180) * 100}%`, backgroundColor: b.color }} /></div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Detalle de facturas">
        <div className="space-y-1.5">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 ${invoiceColor[inv.status]}`}>{invoiceLabel[inv.status]}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-navy-900">{inv.family}</div>
                <div className="text-[10px] text-slate-400">{inv.id} · Vence {inv.dueDate}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-semibold text-navy-900">{inv.amount.toLocaleString()}€</div>
                {inv.daysOverdue && inv.daysOverdue > 0 && <div className="text-[10px] text-rose-500">{inv.daysOverdue}d vencida</div>}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function FinanzasCashflow() {
  return (
    <div className="space-y-5">
      <Section title="Cash flow mensual (k€)">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={cashFlow}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Bar dataKey="ingresos" fill="#10b981" radius={[4, 4, 0, 0]} name="Ingresos" />
            <Bar dataKey="gastos" fill="#ef4444" radius={[4, 4, 0, 0]} name="Gastos" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </BarChart>
        </ResponsiveContainer>
      </Section>
      <Section title="Neto mensual y proyección">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={cashFlow}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="neto" fill="#1E2761" fillOpacity={0.15} stroke="#1E2761" strokeWidth={2} name="Neto k€" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <div className="text-xs text-emerald-700 font-medium">Neto creciente: 110k→185k en 6 meses. Cash runway: 14 meses.</div>
        </div>
      </Section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CRECIMIENTO
// ═══════════════════════════════════════════════════════════════════

export function CrecimientoPipeline() {
  const maxCount = pipelineFunnel[0].count;
  return (
    <div className="space-y-5">
      <Section title="Pipeline — funnel de conversión">
        <div className="space-y-2">
          {pipelineFunnel.map((stage, i) => (
            <div key={stage.stage} className="flex items-center gap-3">
              <div className="w-20 sm:w-36 text-right text-[10px] sm:text-xs text-slate-600 shrink-0">{stage.stage}</div>
              <div className="flex-1 relative"><div className="h-9 rounded-lg bg-slate-100 overflow-hidden"><div className="h-full rounded-lg flex items-center justify-end px-3" style={{ width: `${(stage.count / maxCount) * 100}%`, backgroundColor: `rgba(30, 39, 97, ${1 - i * 0.15})` }}><span className="text-[11px] font-semibold text-white">{stage.count}</span></div></div></div>
              <div className="w-16 text-right"><div className="text-xs font-semibold text-navy-900">{stage.value}k€</div><div className="text-[9px] text-slate-400">{stage.conversion}</div></div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Tasa de conversión — tendencia semanal">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={conversionTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 10 }} />
            <YAxis domain={[20, 40]} tick={{ fontSize: 10 }} unit="%" />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="rate" fill="#1E2761" fillOpacity={0.15} stroke="#1E2761" strokeWidth={2} name="Conversión %" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <div className="text-xs text-emerald-700 font-medium">+6pp en 8 semanas — scoring AI mejorando priorización de leads</div>
        </div>
      </Section>
    </div>
  );
}

export function CrecimientoCanales() {
  return (
    <div className="space-y-5">
      <Section title="Leads por canal de adquisición">
        <div className="space-y-3">
          {leadsBySource.map((s) => (
            <div key={s.source} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <div className="flex-1 min-w-0"><div className="flex items-center justify-between mb-1"><span className="text-xs font-medium text-navy-900">{s.source}</span><span className="text-xs text-slate-500">{s.count} leads</span></div><div className="h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${(s.count / 14) * 100}%`, backgroundColor: s.color }} /></div></div>
              <div className="w-16 text-right"><span className="text-xs font-semibold" style={{ color: s.color }}>{s.conversion}%</span><div className="text-[9px] text-slate-400">conv.</div></div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="ROI por canal">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-slate-200"><th className="text-left py-2 px-2 text-slate-400 font-semibold">Canal</th><th className="text-right py-2 px-2 text-slate-400 font-semibold">Leads</th><th className="text-right py-2 px-2 text-slate-400 font-semibold">Cerrados</th><th className="text-right py-2 px-2 text-slate-400 font-semibold">Rev (k€)</th><th className="text-right py-2 px-2 text-slate-400 font-semibold">CAC (k€)</th><th className="text-right py-2 px-2 text-slate-400 font-semibold">ROI</th></tr></thead>
            <tbody>
              {channelROI.map((c) => (
                <tr key={c.channel} className="border-b border-slate-100">
                  <td className="py-2 px-2 font-medium text-navy-900">{c.channel}</td>
                  <td className="py-2 px-2 text-right">{c.leads}</td>
                  <td className="py-2 px-2 text-right">{c.closed}</td>
                  <td className="py-2 px-2 text-right font-semibold">{c.revenue}</td>
                  <td className="py-2 px-2 text-right text-slate-500">{c.cac}</td>
                  <td className="py-2 px-2 text-right font-semibold text-emerald-600">{c.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}

export function CrecimientoScoring() {
  return (
    <div className="space-y-5">
      <Section title="Scoring AI — ranking de leads">
        <div className="space-y-2">
          {scoredLeads.map((l) => (
            <div key={l.name} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${l.score >= 80 ? "bg-emerald-500" : l.score >= 60 ? "bg-amber-500" : "bg-slate-400"}`}>
                {l.score}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap">
                  <span className="text-xs font-semibold text-navy-900">{l.name}</span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{l.stage}</span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{l.clinic}</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">{l.signal}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-semibold text-navy-900">{l.value}k€/mes</div>
                <div className="text-[10px] text-slate-400">{l.daysInPipeline}d en pipeline</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// BACK OFFICE
// ═══════════════════════════════════════════════════════════════════

export function BackofficeAutomatizacion() {
  return (
    <div className="space-y-5">
      <Section title="FTEs por departamento — antes vs después">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={fteComparison} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 10 }} />
            <YAxis dataKey="dept" type="category" tick={{ fontSize: 10 }} width={80} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Bar dataKey="before" fill="#cbd5e1" radius={[0, 4, 4, 0]} name="Antes" />
            <Bar dataKey="after" fill="#1E2761" radius={[0, 4, 4, 0]} name="Con ResiOS" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-navy-50 rounded-lg p-2.5 sm:p-3 text-center"><div className="text-base sm:text-lg font-display font-semibold text-navy-900">9</div><div className="text-[9px] sm:text-[10px] text-slate-500">FTEs antes</div></div>
          <div className="bg-emerald-50 rounded-lg p-2.5 sm:p-3 text-center"><div className="text-base sm:text-lg font-display font-semibold text-emerald-700">4.2</div><div className="text-[9px] sm:text-[10px] text-slate-500">FTEs después</div></div>
          <div className="bg-accent-50 rounded-lg p-2.5 sm:p-3 text-center"><div className="text-base sm:text-lg font-display font-semibold text-accent-600">-53%</div><div className="text-[9px] sm:text-[10px] text-slate-500">Reducción</div></div>
        </div>
      </Section>
      <Section title="Automatización por proceso">
        <div className="space-y-3">
          {automationByProcess.map((p) => (
            <div key={p.process}><div className="flex items-center justify-between mb-1"><span className="text-xs font-medium text-navy-900">{p.process}</span><span className="text-xs font-semibold text-emerald-600">{p.automated}%</span></div><div className="h-2.5 rounded-full bg-slate-100 overflow-hidden flex"><div className="h-full bg-emerald-500 rounded-l-full" style={{ width: `${p.automated}%` }} /><div className="h-full bg-rose-300 rounded-r-full" style={{ width: `${p.manual}%` }} /></div></div>
          ))}
        </div>
      </Section>
      <Section title="Ahorro acumulado (k€/mes)">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={savingsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="savings" fill="#10b981" fillOpacity={0.2} stroke="#10b981" strokeWidth={2} name="Ahorro k€" />
          </AreaChart>
        </ResponsiveContainer>
      </Section>
    </div>
  );
}

export function BackofficeTurnos() {
  return (
    <div className="space-y-5">
      {["BCN", "MLG"].map((clinic) => (
        <Section key={clinic} title={`Cobertura de turnos — ${clinic === "BCN" ? "Barcelona" : "Málaga"}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="border-b border-slate-200"><th className="py-2 px-2 text-left text-slate-400 font-semibold">Día</th><th className="py-2 px-2 text-center text-slate-400 font-semibold">Mañana</th><th className="py-2 px-2 text-center text-slate-400 font-semibold">Tarde</th><th className="py-2 px-2 text-center text-slate-400 font-semibold">Noche</th></tr></thead>
              <tbody>
                {shiftCoverage.filter((s) => s.clinic === clinic).map((s, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-2 px-2 font-medium text-navy-900">{s.day}</td>
                    {[s.morning, s.afternoon, s.night].map((shift, j) => {
                      const ok = shift.covered >= shift.needed;
                      return (
                        <td key={j} className="py-2 px-2 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                            {shift.covered}/{shift.needed}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ))}
      <div className="p-3 bg-rose-50 rounded-lg border border-rose-100">
        <div className="text-xs text-rose-700 font-medium">1 gap detectado: Viernes tarde BCN (2/3) + Sábado noche MLG (1/2)</div>
      </div>
    </div>
  );
}

export function BackofficeCompliance() {
  return (
    <div className="space-y-5">
      <Section title="Tracker de compliance y certificaciones">
        <div className="space-y-1.5">
          {complianceTracker.map((c, i) => {
            const Icon = compIcon[c.status];
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100">
                <Icon className={`w-4 h-4 shrink-0 ${compColor[c.status]}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-navy-900">{c.item}</div>
                  <div className="text-[10px] text-slate-400">{c.responsible} · {c.clinic}</div>
                </div>
                <span className={`text-[10px] font-semibold shrink-0 ${compColor[c.status]}`}>{c.deadline}</span>
              </div>
            );
          })}
        </div>
      </Section>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100"><div className="text-2xl font-display font-semibold text-emerald-700">{complianceTracker.filter((c) => c.status === "ok").length}</div><div className="text-[10px] text-emerald-600 font-medium">Al día</div></div>
        <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100"><div className="text-2xl font-display font-semibold text-amber-700">{complianceTracker.filter((c) => c.status === "warning").length}</div><div className="text-[10px] text-amber-600 font-medium">Próximos</div></div>
        <div className="bg-rose-50 rounded-xl p-4 text-center border border-rose-100"><div className="text-2xl font-display font-semibold text-rose-700">{complianceTracker.filter((c) => c.status === "expired").length}</div><div className="text-[10px] text-rose-600 font-medium">Vencido</div></div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MULTI-CLÍNICA
// ═══════════════════════════════════════════════════════════════════

export function MulticlinicaComparativa() {
  return (
    <div className="space-y-5">
      <Section title="Comparativa clínicas — KPIs clave">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-slate-200"><th className="text-left py-2 px-3 text-slate-400 font-semibold">Métrica</th><th className="text-right py-2 px-3 text-navy-600 font-semibold">BCN</th><th className="text-right py-2 px-3 text-accent-600 font-semibold">MLG</th><th className="text-right py-2 px-3 text-slate-400 font-semibold">Delta</th></tr></thead>
            <tbody>
              {clinicComparison.map((row) => {
                const d = (row.bcn - row.mlg).toFixed(1);
                return (<tr key={row.metric} className="border-b border-slate-100"><td className="py-2.5 px-3 font-medium text-navy-900">{row.metric}</td><td className="py-2.5 px-3 text-right font-semibold text-navy-800">{row.bcn}</td><td className="py-2.5 px-3 text-right font-semibold text-accent-600">{row.mlg}</td><td className="py-2.5 px-3 text-right text-slate-500">{Number(d) > 0 ? `+${d}` : d}</td></tr>);
              })}
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="Comparativa visual">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={clinicComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="metric" tick={{ fontSize: 9 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Bar dataKey="bcn" fill="#1E2761" radius={[4, 4, 0, 0]} name="BCN" />
            <Bar dataKey="mlg" fill="#F5A623" radius={[4, 4, 0, 0]} name="MLG" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </BarChart>
        </ResponsiveContainer>
      </Section>
    </div>
  );
}

export function MulticlinicaPL() {
  return (
    <div className="space-y-5">
      <Section title="P&L consolidado — abril (k€)">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-slate-200"><th className="text-left py-2 px-3 text-slate-400 font-semibold">Línea</th><th className="text-right py-2 px-3 text-navy-600 font-semibold">BCN</th><th className="text-right py-2 px-3 text-accent-600 font-semibold">MLG</th><th className="text-right py-2 px-3 text-slate-700 font-semibold">Total</th></tr></thead>
            <tbody>
              {consolidatedPL.map((row) => (
                <tr key={row.line} className={`border-b border-slate-100 ${row.line === "EBITDA" ? "bg-navy-50 font-semibold" : ""}`}>
                  <td className="py-2.5 px-3 font-medium text-navy-900">{row.line}</td>
                  <td className={`py-2.5 px-3 text-right ${row.bcn < 0 ? "text-rose-600" : "text-navy-800"}`}>{row.bcn}</td>
                  <td className={`py-2.5 px-3 text-right ${row.mlg < 0 ? "text-rose-600" : "text-accent-600"}`}>{row.mlg}</td>
                  <td className={`py-2.5 px-3 text-right font-semibold ${row.total < 0 ? "text-rose-600" : "text-navy-900"}`}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-navy-50 rounded-lg p-3"><div className="text-[10px] font-semibold text-navy-500">EBITDA BCN</div><div className="text-lg font-display font-semibold text-navy-900">21.2%</div></div>
          <div className="bg-accent-50 rounded-lg p-3"><div className="text-[10px] font-semibold text-accent-600">EBITDA MLG</div><div className="text-lg font-display font-semibold text-navy-900">7.3%</div><div className="text-[9px] text-amber-600">Target: 18% en S+12</div></div>
        </div>
      </Section>
    </div>
  );
}

export function MulticlinicaExpansion() {
  return (
    <div className="space-y-5">
      <Section title="Pipeline de adquisiciones">
        <div className="space-y-2">
          {acquisitionPipeline.map((t) => (
            <div key={t.name} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 ${t.fit >= 80 ? "bg-emerald-500" : t.fit >= 70 ? "bg-amber-500" : "bg-slate-400"}`}>{t.fit}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 flex-wrap"><span className="text-xs font-semibold text-navy-900">{t.name}</span><span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">{t.city}</span><span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">{t.stage}</span></div>
                <div className="text-[9px] sm:text-[10px] text-slate-500">{t.beds} camas · EBITDA {t.ebitda} · {t.multiple}</div>
              </div>
              <div className="text-right shrink-0"><div className="text-xs font-semibold text-navy-900">{t.askingPrice}</div><div className="text-[10px] text-slate-400">asking</div></div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Value Creation Plan — milestones">
        <div className="space-y-1.5">
          {vcpMilestones.map((m, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100">
              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 ${vcpColor[m.status]}`}>{m.status === "ahead" ? "Adelantado" : m.status === "on-track" ? "On track" : "Pendiente"}</span>
              <div className="flex-1 min-w-0"><div className="text-xs font-medium text-navy-900">{m.milestone}</div><div className="text-[10px] text-slate-400">{m.quarter}</div></div>
              <div className="text-right shrink-0"><div className="text-xs font-semibold text-navy-900">{m.actual}</div><div className="text-[10px] text-slate-400">target: {m.target}</div></div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
