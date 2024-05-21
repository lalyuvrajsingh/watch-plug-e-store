'use client'
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { FaInstagram } from 'react-icons/fa';  








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
      <div onClick={() => setShowModal(true)} className={`border ${cardClass}  lg:min-w-[290px] h-full md:h-max   hover:shadow-xl transition-shadow ease-in-out rounded-2xl shadow-sm p-2 lg:p-4`}>
      <div className="text-green-700 w-fit lg:text-sm text-xs p-1 rounded-xl shadow-md bg-green-100 border">{`${product.discount}% Discount`}</div>
        
        <div className="flex flex-col items-center justify-center align-middle text-center">
        <img src={product.coverImage} alt={product.name} className="p-4 rounded-xl h-[150px] "/>
            <h3 className="lg:text-md text-xs mb-1 text-gray-500">{product.brand}</h3>
          <h3 className="lg:text-lg text-sm mb-1 font-semibold">{product.name}</h3>
          <p className="text-gray-700">{`$ ${formatPrice(product.sellingPrice)}`}</p>
          {/* <p className="text-gray-400 line-through ">{`$ ${product.mrp}`}</p> */}
          {/* <a href="https://www.instagram.com/direct/t/102481277818851" target="_blank">Message us on Instagram */}
          <button className="mt-4 border hidden lg:flex border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out  text-gray-400 font-bold py-2 px-4 ">
            Check Our Selling Price
          </button>
          {/* </a> */}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-20  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 mx-4 h-fit rounded-2xl shadow-xl max-w-sm">
            <button
              onClick={() => setShowModal(false)}
              className="relative left-2 lg:left-[345px] bottom-3 text-xl  font-semibold"
            >
              &times;
            </button>
            <div className=''>
            {/* <div>
              <video src="/Screen Recording 2024-05-06 at 5.57.42 PM.MOV"  autoPlay className='relative bottom-[28px] rounded-2xl'/>
            </div> */}
            {/* <div>
                <video
                  
                  ref={videoRef}
                  onClick={handleVideoClick}
                  autoPlay
                  className='relative bottom-[28px] rounded-2xl'
                >
                  <source src="/Screen Recording 2024-05-06 at 5.57.42 PM.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div> */}
            <div className='p-4'>

              {/* Product Details */}
              
              <div className="flex border my-5 rounded-xl shadow-md justify-centre relative bottom-10 items-center">
              <img src={product.coverImage} alt={product.name} className="w-[75px] mx-4" />
              <div className='ml-4'>
                <h2 className="text-xl text-gray-500 font-bold">{product.name}</h2>
                <p className="text-gray-700">{`$ ${formatPrice(product.sellingPrice)}`}</p>
                
              </div>
              
              </div>

            <p className='relative bottom-5 font-semibold mt-5 px-2'>{`Drop us a text to get your ${product.name.toLowerCase()}.` }</p>
            
            <p className='border text-center border-dashed py-4 mt-1 border-gray-400 rounded-xl text-gray-400 font-semibold bottom-12 px-2'>{`Hi! I am interested in ${product.name}.` }</p>
            <p className="text-gray-500 font-semibold mt-5 px-2">{`+1 (714) 930-4044`}</p>
            <a href="https://www.instagram.com/watchplug/" target="_blank" rel="noopener noreferrer" className="flex px-1 text-gray-500">
                        <FaInstagram size={24} />
            
            <p className="text-gray-500 font-semibold px-2">@watchplug</p>
            </a>
            <div className=' mt-10 flex justify-center items-center'>
            
            <button
              onClick={handleCopyText}
              className=" mx-3 inline-block border border-black text-black px-3 py-2 rounded-2xl shadow-lg hover:bg-gray-200"
            >
              {isCopied ? 'Copied!' : 'Copy Text'}  
            </button>
            <a
              href="https://www.instagram.com/watchplug/"
              target="_blank"
              rel="noopener noreferrer"
              className=" mx-3 inline-block bg-black text-white px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl"
            >
              Send Message!
            </a>
          </div>
          </div>
          
          </div>
        </div>
        </div>
      )}
      </div>
    );
  }
  