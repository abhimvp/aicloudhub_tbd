/**
 * Centralized GSAP configuration and plugin registration
 * Import GSAP utilities from this file to ensure plugins are registered once
 */
// utils/gsap.ts
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

// Register all GSAP plugins once (only on client-side)
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, CustomEase);
  
  // Create custom eases globally
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
}

// Export everything for use in components
export { gsap, useGSAP, ScrollTrigger, SplitText, CustomEase };
