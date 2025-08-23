"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: 'Vera Wang', price: 400 , image: '/Collection1.jpg', description: 'A rich and enchanting oud fragrance for special occasions.', discount: '20% OFF' },
  { id: 2, name: 'Amber Mystique', price: 300, image: '/Collection2.jpg', description: 'Warm amber tones with a subtle hint of floral notes.' },
  { id: 3, name: 'Mystic Oud', price: 500, image: '/Collection3.jpg', description: 'Deep and long-lasting oud fragrance perfect for evenings.', discount: '15% OFF' },
  { id: 4, name: 'Velvet Rose', price: 250, image: '/Collection4.jpg', description: 'Soft rose aroma blended with subtle woody notes.' },
  { id: 5, name: 'Dior Sauvage', price: 320, image: '/Collection5.jpg', description: 'Fresh bergamot with spicy pepper and warm woody undertones, bold and masculine.' },
  { id: 6, name: 'Chanel No. 5', price: 600, image: '/Collection6.jpg', description: 'A timeless blend of jasmine, rose, and aldehydes.', discount: '10% OFF' },
  { id: 7, name: 'Gucci Bloom', price: 420, image: '/Collection7.jpg', description: 'Floral explosion of jasmine, tuberose, and Rangoon creeper.' },
  { id: 8, name: 'Yves Saint Laurent Black Opium', price: 450, image: '/Collection8.jpg', description: 'Sweet vanilla with notes of coffee and white flowers, bold yet addictive.' },
  { id: 9, name: 'Tom Ford Black Orchid', price: 350, image: '/Collection9.jpg', description: 'Luxurious dark florals mixed with patchouli, vanilla, and earthy accords.' },
  { id: 10, name: 'Armani Code', price: 700, image: '/Collection10.jpg', description: 'Seductive notes of citrus, tonka bean, and warm leather for evening charm.' },
  { id: 11, name: 'Versace Eros', price: 950, image: '/Collection11.png', description: 'Fresh mint, green apple and tonka bean — energetic, powerful, and modern.', discount: '5% OFF' },
  { id: 12, name: 'Versace', price: 600, image: '/Collection12.jpg', description: 'Sweet berries with soft jasmine and warm amber, youthful and vibrant.' },
];


export default function ProductCollection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-black mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}>
          Our Products
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-16 h-[1px] bg-purple-900"></span>
          <span className="text-yellow-300">★</span>
          <span className="w-16 h-[1px] bg-purple-900"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              {product.discount && (
                <span className="absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 -rotate-12">
                  {product.discount}
                </span>
              )}
              <Link href={`/Product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={192}
                  className="w-full h-92 object-cover cursor-pointer"/>
              </Link>
              <h3
                className="text-3xl font-bold mt-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}>
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2 font-serif">{product.description}</p>
              <p className="text-purple-600 font-semibold text-lg font-serif">
                {product.price}
              </p>
              <Link href={`/Product/${product.id}`}>
                <button
                  className="mt-2 px-6 py-3 text-sm font-serif border border-purple-600 text-purple-600 bg-white 
                    hover:bg-purple-600 hover:text-white hover:border-white transition duration-300">
                  View
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
