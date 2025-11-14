"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "@/lib/constants";
import { Check } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import "./AnimatedServices.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { actualTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    const services = gsap.utils.toArray<HTMLElement>(".animated-service");

    // Intersection Observer for performance optimization
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target as HTMLElement;
          const imgContainer = service.querySelector(
            ".service-img-container"
          ) as HTMLElement;

          // Image width expansion animation
          ScrollTrigger.create({
            trigger: service,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    services.forEach((service) => {
      observer.observe(service);
    });

    return () => {
      services.forEach((service) => {
        observer.unobserve(service);
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
        <div key={index} className="animated-service relative z-10">
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
            <div className="service-img-container">
              <img
                src={serviceImages[index % serviceImages.length]}
                alt={service.title}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnimatedServices;
