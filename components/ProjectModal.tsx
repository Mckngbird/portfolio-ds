"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  show,
  onClose,
  title,
  content,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 border border-gray-700 rounded-xl shadow-xl p-6 max-w-3xl w-[90%] overflow-y-auto max-h-[85vh]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
            <div className="text-gray-300 text-sm space-y-2 text-left">
                <div className="[&>ul]:list-disc [&>ul]:ml-6 [&>ul>li]:pl-1">
                    {content}
                </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
