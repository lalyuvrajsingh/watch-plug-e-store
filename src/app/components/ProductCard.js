'use client'
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { FaInstagram } from 'react-icons/fa';  
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="border hover:shadow-xl transition-shadow ease-in-out rounded-2xl h-full flex flex-col bg-white">
        <div className="w-full relative p-2">
          <img 
            src={product.coverImage} 
            alt={product.name} 
            className="w-full h-[300px] md:h-[150px] sm:h-[150px] lg:h-[100px] object-contain"
          />
        </div>
        <div className="p-3 flex flex-col items-center text-center">
          <h3 className="text-sm sm:text-md text-gray-500 truncate w-full">{product.brand}</h3>
          <h3 className="text-sm sm:text-lg font-semibold truncate w-full">{product.name}</h3>
          <p className="text-gray-700 text-sm sm:text-base">${product.sellingPrice}</p>
          <button className="hidden sm:block mt-2 w-full border border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out text-gray-400 font-medium text-sm sm:text-base py-1.5 px-3">
            Check Our Selling Price
          </button>
        </div>
      </div>
    </Link>
  );
}
  