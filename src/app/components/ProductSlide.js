'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import ProductCard from './ProductCard';  // Ensure this component is correctly imported

export default function ProductSlide({ category }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      const fetchProducts = async () => {
        const colRef = collection(db, 'products'); // Ensure colRef is defined within this block
        let q;
        if (category) {
          q = query(colRef, where('category', '==', category));
        } else {
          q = query(colRef);
        }
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
      };
  
      fetchProducts();
    }, [category]);
  



  return (
    <div className="relative">
      {/* Container for Desktop and Tablets (hidden on small screens) */}
      <div className="hidden sm:flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
        {products.map(product => (
          <div key={product.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Container for Mobile (always visible but more prominent on small screens) */}
      <div className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
        {products.map(product => (
          <div key={product.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
            <ProductCard product={product} />
          </div>
        ))}

        {/* Conditional rendering of the 'View All' button based on product count or screen size */}
        {products.length > 8 && (
          <a href="/view-all" className="shrink-0 snap-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            View All
          </a>
        )}
      </div>
    </div>
  );
}
