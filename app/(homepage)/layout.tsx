"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function HomepageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  
  useEffect(() => {
    if (isHomepage) {
      // Hide navbar and footer initially for homepage landing animation
      const navbar = document.querySelector("nav");
      const footer = document.querySelector("footer");
      
      if (navbar) navbar.style.display = "none";
      if (footer) footer.style.display = "none";

      // Show them after landing animation
      const timer = setTimeout(() => {
        if (navbar) navbar.style.display = "";
        if (footer) footer.style.display = "";
      }, 4000); // Adjust timing based on your landing animation

      return () => clearTimeout(timer);
    }
  }, [isHomepage]);

  return <>{children}</>;
}
