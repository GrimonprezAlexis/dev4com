import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ShoppingCart, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const projects = [
    {
      id: '1',
      title: 'E-commerce Premium',
      category: 'E-commerce',
      description: 'Plateforme e-commerce haut de gamme avec gestion de stock en temps réel et paiement sécurisé.',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <ShoppingCart size={24} />,
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: '2',
      title: 'Application SaaS',
      category: 'Web App',
      description: 'Solution SaaS pour la gestion de projet avec analytics avancés et intégration API.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Globe size={24} />,
      tech: ['Vue.js', 'Express', 'MongoDB'],
    },
    {
      id: '3',
      title: 'Site Vitrine Dynamique',
      category: 'Web Design',
      description: 'Site web moderne avec animations fluides et design responsive personnalisé.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Code size={24} />,
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
  ];

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
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Nos Réalisations
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez nos projets les plus récents et innovants, 
            démontrant notre expertise en développement web et solutions digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden cursor-pointer group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full p-2">
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              {projects.find(p => p.id === selectedId) && (
                <div>
                  <div className="relative h-64">
                    <motion.img
                      src={projects.find(p => p.id === selectedId)!.image}
                      alt={projects.find(p => p.id === selectedId)!.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">
                      {projects.find(p => p.id === selectedId)!.title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {projects.find(p => p.id === selectedId)!.description}
                    </p>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;