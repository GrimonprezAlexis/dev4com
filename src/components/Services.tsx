import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BotIcon,
  Code,
  Globe,
  Lightbulb,
  Music,
  PenTool,
  ShoppingCart,
  ExternalLink,
} from "lucide-react";

interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  category: string;
  description: string[];
  image: string;
  delay: number;
}

const services: Service[] = [
  {
    id: "1",
    icon: <Code size={28} />,
    title: "Site Web Moderne",
    category: "Développement Web",
    description: [
      "Maquette gratuite avant engagement",
      "Solutions clé en main avec back office d'administration",
      "Sites responsive et optimisés pour tous les appareils",
    ],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.1,
  },
  {
    id: "2",
    icon: <ShoppingCart size={28} />,
    title: "E-commerce",
    category: "Solutions E-commerce",
    description: [
      "Plateforme de vente en ligne personnalisée",
      "Gestion des stocks et commandes",
      "Intégration des solutions de paiement",
    ],
    image:
      "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.2,
  },
  {
    id: "3",
    icon: <BotIcon size={28} />,
    title: "Automatisation IA",
    category: "Intelligence Artificielle",
    description: [
      "Formulaires de contact automatisés sur CRM",
      "Système de réservation en ligne",
      "Workflows d'automatisation IA",
    ],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.3,
  },
  {
    id: "4",
    icon: <Globe size={28} />,
    title: "Optimisation SEO",
    category: "Marketing Digital",
    description: [
      "Boost présence en ligne et acquisition client",
      "Visibilité locale renforcée",
      "Excellent retour sur investissement",
      "Optimisation des avis Google Business",
    ],
    image:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.4,
  },
  {
    id: "5",
    icon: <PenTool size={28} />,
    title: "Identité Visuelle",
    category: "Design",
    description: [
      "Design de contenu pour réseaux sociaux",
      "Cartes de visite, flyers et QR codes",
      "Création ou refonte de logo",
    ],
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.5,
  },
  {
    id: "6",
    icon: <Lightbulb size={28} />,
    title: "Consulting",
    category: "Conseil",
    description: [
      "Audit de votre présence digitale",
      "Stratégie de développement web",
      "Conseils personnalisés",
    ],
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.6,
  },
  {
    id: "7",
    icon: <PenTool size={28} />,
    title: "Maintenance & Support",
    category: "Support",
    description: [
      "Maintenance gratuite pendant 1 an",
      "Formation à l'utilisation des outils",
      "Support technique dédié",
    ],
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.7,
  },
  {
    id: "8",
    icon: <Music size={28} />,
    title: "Playlist Personnalisée",
    category: "Audio",
    description: [
      "Création d'une playlist musicale personnalisée",
      "Ambiance sonore adaptée à votre marque",
      "Mise à jour régulière",
    ],
    image:
      "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1920",
    delay: 0.8,
  },
];

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen pt-24 pb-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto">
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions digitales innovantes pour propulser votre entreprise
            vers le succès. Découvrez notre gamme complète de services
            personnalisés.
          </p>
        </motion.div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher un service..."
            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layoutId={service.id}
              onClick={() => setSelectedId(service.id)}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden cursor-pointer group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full p-2">
                  <div className="text-blue-400">{service.icon}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <span className="text-sm text-blue-400">
                      {service.category}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>

                <ul className="space-y-2">
                  {service.description.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-400 text-sm flex items-start space-x-2"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={selectedId}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {services.find((s) => s.id === selectedId) && (
                  <div>
                    <div className="relative h-64">
                      <motion.img
                        src={services.find((s) => s.id === selectedId)!.image}
                        alt={services.find((s) => s.id === selectedId)!.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex justify-center mb-4">
                            <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
                              {services.find((s) => s.id === selectedId)!.icon}
                            </div>
                          </div>
                          <h2 className="text-3xl font-bold">
                            {services.find((s) => s.id === selectedId)!.title}
                          </h2>
                          <p className="text-blue-400 mt-2">
                            {
                              services.find((s) => s.id === selectedId)!
                                .category
                            }
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <ul className="space-y-4 mb-6">
                        {services
                          .find((s) => s.id === selectedId)!
                          .description.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                      </ul>

                      <div className="flex justify-between items-center">
                        <Link to="/contact">
                          <motion.button
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Demander un devis
                          </motion.button>
                        </Link>
                        <button
                          onClick={() => setSelectedId(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="mt-16 text-center" variants={cardVariants}>
          <Link to="/contact">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer votre projet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
