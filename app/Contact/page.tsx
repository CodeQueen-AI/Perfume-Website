"use client";
import { useState, useEffect } from "react";
import {  FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        access_key: "acc66923-26e8-4083-aa6b-d948f0e61645", 
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message."));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pink-200 via-white to-purple-250 p-8 md:p-16">
      <motion.div
        className="md:w-1/2 flex flex-col justify-start pr-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-7xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          <span className="text-purple-900">Contact</span> Us
        </h2>
        <p className="mb-6 font-serif">
          We'd love to hear from you! Reach out to us with any questions or comments
        </p>

        <div className="mb-6 space-y-3 font-serif">
          <p className="flex items-center"><FaEnvelope className="mr-2" />codeq209@gmail.com</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2"/>Karachi , Pakistan</p>
        </div>

        <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>Socials</h3>
        {/* <div className="flex space-x-4">
          {[FaLinkedin , FaGithub].map((Icon, idx) => (
            <a key={idx} href="#" className="flex items-center justify-center w-8 h-8 border-2 border-purple-600 text-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-colors">
              <Icon />
            </a>
          ))}
        </div> */}
        <div className="flex space-x-4">
  <a
    href="https://www.linkedin.com/in/codequeen-ai23/"
    className="flex items-center justify-center w-8 h-8 border-2 border-purple-600 text-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-colors"
  >
    <FaLinkedin />
  </a>

  <Link
    href="https://github.com/CodeQueen-AI"
    className="flex items-center justify-center w-8 h-8 border-2 border-purple-600 text-purple-600 rounded-full bg-white hover:bg-purple-600 hover:text-white transition-colors"
  >
    <FaGithub />
  </Link>
</div>

      </motion.div>
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1 flex flex-col">
              <label className="mb-2 font-serif">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-purple-900"/>
            </div>

            <div className="flex-1 flex flex-col mt-4 md:mt-0">
              <label className="mb-2 font-serif">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required
                className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-purple-900"/>
            </div>
          </div>

          <label className="mb-2 font-serif">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required
            rows={6} className="mb-6 px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-purple-900"/>

          <button type="submit" className="w-full md:w-1/2 mx-auto bg-purple-700 text-white py-3 hover:bg-purple-900 transition-colors">
            Submit
          </button>

          {status && <p className="mt-4 text-center text-purple-800">{status}</p>}
        </form>
      </motion.div>
    </div>
  );
}
