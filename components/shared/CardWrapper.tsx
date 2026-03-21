'use client';

import { motion } from 'framer-motion';

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default CardWrapper;
