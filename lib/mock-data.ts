/* ================================================================
   ResiOS — Demo personalizada para Enrique Criado
   Datos mock: Roadmap 90 días + 5 roles estratégicos
   ================================================================ */

// ─── Roadmap 90 días ─────────────────────────────────────────────

export interface RoadmapStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  week: string;
  description: string;
  deliverables: string[];
  icon: string; // lucide icon name
  status: "done" | "active" | "upcoming";
}

export const roadmapSteps: RoadmapStep[] = [
  {
    number: "01",
    title: "Onboarding",
    subtitle: "Setup de clínica en 14 días",
    duration: "2 semanas",
    week: "S1–S2",
    description:
      "Configuración de tenant, upload de datos existentes (Excel, PDFs, fotos), conexión con Google Workspace SSO. Entrevistas AI con 22 roles para mapear procesos AS-IS.",
    deliverables: [
      "Tenant configurado para Barcelona y Málaga",
      "22 roles entrevistados con journey mapping",
      "Integraciones iniciales: Google Workspace, Sage",
    ],
    icon: "Rocket",
    status: "upcoming",
  },
  {
    number: "02",
    title: "Ingesta y migración",
    subtitle: "Importador universal con LLM",
    duration: "1 semana",
    week: "S3",
    description:
      "Importación masiva de datos históricos desde cualquier formato. El LLM mapea automáticamente columnas a esquema ResiOS con scoring de confianza y revisión humana para registros inciertos.",
    deliverables: [
      "100% datos históricos migrados sin pérdida",
      "~3,000 registros mapeados automáticamente",
      "92% precisión media, revisión humana del 8% restante",
    ],
    icon: "Database",
    status: "upcoming",
  },
  {
    number: "03",
    title: "Operación por rol",
    subtitle: "~25 roles, una sola app",
    duration: "2 semanas",
    week: "S3–S4",
    description:
      "Cada persona ve solo lo que necesita. Shell mobile para planta, desktop para oficina. Configuración de permisos, vistas y KPIs por rol funcional.",
    deliverables: [
      "25 roles configurados en 7 áreas funcionales",
      "Shell mobile + desktop operativos",
      "−6 hrs/semana por persona en tareas admin",
    ],
    icon: "Users",
    status: "upcoming",
  },
  {
    number: "04",
    title: "Captura conversacional",
    subtitle: "Voz, chat y foto — sin formularios",
    duration: "2 semanas",
    week: "S5–S6",
    description:
      "Los roles no rellenan formularios. Conversan con su copiloto por voz, chat o foto. Sesiones de terapia transcritas automáticamente, notas clínicas generadas en <30s.",
    deliverables: [
      "92% notas clínicas generadas por voz",
      "Transcripción automática de sesiones de terapia",
      "Captura de mantenimiento por foto (antes/después)",
    ],
    icon: "MessageSquare",
    status: "upcoming",
  },
  {
    number: "05",
    title: "Modelo de datos",
    subtitle: "Una base donde todo habla con todo",
    duration: "1 semana",
    week: "S6",
    description:
      "47 entidades core conectadas: paciente, reserva, habitación, fase terapéutica, medicación, factura. Una sola fuente de verdad vs 5 sistemas desconectados.",
    deliverables: [
      "47 entidades core vinculadas",
      "Row-level security multi-tenant",
      "Flujos cross-cutting: alergia → dieta → medicación automáticos",
    ],
    icon: "GitBranch",
    status: "upcoming",
  },
  {
    number: "06",
    title: "Capa de IA",
    subtitle: "Lee el modelo y orquesta el negocio",
    duration: "2 semanas",
    week: "S7–S8",
    description:
      "IA proactiva que monitorea datos en tiempo real y genera alertas: clínicas, comerciales, operativas, financieras y de RRHH. Copilot con Q&A contextual para cada rol.",
    deliverables: [
      "Alertas proactivas en 5 categorías",
      "84% confianza en alertas AI validadas por equipo clínico",
      "Copilot contextual por rol con lenguaje natural",
    ],
    icon: "Sparkles",
    status: "upcoming",
  },
  {
    number: "07",
    title: "Reporting y dashboards",
    subtitle: "Vista clínica + vista grupo",
    duration: "2 semanas",
    week: "S9–S10",
    description:
      "Dashboard de clínica (director) con KPIs en tiempo real. Dashboard de grupo (inversor) con consolidado multi-clínica. Informes auto-generados: semanal clínico, mensual financiero, VCP trimestral.",
    deliverables: [
      "KPIs en tiempo real vs retraso de +12 días actual",
      "Comparativa entre clínicas para grupo",
      "6 tipos de informes auto-enviados a stakeholders",
    ],
    icon: "BarChart3",
    status: "upcoming",
  },
  {
    number: "08",
    title: "Integraciones",
    subtitle: "El ciclo completo: lead → cobro → reporting",
    duration: "2 semanas",
    week: "S11–S12",
    description:
      "Lead (HubSpot) → Reserva (ResiOS) → Estancia → Factura (Sage) → Cobro (Open Banking) → Reporting. Reconciliación bancaria automática, 94% automatizado.",
    deliverables: [
      "HubSpot bidireccional: pipeline, conversiones",
      "Sage: facturación y Verifactu compliance",
      "Open Banking BBVA: reconciliación automática",
    ],
    icon: "Link",
    status: "upcoming",
  },
  {
    number: "09",
    title: "Impacto consolidado",
    subtitle: "Lo que cambia cuando ResiOS opera",
    duration: "Continuo",
    week: "S13+",
    description:
      "Medición de impacto a 90 días post-launch: +148K€ EBITDA incremental mensual, −42% tiempo admin, −68% errores medicación, +18 NPS pacientes. Break-even en día 21.",
    deliverables: [
      "+148K€ EBITDA incremental mensual",
      "Break-even en día 21",
      "Ocupación: 78% → 87% en 9 meses",
    ],
    icon: "TrendingUp",
    status: "upcoming",
  },
];

// ─── Clínicas ────────────────────────────────────────────────────

export interface Clinic {
  id: string;
  name: string;
  city: string;
  beds: number;
  rooms: number;
  occupancy: number;
  revenue: number;
  pipeline: number;
  staff: number;
  status: "Operando" | "Onboarding";
}

export const clinics: Clinic[] = [
  {
    id: "bcn",
    name: "Clínica Diagonal",
    city: "Barcelona",
    beds: 42,
    rooms: 32,
    occupancy: 84,
    revenue: 420,
    pipeline: 28,
    staff: 24,
    status: "Operando",
  },
  {
    id: "mlg",
    name: "Clínica Costa del Sol",
    city: "Málaga",
    beds: 36,
    rooms: 28,
    occupancy: 78,
    revenue: 260,
    pipeline: 19,
    staff: 20,
    status: "Onboarding",
  },
];

// ─── Roles de Enrique ────────────────────────────────────────────

export type RoleKey =
  | "finanzas"
  | "crecimiento"
  | "ocupacion"
  | "backoffice"
  | "gestion-multiclinica";

export interface KPI {
  label: string;
  value: string;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
}

export interface BlockItem {
  label: string;
  detail: string;
  severity?: "high" | "medium" | "normal";
  tags?: string[];
}

export interface Block {
  title: string;
  items: BlockItem[];
}

export interface CopilotSuggestion {
  text: string;
  type: "alert" | "insight" | "action";
  actions?: { label: string; variant: "primary" | "secondary" }[];
}

export interface CopilotQA {
  question: string;
  answer: string;
}

export interface RoleView {
  key: RoleKey;
  label: string;
  persona: string;
  personaRole: string;
  icon: string;
  description: string;
  kpis: KPI[];
  blocks: Block[];
}

export const roleViews: Record<RoleKey, RoleView> = {
  finanzas: {
    key: "finanzas",
    label: "Finanzas",
    persona: "Ana Torralba",
    personaRole: "Directora Financiera",
    icon: "DollarSign",
    description:
      "Control financiero integrado con Sage ERP. Forecast semanal, márgenes por clínica, cash flow proyectado y reconciliación bancaria automática.",
    kpis: [
      { label: "Ingresos mes (grupo)", value: "680k €", trend: "+8.4% vs plan", trendDirection: "up" },
      { label: "Margen EBITDA", value: "18.7%", trend: "+2.1pp vs Q anterior", trendDirection: "up" },
      { label: "DSO (días cobro)", value: "34 días", trend: "−9 días con Open Banking", trendDirection: "down" },
      { label: "Cash runway", value: "14 meses", trend: "Estable", trendDirection: "neutral" },
    ],
    blocks: [
      {
        title: "Forecast semanal — próximas 4 semanas",
        items: [
          { label: "S+1: 172k € proyectados", detail: "Base: 165k real S-1 + 3 ingresos confirmados pipeline", severity: "normal" },
          { label: "S+2: 168k € proyectados", detail: "2 altas programadas reducen ingreso recurrente, 1 ingreso nuevo", severity: "medium" },
          { label: "S+3: 178k € proyectados", detail: "Pipeline HubSpot: 4 leads hot stage, conversión esperada 34%", severity: "normal" },
          { label: "S+4: 170k € proyectados", detail: "Baseline estable, sin movimientos grandes conocidos", severity: "normal" },
        ],
      },
      {
        title: "Márgenes por clínica",
        items: [
          { label: "BCN Diagonal: 21.3% EBITDA", detail: "420k ingresos · 331k costes · margen mejorando +1.2pp", severity: "normal", tags: ["Barcelona"] },
          { label: "MLG Costa del Sol: 14.8% EBITDA", detail: "260k ingresos · 221k costes · en ramp-up, margen esperado 18% en S+8", severity: "medium", tags: ["Málaga"] },
        ],
      },
      {
        title: "Alertas financieras",
        items: [
          { label: "3 facturas vencidas > 30 días — 42k €", detail: "Familias Rodríguez, Martín y Sánchez. Sage ha enviado 2º recordatorio, Open Banking sin movimiento", severity: "high" },
          { label: "Coste personal MLG 12% sobre budget", detail: "Onboarding requirió refuerzo temporal. Normaliza en S+3 cuando reduce a plantilla target", severity: "medium" },
          { label: "Reconciliación bancaria BBVA: 94% auto", detail: "12 de 198 movimientos requieren matching manual. Mostly transferencias con concepto incorrecto", severity: "normal" },
        ],
      },
    ],
  },

  crecimiento: {
    key: "crecimiento",
    label: "Crecimiento",
    persona: "Marta Llopis",
    personaRole: "Directora de Crecimiento",
    icon: "TrendingUp",
    description:
      "Pipeline comercial conectado a HubSpot. Cada lead vale ~20K€/mes. Conversión, tiempo medio a ingreso, forecast de ocupación basado en pipeline activo.",
    kpis: [
      { label: "Pipeline activo", value: "1.2M €", trend: "+12% vs mes anterior", trendDirection: "up" },
      { label: "Leads en HubSpot", value: "47", trend: "28 hot, 19 warm", trendDirection: "neutral" },
      { label: "Conversión lead → ingreso", value: "34%", trend: "+2pp vs mes anterior", trendDirection: "up" },
      { label: "Tiempo medio a ingreso", value: "18 días", trend: "−3 días con scoring AI", trendDirection: "down" },
    ],
    blocks: [
      {
        title: "Pipeline por etapa — HubSpot",
        items: [
          { label: "Primer contacto: 19 leads", detail: "Fuentes: web 8, derivación clínica 6, referral familiar 5", severity: "normal", tags: ["Top funnel"] },
          { label: "Evaluación clínica: 14 leads", detail: "Pre-assessment completado. 9 addiction, 3 dual diagnosis, 2 eating disorder", severity: "normal", tags: ["Mid funnel"] },
          { label: "Propuesta enviada: 8 leads", detail: "Revenue potencial: 160k€/mes. Tiempo medio en stage: 5.2 días", severity: "normal", tags: ["Bottom funnel"] },
          { label: "Negociación/cierre: 6 leads", detail: "4 para BCN (3 camas dispo), 2 para MLG (5 camas dispo). 2 con decisión esta semana", severity: "normal", tags: ["Closing"] },
        ],
      },
      {
        title: "Forecast de ocupación — próximas 4 semanas",
        items: [
          { label: "BCN: 84% → 90% proyectado (S+4)", detail: "3 ingresos pipeline + 1 alta programada = +2 camas netas. Capacidad: 42 camas", severity: "normal", tags: ["Barcelona"] },
          { label: "MLG: 78% → 86% proyectado (S+4)", detail: "2 ingresos pipeline + 0 altas = +2 netos. Capacidad: 36 camas", severity: "normal", tags: ["Málaga"] },
        ],
      },
      {
        title: "Alertas comerciales",
        items: [
          { label: "3 leads sin contacto > 5 días — 62k€ en riesgo", detail: "Leads calientes que no han recibido follow-up. HubSpot muestra última actividad hace 6, 7 y 8 días", severity: "high" },
          { label: "Derivación Hospital Clínic: 2 pacientes esta semana", detail: "Canal más rentable (42% conversión). Requiere respuesta < 24h para mantener relación", severity: "medium", tags: ["Derivación"] },
          { label: "Scoring AI: 4 leads con >80% probabilidad de cierre", detail: "Modelo entrenado con 200+ históricos. Recomendación: priorizar llamada directa del director clínico", severity: "normal" },
        ],
      },
    ],
  },

  ocupacion: {
    key: "ocupacion",
    label: "Ocupación y camas",
    persona: "Carlos Mendoza",
    personaRole: "Gestor Operativo",
    icon: "BedDouble",
    description:
      "Gestión de capacidad en tiempo real. Forecast de ocupación basado en pipeline, altas programadas y estacionalidad. Optimización de asignación de habitaciones.",
    kpis: [
      { label: "Camas totales (grupo)", value: "78", trend: "42 BCN + 36 MLG", trendDirection: "neutral" },
      { label: "Ocupación media", value: "81%", trend: "+3.2pp vs semana pasada", trendDirection: "up" },
      { label: "Estancia media", value: "87 días", trend: "Target: 90 días programa completo", trendDirection: "neutral" },
      { label: "Camas disponibles hoy", value: "15", trend: "8 BCN + 7 MLG", trendDirection: "neutral" },
    ],
    blocks: [
      {
        title: "Mapa de ocupación — Barcelona (42 camas)",
        items: [
          { label: "Planta 1 — 14/16 camas (88%)", detail: "2 camas libres: hab. 104 (lista), hab. 109 (limpieza programada hoy)", severity: "normal" },
          { label: "Planta 2 — 12/14 camas (86%)", detail: "2 camas libres: hab. 203, hab. 211. Ambas listas para ingreso", severity: "normal" },
          { label: "Planta 3 — 9/12 camas (75%)", detail: "3 camas libres. 1 alta programada viernes → 4 libres. Pipeline: 2 ingresos la semana que viene", severity: "medium" },
        ],
      },
      {
        title: "Mapa de ocupación — Málaga (36 camas)",
        items: [
          { label: "Ala Norte — 16/18 camas (89%)", detail: "2 camas libres: hab. N-05, hab. N-12. 1 ingreso confirmado jueves", severity: "normal" },
          { label: "Ala Sur — 12/18 camas (67%)", detail: "6 camas libres. Ala en ramp-up post-adquisición. Target: 83% en S+8", severity: "medium" },
        ],
      },
      {
        title: "Movimientos próximos 7 días",
        items: [
          { label: "3 ingresos confirmados", detail: "BCN: 2 (lunes, miércoles) · MLG: 1 (jueves). Todos con pre-assessment completado", severity: "normal", tags: ["Ingresos"] },
          { label: "1 alta programada (viernes, BCN)", detail: "Paciente en fase 4/4. Plan de seguimiento ambulatorio preparado. Familia notificada", severity: "normal", tags: ["Altas"] },
          { label: "1 traslado interno solicitado", detail: "Paciente en BCN planta 3 solicita cambio a habitación individual. Disponibilidad: hab. 205", severity: "normal", tags: ["Traslados"] },
        ],
      },
    ],
  },

  backoffice: {
    key: "backoffice",
    label: "Back Office",
    persona: "Patricia Vidal",
    personaRole: "Operations Manager",
    icon: "Settings",
    description:
      "Automatización de back office con IA. Target: 1 FTE + % manager por clínica. WhatsApp automation, email con agentes, reducción de tareas repetitivas.",
    kpis: [
      { label: "FTEs ahorrados (grupo)", value: "6", trend: "3 por clínica × 2", trendDirection: "up" },
      { label: "Ahorro anual estimado", value: "340k €", trend: "~170k/clínica", trendDirection: "up" },
      { label: "Tareas automatizadas", value: "73%", trend: "+15pp desde implementación", trendDirection: "up" },
      { label: "Tiempo admin/persona", value: "8 hrs/sem", trend: "−42% vs baseline 14 hrs", trendDirection: "down" },
    ],
    blocks: [
      {
        title: "Reducción de FTEs por función",
        items: [
          { label: "Facturación: 2 FTE → 0.4 FTE (−80%)", detail: "Sage integrado + reconciliación automática. Solo revisión y excepciones manuales", severity: "normal", tags: ["−1.6 FTE"] },
          { label: "Admisiones: 2 FTE → 1 FTE (−50%)", detail: "Pre-assessment digital, documentación auto-generada, firma electrónica", severity: "normal", tags: ["−1 FTE"] },
          { label: "Enfermería admin: 2 FTE → 1.5 FTE (−25%)", detail: "Notas clínicas por voz, medicación digital, rondas con checklist automático", severity: "normal", tags: ["−0.5 FTE"] },
          { label: "RRHH: 1 FTE → 0.5 FTE (−50%)", detail: "Turnos auto-generados, onboarding digital, compliance tracking automático", severity: "normal", tags: ["−0.5 FTE"] },
          { label: "Recepción: 1 FTE → 0.6 FTE (−40%)", detail: "Check-in digital, WhatsApp automation para familias, agenda integrada", severity: "normal", tags: ["−0.4 FTE"] },
        ],
      },
      {
        title: "Automatizaciones activas",
        items: [
          { label: "WhatsApp: 124 mensajes/semana automatizados", detail: "Actualizaciones a familias, recordatorios de visita, confirmaciones de cita. 98% entregados", severity: "normal" },
          { label: "Email: 67 emails/semana con agentes AI", detail: "Respuestas a consultas, envío de informes, seguimiento post-alta. Tiempo respuesta: <2 min", severity: "normal" },
          { label: "Informes auto-generados: 6 tipos semanales", detail: "Clínico, operativo, financiero, grupo, VCP, adherencia. Sin intervención humana", severity: "normal" },
        ],
      },
      {
        title: "Alertas operativas",
        items: [
          { label: "Turno nocturno MLG sin cobertura completa (sábado)", detail: "1 enfermero de baja. Sistema sugiere: reasignar auxiliar de planta norte + alerta supervisora", severity: "high" },
          { label: "Certificación primeros auxilios: 3 empleados vencen en 30 días", detail: "Notificación automática enviada. 1 ya agendó renovación", severity: "medium" },
        ],
      },
    ],
  },

  "gestion-multiclinica": {
    key: "gestion-multiclinica",
    label: "Gestión multi-clínica",
    persona: "Enrique Criado",
    personaRole: "Director de Grupo",
    icon: "Building2",
    description:
      "Vista consolidada del grupo. Comparativa entre Barcelona y Málaga en todos los KPIs. ROI de ResiOS, VCP tracking y decisiones estratégicas basadas en datos.",
    kpis: [
      { label: "Clínicas activas", value: "2", trend: "BCN operando + MLG onboarding", trendDirection: "neutral" },
      { label: "Revenue grupo", value: "680k €/mes", trend: "+8.4% vs plan", trendDirection: "up" },
      { label: "EBITDA consolidado", value: "18.7%", trend: "BCN 21.3% · MLG 14.8%", trendDirection: "up" },
      { label: "ROI ResiOS (anualizado)", value: "4.2x", trend: "Break-even día 21", trendDirection: "up" },
    ],
    blocks: [
      {
        title: "Comparativa clínicas — KPIs clave",
        items: [
          { label: "Ocupación: BCN 84% vs MLG 78%", detail: "BCN estable, MLG en ramp-up. Target MLG: 83% en S+8 basado en pipeline actual", severity: "normal" },
          { label: "Revenue/cama: BCN 10k vs MLG 7.2k", detail: "Diferencia por mix de servicio (BCN más privado puro, MLG más derivación pública)", severity: "medium" },
          { label: "Conversión: BCN 38% vs MLG 29%", detail: "MLG aún estableciendo canales de derivación locales. Hospital Regional Málaga en pipeline", severity: "medium" },
          { label: "Satisfacción: BCN +22 NPS vs MLG +14 NPS", detail: "MLG en primeros 60 días. Benchmark sector: +8 NPS", severity: "normal" },
        ],
      },
      {
        title: "Value Creation Plan — tracking",
        items: [
          { label: "EBITDA target 12 meses: 24%", detail: "Actual: 18.7%. Trayectoria on-track. Palancas: ocupación (+5pp) + reducción costes personal (−12%)", severity: "normal" },
          { label: "Valoración implícita: 12x EBITDA → objetivo 36M€", detail: "Inversión: 18M. Multiple arbitrage target: compra a 8x, venta a 12x en 3 años", severity: "normal" },
          { label: "Próxima adquisición: pipeline de 4 clínicas", detail: "2 en Andalucía, 1 en Valencia, 1 en Madrid. Ticket medio: 7-9M€. Due diligence en 2", severity: "normal", tags: ["Expansión"] },
        ],
      },
      {
        title: "Impacto ResiOS en grupo",
        items: [
          { label: "Ahorro operativo: 340k€/año", detail: "6 FTEs ahorrados (3/clínica). Payback ResiOS: < 3 meses. Scaling: cada nueva clínica suma ~170k/año", severity: "normal" },
          { label: "Revenue incremental: +148k€/mes EBITDA", detail: "Ocupación lift (+9pp en 9 meses) + aceleración cobros (−9 días DSO) + eficiencia operativa", severity: "normal" },
          { label: "IP y escalabilidad", detail: "Plantilla ResiOS replicable a cada nueva adquisición. Setup de nueva clínica: 14 días vs 4-6 meses tradicional", severity: "normal", tags: ["Escala"] },
        ],
      },
    ],
  },
};

// ─── Chart data ──────────────────────────────────────────────────

export const weeklyForecast = [
  { week: "S-4", real: 148, forecast: null },
  { week: "S-3", real: 155, forecast: null },
  { week: "S-2", real: 160, forecast: null },
  { week: "S-1", real: 165, forecast: null },
  { week: "Actual", real: 168, forecast: 168 },
  { week: "S+1", real: null, forecast: 172 },
  { week: "S+2", real: null, forecast: 168 },
  { week: "S+3", real: null, forecast: 178 },
  { week: "S+4", real: null, forecast: 170 },
];

export const occupancyForecast = [
  { week: "S-4", bcn: 79, mlg: 72 },
  { week: "S-3", bcn: 81, mlg: 74 },
  { week: "S-2", bcn: 82, mlg: 76 },
  { week: "S-1", bcn: 83, mlg: 77 },
  { week: "Actual", bcn: 84, mlg: 78 },
  { week: "S+1", bcn: 86, mlg: 80 },
  { week: "S+2", bcn: 87, mlg: 82 },
  { week: "S+3", bcn: 89, mlg: 84 },
  { week: "S+4", bcn: 90, mlg: 86 },
];

export const fteComparison = [
  { dept: "Facturación", before: 2, after: 0.4 },
  { dept: "Admisiones", before: 2, after: 1 },
  { dept: "Enf. Admin", before: 2, after: 1.5 },
  { dept: "RRHH", before: 1, after: 0.5 },
  { dept: "Recepción", before: 1, after: 0.6 },
  { dept: "Reporting", before: 1, after: 0.2 },
];

export const clinicComparison = [
  { metric: "Ocupación %", bcn: 84, mlg: 78 },
  { metric: "Rev/cama (k€)", bcn: 10, mlg: 7.2 },
  { metric: "Conversión %", bcn: 38, mlg: 29 },
  { metric: "EBITDA %", bcn: 21.3, mlg: 14.8 },
  { metric: "NPS", bcn: 22, mlg: 14 },
];

// ─── Copilot data ────────────────────────────────────────────────

export interface CopilotData {
  greeting: string;
  suggestions: CopilotSuggestion[];
  suggestedQuestions: string[];
  qa: CopilotQA[];
}

export const copilotByRole: Record<RoleKey, CopilotData> = {
  finanzas: {
    greeting: "Hola Ana, soy tu copiloto. Tengo el contexto de hoy en CITA. ¿En qué te ayudo?",
    suggestions: [
      { text: "Llamar al titular del paciente #4790. Vence hoy: 640€. 2 recordatorios automáticos sin respuesta. Si no se resuelve hoy, escala a Enrique mañana.", type: "alert", actions: [{ label: "Marcar llamada hecha", variant: "primary" }, { label: "Ver historial pagos", variant: "secondary" }] },
      { text: "Asignar cobro 4.800€ a Familia Ramírez. 97% coincidencia: cobro recibido sin factura asignada. Confirmar y cierra el ciclo lead-cobro automáticamente.", type: "action", actions: [{ label: "Confirmar asignación", variant: "primary" }, { label: "Revisar manualmente", variant: "secondary" }] },
      { text: "Margen MLG por debajo de target: 14.8% vs 18% objetivo. Coste de personal temporal inflando. Normaliza en S+3.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuál es el cash flow proyectado a 3 meses?",
      "¿Qué clínica tiene mejor margen por cama?",
      "¿Cómo va la reconciliación bancaria de este mes?",
    ],
    qa: [
      { question: "¿Cuál es el cash flow proyectado a 3 meses?", answer: "Cash flow proyectado: M+1: +82k€, M+2: +91k€, M+3: +97k€. Tendencia positiva por aumento de ocupación MLG y reducción DSO. Riesgo: 42k€ en facturas vencidas si no se cobran." },
      { question: "¿Qué clínica tiene mejor margen por cama?", answer: "BCN: 10k€/cama/mes con EBITDA 21.3%. MLG: 7.2k€/cama/mes con EBITDA 14.8%. La diferencia se explica por mix de clientes (BCN más privado puro) y costes de onboarding en MLG que normalizan en S+8." },
    ],
  },
  crecimiento: {
    greeting: "Hola Marta, soy tu copiloto. Tienes 2 decisiones de cierre esta semana y 3 leads que necesitan atención urgente.",
    suggestions: [
      { text: "Lead Familia García lleva 6 días sin contacto — 20k€/mes en riesgo. Scoring AI: 87% probabilidad de cierre si contactas hoy.", type: "alert", actions: [{ label: "Agendar llamada", variant: "primary" }, { label: "Ver ficha en HubSpot", variant: "secondary" }] },
      { text: "Derivación Hospital Clínic: 2 pacientes nuevos. Canal con 42% conversión. Respuesta necesaria antes de mañana para mantener el canal activo.", type: "action", actions: [{ label: "Preparar propuesta", variant: "primary" }, { label: "Ver historial derivaciones", variant: "secondary" }] },
      { text: "Scoring AI: 4 leads con >80% probabilidad de cierre. Si cierras 3 de 6 en negociación, BCN llega a 90% ocupación en S+4.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cómo va el pipeline por canal de adquisición?",
      "¿Cuándo llegaremos al 90% de ocupación en BCN?",
      "¿Qué leads debo priorizar hoy?",
    ],
    qa: [
      { question: "¿Cuándo llegaremos al 90% de ocupación en BCN?", answer: "Con el pipeline actual (28 leads, 34% conversión) y 1 alta programada, proyectamos 90% en BCN para S+4. Requiere cerrar al menos 3 de los 6 leads en etapa de negociación." },
      { question: "¿Qué leads debo priorizar hoy?", answer: "1) Familia García — negociación final, decisión esta semana, 20k€/mes. 2) Derivación Clínic — 2 pacientes, canal con 42% conversión, respuesta urgente. 3) Lead web María L. — scoring 87%, sin contacto hace 6 días." },
    ],
  },
  ocupacion: {
    greeting: "Hola Carlos, soy tu copiloto. 15 camas disponibles hoy. 3 ingresos confirmados esta semana, 1 alta el viernes.",
    suggestions: [
      { text: "Ingreso confirmado lunes (BCN): paciente pre-asignado a hab. 203 (Planta 2). Documentación completa, dietas especiales: sin gluten. Cocina ya notificada.", type: "action", actions: [{ label: "Confirmar asignación", variant: "primary" }, { label: "Cambiar habitación", variant: "secondary" }] },
      { text: "Planta 3 BCN al 75% — 3 camas libres + 1 alta viernes = 4 libres. Pipeline tiene 2 candidatos. Sugerencia: priorizar ingresos en Planta 3.", type: "alert", actions: [{ label: "Ver candidatos pipeline", variant: "primary" }] },
      { text: "MLG Ala Sur en ramp-up: 67% ocupación. Recomendación: concentrar ingresos en Ala Norte (89%) para reducir costes operativos.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuántas camas se liberan esta semana?",
      "¿Qué habitaciones necesitan mantenimiento?",
      "¿Cómo optimizar asignación de camas para maximizar ocupación?",
    ],
    qa: [
      { question: "¿Cuántas camas se liberan esta semana?", answer: "1 alta programada (viernes, BCN planta 3). Cama lista para nuevo ingreso el lunes siguiente tras limpieza profunda (4h). Pipeline tiene 2 candidatos para esa plaza." },
      { question: "¿Cómo optimizar asignación de camas para maximizar ocupación?", answer: "Recomendación: concentrar ingresos MLG en Ala Norte primero (89% vs 67% Ala Sur). Reduce costes operativos de tener las dos alas abiertas. Una vez Norte al 95%, abrir Sur progresivamente." },
    ],
  },
  backoffice: {
    greeting: "Hola Patricia, soy tu copiloto. 73% de tareas automatizadas. Tienes 1 alerta de cobertura urgente.",
    suggestions: [
      { text: "Turno nocturno MLG sin cobertura completa (sábado). 1 enfermero de baja. Sugerencia: reasignar auxiliar de Ala Norte + notificar supervisora.", type: "alert", actions: [{ label: "Aplicar sugerencia", variant: "primary" }, { label: "Ver turnos completos", variant: "secondary" }] },
      { text: "3 certificaciones de primeros auxilios vencen en 30 días. 1 ya agendó renovación. Enviar recordatorio a los 2 restantes.", type: "alert", actions: [{ label: "Enviar recordatorio", variant: "primary" }] },
      { text: "Oportunidad: admisiones aún tiene 2 procesos manuales. Automatizarlos reduce 0.5 FTE adicional por clínica.", type: "action" },
    ],
    suggestedQuestions: [
      "¿Cuánto estamos ahorrando en FTEs este trimestre?",
      "¿Qué procesos tienen más potencial de automatización?",
      "¿Cómo va el target de 1 FTE/clínica?",
    ],
    qa: [
      { question: "¿Cuánto estamos ahorrando en FTEs este trimestre?", answer: "Ahorro Q actual: 85k€ (6 FTEs × ~14.2k€/FTE/trimestre). Anualizado: 340k€. Desglose: Facturación −80%, Admisiones −50%, Enf. Admin −25%, RRHH −50%, Recepción −40%, Reporting −80%." },
      { question: "¿Cómo va el target de 1 FTE/clínica?", answer: "Target original de Enrique: 1 FTE + % manager por clínica en back office. Actual: ~3 FTE equivalentes por clínica (de ~6 originales). Para llegar a 1-2 FTE total necesitamos: completar integración Sage (S+4), automatizar admisiones digital completo (S+6), y WhatsApp agent para 100% de comunicación familiar (S+8)." },
    ],
  },
  "gestion-multiclinica": {
    greeting: "Buenos días Enrique, soy tu copiloto. El grupo opera a 81% ocupación y 680k€ revenue. Tienes 2 temas que requieren tu atención.",
    suggestions: [
      { text: "MLG Ala Sur al 67% — por debajo de plan. El equipo de crecimiento propone concentrar ingresos en Ala Norte primero. ¿Apruebas el cambio de estrategia?", type: "alert", actions: [{ label: "Aprobar cambio", variant: "primary" }, { label: "Pedir más datos", variant: "secondary" }] },
      { text: "Due diligence activa en 2 clínicas (Andalucía). Informe preliminar listo para revisión. Ticket medio: 7-9M€.", type: "action", actions: [{ label: "Ver informe", variant: "primary" }, { label: "Agendar call con equipo", variant: "secondary" }] },
      { text: "ROI ResiOS 4.2x anualizado — supera proyección original de 3x. Cada nueva clínica suma ~170k€/año en ahorro operativo.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuándo alcanza MLG el break-even operativo?",
      "¿Cómo escala el ahorro con cada nueva clínica?",
      "¿Qué clínica del pipeline de adquisiciones es más atractiva?",
    ],
    qa: [
      { question: "¿Cuándo alcanza MLG el break-even operativo?", answer: "Con la trayectoria actual (ocupación +2pp/semana, costes de onboarding bajando), MLG alcanza break-even operativo en S+6 (EBITDA >0). Target de EBITDA 18% en S+12. Palancas: ocupación (de 78% a 88%) + normalización de costes de personal." },
      { question: "¿Cómo escala el ahorro con cada nueva clínica?", answer: "Cada nueva clínica que entra al grupo aporta: ~170k€/año ahorro en FTEs, setup en 14 días (vs 4-6 meses), modelo de datos replicable. Con 5 clínicas: ~850k€/año en ahorros operativos. El software es el mismo, solo cambia la configuración del tenant." },
    ],
  },
};

// ─── Sidebar navigation ─────────────────────────────────────────

export const roleNavItems: { key: RoleKey; label: string; icon: string }[] = [
  { key: "finanzas", label: "Finanzas", icon: "DollarSign" },
  { key: "crecimiento", label: "Crecimiento", icon: "TrendingUp" },
  { key: "ocupacion", label: "Ocupación y camas", icon: "BedDouble" },
  { key: "backoffice", label: "Back Office", icon: "Settings" },
  { key: "gestion-multiclinica", label: "Gestión multi-clínica", icon: "Building2" },
];
