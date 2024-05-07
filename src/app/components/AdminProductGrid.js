'use client'
import React from 'react'
import { db } from '../../../firebaseConfig';
import { getFirestore, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function AdminProductGrid() {


    const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
    };

    fetchProducts();
}, []);

    const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    setProducts(products.filter(product => product.id !== id));  // Update UI
};

  return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {products.map(product => (
              <div className="border h-fit hover:bg-gray-100 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow ease-in-out rounded-2xl m-1 my-3 shadow-xl p-4" key={product.id}>
              {/* <p className=" mb-5 text-gray-400">Added on: {product.date ? `${product.date}` : 'Date unknown'}</p> */}
                <img src={product.coverImage} alt={product.name} className="h-40 my-3 object-cover" />
                  <div className="mt-2 text-center">
                  <h3 className="text-md text-gray-500">{product.brand}</h3>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700">{`$ ${product.sellingPrice}`}</p>
                  
                  <button onClick={() => handleDelete(product.id)} className="bt border m-2 p-1 rounded-xl bg-green-400 shadow-lg">Delete</button>
                  </div>
              </div>
            ))}
          </div> 
  )
}

export default AdminProductGrid