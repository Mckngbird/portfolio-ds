"use client";
import { useEffect, useState } from "react";

interface Particle {
  top: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
}

export default function GalaxyBackground() {
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
    <>
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
    </>
  );
}
