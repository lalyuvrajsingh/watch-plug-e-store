'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

const Logo = () => {
  const { isLoading, setIsLoading } = useLoading();
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-20 h-20 bg-white rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Logo;
