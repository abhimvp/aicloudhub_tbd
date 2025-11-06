"use client";
import "./StickyCards.css";
import { servicesData } from "@/lib/constants";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const StickyCards = () => {
  const containerRef = useRef(null);

  // components/layout/StickyCards/StickyCards.jsx

  useGSAP(
    () => {
      // Use matchMedia for responsive animations
      ScrollTrigger.matchMedia({
        // --- 1. DESKTOP ANIMATION (screens > 900px) ---
        "(min-width: 901px)": function () {
          const cards = gsap.utils.toArray(".sticky-card");

          cards.forEach((card, index) => {
            ScrollTrigger.create({
              trigger: card,
              start: "top top",
              end: "+=100%", // This creates the 100vh "pin" duration
              pin: true,
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(card, {
                  rotation: (index % 2 === 0 ? 6 : -6) * progress,
                  scale: 1 - progress * 0.1,
                  ease: "power2.out",
                });
              },
            });
          });
        },

        // --- 2. MOBILE ANIMATION (screens <= 900px) ---
        "(max-width: 900px)": function () {
          // On mobile, we don't pin. We just let it scroll normally.
          // We can add a simple fade-in for each card.
          const cards = gsap.utils.toArray(".sticky-card");

          cards.forEach((card) => {
            gsap.from(card, {
              opacity: 0,
              y: 50,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%", // Triggers when 85% of the card is visible
                toggleActions: "play none none none",
              },
            });
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services" // <-- ADD THIS ID
      className="sticky-cards"
      ref={containerRef}
    >
      {servicesData.map((pair, index) => (
        <div
          key={index}
          className="sticky-card"
          style={{
            backgroundImage: `url(${
              backgroundImages[index % backgroundImages.length]
            })`,
          }}
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
        </div>
      ))}
    </section>
  );
};

export default StickyCards;
