import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Clock, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, value: "50+", label: "Clients Satisfaits" },
    { icon: <Trophy size={24} />, value: "100+", label: "Projets Réalisés" },
    { icon: <Clock size={24} />, value: "5+", label: "Années d'Expérience" },
    { icon: <Sparkles size={24} />, value: "24/7", label: "Support Client" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen pt-20 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Notre Histoire
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Depuis notre création, nous nous efforçons de repousser les limites du développement web
            et des solutions digitales. Notre passion pour l'innovation et notre engagement envers
            l'excellence nous ont permis de devenir un leader dans notre domaine.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/40 backdrop-blur-md p-6 rounded-xl text-center border border-white/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nous croyons en la création de solutions digitales qui non seulement répondent aux besoins
              actuels de nos clients, mais anticipent également leurs besoins futurs. Notre approche
              combine créativité, expertise technique et compréhension approfondie des objectifs commerciaux.
            </p>
            <ul className="space-y-4">
              {[
                "Développement web sur mesure",
                "Solutions e-commerce innovantes",
                "Applications SaaS évolutives",
                "Conseil en transformation digitale"
              ].map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="relative h-[400px] rounded-xl overflow-hidden"
            variants={itemVariants}
          >
            <motion.img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
              alt="Notre équipe"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;