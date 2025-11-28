"use client";
import "./StickyCards.css";
import { servicesData } from "@/lib/constants";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const backgroundImages = [
  "/categories-AI-ML.jpg",
  "/categories-cloud-computing.jpg",
  "/categories-devops.jpg",
  "/categories-cyber-security.jpg",
];

const cardImages = [
  "/categories-devops.jpg",
  "/categories-cyber-security.jpg",
  "/categories-cloud-computing.jpg",
  "/categories-AI-ML.jpg",
];

// Individual sticky card component with scroll-based animations
const StickyCardItem = ({
  pair,
  index,
  backgroundImage,
  cardImages,
}: {
  pair: (typeof servicesData)[0];
  index: number;
  backgroundImage: string;
  cardImages: string[];
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 900);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Track scroll progress for this card (desktop only)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"], // Equivalent to GSAP's start: "top top", end: "+=100%"
  });

  // Transform scroll progress to rotation and scale (desktop only)
  const rotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 6 : -6]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      key={index}
      className="sticky-card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        ...(isDesktop && {
          position: "sticky",
          top: 0,
          rotate: rotation,
          scale: scale,
        }),
      }}
      initial={!isDesktop ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="sticky-overlay" />

      {/* Vertical Our Services label */}
      <div className="vertical-label">
        <span>Our Services</span>
      </div>

      <div className="sticky-card-inner">
        {pair.map((service, subIndex) => (
          <div className="service-card" key={subIndex}>
            {/* Small image banner on top */}
            <div className="service-image-wrapper">
              <img
                src={cardImages[(index + subIndex) % cardImages.length]}
                alt={service.title}
                className="service-top-image"
              />
            </div>

            <div className="service-content">
              <div className="service-header">
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-points">
                {service.points.map((point, i) => (
                  <li key={i}>
                    <CheckCircle className="check-icon" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="service-outcome">{service.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const StickyCards = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="services"
      className="sticky-cards"
      ref={containerRef}
    >
      {servicesData.map((pair, index) => (
        <StickyCardItem
          key={index}
          pair={pair}
          index={index}
          backgroundImage={backgroundImages[index % backgroundImages.length]}
          cardImages={cardImages}
        />
      ))}
    </section>
  );
};

export default StickyCards;
