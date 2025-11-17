// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LandingProvider } from "@/components/layout/LandingProvider";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  variable: '--font-sans', 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  variable: '--font-heading', 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AI Cloud Hub",
  description: "Future AI Cloud Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LandingProvider>
            <SmoothScroll>
              <ConditionalLayout>{children}</ConditionalLayout>
            </SmoothScroll>
          </LandingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
