'use client'
import { useState, useEffect } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const colRef = collection(db, 'products');
            const q = query(colRef); // Add constraints here if needed
            const querySnapshot = await getDocs(q);
            const products = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(products);
        };

        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
