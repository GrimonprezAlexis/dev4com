import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  const text = "Solutions Digitales Pour Votre Succès";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length && showText) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      const timeout = setTimeout(() => {
        setShowText(false);
        setShowLogo(true);
      }, 1300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, showText]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = prev + (100 - prev) * 0.1;
          return newProgress >= 99 ? 100 : newProgress;
        });
      } else {
        setTimeout(() => {
          setShowLogo(false);
          setTimeout(() => onComplete(), 700);
        }, 800);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#000000" },
          particles: {
            color: { value: "#00f0ff" },
            links: { enable: true, color: "#00f0ff" },
            move: { enable: true, speed: 0.6 },
            size: { value: 1.5 },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#151515,_#000000)] opacity-60 z-0" />

      {/* Animated scanning light */}
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent animate-pulse z-10" />

      <AnimatePresence mode="wait">
        {showText && (
          <motion.div
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#AA5EFF] via-[#605DFF] to-[#00F0FF] animate-pulse relative z-10"
          >
            {displayText}
          </motion.div>
        )}

        {showLogo && (
          <motion.div
            key="logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            className="mb-8 w-32 h-32 relative flex items-center justify-center z-10"
          >
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#AA5EFF] via-[#605DFF] to-[#00F0FF] blur-2xl opacity-40"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            />
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden shadow-md shadow-cyan-500/30 relative z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#AA5EFF] via-[#605DFF] to-[#00F0FF]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
