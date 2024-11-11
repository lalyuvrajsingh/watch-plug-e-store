'use client'
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { FaInstagram } from 'react-icons/fa';  
import Link from 'next/link';
import Image from 'next/image';








export default function ProductCard({ product, category, isInSlide }) {



  const [showModal, setShowModal] = useState(false);



  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => console.error('Error playing the video:', error));
      }
    }, 3000); // Delay to start playing
  }, []);

const handleVideoClick = () => {
  if (videoRef.current.paused) {
    videoRef.current.play();
  } else {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }
};

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


      const textToCopy = `Hi! I am interested in ${product.name}.`

      const [isCopied, setIsCopied] = useState(false);

const handleCopyText = async () => {
    try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
         // Optionally show feedback to the user.
    } catch (err) {
        console.error('Failed to copy!', err);
    }
}

const cardClass = isInSlide ? "w-[190px] h-[290px]" : "";  

const formatPrice = (price) => {
  return Number(price).toLocaleString();
};


    return (
      <div>
      <Link href={`/product/${product.id}`}>
        <div className={`border ${cardClass} lg:min-w-[290px] min-h-[290px] hover:shadow-xl transition-shadow ease-in-out rounded-2xl shadow-sm p-2 lg:p-4`}>
          {product.discount > 0 && (
            <div className="text-green-700 w-fit lg:text-sm text-xs p-1 rounded-xl shadow-md bg-green-100 border">
              {`${product.discount}% Discount`}
            </div>
          )}
          
          <div className="flex flex-col items-center justify-center align-middle text-center">
            <div className="relative w-full h-[150px] p-4">
              <Image
                src={product.coverImage}
                alt={product.name}
                fill
                className="rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={isInSlide}
              />
            </div>
            <h3 className="lg:text-md text-xs mb-1 text-gray-500">{product.brand}</h3>
            <h3 className="lg:text-lg text-sm mb-1 font-semibold">{product.name}</h3>
            <p className="text-gray-700">{`$ ${formatPrice(product.sellingPrice)}`}</p>
            <button className="mt-4 border hidden lg:flex border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out text-gray-400 font-bold py-2 px-4">
              Check Our Selling Price
            </button>
          </div>
        </div>
      </Link>
    </div>
    );
  }
  