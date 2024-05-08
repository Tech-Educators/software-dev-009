"use client"; //animations only run in client components

import { motion } from "framer-motion";

export default function Animation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="flex justify-center"
    >
      <h2>The best rollercoasters in the world...yet</h2>
    </motion.div>
  );
}
