'use client';

import { motion } from 'framer-motion';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
