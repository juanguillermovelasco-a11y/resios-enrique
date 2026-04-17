import { RoleShell } from "@/components/RoleShell";
import { roleViews, type RoleKey } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(roleViews).map((key) => ({ key }));
}

export default function RolePage({
  params,
}: {
  params: { key: string };
}) {
  if (!(params.key in roleViews)) notFound();
  return <RoleShell roleKey={params.key as RoleKey} />;
}
