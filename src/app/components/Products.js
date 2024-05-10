'use client'
import { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';
import { where } from 'firebase/firestore';



export default function Products({ category }) {
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
      <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 ">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

