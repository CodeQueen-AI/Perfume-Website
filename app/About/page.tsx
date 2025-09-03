"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
}

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
}

export default function AboutPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-tl from-purple-100 via-white to-purple-200">
      <motion.div className="max-w-6xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}>
          Crafting Memories Through Fragrance
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-16 h-[1px] bg-purple-900"></span>
          <span className="text-yellow-400 text-lg">★</span>
          <span className="w-16 h-[1px] bg-purple-900"></span>
        </div>
      </motion.div>
      
      <motion.div
        className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },}}>
        <motion.p className="text-black text-lg leading-relaxed" variants={fadeUp}>
          Perfume is more than a fragrance — it is an invisible signature that
          lingers in every room you enter. From the very first drop, our mission
          has been to craft perfumes that capture emotions, preserve memories,
          and speak the language of elegance. Each scent is born out of passion,
          artistry, and the desire to make every moment unforgettable.
        </motion.p>
        <motion.div className="flex justify-center" variants={fadeUp}>
          <Image
            src="/About.jpg"
            alt="Luxury Perfume"
            width={900}
            height={900}/>
        </motion.div>

        <motion.p className="text-lg leading-relaxed font-serif" variants={fadeUp}>
          We believe a perfume is not just worn, it is lived. Each bottle is a
          masterpiece, blending rare ingredients with timeless sophistication.
          Whether you seek freshness for bright mornings, depth for evening
          allure, or warmth for intimate moments — our collection holds a story
          just for you. A story of elegance, luxury, and individuality.
        </motion.p>
      </motion.div>
      
      <motion.div className="border border-black mt-20 py-10 font-serif"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <motion.div className="py-6" variants={fadeUp}>
            <h3 className="text-4xl font-bold text-gray-900">
              <Counter end={450} duration={2000} />
            </h3>
            <p className="text-black mt-2">Posted stories</p>
          </motion.div>
          <motion.div className="py-6" variants={fadeUp}>
            <h3 className="text-4xl font-bold text-gray-900">
              <Counter end={2000} duration={2500} />
            </h3>
            <p className="text-black mt-2">Collection</p>
          </motion.div>
          <motion.div className="py-6" variants={fadeUp}>
            <h3 className="text-4xl font-bold text-gray-900">
              <Counter end={5000} duration={3000} />
            </h3>
            <p className="text-black mt-2">Happy customer</p>
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  );
}

