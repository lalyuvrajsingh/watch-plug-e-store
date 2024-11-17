'use client'
import React from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const AdminProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img 
            src={product.coverImage} 
            alt={product.brand} 
            className="w-full h-48 object-cover rounded-md mb-4" 
          />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{product.brand}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-bold">${product.sellingPrice}</p>
            <button 
              onClick={() => handleDelete(product.id)}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminProductGrid;