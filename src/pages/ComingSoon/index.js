import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <motion.img
        src="./logo.png" // substitua pelo caminho da sua imagem
        alt="Pronto Delivery Logo"
        className="w-48 h-48 mb-6 drop-shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Em breve 🚀
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Estamos preparando algo incrível para você! O Pronto Delivery vai facilitar sua vida na hora de pedir aquela refeição deliciosa!
      </motion.p>
    </div>
  );
}
