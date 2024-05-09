"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import ProductCard from './ProductCard';  // Ensure this component is correctly imported
import Products from './Products';
import { orderBy } from 'firebase/firestore';
import { limit } from 'firebase/firestore';
import { where } from 'firebase/firestore';


export default function CategorySlide({ category, title }) {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const colRef = collection(db, 'products');
        let q;
        if (category) {
          // Fetch only 6 most recent products by date in the given category
          q = query(colRef, where('category', '==', category), orderBy('date', 'desc'), limit(6));
        } else {
          q = query(colRef, orderBy('date', 'desc'), limit(6));
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
        {title && (
          <h2 className="text-xl font-bold my-4 text-center">{title}</h2>
        )}
        <div className="text-right p-4">
          <a href={`/${category}/view-all`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            View All
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
          {products.map(product => (
            <div key={product.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }