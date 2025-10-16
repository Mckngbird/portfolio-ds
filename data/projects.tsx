import React from "react";

export const projects = [
  {
    title: "Smart Parking Model YOLO V8",
    description:
      "Sistema de gestión inteligente de estacionamientos para la Universidad del Bío-Bío. Incluye backend con API REST, base de datos y aplicación web para la administración en tiempo real de plazas disponibles.",
    tech: ["Python", "Flutter", "FastAPI", "MySQL", "OpenCV", "Pandas", "Ultralytics"],
    github: "https://github.com/ICI-UBB/UBBSmartParking",
  },
  {
    title: "Modelo Predictivo SHAP & LIME",
    description:
      "Notebook en Google Colab y GitHub que muestra la creación de un modelo de clasificación de enfermedades cardíacas con Random Forest, junto a interpretabilidad mediante SHAP y LIME.",
    tech: ["Python", "SHAP", "LIME", "RandomForest", "Colab"],
    github:
      "https://github.com/Mckngbird/portfolio-ds/blob/main/Modelo_Predictivo_SHAP%26LIME.ipynb",
  },
  {
    title: "Proyecto CORFO–UBB: Fortalece PYME Ñuble",
    description:
      "Colaboración en el programa CORFO–UBB 'Fortalece PYME Ñuble' (Abril 2024 – Enero 2025). Análisis de datos empresariales y desarrollo de soluciones de inteligencia de negocios para la toma de decisiones.",
    tech: ["Power BI", "Python", "Automatización", "IA", "Análisis de Datos"],
    details: (
      <>
        <div className="grid grid-cols-[100px_auto] gap-x-2 text-left mb-3">
          <p className="font-semibold">Rol:</p>
          <p>Analista de Datos</p>
          <p className="font-semibold">Periodo:</p>
          <p>Abril 2024 – Enero 2025</p>
        </div>

        {/* Línea divisoria tenue */}
        <hr className="border-t border-gray-700 mb-3" />

        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 ml-4">
          <li>Planificación y coordinación de actividades de trabajo.</li>
          <li>Capacitación a empresas en herramientas digitales.</li>
          <li>Análisis de datos con Power BI para la toma de decisiones.</li>
          <li>Automatización de procesos mediante Python.</li>
          <li>
            Análisis bibliométrico y proyección de datos con modelos de
            Inteligencia Artificial.
          </li>
        </ul>
      </>
    ),

  },
];

