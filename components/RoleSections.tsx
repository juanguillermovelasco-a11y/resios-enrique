"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, ComposedChart, Legend, Cell,
} from "recharts";
import {
  bedMap, occupancyTrend, occupancyForecast,
  revenueVsPlan, receivablesAging, cashFlow, weeklyForecast,
  pipelineFunnel, leadsBySource, conversionTrend,
  fteComparison, automationByProcess, savingsOverTime,
  clinicComparison, consolidatedPL,
  type BedStatus,
} from "@/lib/mock-data";

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

// ─── Shared section wrapper ──────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// OCUPACIÓN SECTIONS
// ═══════════════════════════════════════════════════════════════════

export function OcupacionSections() {
  return (
    <div className="space-y-5">
      {/* Bed heat map */}
      <Section title="Mapa de camas — estado en tiempo real">
        {/* Legend */}
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
              <div className="grid grid-cols-9 sm:grid-cols-12 lg:grid-cols-18 gap-1.5">
                {floor.beds.map((bed) => (
                  <div
                    key={bed.id}
                    className={`group relative rounded-lg h-10 flex items-center justify-center text-[9px] font-medium text-white cursor-default ${bedColor[bed.status]} ${
                      bed.status === "available" ? "ring-2 ring-emerald-300 ring-offset-1" : ""
                    }`}
                    title={bed.patient ? `${bed.id}: ${bed.patient} (${bed.phase}, día ${bed.daysSinceAdmission})` : `${bed.id}: ${bedLabel[bed.status]}`}
                  >
                    {bed.id}
                    {/* Tooltip on hover */}
                    {bed.patient && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-40 bg-navy-900 text-white rounded-lg p-2 shadow-lg pointer-events-none">
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

      {/* Occupancy trend */}
      <Section title="Tendencia de ocupación — últimas 12 semanas">
        <ResponsiveContainer width="100%" height={240}>
          <ComposedChart data={occupancyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="week" tick={{ fontSize: 10 }} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeDasharray="6 3" dot={false} name="Target" />
            <Area type="monotone" dataKey="bcn" fill="#1E2761" fillOpacity={0.15} stroke="#1E2761" strokeWidth={2} name="BCN" />
            <Area type="monotone" dataKey="mlg" fill="#F5A623" fillOpacity={0.15} stroke="#F5A623" strokeWidth={2} name="MLG" />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Section>

      {/* Occupancy forecast */}
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
          <div className="bg-navy-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-navy-500 uppercase">BCN S+4</div>
            <div className="text-lg font-display font-semibold text-navy-900">90%</div>
            <div className="text-[10px] text-emerald-600">+6pp vs hoy</div>
          </div>
          <div className="bg-accent-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-accent-600 uppercase">MLG S+4</div>
            <div className="text-lg font-display font-semibold text-navy-900">86%</div>
            <div className="text-[10px] text-emerald-600">+8pp vs hoy</div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FINANZAS SECTIONS
// ═══════════════════════════════════════════════════════════════════

export function FinanzasSections() {
  return (
    <div className="space-y-5">
      {/* Revenue vs Plan */}
      <Section title="Revenue real vs plan — últimos 6 meses (k€)">
        <ResponsiveContainer width="100%" height={240}>
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

      {/* Receivables aging */}
      <Section title="Cuentas por cobrar — aging">
        <div className="grid grid-cols-4 gap-3">
          {receivablesAging.map((bucket) => (
            <div key={bucket.bucket} className="text-center">
              <div className="text-2xl font-display font-semibold text-navy-900">{bucket.amount}k</div>
              <div className="text-[10px] font-semibold mt-1" style={{ color: bucket.color }}>{bucket.bucket}</div>
              <div className="text-[10px] text-slate-400">{bucket.count} facturas</div>
              {/* Bar */}
              <div className="mt-2 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${(bucket.amount / 180) * 100}%`, backgroundColor: bucket.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-rose-50 rounded-lg border border-rose-100">
          <div className="text-xs text-rose-700 font-medium">42k€ en facturas &gt;30 días — 3 familias pendientes de gestión</div>
        </div>
      </Section>

      {/* Weekly forecast */}
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

      {/* Cash flow */}
      <Section title="Cash flow mensual (k€)">
        <ResponsiveContainer width="100%" height={220}>
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
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CRECIMIENTO SECTIONS
// ═══════════════════════════════════════════════════════════════════

export function CrecimientoSections() {
  const maxCount = pipelineFunnel[0].count;

  return (
    <div className="space-y-5">
      {/* Pipeline funnel */}
      <Section title="Pipeline — funnel de conversión">
        <div className="space-y-2">
          {pipelineFunnel.map((stage, i) => (
            <div key={stage.stage} className="flex items-center gap-3">
              <div className="w-32 text-right text-xs text-slate-600 shrink-0">{stage.stage}</div>
              <div className="flex-1 relative">
                <div className="h-9 rounded-lg bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-lg flex items-center justify-end px-3 transition-all"
                    style={{
                      width: `${(stage.count / maxCount) * 100}%`,
                      backgroundColor: `rgba(30, 39, 97, ${1 - i * 0.15})`,
                    }}
                  >
                    <span className="text-[11px] font-semibold text-white">{stage.count}</span>
                  </div>
                </div>
              </div>
              <div className="w-16 text-right">
                <div className="text-xs font-semibold text-navy-900">{stage.value}k€</div>
                <div className="text-[9px] text-slate-400">{stage.conversion}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leads by source */}
      <Section title="Leads por canal de adquisición">
        <div className="space-y-3">
          {leadsBySource.map((source) => (
            <div key={source.source} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: source.color }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-navy-900">{source.source}</span>
                  <span className="text-xs text-slate-500">{source.count} leads</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(source.count / 14) * 100}%`, backgroundColor: source.color }} />
                </div>
              </div>
              <div className="w-16 text-right">
                <span className="text-xs font-semibold" style={{ color: source.color }}>{source.conversion}%</span>
                <div className="text-[9px] text-slate-400">conv.</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Conversion trend */}
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

// ═══════════════════════════════════════════════════════════════════
// BACK OFFICE SECTIONS
// ═══════════════════════════════════════════════════════════════════

export function BackofficeSections() {
  return (
    <div className="space-y-5">
      {/* FTE before/after */}
      <Section title="FTEs por departamento — antes vs después de ResiOS">
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
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="bg-navy-50 rounded-lg p-3 text-center">
            <div className="text-lg font-display font-semibold text-navy-900">9</div>
            <div className="text-[10px] text-slate-500">FTEs antes</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-3 text-center">
            <div className="text-lg font-display font-semibold text-emerald-700">4.2</div>
            <div className="text-[10px] text-slate-500">FTEs después</div>
          </div>
          <div className="bg-accent-50 rounded-lg p-3 text-center">
            <div className="text-lg font-display font-semibold text-accent-600">-53%</div>
            <div className="text-[10px] text-slate-500">Reducción</div>
          </div>
        </div>
      </Section>

      {/* Automation by process */}
      <Section title="Grado de automatización por proceso">
        <div className="space-y-3">
          {automationByProcess.map((p) => (
            <div key={p.process}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-navy-900">{p.process}</span>
                <span className="text-xs font-semibold text-emerald-600">{p.automated}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden flex">
                <div className="h-full bg-emerald-500 rounded-l-full" style={{ width: `${p.automated}%` }} />
                <div className="h-full bg-rose-300 rounded-r-full" style={{ width: `${p.manual}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5"><span className="w-3 h-2 rounded bg-emerald-500" /><span className="text-[10px] text-slate-500">Automatizado</span></div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-2 rounded bg-rose-300" /><span className="text-[10px] text-slate-500">Manual</span></div>
        </div>
      </Section>

      {/* Savings over time */}
      <Section title="Ahorro acumulado mensual (k€/mes)">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={savingsOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="savings" fill="#10b981" fillOpacity={0.2} stroke="#10b981" strokeWidth={2} name="Ahorro k€" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <div className="text-xs text-emerald-700 font-medium">Trayectoria: 28k€/mes actual → 32k€/mes proyectado en Jun. Anualizado: 340k€</div>
        </div>
      </Section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MULTI-CLÍNICA SECTIONS
// ═══════════════════════════════════════════════════════════════════

export function MulticlinicaSections() {
  return (
    <div className="space-y-5">
      {/* Clinic comparison */}
      <Section title="Comparativa clínicas — KPIs clave">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Métrica</th>
                <th className="text-right py-2 px-3 text-navy-600 font-semibold">BCN Diagonal</th>
                <th className="text-right py-2 px-3 text-accent-600 font-semibold">MLG Costa del Sol</th>
                <th className="text-right py-2 px-3 text-slate-400 font-semibold">Delta</th>
              </tr>
            </thead>
            <tbody>
              {clinicComparison.map((row) => {
                const delta = (row.bcn - row.mlg).toFixed(1);
                return (
                  <tr key={row.metric} className="border-b border-slate-100">
                    <td className="py-2.5 px-3 font-medium text-navy-900">{row.metric}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-navy-800">{row.bcn}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-accent-600">{row.mlg}</td>
                    <td className="py-2.5 px-3 text-right text-slate-500">{Number(delta) > 0 ? `+${delta}` : delta}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Clinic comparison chart */}
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

      {/* P&L */}
      <Section title="P&L consolidado — abril (k€)">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 px-3 text-slate-400 font-semibold">Línea</th>
                <th className="text-right py-2 px-3 text-navy-600 font-semibold">BCN</th>
                <th className="text-right py-2 px-3 text-accent-600 font-semibold">MLG</th>
                <th className="text-right py-2 px-3 text-slate-700 font-semibold">Total grupo</th>
              </tr>
            </thead>
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
          <div className="bg-navy-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-navy-500">EBITDA BCN</div>
            <div className="text-lg font-display font-semibold text-navy-900">21.2%</div>
          </div>
          <div className="bg-accent-50 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-accent-600">EBITDA MLG</div>
            <div className="text-lg font-display font-semibold text-navy-900">7.3%</div>
            <div className="text-[9px] text-amber-600">Target: 18% en S+12</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
