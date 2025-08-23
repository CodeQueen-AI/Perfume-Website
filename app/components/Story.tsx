"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BrandStorySection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <div className="py-16 px-6 md:px-20 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-black mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        Our Brand Story
      </motion.h2>
      <motion.div
        className="flex items-center justify-center gap-3 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }}>
        <span className="w-16 h-[2px] bg-purple-900"></span>
        <span className="text-yellow-300">★</span>
        <span className="w-16 h-[2px] bg-purple-900"></span>
      </motion.div>
      <motion.p
        className="text-gray-800 max-w-3xl mx-auto mb-8 font-serif text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.4 }}>
        Ombré Lamar was born from the desire to craft luxurious fragrances that
        capture both tradition and modern elegance. Each scent is meticulously
        created with the finest oud and floral essences, blending Arabian heritage
        with contemporary artistry. Our story is about passion, quality, and the
        pursuit of olfactory perfection — designed to make every moment unforgettable.
      </motion.p>
      <motion.button
        className="px-6 py-2 border-2 border-purple-600 text-purple-600 font-semibold transition-colors duration-300 hover:bg-purple-600 hover:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
        Read More
      </motion.button>
    </div>
  );
}
