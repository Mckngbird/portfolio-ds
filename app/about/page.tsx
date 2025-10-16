"use client";
import { motion } from "framer-motion";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function AboutPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden pt-20">
      <GalaxyBackground />

      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sobre mí
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Soy un estudiante y profesional en el área de ciencia de datos con
        interés en el análisis exploratorio, la modelación predictiva y la
        comunicación efectiva de resultados. Mi objetivo es seguir desarrollando
        proyectos que integren conocimiento técnico y creatividad analítica.
      </motion.p>
    </main>
  );
}

