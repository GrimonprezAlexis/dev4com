import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = prev + (100 - prev) * 0.1;
          return newProgress >= 99 ? 100 : newProgress;
        });
      } else {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 w-16 h-16 relative"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
