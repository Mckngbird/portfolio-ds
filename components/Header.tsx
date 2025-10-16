"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar desplazamiento y actualizar el estado
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 backdrop-blur-md border-b
        ${
          isScrolled
            ? "bg-black/70 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            : "bg-black/30 border-gray-800"
        }`}
    >
      <nav className="max-w-5xl mx-auto flex justify-center md:justify-between items-center px-6 py-4">
        {/* Logo o nombre */}
        <span
          className={`hidden md:block font-semibold tracking-wide text-lg transition-colors ${
            isScrolled ? "text-cyan-400" : "text-cyan-300"
          }`}
        >
          Data Scientist
        </span>

        {/* Navegación */}
        <ul className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition-colors ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full transition-all duration-300"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
