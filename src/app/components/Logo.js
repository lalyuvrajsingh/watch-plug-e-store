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
        <img src="/IMG_1F648BE3B1BB-1.jpeg" alt="Logo" className=" h-52" />
      </motion.div>
    </div>
  );
};

export default Logo;