'use client'
import { useEffect, useState } from 'react';
import styles from '../globals.css'



import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <img src="/Screenshot 2024-05-02 at 8.44.27 AM.png" alt="Logo" className=" h-32" />
      </motion.div>
    </div>
  );
};

export default Logo;