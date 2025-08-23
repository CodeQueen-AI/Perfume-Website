"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },};

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },};

  return (
    <footer className="text-black bg-gradient-to-tl from-purple-200 to-white pt-12 pb-6 mt-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={itemVariants}>
          <h2 className={`${dancing.className} text-3xl mb-4`}>
            <span className="text-purple-800">Aroma</span>Lux
          </h2>
          <p className="text-sm leading-relaxed font-serif">
            Luxury Arabian and Western oud fragrances for him and her.  
            Experience the art of aroma with AromaLux.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 font-serif">Quick Links</h3>
          <ul className="space-y-2 font-serif">
            <li className="hover:text-purple-800 cursor-pointer transition">Home</li>
            <li className="hover:text-purple-800 cursor-pointer transition">Products</li>
            <li className="hover:text-purple-800 cursor-pointer transition">About</li>
            <li className="hover:text-purple-800 cursor-pointer transition">Contact</li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 font-serif">Customer Care</h3>
          <ul className="space-y-2 font-serif">
            <li className="hover:text-purple-800 cursor-pointer transition">FAQs</li>
            <li className="hover:text-purple-800 cursor-pointer transition">Shipping</li>
            <li className="hover:text-purple-800 cursor-pointer transition">Returns</li>
            <li className="hover:text-purple-800 cursor-pointer transition">Contact Us</li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-4 font-serif">Newsletter</h3>
          <p className="text-sm mb-4 font-serif">
            Subscribe to get special offers and fragrance updates.
          </p>
          <div className="flex bg-white rounded-full overflow-hidden shadow-sm border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 outline-none text-sm"/>
            <button className="bg-purple-900 font-serif text-white px-4 py-2 text-sm font-medium hover:bg-purple-800 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-black font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        © 2025 AromaLux All rights reserved developed by Sumbal Naz
      </motion.div>
    </footer>
  );
}
