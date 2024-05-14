'use client'
import { useEffect, useState } from 'react';

const Logo = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000); // 2 seconds animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-white h-screen flex justify-center items-center'>
    <div
      className={`w-29 h-29 rounded-full flex items-center justify-center
        ${isAnimating ? 'animate-bounce' : ''}`}
    >
    <img src="/Screenshot 2024-05-02 at 8.44.27 AM.png" />
      {/* <svg
        className="w-16 h-16 text-white"
        xmlns="/Screenshot 2024-05-02 at 8.44.27 AM.png"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg> */}
    </div>
    </div>
  );
};

export default Logo;