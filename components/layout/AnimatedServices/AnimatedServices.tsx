"use client";

import React, { useRef } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { servicesData } from "@/lib/constants";
import { Check } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import "./AnimatedServices.css";

// Individual service item component with scroll-based animation
const AnimatedServiceItem = ({
  service,
  imageSrc,
  index,
}: {
  service: (typeof servicesData)[0][0];
  imageSrc: string;
  index: number;
}) => {
  const serviceRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for this service item
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["start 80%", "start 20%"], // Equivalent to GSAP's start: "top 80%", end: "top 20%"
  });

  // Transform scroll progress to width percentage (30% to 100%)
  const width = useTransform(scrollYProgress, [0, 1], [30, 100]);

  return (
    <div ref={serviceRef} className="animated-service relative z-10">
      <div className="service-info">
        <h2>{service.title}</h2>
        <p>{service.description}</p>

        {/* All points with check marks */}
        <ul className="service-points-list">
          {service.points.map((point, i) => (
            <li key={i} className="service-point-item">
              <Check className="check-icon" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Outcome in highlighted box */}
        <div className="service-outcome-box">
          <div className="outcome-label">Outcome</div>
          <p className="outcome-text">{service.outcome}</p>
        </div>
      </div>
      <div className="service-img-wrapper">
        <motion.div
          ref={imgContainerRef}
          className="service-img-container"
          style={{ width }}
        >
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { actualTheme } = useTheme();

  // Flatten servicesData for easier mapping
  const flatServices = servicesData.flat();

  // Service images mapping
  const serviceImages = [
    "/ServiceSectionImages/Services-AI-ML.png",
    "/ServiceSectionImages/Services-Cloud-Migration.png",
    "/ServiceSectionImages/Services-DevOps.png",
    "/ServiceSectionImages/Services-DE-Analytics.png",
    "/ServiceSectionImages/Services-MI.png",
    "/ServiceSectionImages/Services-Cyber-Security.png",
    "/ServiceSectionImages/Services-IT-Staffing.png",
    "/ServiceSectionImages/Services-Corporate-Training.png",
  ];

  return (
    <section
      id="services"
      className={`animated-services-container relative overflow-hidden ${
        actualTheme === "dark" ? "dark" : ""
      }`}
      ref={containerRef}
    >
      {/* Animated gradient overlay for dark mode */}
      {actualTheme === "dark" && (
        <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}
      <div className="services-header relative z-10">
        <div className="header-col-1"></div>
        <div className="header-col-2">
          <span
            className={`section-badge ${actualTheme === "dark" ? "dark" : ""}`}
          >
            Our Services
          </span>
          <h1 className={actualTheme === "dark" ? "dark" : ""}>
            Complete Solutions for Your Digital Journey
          </h1>
          <p className="services-subtitle">
            Comprehensive solutions tailored to drive your digital
            transformation
          </p>
        </div>
      </div>

      {flatServices.map((service, index) => (
        <AnimatedServiceItem
          key={index}
          service={service}
          imageSrc={serviceImages[index % serviceImages.length]}
          index={index}
        />
      ))}
    </section>
  );
};

export default AnimatedServices;
