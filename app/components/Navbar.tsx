// "use client";
// import { useState } from "react";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import { RiMenu3Fill } from "react-icons/ri";
// import { Dancing_Script } from "next/font/google";
// import Link from "next/link";
// import { useCart } from '../Context/cartcontext'

// const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["700"],
// });

// export default function Navbar() {
//   const { cartItems } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const links = ["Home", "Product", "About", "Contact"];

//   return (
//     <nav className="bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
//         <div className={`${dancing.className} text-3xl text-purple-800`}>AromaLux</div>
//         <ul className="hidden md:flex space-x-8 text-black text-lg font-serif justify-center absolute left-1/2 transform -translate-x-1/2">
//           {links.map((link) => (
//             <li key={link} className="relative cursor-pointer group">
//               <Link href={`/${link}`}>
//                 <span className="relative">
//                   {link}
//                   <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-6 text-xl">
//           <div className="md:hidden cursor-pointer">
//             <RiMenu3Fill className="text-2xl" onClick={() => setMenuOpen(true)} />
//           </div>
//           <Link href="/Cart" className="relative cursor-pointer">
//             <FaShoppingCart className="text-3xl" />
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-3 bg-purple-600 text-white font-bold rounded-full text-xs px-2 py-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       <div className="border-b border-gray-400 w-[95%] mx-auto"></div>

//       {menuOpen && (
//         <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center z-50">
//           <button
//             className="absolute top-6 right-6 text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(false)}>
//             <FaTimes />
//           </button>

//           <ul className="flex flex-col space-y-8 text-black text-3xl text-center">
//             {links.map((link) => (
//               <li
//                 key={link}
//                 onClick={() => setMenuOpen(false)}
//                 className="cursor-pointer relative group"
//               >
//                 <Link href={`/${link}`}>
//                   <span className={`${dancing.className} relative`}>
//                     {link}
//                     <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }









"use client";
import { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useCart } from "../Context/cartcontext";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className={`${dancing.className} text-3xl text-purple-800`}>
          <Link href="/">
          AromaLux
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black text-lg font-serif justify-center absolute left-1/2 transform -translate-x-1/2">
          <li className="relative cursor-pointer group">
            <Link href="/">
              <span className="relative">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/Product">
              <span className="relative">
                Product
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/About">
              <span className="relative">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer group">
            <Link href="/Contact">
              <span className="relative">
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>

        {/* Cart + Mobile Menu Icon */}
        <div className="flex items-center space-x-6 text-xl">
          <div className="md:hidden cursor-pointer">
            <RiMenu3Fill
              className="text-2xl"
              onClick={() => setMenuOpen(true)}
            />
          </div>
          <Link href="/Cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-3xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-3 bg-purple-600 text-white font-bold rounded-full text-xs px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-400 w-[95%] mx-auto"></div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex flex-col justify-center items-center z-50">
          <button
            className="absolute top-6 right-6 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col space-y-8 text-black text-3xl text-center">
            <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
              <Link href="/">
                <span className={`${dancing.className} relative`}>
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
              <Link href="/Product">
                <span className={`${dancing.className} relative`}>
                  Product
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
              <Link href="/About">
                <span className={`${dancing.className} relative`}>
                  About
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className="cursor-pointer relative group">
              <Link href="/Contact">
                <span className={`${dancing.className} relative`}>
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
