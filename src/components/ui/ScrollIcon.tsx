
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIconProps {
  onClick: () => void;
}

const ScrollIcon = ({ onClick }: ScrollIconProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer group"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div 
        className="w-12 h-12 rounded-full border-2 border-blion-purple flex items-center justify-center relative"
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown 
          size={24} 
          className="text-blion-purple group-hover:text-blion-purple-light transition-colors"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blion-purple/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIcon;
