"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from "../../Context/cartcontext";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  discount?: string;
}

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


export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  const handleHeartClick = () => setIsFavorite(!isFavorite);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <motion.section
      className="text-gray-600 body-font overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <div className="container px-4 md:px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto">
          <motion.div
            className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <Image
              alt={product.name}
              src={product.image}
              fill
              className="object-contain rounded-lg"/>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 font-serif" style={{ fontFamily: "'Dancing Script', cursive" }}>
              {product.name}
            </h1>

            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold">DESCRIPTION</legend>
              <p className="text-base sm:text-lg md:text-xl font-bold text-black font-serif">{product.description}</p>
            </fieldset>

            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold text-gray-500">PRICE</legend>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Rs.{product.price}</p>
            </fieldset>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-3 py-2 w-fit">
                <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">-</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-12 h-6 text-center border-none focus:outline-none" min="1" />
                <button onClick={() => setQuantity((prev) => prev + 1)} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">+</button>
              </div>

              <button onClick={handleHeartClick} className={`text-3xl focus:outline-none cursor-pointer ${isFavorite ? "text-pink-500 scale-110" : "text-pink-500"}`}>
                {isFavorite ? <FaHeart className="w-9 h-9" /> : <FaRegHeart className="w-9 h-9" />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
              <button onClick={handleAddToCart} className="flex-1 text-purple-600 border border-purple-600 bg-white py-3 font-serif hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300">Add to Cart</button>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="flex-1 min-w-[100px] text-yellow-600 border border-yellow-300 bg-white py-3 font-serif hover:bg-yellow-300 hover:text-white hover:border-white transition-colors duration-300">Jasmine</button>
              <button className="flex-1 min-w-[100px] text-red-600 border border-red-600 bg-white py-3 font-serif hover:bg-red-600 hover:text-white hover:border-white transition-colors duration-300">Rose</button>
              <button className="flex-1 min-w-[100px] text-purple-600 border border-purple-600 bg-white py-3 font-serif hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300">Orchid</button>
            </div>

            <AnimatePresence>
              {showPopup && (
                <motion.div
                  className="fixed inset-x-0 top-4 z-[9999] flex justify-center"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <div className="relative w-3/4 max-w-md p-4 bg-white/20 backdrop-blur-md border-2 border-purple-600 shadow-lg flex items-center justify-center">
                    <span className="absolute top-0 left-0 w-full h-1 bg-purple-600 rounded-t-xl"></span>
                    <span className="text-purple-600 font-semibold text-lg z-10">
                      Added to Cart!
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
