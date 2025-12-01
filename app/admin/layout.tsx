import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Root admin layout: no auth guard here so that /admin/login stays accessible.
  // Protected sections use a nested (protected) layout.
  return <>{children}</>;
}


