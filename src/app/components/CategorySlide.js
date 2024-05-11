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
      <div className="my-5 mt-10">
        
        <div className="flex justify-between items-center mb-3 lg:mx-5 mx-1 px-1">
        {title && (
          <h2 className="text-2xl w-fit font-semibold text-center">{title}</h2>
        )}
       
          <a href={`/${category}`} className=" text-right text-black font-medium rounded inline-flex">
            View All
          </a>
        
        </div>
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
          {products.map(product => (
            <div key={product.id} className="snap-center shrink-0 first:pl-0 last:pr-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }