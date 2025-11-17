"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // For homepage, Navbar/Footer will be shown after landing animation completes
  // For other pages, show them immediately
  return (
    <>
      {!isHomepage && <Navbar />}
      {children}
      {!isHomepage && <Footer />}
    </>
  );
}
