/**
 * Centralized GSAP configuration and plugin registration
 * Import GSAP utilities from this file to ensure plugins are registered once
 */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register all GSAP plugins once (only on client-side)
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// Export everything for use in components
export { gsap, useGSAP, ScrollTrigger };
