import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Globe, Lightbulb } from 'lucide-react';

const ServiceItem: React.FC<{ 
  icon: React.ReactNode;
  title: string;
  delay: number;
}> = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="w-16 h-16 flex items-center justify-center text-white mb-2"
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.div>
      <p className="text-white text-sm">{title}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
          <ServiceItem 
            icon={<Code size={28} />} 
            title="Web" 
            delay={0.1}
          />
          <ServiceItem 
            icon={<ShoppingCart size={28} />} 
            title="E-commerce" 
            delay={0.2}
          />
          <ServiceItem 
            icon={<Globe size={28} />} 
            title="SaaS" 
            delay={0.3}
          />
          <ServiceItem 
            icon={<Lightbulb size={28} />} 
            title="Consulting" 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;