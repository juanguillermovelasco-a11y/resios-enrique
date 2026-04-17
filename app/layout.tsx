import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: "ResiOS — Roadmap Enrique",
  description: "Piloto 90 días para Clínica CITA · Enrique Criado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Topbar />
            <main className="flex-1 bg-slate-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
