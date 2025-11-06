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
      className={`animated-services-container ${
        actualTheme === "dark" ? "dark" : ""
      }`}
      ref={containerRef}
    >
      <div className="services-header">
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
        <div key={index} className="animated-service">
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
