"use client";

import { Bell, Sparkles } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-14">
        <div className="lg:hidden w-12" />

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot" />
          <span className="font-medium">Datos en vivo</span>
          <span className="text-slate-300">·</span>
          <span>Demo personalizada</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-500 hover:bg-slate-50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="hidden sm:inline">Pregúntame algo…</span>
          </button>

          <button
            type="button"
            className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
          </button>

          <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-semibold text-white">
              EC
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-navy-900 leading-tight">Enrique Criado</div>
              <div className="text-[11px] text-slate-500 leading-tight">Director de grupo</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
