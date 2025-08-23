import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "./Context/cartcontext";
import Chatbot from "./components/Chatbot";
import VoiceNavigation from "./components/VoiceNavigation"; 

export const metadata: Metadata = {
  title: "Perfume Store",
  description: "Perfume store with AI Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <VoiceNavigation /> 
        </CartProvider>
      </body>
    </html>
  );
}
