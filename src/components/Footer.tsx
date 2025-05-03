import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <motion.p 
          className="text-gray-500 text-sm mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mentions légales
        </motion.p>
        
        <div className="flex space-x-4">
          <motion.a 
            href="#" 
            className="text-gray-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, color: '#ffffff' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;