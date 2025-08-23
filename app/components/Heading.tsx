'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-black"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        Arabian Oud Elegance
      </motion.h1>

      <motion.p
        className="text-gray-600 mt-4 max-w-xl mx-auto text-lg md:text-xl font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }}>
        Experience the perfect blend of Arabian and Western oud fragrances crafted for him and her
      </motion.p>

      <motion.p
        className="text-gray-600 mt-2 max-w-xl mx-auto text-lg md:text-xl font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.4 }}>
        Available for purchase online or at our exclusive London boutiques
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-3 mt-8 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.6 }}>
        <span className="w-20 h-[2px] bg-purple-900"></span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="w-20 h-[2px] bg-purple-900"></span>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-black"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.8 }}>
        Our Signature Oud Collection
      </motion.h2>

      <motion.p
        className="text-gray-600 mt-4 max-w-xl mx-auto text-lg md:text-xl font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 1 }}>
        Ombré Lamar invites you to explore a luxurious journey through the finest oud aromas
      </motion.p>

      {/* Divider with star */}
      <motion.div
        className="flex items-center justify-center gap-3 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 1.2 }}>
        <span className="w-20 h-[2px] bg-purple-900"></span>
        <span className="text-yellow-400 text-xl">★</span>
        <span className="w-20 h-[2px] bg-purple-900"></span>
      </motion.div>

    </div>
  );
}
