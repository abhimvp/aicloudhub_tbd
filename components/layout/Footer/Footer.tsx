// components/layout/Footer/Footer.tsx
"use client";
import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { aiCloudHubLogo } from "@/lib/images";
import { useTheme } from "@/components/theme/ThemeProvider";

const Footer = () => {
  const { actualTheme } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 -mt-px ${
        actualTheme === "dark"
          ? "bg-linear-to-br from-gray-900 via-slate-900 to-zinc-950"
          : "bg-gradient-to-b from-gray-50 to-orange-50"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding Section */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={aiCloudHubLogo}
                  alt="aiCloudHub Logo"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              </Link>

              <p
                className={`leading-relaxed mb-8 max-w-md ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                aiCloudHub Inc. is a trusted partner in digital transformation.
                Specializing in Cloud, DevOps, AI/ML, Data & Analytics,
                Infrastructure Services and Staffing Solutions. We help
                businesses innovate, scale, and grow securely.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                  hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                  hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                  hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                  hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3
                className={`font-bold text-lg mb-6 ${
                  actualTheme === "dark" ? "text-yellow-400" : "text-orange-600"
                }`}
              >
                Address
              </h3>
              <ul className="space-y-4">
                <li
                  className={`flex items-start gap-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-orange-400 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <span>
                    108 Colony Park Dr, STE:600, Cumming, Georgia, USA 30041
                  </span>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-orange-400 shrink-0"
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
                  <a
                    href="tel:+16789357600"
                    className="hover:text-orange-400 transition-colors"
                  >
                    +1 (678) 935 7600
                  </a>
                </li>
                <li
                  className={`flex items-start gap-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-orange-400 mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <span>
                    Plot No 1/C, Sy No 83/1, Raidurgam panmaktha, Hyderabad
                    Knowledge City, Serilingampally, Hyderabad, Telangana 500081
                  </span>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-orange-400 shrink-0"
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
                  <a
                    href="tel:+16789357600"
                    className="hover:text-orange-400 transition-colors"
                  >
                    +1 (678) 935 7600
                  </a>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-yellow-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@aiCloudHub.com"
                    className="hover:text-orange-400 transition-colors"
                  >
                    info@aiCloudHub.com
                  </a>
                </li>
              </ul>
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
            <p>© 2025 aiCloudHub. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
