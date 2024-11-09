'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FloatingImage = ({ className, src, alt = "", parallaxSpeed = 0.01 }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother animation
      animationFrameId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY
        setOffset(scrollPosition * parallaxSpeed)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [parallaxSpeed])

  return (
    <div 
      className={`absolute rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-xl ${className}`}
      style={{ 
        transform: `translateY(${offset}px)`,
        transition: 'none' // Remove transition delay
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

export default function HeroGallery() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-black/70 via-black/50 to-black/20 z-[5] pointer-events-none" />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-[900px] px-8">
        <h1 className="text-[4.5rem] font-normal leading-tight mb-12 tracking-[-0.02em] text-white/95 md:text-[3.5rem] md:mb-8">
          Timeless Elegance<br />Modern Legacy
        </h1>
        <button 
          onClick={scrollToProducts}
          className="inline-block px-10 py-4 text-xl font-medium text-black bg-white rounded-full hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] transition-all duration-300 active:translate-y-0 shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
        >
          Explore
        </button>
      </div>

      {/* Floating Images with different parallax speeds */}
      <FloatingImage 
        src="/watch-image/25541993-502d-46db-9657-484ef46085dd.jpeg"
        className="w-[200px] h-[250px] top-[-1%] left-[23%] opacity-90"
        parallaxSpeed={0.02}
      />
      <FloatingImage 
        src="/watch-image/Sylvester Stallone and his Tiffany & Co Rolex Submariner.jpeg"
        className="w-[150px] h-[180px] top-[1%] right-[10%] opacity-90"
        parallaxSpeed={-0.01}
      />
      <FloatingImage 
        src="/watch-image/Colorful Luxe Collectio.jpeg"
        className="w-[200px] h-[300px] left-[-11%] top-[38%] -translate-y-1/2 opacity-90"
        parallaxSpeed={0.04}
      />
      <FloatingImage 
        src="/watch-image/Exquisite and stylish watch, mens summer fashion.jpeg"
        className="w-[200px] h-[300px] right-[-12%] top-[50%] -translate-y-1/2 opacity-90"
        parallaxSpeed={-0.1}
      />
      <FloatingImage 
        src="/watch-image/Limited Edition Richard Mille RM 57-03 Tourbillon Sapphire Dragon for Asia Only.jpeg"
        className="w-[250px] h-[250px] bottom-[-4%] left-[17%] opacity-90"
        parallaxSpeed={0.1}
      />
      <FloatingImage 
        src="/watch-image/Luxury Watches in Dubai 🕰️✨.jpeg"
        className="w-[200px] h-[200px] bottom-[-1%] right-[15%] opacity-90"
        parallaxSpeed={-0.05}
      />
      <FloatingImage 
        src="/watch-image/pexels-pratik-prasad-3736245-14778525.jpg"
        className="w-[95px] h-[95px] bottom-[38%] left-[56%] opacity-45"
        parallaxSpeed={0.02}
      />
      <FloatingImage 
        src="/watch-image/25541993-502d-46db-9657-484ef46085dd.jpeg"
        className="w-[95px] h-[95px] bottom-[50%] left-[48%] opacity-45"
        parallaxSpeed={-0.02}
      />
      <FloatingImage 
        src="/watch-image/best men's watches on amazon.jpeg"
        className="w-[110px] h-[110px] bottom-[78%] left-[55%] opacity-45"
        parallaxSpeed={0.02}
      />
    </section>
  )
} 