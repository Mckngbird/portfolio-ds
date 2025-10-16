import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "José Rivera Medina | Portfolio",
  description: "Portafolio profesional de proyectos en ciencia de datos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} bg-black text-gray-200 font-sans`}
    >
      <body className="min-h-screen flex flex-col">
        {/* ✅ Header y Footer son Client Components, no pasa nada */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}




