"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Window size update for confetti
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      {/* Infinite Confetti */}
      <Confetti width={windowSize.width} height={windowSize.height} recycle={true} numberOfPieces={200} />

      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1
        className="text-7xl font-bold mb-2"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Payment Successful!
      </h1>
      <p className="font-serif mb-6">
        Thank you for your purchase. Your payment has been completed successfully.
      </p>
    </div>
  );
}
