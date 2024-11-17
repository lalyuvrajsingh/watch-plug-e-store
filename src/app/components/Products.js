'use client'
import { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import ProductCard from './ProductCard';

export default function Products({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const colRef = collection(db, 'products');
        let q;
        
        if (category) {
          q = query(
            colRef,
            where('category', '==', category),
            orderBy('date', 'desc')
          );
        } else {
          q = query(
            colRef,
            orderBy('date', 'desc')
          );
        }
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 sm:px-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

