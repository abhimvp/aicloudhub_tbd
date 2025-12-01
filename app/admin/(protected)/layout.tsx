import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAdminRequest } from "@/lib/adminGuard";

export default async function AdminProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const allowed = await isAdminRequest();

  if (!allowed) {
    redirect("/admin/login");
  }

  return (
    <section className="min-h-screen pt-28 md:pt-32 px-4 md:px-6 bg-neutral-50 text-neutral-900 dark:bg-slate-950 dark:text-neutral-100">
      {children}
    </section>
  );
}



