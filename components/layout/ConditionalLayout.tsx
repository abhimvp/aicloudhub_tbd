"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import ScrollToTop from "@/components/layout/ScrollToTop";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  return (
    <>
      {!isStudioRoute && <Navbar />}
      {children}
      {!isStudioRoute && <Footer />}
      {!isStudioRoute && <ScrollToTop />}
    </>
  );
}

