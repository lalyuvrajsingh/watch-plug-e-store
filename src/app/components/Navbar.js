'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);
      
      // Show navbar when scrolling up or at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isAtTop 
        ? 'bg-transparent' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className={`
          mx-4 my-2 
          ${isAtTop 
            ? 'rounded-full border border-gray-500/20 bg-black/30' 
            : 'rounded-full border border-gray-500/10 bg-black/50'
          } 
          transition-all duration-300
          px-6 py-3
          backdrop-blur-sm
          z-50
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <h1 className="text-3xl text-white font-bold">FineChrono</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/watch">Timepieces</NavLink>
              <NavLink href="/purse">Leather Goods</NavLink>
              <NavLink href="/merch">Accessories</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Theme Toggle and Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <FaSearch className={`w-5 h-5 ${isAtTop ? 'text-white' : 'text-gray-700 dark:text-white'}`} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${isAtTop ? 'text-white' : 'text-gray-700'}`}
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden 
          fixed top-[4.5rem] left-0 right-0
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          z-40
        `}>
          <div className="mx-4 p-4 space-y-3 bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-500/20">
            <MobileNavLink href="/watch">Timepieces</MobileNavLink>
            <MobileNavLink href="/purse">Leather Goods</MobileNavLink>
            <MobileNavLink href="/merch">Accessories</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <div className="flex items-center justify-between pt-3 border-t border-gray-500/20">
              <ThemeToggle />
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <FaSearch className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, children }) => (
  <Link 
    href={href} 
    className={`
      relative 
      text-sm font-medium 
      transition-colors duration-300
      text-white hover:text-gray-300
      after:content-['']
      after:absolute
      after:w-0
      after:h-[2px]
      after:bottom-[-4px]
      after:left-0
      after:bg-gray-400
      after:transition-all
      after:duration-300
      hover:after:w-full
      z-50
    `}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link 
    href={href} 
    className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
  >
    {children}
  </Link>
);

