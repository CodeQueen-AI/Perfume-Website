"use client";
import { FaShippingFast, FaGift } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const services = [
    {
      title: "Perfume Customization",
      desc: "Design your signature fragrance with our personalized blend of notes.",
      icon: <GiPerfumeBottle className="w-10 h-10 text-pink-500" />,
      items: ["Custom Fragrance Mix", "Personalized Scent Profile", "Unique Bottling"],
      color: "text-pink-500",
    },
    {
      title: "Luxury Packaging",
      desc: "Elegant & premium packaging for special occasions and gifting.",
      icon: <FaGift className="w-10 h-10 text-yellow-500" />,
      items: ["Gift Wrapping", "Luxury Boxes", "Personalized Cards"],
      color: "text-yellow-500",
    },
    {
      title: "Worldwide Shipping",
      desc: "We deliver perfumes to your doorstep anywhere in the world.",
      icon: <FaShippingFast className="w-10 h-10 text-sky-500" />,
      items: ["Fast Delivery", "Global Coverage", "Secure Packaging"],
      color: "text-sky-500",
    },
  ];

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section className="py-16 px-6 lg:px-20">
      <motion.h2
        className="text-4xl md:text-5xl text-center text-black font-bold mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}>
        Services
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-3 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }}>
        <span className="w-16 h-[1px] bg-purple-900"></span>
        <span className="text-yellow-300">★</span>
        <span className="w-16 h-[1px] bg-purple-900"></span>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}>
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
              {service.title}
            </h3>
            <p className="text-black text-sm mb-4 font-serif">{service.desc}</p>
            <ul className="space-y-2">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${service.color} bg-current`} />
                  <span className="text-black text-sm font-serif">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
