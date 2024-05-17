'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // This controls the dropdown menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // This controls the mobile menu

  return (
      <nav className="bg-white border-b-4 border-gray-900 border-opacity-50 py-5 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                  <div className="flex space-x-4">
                      <div>
                          <Link href="/" className="flex items-center">
                            
                                  <img src="/IMG_2D6D8B9531AC-1.jpeg" className='h-10' alt="Logo"/>
                            
                          </Link>
                      </div>
                      <div className="hidden md:flex items-center space-x-1">
                          <Link href="/" className="px-2 text-gray-500 font-semibold">
                              Home
                          </Link>
                          <div className="relative">
                              <button onClick={() => setIsOpen(!isOpen)} className="px-2 text-gray-500 font-semibold inline-flex items-center">
                                  Categories
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                  </svg>
                              </button>
                              {isOpen && (
                                  <div className="absolute bg-gray-100 shadow-2xl py-5 border border-gray-200 rounded-xl z-50 w-52">
                                      <Link href="/watch" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400 transition-colors ease-in-out">Watches</Link>
                                      <Link href="/purse" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400 transition-colors ease-in-out">Purses</Link>
                                      <Link href="/merch" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400 transition-colors ease-in-out">Merch</Link>
                                  </div>
                              )}
                          </div>
                          <Link href="/contact" className="px-2 text-gray-500 font-semibold">
                              Contact
                          </Link>
                      </div>
                  </div>
                  <div className="md:hidden flex items-center">
                      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="outline-none mobile-menu-button">
                          <svg className="w-6 h-6 text-gray-500 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
          {isMobileMenuOpen && (
              <div className="mobile-menu md:hidden">
                  <ul>
                      <li><Link href="/" className="block text-sm px-4 py-4 text-gray-700 bg-gray-200 hover:bg-gray-300">Home</Link></li>
                      <li><Link href="watch" className="block text-sm px-4 py-4 text-gray-700 bg-gray-200 hover:bg-gray-300">Watches</Link></li>
                      <li><Link href="purse" className="block text-sm px-4 py-4 text-gray-700 bg-gray-200 hover:bg-gray-300">Purses</Link></li>
                      <li><Link href="merch" className="block text-sm px-4 py-4 text-gray-700 bg-gray-200 hover:bg-gray-300">Merch</Link></li>
                      <li><Link href="/contact" className="block text-sm px-4 py-4 text-gray-700 bg-gray-200 hover:bg-gray-300">Contact</Link></li>
                  
                  </ul>
              </div>
          )}
      </nav>
  );
}

