'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo/image_123650291.JPG"
        alt="FineChrono Logo"
        width={150}
        height={50}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
