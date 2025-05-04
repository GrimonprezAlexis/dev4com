import { motion } from "framer-motion";
import {
  BotIcon,
  Code,
  Globe,
  Lightbulb,
  Music,
  PenTool,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string[];
  delay: number;
}

const services: Service[] = [
  {
    icon: <Code size={28} />,
    title: "Site Web Moderne",
    description: [
      "Maquette gratuite avant engagement",
      "Solutions clé en main avec back office d'administration",
      "Sites responsive et optimisés pour tous les appareils",
    ],
    delay: 0.1,
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce",
    description: [
      "Plateforme de vente en ligne personnalisée",
      "Gestion des stocks et commandes",
      "Intégration des solutions de paiement",
    ],
    delay: 0.2,
  },
  {
    icon: <BotIcon size={28} />,
    title: "Automatisation IA",
    description: [
      "Formulaires de contact automatisés sur CRM",
      "Système de réservation en ligne",
      "Workflows d'automatisation IA",
    ],
    delay: 0.3,
  },
  {
    icon: <Globe size={28} />,
    title: "Optimisation SEO",
    description: [
      "Boost présence en ligne et acquisition client",
      "Visibilité locale renforcée",
      "Excellent retour sur investissement",
      "Optimisation des avis Google Business",
    ],
    delay: 0.8,
  },
  {
    icon: <PenTool size={28} />,
    title: "Identité Visuelle",
    description: [
      "Design de contenu pour réseaux sociaux",
      "Cartes de visite, flyers et QR codes",
      "Création ou refonte de logo",
    ],
    delay: 0.2,
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Consulting",
    description: [
      "Audit de votre présence digitale",
      "Stratégie de développement web",
      "Conseils personnalisés",
    ],
    delay: 0.4,
  },
  {
    icon: <PenTool size={28} />,
    title: "Maintenance & Support",
    description: [
      "Maintenance gratuite pendant 1 an",
      "Formation à l'utilisation des outils",
      "Support technique dédié",
    ],
    delay: 1.0,
  },
  {
    icon: <Music size={28} />,
    title: "Playlist Personnalisée",
    description: [
      "Création d'une playlist musicale personnalisée",
      "Ambiance sonore adaptée à votre marque",
      "Mise à jour régulière",
    ],
    delay: 0.4,
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div
    className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: service.delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3">
          {service.description.map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-gray-300"
            >
              <CheckCircle2
                size={18}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        className="mt-6 w-full bg-blue-500/10 text-blue-400 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-500/20 transition-colors group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>En savoir plus</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </motion.button>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions digitales innovantes pour propulser votre entreprise
            vers le succès. Découvrez notre gamme complète de services
            personnalisés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
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
    </div>
  );
};

export default Services;
