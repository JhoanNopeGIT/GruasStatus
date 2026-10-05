import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Grúas Status | Servicio de Grúas 24 Horas",
  description:
    "Servicio de grúas, rescate de vehículos y transporte especializado. Tu tranquilidad es nuestro Estatus.",
  keywords: [
    "grúas",
    "grúas Bogotá",
    "servicio de grúa",
    "grúa 24 horas",
    "transporte de vehículos",
    "rescate de vehículos",
    "Grúas Status",
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
        {children}
      </body>
    </html>
  );
}
