import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grúas Status | Grúas 24/7",
  description:
    "Servicio profesional de grúas en Bogotá.",
  keywords: [
    "grúas",
    "grúas Bogotá",
    "grúas en Bogotá",
    "servicio de grúa",
    "grúa 24 horas",
    "transporte de vehículos",
    "rescate de vehículos",
    "grúas de motos Bogotá",
    "Grúas Status",
    "grúas cerca de mi",
    "grúas cerca",
  ],
  authors: [{ name: "BASTIQ" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#a12672",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden bg-white text-[var(--foreground)] antialiased">
        
        {/* --- Google Ads (gtag.js) --- */}
        {/* Reemplaza AW-TU_ID_AQUI con tu ID real de Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-5211579029"
          strategy="afterInteractive"
        />
        <Script id="google-assets-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-5211579029');
          `}
        </Script>

        {children}

        {/* --- Vercel Analytics --- */}
        <Analytics />
      </body>
    </html>
  );
}