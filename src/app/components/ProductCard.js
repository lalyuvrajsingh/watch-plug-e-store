'use client'
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';








export default function ProductCard({ product }) {



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



    return (
      <div>
      <div onClick={() => setShowModal(true)} className="border hover:bg-gray-100 hover:shadow-2xl transition-shadow ease-in-out rounded-2xl m-1 my-3 shadow-xl p-4">
      <div className="text-green-700 w-fit p-1 rounded-xl shadow-md bg-green-100 border">{`${product.discount}% Discount`}</div>
        <img src={product.coverImage} alt={product.name} className="h-89 w-full object-cover" />
        <div className="mt-2 text-center">
            <h3 className="text-md text-gray-500">{product.brand}</h3>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{`$ ${product.sellingPrice}`}</p>
          <p className="text-gray-400 line-through ">{`$ ${product.mrp}`}</p>
          <a href="https://www.instagram.com/direct/t/102481277818851" target="_blank">Message us on Instagram
          <button className="mt-4 border border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out  text-gray-400 font-bold py-2 px-4 ">
            Check Our Selling Price
          </button>
          </a>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white mx-4 rounded-2xl shadow-xl max-w-sm">
            <button
              onClick={() => setShowModal(false)}
              className="relative z-10 left-2 lg:left-[365px] text-xl  font-semibold"
            >
              &times;
            </button>
            <div className=''>
            {/* <div>
              <video src="/Screen Recording 2024-05-06 at 5.57.42 PM.MOV"  autoPlay className='relative bottom-[28px] rounded-2xl'/>
            </div> */}
            <div>
                <video
                  
                  ref={videoRef}
                  onClick={handleVideoClick}
                  autoPlay
                  className='relative bottom-[28px] rounded-2xl'
                >
                  <source src="/Screen Recording 2024-05-06 at 5.57.42 PM.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
            <div className='p-4'>

              {/* Product Details */}
              <div className="flex border my-2 rounded-xl shadow-xl justify-centre relative bottom-12 items-center">
              <img src={product.coverImage} alt={product.name} className="w-[75px]" />
              <div className='ml-4'>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="font-bold">{`Price: $${product.sellingPrice}`}</p>
              </div>
              
              </div>

            <p>Please send us a DM on Instagram to inquire about this product!</p>
            <a
              href="https://instagram.com/lalyuvrajsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-400 text-white px-4 py-2  rounded-2xl shadow-lg hover:bg-green-500"
            >
              Go to Instagram
            </a>
          </div>
          </div>
        </div>
        </div>
      )}
      </div>
    );
  }
  