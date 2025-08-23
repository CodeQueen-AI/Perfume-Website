"use client";
import { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "WHO IS OMBRÉ LAMAR?", answer: "Ombré Lamar is a luxury oud fragrance brand known for Arabian and Western oud perfumes." },
  { question: "HOW ARE YOUR PARFUMS CREATED?", answer: "All of our parfums are made with absolute oils from our specially selected flowers, creating our signature Ombré Lamar scents." },
  { question: "WHAT IS THE BEST FRAGRANCE FOR ME?", answer: "We offer a wide range of fragrances suited for different personalities, occasions, and moods." },
  { question: "HOW TO STORE MY FRAGRANCE?", answer: "Keep your perfumes away from direct sunlight and store them in a cool, dry place to preserve their scent." },
  { question: "HOW CAN I GET IN TOUCH?", answer: "You can reach us via our contact form or visit our London stores for direct assistance." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 md:px-20 font-serif">
      <motion.h2
        className="text-4xl md:text-5xl text-center text-black font-bold"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}>
        All About Ombré Lamar
      </motion.h2>
      <motion.div
        className="flex items-center justify-center gap-3 mt-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="w-16 h-[1px] bg-purple-900"></span>
        <span className="text-yellow-300">★</span>
        <span className="w-16 h-[1px] bg-purple-900"></span>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => toggleFaq(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
              {openIndex === index ? <FiMinus className="text-xl" /> : <FiPlus className="text-xl" />}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}>
                  {faq.answer}
                </motion.p>)}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
