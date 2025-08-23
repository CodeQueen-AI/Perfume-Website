// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ProductCollection() {
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.2 },
//     },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };
//   const products = [
//     { id: 1, name: "Vera Wang", desc: "A rich and enchanting oud fragrance for special occasions.", price: "$120", image: "/Collection1.jpg", discount: "20% OFF" },
//     { id: 2, name: "Amber Mystique", desc: "Warm amber tones with a subtle hint of floral notes.", price: "$95", image: "/Collection2.jpg" },
//     { id: 3, name: "Mystic Oud", desc: "Deep and long-lasting oud fragrance perfect for evenings.", price: "$110", image: "/Collection3.jpg", discount: "15% OFF" },
//     { id: 4, name: "Velvet Rose", desc: "Soft rose aroma blended with subtle woody notes.", price: "$85", image: "/Collection4.jpg" },
//   ];
//   return (
//     <main className="min-h-screen bg-white px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8 }}>
//           <p className="text-7xl text-black" style={{ fontFamily: "'Dancing Script', cursive" }}>
//             Top <span className="text-purple-600">Collection</span>
//           </p>
//           <p className="text-gray-800 leading-relaxed text-xl max-w-md sm:max-w-xl font-serif">
//             This collection is crafted to awaken tired, dull complexions with gentle, glow-enhancing formulas that hydrate, soften, and revive. From radiant serums to nourishing moisturizers, each product is part of a quiet, intentional ritual — created to help you feel like your best, brightest self.
//           </p>
//         </motion.div>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {products.map((product) => (
//             <motion.div
//               key={product.id}
//               className="flex flex-col h-full bg-white"
//               variants={itemVariants}>
//               <div className="relative flex-1">
//                 {product.discount && (
//                   <span className="absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 -rotate-12">
//                     {product.discount}
//                   </span>)}
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={192}
//                   className="w-full h-92 object-cover"/>
//               </div>
//               <div className="mt-2 flex-1 flex flex-col justify-between">
//                 <h3 className="text-3xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>{product.name}</h3>
//                 <p className="text-gray-600 text-sm mb-2 font-serif">{product.desc}</p>
//                 <p className="text-purple-600 font-semibold text-lg font-serif">{product.price}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </main>
//   );
// }















"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductCollection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-7xl text-black"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Top <span className="text-purple-600">Collection</span>
          </p>
          <p className="text-gray-800 leading-relaxed text-xl max-w-md sm:max-w-xl font-serif">
            This collection is crafted to awaken tired, dull complexions with
            gentle, glow-enhancing formulas that hydrate, soften, and revive.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Product 1 */}
          <Link href="/Product/1">
            <motion.div
              className="flex flex-col h-full bg-white cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <span className="absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 -rotate-12">
                  20% OFF
                </span>
                <Image
                  src="/Collection1.jpg"
                  alt="Vera Wang"
                  width={300}
                  height={192}
                  className="w-full h-92 object-cover"
                />
              </div>
              <div className="mt-2 flex-1 flex flex-col justify-between">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Vera Wang
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-serif">
                  A rich and enchanting oud fragrance for special occasions.
                </p>
                <p className="text-purple-600 font-semibold text-lg font-serif">
                  400
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Product 2 */}
          <Link href="/Product/2">
            <motion.div
              className="flex flex-col h-full bg-white cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <Image
                  src="/Collection2.jpg"
                  alt="Amber Mystique"
                  width={300}
                  height={192}
                  className="w-full h-92 object-cover"
                />
              </div>
              <div className="mt-2 flex-1 flex flex-col justify-between">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Amber Mystique
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-serif">
                  Warm amber tones with a subtle hint of floral notes.
                </p>
                <p className="text-purple-600 font-semibold text-lg font-serif">
                  300
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Product 3 */}
          <Link href="/Product/3">
            <motion.div
              className="flex flex-col h-full bg-white cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <span className="absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 -rotate-12">
                  15% OFF
                </span>
                <Image
                  src="/Collection3.jpg"
                  alt="Mystic Oud"
                  width={300}
                  height={192}
                  className="w-full h-92 object-cover"
                />
              </div>
              <div className="mt-2 flex-1 flex flex-col justify-between">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Mystic Oud
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-serif">
                  Deep and long-lasting oud fragrance perfect for evenings.
                </p>
                <p className="text-purple-600 font-semibold text-lg font-serif">
                  500
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Product 4 */}
          <Link href="/Product/4">
            <motion.div
              className="flex flex-col h-full bg-white cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <Image
                  src="/Collection4.jpg"
                  alt="Velvet Rose"
                  width={300}
                  height={192}
                  className="w-full h-92 object-cover"
                />
              </div>
              <div className="mt-2 flex-1 flex flex-col justify-between">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Velvet Rose
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-serif">
                  Soft rose aroma blended with subtle woody notes.
                </p>
                <p className="text-purple-600 font-semibold text-lg font-serif">
                  250
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
