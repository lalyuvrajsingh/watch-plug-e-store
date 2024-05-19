'use client'
import { useEffect, useState } from 'react';
import styles from '../globals.css'
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(false), 3000); // 3 seconds before fade out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
          >
            <img src="/IMG_2D6D8B9531AC-1.jpeg" alt="Logo" className="h-52" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;
