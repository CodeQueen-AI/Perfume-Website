// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Dancing_Script } from "next/font/google";

// const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-6 md:translate-x-[40px] text-center md:text-left mx-auto md:mx-0">
//           <h1 className={`${dancingScript.className} text-5xl md:text-7xl font-bold text-gray-800 mt-1`}>
//             Discover the Luxury of <span className="text-purple-600">Every</span>Scent
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed font-serif">
//             Discover the world of luxury fragrances. Elegant, long-lasting, and crafted 
//             to make every moment unforgettable
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`${dancingScript.className} mt-6 px-8 py-5 relative text-purple-600 font-bold transition-all duration-300 ease-in-out 
//               w-auto max-w-xs overflow-hidden
//               before:absolute before:top-0 before:left-0 before:w-6 before:h-6 
//               before:border-t-4 before:border-l-4 before:border-purple-600 
//               before:transition-all before:duration-300
//               after:absolute after:bottom-0 after:right-0 before:z-10
//               after:w-6 after:h-6 after:border-b-4 after:border-r-4 after:border-purple-600 
//               after:transition-all after:duration-300
//               hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full
//               hover:before:delay-150 hover:after:delay-150 text-2xl font-serif`}>
//             Explore Collection
//           </motion.button>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="md:translate-x-[20px]">
//           <Image
//             src="/Home.png"
//             alt="Perfume"
//             width={450}
//             height={450}
//             className="object-contain"/>
//         </motion.div>
//       </div>
//     </main>
//   );
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 md:translate-x-[40px] text-center md:text-left mx-auto md:mx-0">
          
          {/* Heading */}
          <h1 className={`${dancingScript.className} text-5xl md:text-7xl font-bold text-gray-800 mt-1`}>
            Discover the Luxury of <span className="text-purple-600">Every</span>Scent
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed font-serif">
            Discover the world of luxury fragrances. Elegant, long-lasting, and crafted 
            to make every moment unforgettable
          </p>

          {/* Button with Link */}
          <Link href="/Product">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${dancingScript.className} cursor-pointer mt-6 px-8 py-5 relative text-purple-600 font-bold transition-all duration-300 ease-in-out 
                w-auto max-w-xs overflow-hidden
                before:absolute before:top-0 before:left-0 before:w-6 before:h-6 
                before:border-t-4 before:border-l-4 before:border-purple-600 
                before:transition-all before:duration-300
                after:absolute after:bottom-0 after:right-0 before:z-10
                after:w-6 after:h-6 after:border-b-4 after:border-r-4 after:border-purple-600 
                after:transition-all after:duration-300
                hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full
                hover:before:delay-150 hover:after:delay-150 text-2xl font-serif`}>
              Explore Collection
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:translate-x-[20px]">
          <Image
            src="/Home.png"
            alt="Perfume"
            width={450}
            height={450}
            className="object-contain"/>
        </motion.div>
      </div>
    </main>
  );
}
