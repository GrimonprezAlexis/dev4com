import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [loadingText, setLoadingText] = useState("LOADING_SYSTEM");
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const texts = [
          "LOADING_SYSTEM",
          "INITIALIZING",
          "CONNECTING_DB",
          "LOADING_ASSETS",
          "FINALIZING",
        ];
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const increment = Math.random() * 15;
          const newProgress = prev + increment;
          setLoadingPercent(Math.min(Math.round(newProgress), 100));
          return newProgress >= 99 ? 100 : newProgress;
        });
      } else {
        setTimeout(() => {
          setShowLogo(false);
          setTimeout(() => onComplete(), 500);
        }, 800);
        clearInterval(timer);
      }
    }, 200);

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
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
            },
            number: { value: 100 },
            opacity: { value: 0.1 },
            size: { value: 1 },
          },
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-wider"
        >
          Solutions Web & Digital
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-400 text-lg mb-12"
        >
          Pour un avenir numérique
        </motion.p>

        {/* Loading Status */}
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span>{loadingText}</span>
            <span>{loadingPercent}%</span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-[2px] bg-gray-800 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading Lines */}
          <div className="space-y-2 text-[10px] font-mono text-gray-600">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.2 }}
                className="overflow-hidden whitespace-nowrap"
              >
                {"> "}
                {Array.from({ length: 32 })
                  .map(() => String.fromCharCode(65 + Math.random() * 26))
                  .join("")}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
      </div>
    </motion.div>
  );
};

export default Loader;
