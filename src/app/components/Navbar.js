'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar(){

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border border-b-4 border-b-gray-900 border-opacity-50 py-5  shadow-md">
      <div className="max-w-6xl ">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            
            <a href="#" className="flex ml-5 align-middle justify-center ">
                {/* <span className="font-semibold text-gray-500 text-lg">Luxury Watches</span> */}
                <img src="/Screenshot 2024-05-02 at 8.44.27 AM.png" className='h-10' alt="" />
            </a>
            
            
            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="px-2 text-gray-500 font-semibold">Home</a>
              <div className="relative">
                
                <button className="px-2 text-gray-500 font-semibold inline-flex items-center" onClick={() => setIsOpen(!isOpen)}>
                  Categories <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
              
                <div className={`${isOpen ? 'block' : 'hidden'} absolute bg-gray-100 shadow-2xl py-5 border border-gray-200 rounded-xl z-50 w-52`}>
                  <a href="#" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400 transition-colors ease-in-out">Watches</a>
                  <a href="#" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400">Purses</a>
                  <a href="#" className="block px-4 py-2 text-md font-bold text-gray-700 hover:text-gray-400">Merch</a>
                </div>
              </div>
              <a href="" className="px-2 text-gray-500 font-semibold">About</a>
              <a href="" className="px-2 text-gray-500 font-semibold">Contact</a>
            </div>

            
            <input type="search" placeholder="Search..." className=" p-2 text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-black focus:border-gray-500"/>
            

          </div>

        

          
         
          {/* <div className="hidden md:flex items-center space-x-3 ">
            <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 transition duration-300">Log In</a>
            <a href="" className="py-2 px-2 font-medium text-black  rounded transition duration-300">Sign Up</a>
          </div> */}
          
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Services</a></li>
          <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
          <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
      
    </nav>
  )
}

