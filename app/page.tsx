"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Particle {
  top: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
}

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${1 + Math.random() * 2}px`,
    }));
    setParticles(arr);
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden pt-20">
      {/* 🌌 Fondo degradado */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-gray-900 via-black to-black" />

      {/* ✨ Partículas galaxia */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-80 animate-float-galaxy"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* 🖼️ Foto */}
      <motion.div
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/jose.jpg"
          alt="Foto de José Rivera Medina"
          width={160}
          height={160}
          className="object-cover"
        />
      </motion.div>

      {/* ✍️ Texto principal */}
      <motion.h1
        className="text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        José Rivera Medina
      </motion.h1>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Apasionado por la ciencia de datos, el análisis y la creación de soluciones
        inteligentes basadas en información. Este es mi espacio personal para compartir
        los proyectos más destacados de mi trayectoria.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/projects"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
        >
          Ver proyectos
        </Link>
      </motion.div>
    </main>
  );
}



