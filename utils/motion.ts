// utils/motion.ts
// Motion-compatible animation variants and helpers

export type Direction = "left" | "right" | "up" | "down";

/**
 * Stagger container variant for animating children with delay
 */
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

/**
 * Fade in animation variant with directional movement
 */
export const fadeIn = (
  direction: Direction = "up",
  delay: number = 0,
  duration: number = 0.8
) => {
  const x = direction === "left" ? 100 : direction === "right" ? -100 : 0;
  const y = direction === "up" ? 100 : direction === "down" ? -100 : 0;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad (similar to power2.out)
      },
    },
  };
};

/**
 * Text variant for text animations
 */
export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  };
};

/**
 * Slide in animation variant with directional movement
 */
export const slideIn = (
  direction: Direction = "left",
  delay: number = 0,
  duration: number = 0.8
) => {
  const x =
    direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y =
    direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  };
};

/**
 * Zoom in animation variant
 */
export const zoomIn = (delay: number = 0, duration: number = 0.8) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  };
};

/**
 * Helper to create custom animation variants
 */
export const createVariant = (
  initial: Record<string, any>,
  animate: Record<string, any>,
  transition: Record<string, any> = {}
) => {
  return {
    hidden: initial,
    show: {
      ...animate,
      transition: {
        ease: [0.25, 0.46, 0.45, 0.94],
        ...transition,
      },
    },
  };
};
