// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AI Cloud Hub",
    template: "%s - AI Cloud Hub",
  },
  description:
    "Accelerate your AI transformation with Future AI Cloud Hub—enterprise-ready AI consulting, staffing, and training solutions.",
  applicationName: "AI Cloud Hub",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Cloud Hub",
    description:
      "Accelerate your AI transformation with Future AI Cloud Hub—enterprise-ready AI consulting, staffing, and training solutions.",
    url: baseUrl,
    siteName: "AI Cloud Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cloud Hub",
    description:
      "Accelerate your AI transformation with Future AI Cloud Hub—enterprise-ready AI consulting, staffing, and training solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced theme initialization script that runs synchronously before first paint
  // Respects prefers-color-scheme and prevents FOUC
  const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (stored === 'light' || stored === 'dark') 
      ? stored 
      : (prefersDark ? 'dark' : 'light');
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    // Set initial opacity to prevent flash
    root.style.visibility = 'visible';
    // Mark body as hydrated to prevent animation flash
    if (document.body) {
      document.body.classList.add('hydrated');
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('hydrated');
      });
    }
  } catch (e) {
    // Fallback: ensure body is marked as hydrated
    if (document.body) {
      document.body.classList.add('hydrated');
    }
  }
})();
`;

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - must run before first paint */}
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          suppressHydrationWarning
        />
        {/* Prevent FOUC by setting initial styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html { visibility: hidden; }
              html.hydrated, html.loaded { visibility: visible; }
              body { opacity: 0; transition: opacity 0.1s ease-in; }
              body.hydrated { opacity: 1; }
            `,
          }}
        />
        <noscript>
          <style>
            {`
              html { visibility: visible; opacity: 1; }
              body { opacity: 1; }
            `}
          </style>
        </noscript>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
          </SmoothScrollProvider>
        </ThemeProvider>
        {/* Mark HTML as loaded after React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('loaded');
                if (!document.body.classList.contains('hydrated')) {
                  document.body.classList.add('hydrated');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
