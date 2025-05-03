import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Services from "./components/Services";
import Footer from "./components/Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    document.title = "DEV4COM - Développement Web & Digital Solutions";

    const timer = setTimeout(() => {
      setAppLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <Router>
      <div className="tech-pattern-bg min-h-screen text-white">
        {loading && <Loader onComplete={handleLoaderComplete} />}

        <div
          className={`transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Header />
          <main>
            <AnimatedRoutes />
            <Services />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
