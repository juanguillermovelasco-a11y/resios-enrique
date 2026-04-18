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
    title: "Entrevistas con roles",
    subtitle: "Validar qué necesita cada persona",
    duration: "2 semanas",
    week: "S1–S2",
    description:
      "Sentarse con los 5 roles clave (finanzas, crecimiento, ocupación, back office, dirección) y validar: ¿qué datos ven hoy? ¿en qué herramientas? ¿qué les falta? ¿qué decisiones toman con esos datos? Esto define qué pantallas y datos son reales vs lo que asumimos en la demo.",
    deliverables: [
      "5 entrevistas realizadas: Ana (finanzas), Marta (crecimiento), Carlos (operaciones), Patricia (back office), Enrique (dirección)",
      "Documento de requisitos validado por cada rol: qué ven, qué necesitan, qué sobra",
      "Mapa de fuentes de datos reales: qué vive en Sage, qué en HubSpot, qué en Excel, qué en la cabeza de alguien",
    ],
    icon: "Users",
    status: "upcoming",
  },
  {
    number: "02",
    title: "Accesos y credenciales",
    subtitle: "Conseguir las llaves de los sistemas",
    duration: "1 semana",
    week: "S3",
    description:
      "Necesitamos acceso técnico (API keys, cuentas de servicio) a los sistemas que ya usa CITA. Esto no es instalar nada nuevo — es conectar lo que ya existe. HubSpot suele ser directo. Sage depende de la versión y puede requerir hablar con su soporte técnico o el partner que lo instaló.",
    deliverables: [
      "API key de HubSpot con permisos de lectura de contactos, deals y pipeline",
      "Acceso a Sage: identificar versión exacta (Sage 200, Sage X3, Sage 50) y si tiene API REST disponible",
      "Si Sage no tiene API directa: plan B definido (exportación programada CSV, middleware, o conector de terceros)",
    ],
    icon: "Rocket",
    status: "upcoming",
  },
  {
    number: "03",
    title: "Base de datos propia",
    subtitle: "Donde vive todo unificado",
    duration: "2 semanas",
    week: "S3–S4",
    description:
      "Creamos la base de datos central de ResiOS donde se unifican los datos de todas las fuentes. Tablas de pacientes, camas, facturas, leads, empleados, etc. Cada clínica es un tenant separado. Usamos Supabase (PostgreSQL) — es gratuito para empezar y escala bien. Coste estimado: 25-50€/mes.",
    deliverables: [
      "Esquema de base de datos diseñado: pacientes, habitaciones, facturas, leads, empleados, clínicas",
      "Base de datos Supabase configurada con separación por clínica (multi-tenant)",
      "APIs básicas funcionando: leer pacientes, leer camas, leer facturas",
    ],
    icon: "Database",
    status: "upcoming",
  },
  {
    number: "04",
    title: "Conectar HubSpot",
    subtitle: "Pipeline y leads en tiempo real",
    duration: "2 semanas",
    week: "S5–S6",
    description:
      "Primera integración real. Conectamos HubSpot para que los datos de leads, pipeline y conversiones se sincronicen con ResiOS. Marta (crecimiento) es la primera en ver datos reales en su pantalla en vez de datos de demo. Sincronización cada 15 minutos.",
    deliverables: [
      "Rol de Crecimiento funcionando con datos reales de HubSpot: leads, etapas, valores, fechas",
      "Sincronización bidireccional: lo que se actualiza en HubSpot aparece en ResiOS y viceversa",
      "Validación con Marta: ¿los datos coinciden? ¿falta algo? ¿sobra algo?",
    ],
    icon: "TrendingUp",
    status: "upcoming",
  },
  {
    number: "05",
    title: "Conectar Sage",
    subtitle: "Facturas, cobros y nómina reales",
    duration: "2–3 semanas",
    week: "S7–S9",
    description:
      "La integración más compleja. Sage tiene muchas versiones y no todas tienen API moderna. Dependiendo de lo que encontremos en S3, puede ser conexión directa (API REST), exportación programada, o un middleware. Los datos de finanzas y back office dependen de esto: facturas, cobros, pagos a proveedores, nómina.",
    deliverables: [
      "Facturas y cobros de Sage visibles en los roles de Finanzas y Back Office con datos reales",
      "Nómina por departamento sincronizada — coste real de personal por clínica",
      "Conciliación: verificar que los números en ResiOS coinciden exactamente con Sage (al céntimo)",
    ],
    icon: "Link",
    status: "upcoming",
  },
  {
    number: "06",
    title: "Login y permisos",
    subtitle: "Cada persona ve solo lo suyo",
    duration: "1 semana",
    week: "S9–S10",
    description:
      "Hasta ahora cualquiera puede ver todo. Aquí montamos autenticación (login con email/contraseña o Google) y permisos por rol. Patricia solo ve back office, Marta solo ve crecimiento, Enrique ve todo. Esto es crítico antes de meter datos reales de pacientes — sin esto no se puede usar en producción.",
    deliverables: [
      "Login funcional con email o Google Workspace de CITA",
      "5 roles configurados con permisos: cada persona ve solo sus pantallas y datos",
      "Revisión de seguridad: datos de pacientes solo accesibles por roles autorizados",
    ],
    icon: "GitBranch",
    status: "upcoming",
  },
  {
    number: "07",
    title: "Copiloto con IA",
    subtitle: "Preguntas y respuestas con datos reales",
    duration: "2 semanas",
    week: "S10–S11",
    description:
      "El copiloto que hoy responde con texto fijo pasa a responder con datos reales. Cuando Ana pregunta '¿cuánto tenemos pendiente de cobro?' la IA consulta Sage y responde con el número real. Usamos la API de Claude (Anthropic). Coste estimado: 100-300€/mes dependiendo del uso.",
    deliverables: [
      "Copiloto respondiendo preguntas con datos reales de la base de datos para los 5 roles",
      "Sugerencias y alertas generadas dinámicamente (no texto fijo): cobros vencidos, baja ocupación, leads sin contactar",
      "Cuenta de API de Anthropic (Claude) activa — presupuesto mensual definido y monitorizado",
    ],
    icon: "Sparkles",
    status: "upcoming",
  },
  {
    number: "08",
    title: "Revisión RGPD y compliance",
    subtitle: "Datos sanitarios requieren cuidado extra",
    duration: "1 semana",
    week: "S12",
    description:
      "Manejamos datos de pacientes con adicciones — categoría especial bajo RGPD. Aquí entra un perfil técnico-legal (dev senior o consultor) que revisa: dónde se almacenan los datos, quién tiene acceso, cifrado, backups, política de retención, y consentimiento del paciente. No es opcional — es requisito legal.",
    deliverables: [
      "Auditoría técnica de seguridad: cifrado en tránsito y reposo, backups, acceso controlado",
      "Documento de compliance RGPD: base legal del tratamiento, política de retención, consentimientos",
      "Plan de respuesta ante incidentes: qué hacer si hay una brecha de datos (obligatorio por ley)",
    ],
    icon: "MessageSquare",
    status: "upcoming",
  },
  {
    number: "09",
    title: "Lanzamiento piloto CITA",
    subtitle: "Los 5 roles operando con datos reales",
    duration: "2 semanas",
    week: "S13–S14",
    description:
      "Piloto real con los 5 usuarios. Cada persona usa ResiOS en su día a día durante 2 semanas. Recogemos feedback, corregimos problemas, y decidimos: ¿funciona? ¿qué falta? ¿ampliamos a más roles? ¿replicamos en la segunda clínica? El objetivo es que al terminar, Enrique tenga datos consolidados reales del grupo en su pantalla.",
    deliverables: [
      "5 usuarios usando ResiOS diariamente con datos reales durante 2 semanas",
      "Lista de mejoras priorizada basada en uso real (no suposiciones)",
      "Decisión GO/NO-GO para ampliar a más roles y replicar en segunda clínica",
    ],
    icon: "BarChart3",
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
      "Control financiero del grupo. Ingresos, márgenes por clínica, cash flow, cobros y gestión de tesorería. Reporting mensual con Sage.",
    kpis: [
      { label: "Ingresos mes (grupo)", value: "680k €", trend: "+8.4% vs plan", trendDirection: "up" },
      { label: "Margen EBITDA", value: "18.7%", trend: "+2.1pp vs Q anterior", trendDirection: "up" },
      { label: "DSO (días cobro)", value: "34 días", trend: "Target: <30 días", trendDirection: "neutral" },
      { label: "Cash runway", value: "14 meses", trend: "Estable", trendDirection: "neutral" },
    ],
    blocks: [
      {
        title: "Forecast semanal — próximas 4 semanas",
        items: [
          { label: "S+1: 172k € proyectados", detail: "Base: 165k real S-1 + 3 ingresos confirmados por crecimiento", severity: "normal" },
          { label: "S+2: 168k € proyectados", detail: "2 altas programadas reducen ingreso recurrente, 1 ingreso nuevo", severity: "medium" },
          { label: "S+3: 178k € proyectados", detail: "4 leads en fase avanzada en HubSpot, conversión esperada 34%", severity: "normal" },
          { label: "S+4: 170k € proyectados", detail: "Baseline estable, sin movimientos grandes conocidos", severity: "normal" },
        ],
      },
      {
        title: "Márgenes por clínica",
        items: [
          { label: "BCN Diagonal: 21.3% EBITDA", detail: "420k ingresos · 331k costes · margen mejorando +1.2pp vs trimestre anterior", severity: "normal", tags: ["Barcelona"] },
          { label: "MLG Costa del Sol: 14.8% EBITDA", detail: "260k ingresos · 221k costes · en ramp-up, target 18% cuando ocupación suba a 85%", severity: "medium", tags: ["Málaga"] },
        ],
      },
      {
        title: "Alertas financieras",
        items: [
          { label: "3 facturas vencidas > 30 días — 42k €", detail: "Familias Rodríguez (18k€, 36d), Martín (12.5k€, 33d) y Sánchez (11.5k€, 30d). 2º recordatorio enviado", severity: "high" },
          { label: "Coste personal MLG 12% sobre budget", detail: "Refuerzo temporal por baja de enfermero. Normaliza en 3 semanas cuando se reincorpore", severity: "medium" },
          { label: "Reconciliación bancaria BBVA pendiente", detail: "12 de 198 movimientos de marzo sin conciliar. Mayoritariamente transferencias con concepto incorrecto. Requiere revisión manual", severity: "normal" },
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
      "Pipeline comercial con HubSpot. Gestión de leads, canales de derivación, conversión a ingreso y forecast de ocupación basado en pipeline activo.",
    kpis: [
      { label: "Pipeline activo", value: "1.2M €", trend: "+12% vs mes anterior", trendDirection: "up" },
      { label: "Leads en HubSpot", value: "47", trend: "28 calientes, 19 templados", trendDirection: "neutral" },
      { label: "Conversión lead → ingreso", value: "34%", trend: "+2pp vs mes anterior", trendDirection: "up" },
      { label: "Tiempo medio a ingreso", value: "18 días", trend: "−3 días vs trimestre anterior", trendDirection: "down" },
    ],
    blocks: [
      {
        title: "Pipeline por etapa — HubSpot",
        items: [
          { label: "Primer contacto: 19 leads", detail: "Fuentes: web 8, derivación clínica 6, referral familiar 5", severity: "normal", tags: ["Top funnel"] },
          { label: "Evaluación clínica: 14 leads", detail: "Pre-assessment completado. 9 adicción, 3 diagnóstico dual, 2 TCA", severity: "normal", tags: ["Mid funnel"] },
          { label: "Propuesta enviada: 8 leads", detail: "Revenue potencial: 160k€/mes. Tiempo medio en stage: 5.2 días", severity: "normal", tags: ["Bottom funnel"] },
          { label: "Negociación/cierre: 6 leads", detail: "4 para BCN (3 camas disponibles), 2 para MLG (5 camas disponibles). 2 con decisión esta semana", severity: "normal", tags: ["Closing"] },
        ],
      },
      {
        title: "Forecast de ocupación — próximas 4 semanas",
        items: [
          { label: "BCN: 84% → 90% proyectado (S+4)", detail: "3 ingresos probables del pipeline + 1 alta programada = +2 camas netas. Capacidad: 42 camas", severity: "normal", tags: ["Barcelona"] },
          { label: "MLG: 78% → 86% proyectado (S+4)", detail: "2 ingresos probables del pipeline + 0 altas = +2 netos. Capacidad: 36 camas", severity: "normal", tags: ["Málaga"] },
        ],
      },
      {
        title: "Alertas comerciales",
        items: [
          { label: "3 leads sin contacto > 5 días — 62k€ en riesgo", detail: "Leads calientes sin follow-up. HubSpot muestra última actividad hace 6, 7 y 8 días respectivamente", severity: "high" },
          { label: "Derivación Hospital Clínic: 2 pacientes esta semana", detail: "Canal con mayor conversión (42%). Requiere respuesta < 24h para mantener la relación activa", severity: "medium", tags: ["Derivación"] },
          { label: "4 leads con alta probabilidad de cierre", detail: "Basado en perfil, tiempo en pipeline y engagement. Recomendación: priorizar llamada directa del director clínico", severity: "normal" },
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
      "Gestión de capacidad del grupo. Mapa de camas, movimientos (ingresos/altas/traslados), forecast de ocupación y distribución por fase terapéutica.",
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
    personaRole: "Controller / Administración",
    icon: "Settings",
    description:
      "Controlling operativo del grupo: facturación, cobros, pagos a proveedores, nómina y gestión del equipo. Integración con Sage para contabilidad.",
    kpis: [
      { label: "Facturas emitidas (mes)", value: "62", trend: "+8% vs mes anterior", trendDirection: "up" },
      { label: "Tasa de cobro", value: "87%", trend: "3 facturas vencidas (+30d)", trendDirection: "down" },
      { label: "Coste nómina/mes", value: "148k €", trend: "42% de ingresos", trendDirection: "neutral" },
      { label: "FTEs grupo", value: "47", trend: "BCN 28 + MLG 19", trendDirection: "neutral" },
    ],
    blocks: [
      {
        title: "Facturación del mes",
        items: [
          { label: "42k€ facturado pendiente de cobro", detail: "12 facturas emitidas en abril sin cobrar. 3 vencidas >30 días (30.5k€). Familia Rodríguez (18k€) acumula 36 días de retraso.", severity: "high", tags: ["Cobros", "Sage"] },
          { label: "62 facturas emitidas en abril — 52 cobradas", detail: "Ratio de cobro 83.9% (target 90%). Pendiente principal: 3 familias con pagos vencidos. Se enviaron 2 recordatorios automáticos.", severity: "medium", tags: ["Facturación"] },
          { label: "Nota de crédito NC-2026-041 por ajuste de estancia", detail: "Paciente Álvarez — alta adelantada 4 días. Nota de crédito de 640€ emitida. Pendiente aprobación dirección.", severity: "normal", tags: ["Sage"] },
        ],
      },
      {
        title: "Pagos a proveedores",
        items: [
          { label: "38k€ en pagos programados próxima semana", detail: "Farmacia (12k€ vence lun), alimentación Aramark (8.5k€ vence mié), limpieza ISS (6k€), seguros (4.5k€), suministros médicos (7k€).", severity: "normal", tags: ["Tesorería"] },
          { label: "Pago a Aramark con 5 días de retraso", detail: "Factura de alimentación de marzo (8.2k€) sin procesar. Proveedor contactó ayer. Requiere autorización.", severity: "high", tags: ["Urgente"] },
          { label: "Revisión contrato Clece limpieza MLG — renovación mayo", detail: "Contrato actual 6k€/mes. Presupuesto alternativo ISS a 5.2k€/mes (−13%). Decisión antes del 30 abril.", severity: "medium", tags: ["Proveedores"] },
        ],
      },
      {
        title: "Nómina y equipo",
        items: [
          { label: "Nóminas abril procesadas — pendiente cierre Sage", detail: "Total bruto grupo: 148.3k€ (BCN 92k€ + MLG 56.3k€). Incluye 2 extras por festivos y 1 liquidación.", severity: "normal", tags: ["Nómina"] },
          { label: "1 baja médica activa en BCN + 1 vacante en MLG", detail: "Baja: enfermero Pedro M. (estimada 3 semanas). Vacante: auxiliar de planta MLG — 4 candidatos en proceso.", severity: "medium", tags: ["RRHH"] },
          { label: "Coste personal / ingreso: 42% (target 40%)", detail: "BCN: 39% (en target). MLG: 48% (por encima — baja ocupación diluye ratio). Mejora esperada cuando MLG suba a 85%.", severity: "medium", tags: ["Controlling"] },
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
      "Vista consolidada del grupo. Comparativa entre Barcelona y Málaga, P&L consolidado, pipeline de adquisiciones y seguimiento del plan de valor.",
    kpis: [
      { label: "Clínicas activas", value: "2", trend: "BCN operando + MLG ramp-up", trendDirection: "neutral" },
      { label: "Revenue grupo", value: "680k €/mes", trend: "+8.4% vs plan", trendDirection: "up" },
      { label: "EBITDA consolidado", value: "18.7%", trend: "BCN 21.3% · MLG 14.8%", trendDirection: "up" },
      { label: "Pacientes activos", value: "63", trend: "BCN 35 + MLG 28", trendDirection: "neutral" },
    ],
    blocks: [
      {
        title: "Comparativa clínicas — KPIs clave",
        items: [
          { label: "Ocupación: BCN 84% vs MLG 78%", detail: "BCN estable. MLG en ramp-up, target 83% en 8 semanas basado en pipeline actual", severity: "normal" },
          { label: "Revenue/cama: BCN 10k€ vs MLG 7.2k€", detail: "Diferencia por mix de pacientes: BCN más privado puro, MLG con más derivación pública a menor tarifa", severity: "medium" },
          { label: "Conversión: BCN 38% vs MLG 29%", detail: "MLG estableciendo canales de derivación locales. Hospital Regional de Málaga pendiente de acuerdo", severity: "medium" },
          { label: "NPS: BCN +22 vs MLG +14", detail: "MLG lleva 60 días operando. Benchmark sector: +8 NPS. Ambas por encima", severity: "normal" },
        ],
      },
      {
        title: "Plan de valor — seguimiento",
        items: [
          { label: "EBITDA target a 12 meses: 24%", detail: "Actual: 18.7%. Trayectoria on-track. Palancas: subir ocupación MLG (+5pp) + normalizar costes personal", severity: "normal" },
          { label: "Valoración implícita grupo: objetivo 36M€", detail: "Inversión acumulada: 18M€. Múltiplo target: 12x EBITDA en 3 años. Requiere EBITDA > 3M€/año", severity: "normal" },
          { label: "Pipeline adquisiciones: 4 clínicas en análisis", detail: "2 en Andalucía (due diligence activa), 1 en Valencia, 1 en Madrid. Ticket medio: 7-9M€", severity: "normal", tags: ["Expansión"] },
        ],
      },
      {
        title: "Prioridades operativas",
        items: [
          { label: "MLG: subir ocupación Ala Sur (67% actual)", detail: "Ala Norte al 89%. Decisión pendiente: concentrar ingresos en Norte o abrir las dos alas. Impacto en costes operativos", severity: "high" },
          { label: "Cobros: 42k€ vencidos > 30 días", detail: "3 familias con impago. Requiere escalación a gestión de cobros si no se resuelve esta semana", severity: "high" },
          { label: "Vacante auxiliar MLG: 4 candidatos en proceso", detail: "Selección prevista para antes del 25 de abril. Baja enfermero BCN cubierta con refuerzo temporal", severity: "medium", tags: ["RRHH"] },
        ],
      },
    ],
  },
};

// ─── Subsection data per role ────────────────────────────────────

// OCUPACIÓN: Bed heat map
export type BedStatus = "occupied" | "available" | "maintenance" | "reserved";
export interface Bed {
  id: string;
  status: BedStatus;
  patient?: string;
  daysSinceAdmission?: number;
  phase?: string;
}
export interface Floor {
  name: string;
  clinic: string;
  beds: Bed[];
}

export const bedMap: Floor[] = [
  {
    name: "Planta 1", clinic: "BCN",
    beds: [
      { id: "101", status: "occupied", patient: "García M.", daysSinceAdmission: 34, phase: "Fase 2" },
      { id: "102", status: "occupied", patient: "López R.", daysSinceAdmission: 67, phase: "Fase 3" },
      { id: "103", status: "occupied", patient: "Fernández J.", daysSinceAdmission: 12, phase: "Fase 1" },
      { id: "104", status: "available" },
      { id: "105", status: "occupied", patient: "Martín P.", daysSinceAdmission: 45, phase: "Fase 2" },
      { id: "106", status: "occupied", patient: "Ruiz A.", daysSinceAdmission: 78, phase: "Fase 4" },
      { id: "107", status: "occupied", patient: "Sánchez L.", daysSinceAdmission: 23, phase: "Fase 1" },
      { id: "108", status: "occupied", patient: "Torres C.", daysSinceAdmission: 56, phase: "Fase 3" },
      { id: "109", status: "maintenance" },
      { id: "110", status: "occupied", patient: "Navarro E.", daysSinceAdmission: 89, phase: "Fase 4" },
      { id: "111", status: "occupied", patient: "Domínguez S.", daysSinceAdmission: 41, phase: "Fase 2" },
      { id: "112", status: "occupied", patient: "Moreno V.", daysSinceAdmission: 15, phase: "Fase 1" },
      { id: "113", status: "occupied", patient: "Jiménez F.", daysSinceAdmission: 62, phase: "Fase 3" },
      { id: "114", status: "occupied", patient: "Alonso D.", daysSinceAdmission: 30, phase: "Fase 2" },
      { id: "115", status: "reserved" },
      { id: "116", status: "occupied", patient: "Romero G.", daysSinceAdmission: 50, phase: "Fase 3" },
    ],
  },
  {
    name: "Planta 2", clinic: "BCN",
    beds: [
      { id: "201", status: "occupied", patient: "Díaz H.", daysSinceAdmission: 71, phase: "Fase 3" },
      { id: "202", status: "occupied", patient: "Hernández I.", daysSinceAdmission: 8, phase: "Fase 1" },
      { id: "203", status: "available" },
      { id: "204", status: "occupied", patient: "Muñoz K.", daysSinceAdmission: 44, phase: "Fase 2" },
      { id: "205", status: "occupied", patient: "Álvarez N.", daysSinceAdmission: 82, phase: "Fase 4" },
      { id: "206", status: "occupied", patient: "Castro O.", daysSinceAdmission: 19, phase: "Fase 1" },
      { id: "207", status: "occupied", patient: "Ortega Q.", daysSinceAdmission: 55, phase: "Fase 3" },
      { id: "208", status: "occupied", patient: "Rubio T.", daysSinceAdmission: 37, phase: "Fase 2" },
      { id: "209", status: "occupied", patient: "Medina U.", daysSinceAdmission: 63, phase: "Fase 3" },
      { id: "210", status: "occupied", patient: "Iglesias W.", daysSinceAdmission: 28, phase: "Fase 2" },
      { id: "211", status: "available" },
      { id: "212", status: "occupied", patient: "Santos X.", daysSinceAdmission: 75, phase: "Fase 4" },
      { id: "213", status: "occupied", patient: "Guerrero Y.", daysSinceAdmission: 10, phase: "Fase 1" },
      { id: "214", status: "occupied", patient: "Reyes Z.", daysSinceAdmission: 48, phase: "Fase 2" },
    ],
  },
  {
    name: "Planta 3", clinic: "BCN",
    beds: [
      { id: "301", status: "occupied", patient: "Molina A.", daysSinceAdmission: 60, phase: "Fase 3" },
      { id: "302", status: "available" },
      { id: "303", status: "occupied", patient: "Blanco B.", daysSinceAdmission: 85, phase: "Fase 4" },
      { id: "304", status: "occupied", patient: "Suárez C.", daysSinceAdmission: 22, phase: "Fase 1" },
      { id: "305", status: "available" },
      { id: "306", status: "occupied", patient: "Vega D.", daysSinceAdmission: 42, phase: "Fase 2" },
      { id: "307", status: "occupied", patient: "Prieto E.", daysSinceAdmission: 70, phase: "Fase 3" },
      { id: "308", status: "occupied", patient: "Méndez F.", daysSinceAdmission: 33, phase: "Fase 2" },
      { id: "309", status: "available" },
      { id: "310", status: "occupied", patient: "León G.", daysSinceAdmission: 58, phase: "Fase 3" },
      { id: "311", status: "occupied", patient: "Herrera H.", daysSinceAdmission: 14, phase: "Fase 1" },
      { id: "312", status: "occupied", patient: "Caballero I.", daysSinceAdmission: 46, phase: "Fase 2" },
    ],
  },
  {
    name: "Ala Norte", clinic: "MLG",
    beds: [
      { id: "N-01", status: "occupied", patient: "Ramos J.", daysSinceAdmission: 39, phase: "Fase 2" },
      { id: "N-02", status: "occupied", patient: "Peña K.", daysSinceAdmission: 72, phase: "Fase 3" },
      { id: "N-03", status: "occupied", patient: "Flores L.", daysSinceAdmission: 18, phase: "Fase 1" },
      { id: "N-04", status: "occupied", patient: "Cabrera M.", daysSinceAdmission: 51, phase: "Fase 3" },
      { id: "N-05", status: "available" },
      { id: "N-06", status: "occupied", patient: "Campos N.", daysSinceAdmission: 65, phase: "Fase 3" },
      { id: "N-07", status: "occupied", patient: "Vidal O.", daysSinceAdmission: 27, phase: "Fase 2" },
      { id: "N-08", status: "occupied", patient: "Aguilar P.", daysSinceAdmission: 80, phase: "Fase 4" },
      { id: "N-09", status: "occupied", patient: "Pascual Q.", daysSinceAdmission: 11, phase: "Fase 1" },
      { id: "N-10", status: "occupied", patient: "Giménez R.", daysSinceAdmission: 43, phase: "Fase 2" },
      { id: "N-11", status: "occupied", patient: "Esteban S.", daysSinceAdmission: 59, phase: "Fase 3" },
      { id: "N-12", status: "available" },
      { id: "N-13", status: "occupied", patient: "Mora T.", daysSinceAdmission: 36, phase: "Fase 2" },
      { id: "N-14", status: "occupied", patient: "Serrano U.", daysSinceAdmission: 76, phase: "Fase 4" },
      { id: "N-15", status: "occupied", patient: "Cano V.", daysSinceAdmission: 20, phase: "Fase 1" },
      { id: "N-16", status: "occupied", patient: "Delgado W.", daysSinceAdmission: 53, phase: "Fase 3" },
      { id: "N-17", status: "reserved" },
      { id: "N-18", status: "occupied", patient: "Carrasco X.", daysSinceAdmission: 31, phase: "Fase 2" },
    ],
  },
  {
    name: "Ala Sur", clinic: "MLG",
    beds: [
      { id: "S-01", status: "occupied", patient: "Cortés Y.", daysSinceAdmission: 68, phase: "Fase 3" },
      { id: "S-02", status: "occupied", patient: "Marín Z.", daysSinceAdmission: 25, phase: "Fase 1" },
      { id: "S-03", status: "available" },
      { id: "S-04", status: "occupied", patient: "Cruz A2.", daysSinceAdmission: 47, phase: "Fase 2" },
      { id: "S-05", status: "available" },
      { id: "S-06", status: "occupied", patient: "Gallego B2.", daysSinceAdmission: 83, phase: "Fase 4" },
      { id: "S-07", status: "available" },
      { id: "S-08", status: "occupied", patient: "Calvo C2.", daysSinceAdmission: 16, phase: "Fase 1" },
      { id: "S-09", status: "occupied", patient: "Nieto D2.", daysSinceAdmission: 54, phase: "Fase 3" },
      { id: "S-10", status: "available" },
      { id: "S-11", status: "occupied", patient: "Pardo E2.", daysSinceAdmission: 40, phase: "Fase 2" },
      { id: "S-12", status: "occupied", patient: "Gil F2.", daysSinceAdmission: 69, phase: "Fase 3" },
      { id: "S-13", status: "available" },
      { id: "S-14", status: "occupied", patient: "Sierra G2.", daysSinceAdmission: 32, phase: "Fase 2" },
      { id: "S-15", status: "occupied", patient: "Fuentes H2.", daysSinceAdmission: 57, phase: "Fase 3" },
      { id: "S-16", status: "available" },
      { id: "S-17", status: "occupied", patient: "Lozano I2.", daysSinceAdmission: 21, phase: "Fase 1" },
      { id: "S-18", status: "maintenance" },
    ],
  },
];

// OCUPACIÓN: Occupancy trend (12 weeks)
export const occupancyTrend = [
  { week: "S-11", bcn: 76, mlg: 68, target: 85 },
  { week: "S-10", bcn: 77, mlg: 69, target: 85 },
  { week: "S-9", bcn: 78, mlg: 70, target: 85 },
  { week: "S-8", bcn: 78, mlg: 71, target: 85 },
  { week: "S-7", bcn: 79, mlg: 71, target: 85 },
  { week: "S-6", bcn: 80, mlg: 72, target: 85 },
  { week: "S-5", bcn: 80, mlg: 73, target: 85 },
  { week: "S-4", bcn: 79, mlg: 72, target: 85 },
  { week: "S-3", bcn: 81, mlg: 74, target: 85 },
  { week: "S-2", bcn: 82, mlg: 76, target: 85 },
  { week: "S-1", bcn: 83, mlg: 77, target: 85 },
  { week: "Hoy", bcn: 84, mlg: 78, target: 85 },
];

// FINANZAS: Revenue actual vs plan (monthly)
export const revenueVsPlan = [
  { month: "Nov", real: 520, plan: 540 },
  { month: "Dic", real: 545, plan: 560 },
  { month: "Ene", real: 580, plan: 580 },
  { month: "Feb", real: 610, plan: 600 },
  { month: "Mar", real: 650, plan: 640 },
  { month: "Abr", real: 680, plan: 660 },
];

// FINANZAS: Accounts receivable aging
export const receivablesAging = [
  { bucket: "Al día", amount: 180, count: 42, color: "#10b981" },
  { bucket: "1-15 días", amount: 95, count: 18, color: "#f59e0b" },
  { bucket: "16-30 días", amount: 48, count: 8, color: "#f97316" },
  { bucket: ">30 días", amount: 42, count: 3, color: "#ef4444" },
];

// FINANZAS: Cash flow monthly
export const cashFlow = [
  { month: "Ene", ingresos: 580, gastos: 470, neto: 110 },
  { month: "Feb", ingresos: 610, gastos: 485, neto: 125 },
  { month: "Mar", ingresos: 650, gastos: 510, neto: 140 },
  { month: "Abr", ingresos: 680, gastos: 530, neto: 150 },
  { month: "May (P)", ingresos: 710, gastos: 545, neto: 165 },
  { month: "Jun (P)", ingresos: 740, gastos: 555, neto: 185 },
];

// CRECIMIENTO: Pipeline funnel
export const pipelineFunnel = [
  { stage: "Primer contacto", count: 19, value: 380, conversion: "100%" },
  { stage: "Evaluación clínica", count: 14, value: 280, conversion: "74%" },
  { stage: "Propuesta enviada", count: 8, value: 160, conversion: "42%" },
  { stage: "Negociación", count: 6, value: 120, conversion: "32%" },
  { stage: "Cierre", count: 2, value: 40, conversion: "11%" },
];

// CRECIMIENTO: Leads by source
export const leadsBySource = [
  { source: "Web / orgánico", count: 14, conversion: 28, color: "#3b82f6" },
  { source: "Derivación clínica", count: 11, conversion: 42, color: "#10b981" },
  { source: "Referral familiar", count: 9, conversion: 35, color: "#8b5cf6" },
  { source: "Google Ads", count: 8, conversion: 22, color: "#f59e0b" },
  { source: "Redes sociales", count: 5, conversion: 18, color: "#ec4899" },
];

// CRECIMIENTO: Conversion trend (weekly)
export const conversionTrend = [
  { week: "S-8", rate: 28 },
  { week: "S-7", rate: 29 },
  { week: "S-6", rate: 30 },
  { week: "S-5", rate: 29 },
  { week: "S-4", rate: 31 },
  { week: "S-3", rate: 32 },
  { week: "S-2", rate: 33 },
  { week: "S-1", rate: 33 },
  { week: "Hoy", rate: 34 },
];

// BACKOFFICE: Monthly invoicing summary
export const invoicingSummary = [
  { month: "Nov", issued: 54, collected: 48, pending: 6, rate: 89 },
  { month: "Dic", issued: 58, collected: 51, pending: 7, rate: 88 },
  { month: "Ene", issued: 56, collected: 50, pending: 6, rate: 89 },
  { month: "Feb", issued: 59, collected: 53, pending: 6, rate: 90 },
  { month: "Mar", issued: 60, collected: 54, pending: 6, rate: 90 },
  { month: "Abr", issued: 62, collected: 52, pending: 10, rate: 84 },
];

// BACKOFFICE: Supplier payments
export interface SupplierPayment {
  supplier: string;
  category: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  clinic: string;
}

export const supplierPayments: SupplierPayment[] = [
  { supplier: "Farmacia Puig", category: "Farmacia", amount: 12400, dueDate: "21 Abr", status: "pending", clinic: "BCN" },
  { supplier: "Aramark", category: "Alimentación", amount: 8500, dueDate: "23 Abr", status: "pending", clinic: "BCN" },
  { supplier: "ISS Facility", category: "Limpieza", amount: 6000, dueDate: "25 Abr", status: "pending", clinic: "BCN" },
  { supplier: "Medline", category: "Suministros médicos", amount: 7000, dueDate: "28 Abr", status: "pending", clinic: "MLG" },
  { supplier: "AXA Seguros", category: "Seguros", amount: 4500, dueDate: "30 Abr", status: "pending", clinic: "Grupo" },
  { supplier: "Aramark", category: "Alimentación", amount: 8200, dueDate: "12 Abr", status: "overdue", clinic: "MLG" },
  { supplier: "Clece", category: "Limpieza", amount: 5800, dueDate: "10 Abr", status: "paid", clinic: "MLG" },
  { supplier: "Iberdrola", category: "Suministros", amount: 3200, dueDate: "15 Abr", status: "paid", clinic: "BCN" },
  { supplier: "Vodafone", category: "Telecomunicaciones", amount: 890, dueDate: "15 Abr", status: "paid", clinic: "Grupo" },
];

// BACKOFFICE: Payroll by department
export const payrollByDept = [
  { dept: "Enfermería", headcount: 14, monthlyCost: 42, costPerFTE: 3.0, clinic: "BCN" },
  { dept: "Terapeutas", headcount: 6, monthlyCost: 24, costPerFTE: 4.0, clinic: "BCN" },
  { dept: "Médicos", headcount: 3, monthlyCost: 15, costPerFTE: 5.0, clinic: "BCN" },
  { dept: "Administración", headcount: 3, monthlyCost: 7.5, costPerFTE: 2.5, clinic: "BCN" },
  { dept: "Servicios", headcount: 2, monthlyCost: 3.5, costPerFTE: 1.75, clinic: "BCN" },
  { dept: "Enfermería", headcount: 8, monthlyCost: 24, costPerFTE: 3.0, clinic: "MLG" },
  { dept: "Terapeutas", headcount: 4, monthlyCost: 16, costPerFTE: 4.0, clinic: "MLG" },
  { dept: "Médicos", headcount: 2, monthlyCost: 10, costPerFTE: 5.0, clinic: "MLG" },
  { dept: "Administración", headcount: 3, monthlyCost: 4.5, costPerFTE: 1.5, clinic: "MLG" },
  { dept: "Servicios", headcount: 2, monthlyCost: 1.8, costPerFTE: 0.9, clinic: "MLG" },
];

// BACKOFFICE: Payroll trend
export const payrollTrend = [
  { month: "Nov", bcn: 88, mlg: 52, total: 140 },
  { month: "Dic", bcn: 90, mlg: 53, total: 143 },
  { month: "Ene", bcn: 90, mlg: 54, total: 144 },
  { month: "Feb", bcn: 91, mlg: 55, total: 146 },
  { month: "Mar", bcn: 92, mlg: 55, total: 147 },
  { month: "Abr", bcn: 92, mlg: 56.3, total: 148.3 },
];

// BACKOFFICE: Team FTE breakdown
export const teamBreakdown = [
  { role: "Enfermero/a", bcn: 14, mlg: 8, total: 22 },
  { role: "Terapeuta", bcn: 6, mlg: 4, total: 10 },
  { role: "Médico", bcn: 3, mlg: 2, total: 5 },
  { role: "Administrativo", bcn: 3, mlg: 3, total: 6 },
  { role: "Servicios generales", bcn: 2, mlg: 2, total: 4 },
];

// MULTICLINICA: P&L consolidado
export const consolidatedPL = [
  { line: "Ingresos", bcn: 420, mlg: 260, total: 680 },
  { line: "Costes personal", bcn: -168, mlg: -120, total: -288 },
  { line: "Costes operativos", bcn: -98, mlg: -72, total: -170 },
  { line: "Costes directos", bcn: -65, mlg: -49, total: -114 },
  { line: "EBITDA", bcn: 89, mlg: 19, total: 108 },
];

// OCUPACIÓN: Movimientos programados
export interface Movement {
  day: string;
  type: "ingreso" | "alta" | "traslado";
  patient: string;
  clinic: string;
  room: string;
  detail: string;
}

export const movements: Movement[] = [
  { day: "Lunes", type: "ingreso", patient: "Nuevo paciente (García)", clinic: "BCN", room: "203", detail: "Pre-assessment completado. Adicción alcohol. Programa 90 días." },
  { day: "Miércoles", type: "ingreso", patient: "Nuevo paciente (Ruiz)", clinic: "BCN", room: "302", detail: "Derivación Hospital Clínic. Dual diagnosis. Dieta sin lactosa." },
  { day: "Jueves", type: "ingreso", patient: "Nuevo paciente (López)", clinic: "MLG", room: "N-05", detail: "Lead web. Adicción sustancias. Familia en Málaga." },
  { day: "Viernes", type: "alta", patient: "Navarro E.", clinic: "BCN", room: "110", detail: "Fase 4/4 completada. Plan ambulatorio preparado. Seguimiento semanal." },
  { day: "Viernes", type: "traslado", patient: "Domínguez S.", clinic: "BCN", room: "111→205", detail: "Solicitud de habitación individual aprobada. Traslado programado 10:00." },
  { day: "Próx. lunes", type: "alta", patient: "Álvarez N.", clinic: "BCN", room: "205", detail: "Fase 4 completa. Alta condicionada a evaluación final del viernes." },
  { day: "Próx. martes", type: "ingreso", patient: "Pendiente confirmar", clinic: "MLG", room: "S-03", detail: "Lead en negociación. 80% probabilidad cierre. Scoring AI alto." },
];

// OCUPACIÓN: Patients by phase
export const patientsByPhase = [
  { phase: "Fase 1 — Desintoxicación", bcn: 8, mlg: 5, avgDays: 18, color: "#ef4444" },
  { phase: "Fase 2 — Estabilización", bcn: 12, mlg: 8, avgDays: 32, color: "#f59e0b" },
  { phase: "Fase 3 — Rehabilitación", bcn: 10, mlg: 9, avgDays: 28, color: "#3b82f6" },
  { phase: "Fase 4 — Reinserción", bcn: 5, mlg: 3, avgDays: 15, color: "#10b981" },
];

// FINANZAS: Cobros tracker
export interface Invoice {
  id: string;
  family: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue" | "partial";
  daysOverdue?: number;
  clinic: string;
}

export const invoices: Invoice[] = [
  { id: "F-2026-0412", family: "Familia García M.", amount: 4800, dueDate: "15 Abr", status: "paid", clinic: "BCN" },
  { id: "F-2026-0413", family: "Familia López R.", amount: 5200, dueDate: "15 Abr", status: "paid", clinic: "BCN" },
  { id: "F-2026-0398", family: "Familia Torres C.", amount: 4800, dueDate: "01 Abr", status: "pending", daysOverdue: 0, clinic: "BCN" },
  { id: "F-2026-0385", family: "Familia Rodríguez", amount: 18000, dueDate: "12 Mar", status: "overdue", daysOverdue: 36, clinic: "BCN" },
  { id: "F-2026-0388", family: "Familia Martín P.", amount: 12500, dueDate: "15 Mar", status: "overdue", daysOverdue: 33, clinic: "BCN" },
  { id: "F-2026-0391", family: "Familia Sánchez L.", amount: 11500, dueDate: "18 Mar", status: "overdue", daysOverdue: 30, clinic: "MLG" },
  { id: "F-2026-0401", family: "Familia Ramos J.", amount: 4800, dueDate: "01 Abr", status: "partial", daysOverdue: 0, clinic: "MLG" },
  { id: "F-2026-0415", family: "Familia Flores L.", amount: 5200, dueDate: "15 Abr", status: "pending", clinic: "MLG" },
];

// FINANZAS: Margin breakdown
export const marginBreakdown = [
  { category: "Estancia residencial", revenue: 480, cost: 180, margin: 62.5 },
  { category: "Programa terapéutico", revenue: 120, cost: 85, margin: 29.2 },
  { category: "Servicios médicos", revenue: 50, cost: 35, margin: 30 },
  { category: "Farmacia", revenue: 20, cost: 15, margin: 25 },
  { category: "Extras (hab. individual)", revenue: 10, cost: 2, margin: 80 },
];

// CRECIMIENTO: Lead scoring
export interface ScoredLead {
  name: string;
  score: number;
  source: string;
  stage: string;
  value: number;
  daysInPipeline: number;
  clinic: string;
  signal: string;
}

export const scoredLeads: ScoredLead[] = [
  { name: "Familia García", score: 92, source: "Derivación", stage: "Negociación", value: 20, daysInPipeline: 12, clinic: "BCN", signal: "Contacto directo con director clínico. Decisión esta semana." },
  { name: "Familia Ruiz", score: 87, source: "Web", stage: "Negociación", value: 20, daysInPipeline: 18, clinic: "BCN", signal: "3 visitas al centro. Pre-assessment positivo." },
  { name: "María L.", score: 84, source: "Web", stage: "Propuesta", value: 20, daysInPipeline: 8, clinic: "MLG", signal: "Alta urgencia. Familiar llamó 3 veces." },
  { name: "Familia Ortega", score: 81, source: "Google Ads", stage: "Propuesta", value: 20, daysInPipeline: 14, clinic: "BCN", signal: "Comparando con 2 competidores. Precio sensible." },
  { name: "Dr. Martínez (ref)", score: 78, source: "Derivación", stage: "Evaluación", value: 20, daysInPipeline: 5, clinic: "MLG", signal: "Derivación Hospital Regional. Dual diagnosis." },
  { name: "Familia Vega", score: 65, source: "RRSS", stage: "Evaluación", value: 20, daysInPipeline: 22, clinic: "BCN", signal: "Engagement bajo. Necesita nurturing." },
  { name: "Pedro S.", score: 52, source: "Web", stage: "Primer contacto", value: 20, daysInPipeline: 3, clinic: "MLG", signal: "Solo formulario web. Sin respuesta a llamada." },
  { name: "Consulta anónima", score: 35, source: "Teléfono", stage: "Primer contacto", value: 20, daysInPipeline: 1, clinic: "BCN", signal: "Llamada informativa. No dejó datos completos." },
];

// CRECIMIENTO: Channel ROI
export const channelROI = [
  { channel: "Derivación clínica", leads: 11, closed: 5, revenue: 100, cac: 0, ltv: 72, roi: "∞" },
  { channel: "Web orgánico", leads: 14, closed: 3, revenue: 60, cac: 2.1, ltv: 72, roi: "34x" },
  { channel: "Google Ads", leads: 8, closed: 1, revenue: 20, cac: 4.8, ltv: 72, roi: "15x" },
  { channel: "Referral familiar", leads: 9, closed: 2, revenue: 40, cac: 0.5, ltv: 72, roi: "144x" },
  { channel: "Redes sociales", leads: 5, closed: 0, revenue: 0, cac: 1.2, ltv: 72, roi: "—" },
];

// (old shift/compliance data removed — backoffice now focused on controlling)

// MULTICLINICA: Expansion pipeline
export interface AcquisitionTarget {
  name: string;
  city: string;
  beds: number;
  askingPrice: string;
  ebitda: string;
  multiple: string;
  stage: "Research" | "Due diligence" | "Negociación" | "LOI firmada";
  fit: number; // 0-100
}

export const acquisitionPipeline: AcquisitionTarget[] = [
  { name: "Clínica Alhambra", city: "Granada", beds: 28, askingPrice: "7.2M€", ebitda: "14%", multiple: "9.5x", stage: "Due diligence", fit: 82 },
  { name: "Centro Marbella", city: "Marbella", beds: 45, askingPrice: "11M€", ebitda: "19%", multiple: "8.2x", stage: "Due diligence", fit: 78 },
  { name: "Residencial Levante", city: "Valencia", beds: 32, askingPrice: "8.5M€", ebitda: "12%", multiple: "10x", stage: "Research", fit: 65 },
  { name: "Clínica Retiro", city: "Madrid", beds: 55, askingPrice: "18M€", ebitda: "22%", multiple: "7.8x", stage: "Research", fit: 71 },
];

// MULTICLINICA: VCP milestones
export interface VCPMilestone {
  milestone: string;
  target: string;
  actual: string;
  status: "ahead" | "on-track" | "behind";
  quarter: string;
}

export const vcpMilestones: VCPMilestone[] = [
  { milestone: "Ocupación grupo > 80%", target: "80%", actual: "81%", status: "ahead", quarter: "Q2 2026" },
  { milestone: "EBITDA consolidado > 18%", target: "18%", actual: "18.7%", status: "ahead", quarter: "Q2 2026" },
  { milestone: "ResiOS operativo 2 clínicas", target: "2", actual: "1 + onboarding", status: "on-track", quarter: "Q2 2026" },
  { milestone: "FTEs back office < 4/clínica", target: "4", actual: "4.2", status: "on-track", quarter: "Q3 2026" },
  { milestone: "3ª clínica adquirida", target: "1", actual: "DD en 2", status: "on-track", quarter: "Q4 2026" },
  { milestone: "Ocupación grupo > 88%", target: "88%", actual: "—", status: "behind", quarter: "Q1 2027" },
  { milestone: "EBITDA consolidado > 24%", target: "24%", actual: "—", status: "behind", quarter: "Q2 2027" },
  { milestone: "Exit readiness", target: "12x EBITDA", actual: "—", status: "behind", quarter: "Q4 2028" },
];

// ─── Tabs config per role ────────────────────────────────────────

export const roleTabs: Record<RoleKey, { key: string; label: string }[]> = {
  ocupacion: [
    { key: "resumen", label: "Resumen" },
    { key: "mapa", label: "Mapa de camas" },
    { key: "tendencias", label: "Tendencias" },
    { key: "movimientos", label: "Movimientos" },
  ],
  finanzas: [
    { key: "resumen", label: "Resumen" },
    { key: "ingresos", label: "Ingresos" },
    { key: "cobros", label: "Cobros" },
    { key: "cashflow", label: "Cash flow" },
  ],
  crecimiento: [
    { key: "resumen", label: "Resumen" },
    { key: "pipeline", label: "Pipeline" },
    { key: "canales", label: "Canales" },
    { key: "scoring", label: "Scoring AI" },
  ],
  backoffice: [
    { key: "resumen", label: "Resumen" },
    { key: "facturacion", label: "Facturación" },
    { key: "nomina", label: "Nómina" },
    { key: "equipo", label: "Equipo" },
  ],
  "gestion-multiclinica": [
    { key: "resumen", label: "Resumen" },
    { key: "comparativa", label: "Comparativa" },
    { key: "pl", label: "P&L" },
    { key: "expansion", label: "Expansión" },
  ],
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

// (old fteComparison removed — replaced by teamBreakdown + payrollByDept)

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
    greeting: "Hola Ana. Tienes 3 facturas vencidas por 42k€ y la reconciliación de marzo pendiente de cerrar. ¿En qué te ayudo?",
    suggestions: [
      { text: "Factura F-2026-0385 (Familia Rodríguez, 18k€) lleva 36 días vencida. 2 recordatorios enviados sin respuesta. Siguiente paso: contactar directamente o escalar a dirección.", type: "alert", actions: [{ label: "Marcar llamada hecha", variant: "primary" }, { label: "Ver historial pagos", variant: "secondary" }] },
      { text: "Cobro recibido de 4.800€ sin factura asignada. Por importe y concepto coincide con Familia Ramírez (F-2026-0398). Confirmar para cerrar.", type: "action", actions: [{ label: "Confirmar asignación", variant: "primary" }, { label: "Revisar manualmente", variant: "secondary" }] },
      { text: "Margen MLG por debajo de target: 14.8% vs 18% objetivo. Coste de personal elevado por refuerzo temporal. Se normaliza cuando se reincorpore enfermero de baja.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuál es el cash flow proyectado a 3 meses?",
      "¿Qué clínica tiene mejor margen por cama?",
      "¿Cuántas facturas hay pendientes de cobro?",
    ],
    qa: [
      { question: "¿Cuál es el cash flow proyectado a 3 meses?", answer: "Cash flow proyectado: M+1: +82k€, M+2: +91k€, M+3: +97k€. Tendencia positiva por aumento de ocupación MLG. Riesgo: 42k€ en facturas vencidas si no se cobran." },
      { question: "¿Qué clínica tiene mejor margen por cama?", answer: "BCN: 10k€/cama/mes con EBITDA 21.3%. MLG: 7.2k€/cama/mes con EBITDA 14.8%. La diferencia se explica por mix de pacientes (BCN más privado puro) y costes de personal temporal en MLG." },
    ],
  },
  crecimiento: {
    greeting: "Hola Marta. Tienes 2 decisiones de cierre pendientes esta semana y 3 leads sin contacto desde hace más de 5 días.",
    suggestions: [
      { text: "Lead Familia García lleva 6 días sin contacto — 20k€/mes en juego. Están en fase de negociación final, decisión esta semana.", type: "alert", actions: [{ label: "Agendar llamada", variant: "primary" }, { label: "Ver ficha en HubSpot", variant: "secondary" }] },
      { text: "Derivación Hospital Clínic: 2 pacientes nuevos. Es el canal con mayor conversión (42%). Requiere respuesta antes de mañana.", type: "action", actions: [{ label: "Preparar propuesta", variant: "primary" }, { label: "Ver historial derivaciones", variant: "secondary" }] },
      { text: "Si se cierran 3 de los 6 leads en negociación, BCN llegaría al 90% de ocupación en 4 semanas.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cómo va el pipeline por canal de adquisición?",
      "¿Cuándo llegaremos al 90% de ocupación en BCN?",
      "¿Qué leads debo priorizar hoy?",
    ],
    qa: [
      { question: "¿Cuándo llegaremos al 90% de ocupación en BCN?", answer: "Con el pipeline actual (28 leads calientes, 34% conversión) y 1 alta programada, proyectamos 90% en BCN para S+4. Requiere cerrar al menos 3 de los 6 leads en negociación." },
      { question: "¿Qué leads debo priorizar hoy?", answer: "1) Familia García — negociación final, decisión esta semana, 20k€/mes. 2) Derivación Clínic — 2 pacientes, canal con 42% conversión, respuesta urgente. 3) Lead web María L. — buen perfil, sin contacto hace 6 días." },
    ],
  },
  ocupacion: {
    greeting: "Hola Carlos. 15 camas disponibles hoy (8 BCN + 7 MLG). 3 ingresos confirmados esta semana, 1 alta el viernes.",
    suggestions: [
      { text: "Ingreso confirmado lunes (BCN): paciente pre-asignado a hab. 203 (Planta 2). Documentación completa, dieta especial: sin gluten. Pendiente confirmar con cocina.", type: "action", actions: [{ label: "Confirmar asignación", variant: "primary" }, { label: "Cambiar habitación", variant: "secondary" }] },
      { text: "Planta 3 BCN al 75% — 3 camas libres + 1 alta viernes = 4 libres. Hay 2 ingresos del pipeline previstos para la próxima semana.", type: "alert", actions: [{ label: "Ver ingresos previstos", variant: "primary" }] },
      { text: "MLG Ala Sur al 67%. Ala Norte al 89%. Pendiente decisión de Enrique: concentrar ingresos en Norte o mantener las dos alas abiertas.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuántas camas se liberan esta semana?",
      "¿Qué habitaciones necesitan mantenimiento?",
      "¿Cuál es la situación de ocupación en MLG?",
    ],
    qa: [
      { question: "¿Cuántas camas se liberan esta semana?", answer: "1 alta programada (viernes, BCN Planta 3). Cama lista para nuevo ingreso el lunes siguiente tras limpieza profunda (4h). Pipeline de crecimiento tiene 2 ingresos probables para la semana siguiente." },
      { question: "¿Cuál es la situación de ocupación en MLG?", answer: "MLG total: 78% (28 de 36 camas). Ala Norte al 89% (16/18), Ala Sur al 67% (12/18). La diferencia es por el ramp-up post-adquisición. Con el pipeline actual (2 ingresos previstos), subiría a 83% en 4 semanas." },
    ],
  },
  backoffice: {
    greeting: "Hola Patricia, soy tu copiloto de controlling. Tienes 3 facturas vencidas por 30.5k€ y un pago a proveedor con retraso. Nóminas de abril procesadas.",
    suggestions: [
      { text: "Familia Rodríguez acumula 36 días de impago (18k€). Es la factura vencida más antigua. Siguiente paso: contacto directo o derivar a gestión de cobro.", type: "alert", actions: [{ label: "Enviar aviso formal", variant: "primary" }, { label: "Ver histórico pagos", variant: "secondary" }] },
      { text: "Pago a Aramark MLG con 5 días de retraso (8.2k€). Proveedor contactó ayer preguntando. Requiere tu autorización para procesar.", type: "alert", actions: [{ label: "Autorizar pago", variant: "primary" }, { label: "Contactar Aramark", variant: "secondary" }] },
      { text: "Ratio coste personal/ingresos en MLG: 48% (target 40%). Se normalizará cuando ocupación suba de 78% a 85%+.", type: "insight" },
    ],
    suggestedQuestions: [
      "¿Cuánto tenemos pendiente de cobro en total?",
      "¿Cómo va el ratio de coste de personal vs ingresos?",
      "¿Qué pagos a proveedores tenemos esta semana?",
    ],
    qa: [
      { question: "¿Cuánto tenemos pendiente de cobro en total?", answer: "Total pendiente de cobro: 42k€ en 10 facturas. De ese total, 30.5k€ (3 facturas) están vencidas >30 días. Los 11.5k€ restantes son facturas de abril aún en plazo. Tasa de cobro del mes: 84% (target 90%). Peores pagadores: Familia Rodríguez (18k€, 36d) y Familia Martín (12.5k€, 33d)." },
      { question: "¿Cómo va el ratio de coste de personal vs ingresos?", answer: "Grupo: 42% (target 40%). BCN: 39% — en rango. MLG: 48% — elevado por baja ocupación (78%). Cada punto de ocupación que sube MLG mejora ~0.5pp el ratio. A 85% ocupación, MLG bajaría a ~41%. Nómina total grupo: 148.3k€/mes sobre 350k€ ingresos grupo." },
    ],
  },
  "gestion-multiclinica": {
    greeting: "Buenos días Enrique. El grupo opera a 81% ocupación y 680k€ revenue. Tienes 2 decisiones pendientes esta semana.",
    suggestions: [
      { text: "MLG Ala Sur al 67% — por debajo de plan. El equipo propone concentrar ingresos en Ala Norte hasta llenarla. ¿Apruebas el cambio de estrategia?", type: "alert", actions: [{ label: "Aprobar cambio", variant: "primary" }, { label: "Pedir más datos", variant: "secondary" }] },
      { text: "Due diligence activa en 2 clínicas en Andalucía. Informe preliminar listo para tu revisión. Ticket medio: 7-9M€.", type: "action", actions: [{ label: "Ver informe", variant: "primary" }, { label: "Agendar call con equipo", variant: "secondary" }] },
      { text: "42k€ en facturas vencidas. Si no se resuelve esta semana, impacta cash flow de mayo. Patricia pide tu intervención con Familia Rodríguez (18k€).", type: "alert", actions: [{ label: "Llamar a familia", variant: "primary" }] },
    ],
    suggestedQuestions: [
      "¿Cuándo alcanza MLG el break-even operativo?",
      "¿Cómo va el EBITDA vs el plan de valor?",
      "¿Qué clínica del pipeline de adquisiciones es más atractiva?",
    ],
    qa: [
      { question: "¿Cuándo alcanza MLG el break-even operativo?", answer: "Con la trayectoria actual (ocupación +2pp/semana, costes normalizándose), MLG alcanza break-even operativo en ~6 semanas (EBITDA >0). Target de EBITDA 18% a 12 meses. Palancas: subir ocupación de 78% a 88% + que se reincorpore el enfermero de baja." },
      { question: "¿Cómo va el EBITDA vs el plan de valor?", answer: "EBITDA consolidado: 18.7% (target 12 meses: 24%). BCN en 21.3% — on track. MLG en 14.8% — por debajo pero esperado en fase de ramp-up. Para llegar al 24% grupo necesitamos: MLG a 85%+ ocupación y normalizar ratio personal/ingresos del 48% al 40%." },
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
