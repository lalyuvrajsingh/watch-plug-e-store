'use client'
import { useEffect } from 'react';

export default function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/watch-video/6837062-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">FineChrono</h1>
          <p className="text-2xl mb-8">Timeless Luxury & Elegance</p>
          <button 
            onClick={scrollToProducts}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
} 