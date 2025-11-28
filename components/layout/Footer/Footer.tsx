// components/layout/Footer/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aiCloudHubLogo } from "@/lib/images";
import { useTheme } from "@/components/theme/ThemeProvider";
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MailIcon } from "lucide-react";

const Footer = () => {
  const { actualTheme } = useTheme();

  const services = [
    { name: "IT Staffing", href: "/services/staffing" },
    { name: "Corporate Training", href: "/services/corporate-training" },
    { name: "IT Services", href: "/services/it-services" },
    { name: "AI & Machine Learning", href: "/services/ai-ml" },
    { name: "Cloud Services", href: "/services/cloud" },
    { name: "Application Services", href: "/services/applications" },
    { name: "Data & Analytics", href: "/services/data-analytics" },
  ];

  const resources = [
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
  ];

  const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
    { name: "Leadership", href: "/about-us#leadership-team" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 -mt-px ${
        actualTheme === "dark"
          ? "bg-linear-to-br from-gray-950 via-slate-950 to-zinc-950"
          : "bg-linear-to-b from-gray-50 to-orange-50"
      }`}
    >
      {/* Animated gradient overlay for dark mode */}
      {actualTheme === "dark" && (
        <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}

      {/* Main Footer Content */}
      <div
        className={`border-t transition-colors duration-300 relative z-10 ${
          actualTheme === "dark" ? "border-white/10" : "border-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Branding Section - Spans 1 column on lg */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src={aiCloudHubLogo}
                  alt="aiCloudHub Logo"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </Link>

              <p
                className={`leading-relaxed text-sm ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                aiCloudHub is a global provider of IT services, products, and
                solutions across diverse industries. We are known as a &quot;Cloud
                &amp; Data&quot; company involved in building and delivering
                managed services for technology projects.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {[
                  { Icon: LinkedinIcon, href: "https://linkedin.com" },
                  { Icon: FacebookIcon, href: "https://facebook.com" },
                  { Icon: TwitterIcon, href: "https://twitter.com" },
                  { Icon: InstagramIcon, href: "https://instagram.com" },
                  { Icon: YoutubeIcon, href: "https://youtube.com" },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center 
                  hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-1">
              <h3
                className={`font-bold text-base mb-5 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors block ${
                        actualTheme === "dark"
                          ? "text-gray-400 hover:text-orange-400"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Resources Column */}
            <div className="lg:col-span-1">
              <h3
                className={`font-bold text-base mb-5 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Company
              </h3>
              <ul className="space-y-3 mb-8">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors block ${
                        actualTheme === "dark"
                          ? "text-gray-400 hover:text-orange-400"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3
                className={`font-bold text-base mb-5 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors block ${
                        actualTheme === "dark"
                          ? "text-gray-400 hover:text-orange-400"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-1">
              <h3
                className={`font-bold text-base mb-5 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Us
              </h3>
              <div className="space-y-4">
                 <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className={`text-sm space-y-4 ${actualTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    <div>
                      <p className="font-medium text-orange-500 mb-1">USA Headquarters</p>
                      <p>108 Colony Park Dr, STE:600</p>
                      <p>Cumming, Georgia, USA 30041</p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-500 mb-1">India Office</p>
                      <p>Plot No 1/C, Sy No 83/1,</p>
                      <p>Raidurgam panmaktha,</p>
                      <p>Hyderabad Knowledge City,</p>
                      <p>Serilingampally, Hyderabad,</p>
                      <p>Telangana 500081</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <MailIcon className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-orange-500 mb-1">Email Us</p>
                    <a
                      href="mailto:info@aicloudhub.com"
                      className={`text-sm transition-colors block ${
                        actualTheme === "dark"
                          ? "text-gray-400 hover:text-orange-400"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      info@aicloudhub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-orange-500 mb-1">Call Us</p>
                    <a
                      href="tel:+16789357600"
                      className={`text-sm transition-colors block ${
                        actualTheme === "dark"
                          ? "text-gray-400 hover:text-orange-400"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                    >
                      +1 (678) 935 7600
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div
        className={`border-t transition-colors duration-300 relative z-10 ${
          actualTheme === "dark" ? "border-white/10" : "border-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${
              actualTheme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            <p>© {new Date().getFullYear()} aiCloudHub Technologies. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
