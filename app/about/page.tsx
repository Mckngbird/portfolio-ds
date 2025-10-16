"use client";
import { motion } from "framer-motion";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen text-center px-6 overflow-hidden pt-24 pb-24">
      {/* 🌌 Fondo galáctico animado */}
      <GalaxyBackground />

      {/* Título principal */}
      <motion.h2
        className="text-5xl font-bold text-white mb-8 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre mí
        <span className="absolute left-1/2 -bottom-3 w-24 h-0.5 bg-cyan-500/70 -translate-x-1/2 rounded-full" />
      </motion.h2>

      {/* Presentación breve */}
      <motion.div
        className="max-w-3xl text-gray-300 leading-relaxed text-justify mb-12 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Soy un apasionado del área de{" "}
          <span className="text-cyan-400 font-medium">Ciencia de Datos</span>,
          con interés en el análisis exploratorio, la modelación predictiva y
          la comunicación efectiva de resultados. Mi objetivo es seguir
          desarrollando proyectos que integren{" "}
          <span className="text-cyan-400 font-medium">
            conocimiento técnico y creatividad analítica
          </span>
          , aplicando metodologías modernas y tecnologías innovadoras.
        </p>
      </motion.div>

      {/* 🎯 Sección Objetivo Laboral y Competencias */}
      <motion.section
        className="max-w-4xl text-left bg-gradient-to-b from-gray-900/60 to-black/30 p-8 rounded-2xl border border-gray-800 shadow-lg space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Objetivo laboral */}
        <h2 className="text-2xl font-bold text-cyan-400 mb-3">
          Objetivo Laboral
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Contribuir al desarrollo de soluciones innovadoras en{" "}
          <span className="text-cyan-400 font-medium">análisis de datos</span>,{" "}
          <span className="text-cyan-400 font-medium">
            inteligencia artificial
          </span>{" "}
          y{" "}
          <span className="text-cyan-400 font-medium">
            desarrollo de software
          </span>
          , aplicando metodologías ágiles y optimizando recursos informáticos
          en beneficio de la organización.
        </p>

        {/* Competencias */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-6 mb-3">
          Competencias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Análisis de datos, inteligencia artificial, deep learning y visión
              artificial.
            </li>
            <li>
              Desarrollo de software con metodologías ágiles (Scrum, Kanban).
            </li>
            <li>Programación en Python, SQL, FastAPI y Angular.</li>
            <li>
              Visualización y gestión de datos con Power BI y Looker Studio.
            </li>
            <li>
              Implementación de modelos de detección en tiempo real con YOLO.
            </li>
          </ul>

          <ul className="list-disc list-inside space-y-2">
            <li>Liderazgo, trabajo colaborativo e interdisciplinario.</li>
            <li>Comunicación efectiva y manejo funcional de inglés.</li>
            <li>
              Compromiso con el aprendizaje continuo, innovación y
              responsabilidad social.
            </li>
            <li>
              Tolerancia a la frustración y manejo adecuado del estrés.
            </li>
          </ul>
        </div>

        {/* Botón de descarga CV */}
        <div className="flex justify-center pt-6">
          <a
            href="/cv_jose_rivera.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 14.586V4a1 1 0 011-1zm-8 15a1 1 0 100 2h16a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
            Descargar CV
          </a>
        </div>
      </motion.section>
    </main>
  );
}


