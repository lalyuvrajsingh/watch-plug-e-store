'use client'
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig'; // Ensure this is the correct path to your Firebase config
import { collection, query, where, orderBy, limit, getDocs, startAt } from 'firebase/firestore';
import ProductCard from './ProductCard'; // Ensure this is the correct path to your ProductCard component

export default function NewlyLaunchedProducts({ category, title }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const colRef = collection(db, 'products');
            try {
                let q;
                if (category) {
                    q = query(
                        colRef,
                        where('category', '==', category),
                        orderBy('date', 'desc'),
                        limit(6)
                    );
                } else {
                    q = query(
                        colRef,
                        orderBy('date', 'desc'),
                        limit(6)
                    );
                }
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
                setProducts([]);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="my-5 mt-10">
            <div className="flex justify-between items-center lg:mx-5 mx-1 px-1">
            {title && (
                <h2 className="text-2xl w-fit font-semibold text-center">{title}</h2>
            )}
            <a href={`/${category}`} className="text-right text-black font-medium rounded inline-flex">
                View All
            </a>
            </div>
            <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
                {products.map(product => (
                    <div key={product.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
