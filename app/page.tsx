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
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden pt-24 pb-32">
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
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-8"
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

      {/* ✍️ Nombre */}
      <motion.h1
        className="text-5xl font-bold text-white mb-3 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ingeniero Civil Informático
        <span className="absolute left-1/2 -bottom-2 w-24 h-0.5 bg-cyan-500/70 -translate-x-1/2 rounded-full" />
      </motion.h1>

      {/* ✨ Rol */}
      <motion.h2
        className="text-cyan-400 font-semibold tracking-wide mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Licenciado en Ciencias Empresariales
      </motion.h2>

      {/* 🧠 Descripción */}
      <motion.div
        className="max-w-3xl text-gray-400 leading-relaxed text-justify space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>
          Egresado de la{" "}
          <span className="text-cyan-400 font-medium">
            Universidad del Bío-Bío
          </span>, capacitado para comprender problemáticas organizacionales y
          desarrollar soluciones mediante tecnologías de información y
          comunicación. Poseo experiencia en{" "}
          <span className="text-cyan-400 font-medium">
            análisis de datos, inteligencia artificial, deep learning
          </span>, visión artificial y desarrollo de software con metodologías
          ágiles.
        </p>
      </motion.div>

      {/* 🔗 Botón */}
      <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
        <Link
          href="/projects"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
        >
          Ver proyectos
        </Link>
      </motion.div>
      {/* 🌐 Redes sociales */}
      <br/>
      <div className="flex items-center justify-center gap-6 mt-4 text-gray-400">
        <a
          href="https://github.com/Mckngbird"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.6.1-.6.1-.6 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.7 2.8 1.7 1.4 0 2.3-.7 2.7-1.3-.8-.1-1.7-.3-2.5-.8-2.1-1.1-3.4-3.6-3.4-6.2 0-1.4.5-2.7 1.3-3.7-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.3.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5C17.7 6 18.7 6.3 18.7 6.3c.6 1.5.3 2.7.1 3 .8 1 1.3 2.3 1.3 3.7 0 2.6-1.3 5-3.4 6.2-.8.5-1.6.7-2.5.8.4.5 1 1.4 1 2.8v4.1c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12 24 5.65 18.85.5 12 .5z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/jos%C3%A9-patricio-rivera-medina-53b4012b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.6 20h-3.4v-10.4h3.4v10.4zm-1.7-11.8c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9c0 1-.8 1.9-1.9 1.9zm13.3 11.8h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5h-3.4v-10.4h3.3v1.4h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.1v5z" />
          </svg>
        </a>
      </div>

    </main>
  );
}



