import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-40 py-4 px-6 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <motion.div
            className="w-16 h-16 relative"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/projects"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Projets
          </Link>
          <Link
            to="/services"
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/services"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/contact"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className={`text-sm font-medium transition-colors ${
              location.pathname === "/admin"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Admin
          </Link>
        </nav>

        <div className="flex space-x-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
