"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FeaturedOnSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const images = [
    "/Image1.jpg",
    "/Image2.jpg",
    "/Image3.jpg",
    "/Image4.jpg",
    "/Image5.jpg",
    "/Image6.jpg",
  ];

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const [scrollDuration, setScrollDuration] = useState(20);
  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 768) setScrollDuration(15); 
      else setScrollDuration(20);
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl text-center text-black font-bold"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        Featured On
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-3 mt-4 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }}>
        <span className="w-16 h-[1px] bg-purple-900"></span>
        <span className="text-yellow-300">★</span>
        <span className="w-16 h-[1px] bg-purple-900"></span>
      </motion.div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: scrollDuration, ease: "linear" }}>
          {[...images, ...images].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Featured ${index + 1}`}
              className="max-h-20 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}/>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
