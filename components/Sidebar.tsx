"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  DollarSign,
  TrendingUp,
  BedDouble,
  Settings,
  Building2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { roleNavItems } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  TrendingUp,
  BedDouble,
  Settings,
  Building2,
};

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-navy-600/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm tracking-wide">ResiOS</div>
            <div className="text-[10px] text-navy-300 uppercase tracking-[0.15em]">Demo · Enrique</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {/* Roadmap link */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            pathname === "/"
              ? "bg-accent/20 text-accent"
              : "text-navy-200 hover:text-white hover:bg-navy-600/40"
          }`}
        >
          <LayoutDashboard className="w-[18px] h-[18px]" />
          Roadmap 90 días
        </Link>

        {/* Divider */}
        <div className="pt-4 pb-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-400 px-3">
            Vistas por rol
          </div>
        </div>

        {/* Role links */}
        {roleNavItems.map((item) => {
          const Icon = iconMap[item.icon] || Settings;
          const isActive = pathname === `/role/${item.key}`;
          return (
            <Link
              key={item.key}
              href={`/role/${item.key}`}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-accent/20 text-accent font-medium"
                  : "text-navy-200 hover:text-white hover:bg-navy-600/40"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-navy-600/40">
        <div className="text-[11px] text-navy-400 leading-relaxed">
          Enrique Criado · 2 clínicas · 78 camas
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-navy-800 border-r border-navy-700/50 shrink-0">
        {nav}
      </aside>

      {/* Mobile hamburger */}
      {!mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden fixed top-3 left-3 z-40 p-2.5 rounded-lg bg-navy-800 text-white shadow-lg active:scale-95 transition-transform"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-72 max-w-[85vw] bg-navy-800 shadow-2xl relative flex flex-col">
            {/* Close button inside sidebar */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-3 p-2 rounded-lg hover:bg-navy-700 text-navy-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            {nav}
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex-1 bg-black/50"
            aria-label="Cerrar menú"
          />
        </div>
      )}
    </>
  );
}
