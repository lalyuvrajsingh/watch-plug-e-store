'use client'
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductRecommendations({ currentProduct }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('category', '==', currentProduct.category),
          where('brand', '==', currentProduct.brand),
          limit(4)
        );
        
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(product => product.id !== currentProduct.id);
        
        setRecommendations(products);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    if (currentProduct) {
      fetchRecommendations();
    }
  }, [currentProduct]);

  if (recommendations.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 