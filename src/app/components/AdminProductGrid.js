'use client'
import React from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function AdminProductGrid() {
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
      {products.map(product => (
        <div 
          className="border h-fit flex flex-col items-center justify-center hover:shadow-2xl transition-shadow ease-in-out rounded-2xl m-1 my-3 shadow-xl p-4" 
          key={product.id}
        >
          <img 
            src={product.coverImage} 
            alt={product.name} 
            className="h-40 my-3 object-cover" 
          />
          <div className="mt-2 text-center">
            <h3 className="text-md text-gray-500">{product.brand}</h3>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{`$ ${product.sellingPrice}`}</p>
            <button 
              onClick={() => handleDelete(product.id)} 
              className="bt border m-2 p-1 rounded-xl bg-black text-white shadow-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminProductGrid;