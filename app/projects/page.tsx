"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden pt-20">
      <GalaxyBackground />

      <motion.h2
        className="text-4xl font-bold mb-10 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Proyectos
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </main>
  );
}


