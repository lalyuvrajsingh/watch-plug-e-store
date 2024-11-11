'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLoading } from '../context/LoadingContext';

const Logo = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [isMobile, setIsMobile] = useState(false);
  const text = "FineChrono";
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [setIsLoading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

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
            key="loader"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center perspective-1000 px-4"
          >
            <motion.div className="flex items-center justify-center space-x-[0.15rem] md:space-x-2">
              {text.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`${
                    isMobile 
                      ? 'text-4xl md:text-5xl' 
                      : 'text-6xl md:text-7xl'
                  } font-bold text-white inline-block transform-gpu`}
                  style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { delay: 1.5, duration: 0.8 }
              }}
              className="h-0.5 bg-white mt-4 md:mt-6 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Logo;
