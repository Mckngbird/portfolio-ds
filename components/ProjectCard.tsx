"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

export default function ProjectCard({ title, description, tech, github }: ProjectProps) {
  return (
    <motion.div
      className="border border-gray-800 p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="text-sm bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      {github && (
        <a href={github} target="_blank" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
          <FaGithub /> Ver código
        </a>
      )}
    </motion.div>
  );
}
