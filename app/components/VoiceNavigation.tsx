"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VscRobot } from "react-icons/vsc";

export default function VoiceNavigation() {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [showHey, setShowHey] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = false;
    recog.lang = "en-US";
    setRecognition(recog);
  }, []);

  const speak = (text: string, callback?: () => void) => {
    if (!("speechSynthesis" in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 1;
    utter.pitch = 1;
    utter.onend = () => {
      if (callback) callback();
    };
    window.speechSynthesis.speak(utter);
  };

  const startListening = () => {
    if (!recognition) return;

    // Show Hey message when robot clicked
    setShowHey(true);

    const welcomeMessage = `
      Hey! Welcome to our perfume page.
      Here you can find details about our perfumes in the About section,
      and contact the owner directly if you want to order something cool.
      Online payment options are available for a smooth shopping experience.
    `;

    speak(welcomeMessage, () => {
      recognition.start();
      setListening(true);

      recognition.onresult = (ev: any) => {
        const transcript = ev.results[0][0].transcript.toLowerCase().trim();
        console.log("Heard:", transcript);

        if (transcript.includes("scroll down")) {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          speak("Scrolling to bottom");
        } else if (transcript.includes("scroll up") || transcript.includes("go to top")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          speak("Going to top");
        } else if (transcript.includes("reload page")) {
          speak("Reloading page");
          window.location.reload();
        } else if (transcript.includes("home")) {
          router.push("/Home");
          speak("Navigating to Home");
        } else if (transcript.includes("about")) {
          router.push("/About");
          speak("Navigating to About");
        } else if (transcript.includes("contact")) {
          router.push("/Contact");
          speak("Navigating to Contact");
        } else if (transcript.includes("product")) {
          router.push("/Product");
          speak("Navigating to Product");
        } else {
          speak("Command not recognized.");
        }

        setListening(false);
      };

      recognition.onend = () => setListening(false);
      recognition.onerror = (e: any) => {
        console.error("Recognition error", e);
        setListening(false);
      };
    });
  };

  return (
    <>
      <div className="fixed top-24 right-6 z-50"> {/* robot moved slightly lower */}
        <motion.div
          whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
          animate={{ y: [0, -5, 0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={startListening} // click to start
          className={`cursor-pointer text-7xl p-2 rounded-full shadow-lg ${
            listening ? "text-red-500" : "text-purple-500"
          }`}
        >
          <VscRobot />
        </motion.div>
      </div>

      {showHey && (
        <div className="fixed top-40 right-6 z-50 bg-white text-black p-3 rounded shadow-lg flex items-center gap-2">
          <span>👋 Hey!</span>
        </div>
      )}
    </>
  );
}
