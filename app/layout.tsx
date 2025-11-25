// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

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
  const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {}
})();
`;

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SmoothScrollProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
