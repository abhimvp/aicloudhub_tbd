// utils/motion.ts
import { gsap } from "gsap";

export const staggerContainer = (staggerChildren: any, delayChildren?: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const fadeIn = (
  target: gsap.TweenTarget,
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => {
  return gsap.from(target, {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    delay: delay,
    duration: duration,
    ease: "power2.out",
  });
};

export const textVariant = (target: gsap.TweenTarget, delay: number) => {
  return gsap.from(target, {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: delay,
    ease: "power2.out",
  });
};

export const slideIn = (
  target: gsap.TweenTarget,
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => {
  return gsap.from(target, {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
    delay: delay,
    duration: duration,
    ease: "power2.out",
  });
};

export const zoomIn = (
  target: gsap.TweenTarget,
  delay: number,
  duration: number
) => {
  return gsap.from(target, {
    scale: 0,
    opacity: 0,
    delay: delay,
    duration: duration,
    ease: "power2.out",
  });
};
