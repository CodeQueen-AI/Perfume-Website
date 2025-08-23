"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PerfumeCollectionSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const images = [
    "/Box1.jpg",
    "/Box2.png",
    "/Box3.jpg",
    "/Box4.jpg",
  ];

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-6 md:px-20">
      <h2
        className="text-4xl md:text-5xl text-center text-black font-bold mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}>
        Perfume Collection
      </h2>

      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-16 h-[1px] bg-purple-900"></span>
        <span className="text-yellow-300">★</span>
        <span className="w-16 h-[1px] bg-purple-900"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Perfume ${index + 1}`}
            className="w-full h-80 object-cover shadow-lg"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}/>
        ))}
      </div>
    </div>
  );
}
