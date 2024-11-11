'use client'
import { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import Navbar from '../../components/Navbar';
import ProductGallery from '../../components/ProductGallery';

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, 'products', params.id);
        const docSnap = await getDoc(docRef);
        const productData = { id: docSnap.id, ...docSnap.data() };
        setProduct(productData);
        setSelectedImage(productData.coverImage);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-3">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 text-sm">
            <FaArrowLeft className="mr-2" /> Back to Collection
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Image Gallery */}
            <div className="relative lg:sticky lg:top-8 space-y-4 lg:space-y-6">
              {/* Main Image */}
              <div className="aspect-square relative overflow-hidden rounded-2xl lg:rounded-3xl border shadow-sm p-4 lg:p-8">
                <Image
                  src={selectedImage || product.coverImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4">
                <div 
                  onClick={() => setSelectedImage(product.coverImage)}
                  className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer bg-gray-50 p-2 ${
                    selectedImage === product.coverImage ? 'ring-2 ring-black' : 'hover:opacity-75'
                  }`}
                >
                  <Image
                    src={product.coverImage}
                    alt={product.name}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 768px) 20vw, 10vw"
                  />
                </div>
                {product.images?.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer bg-gray-50 p-2 ${
                      selectedImage === img ? 'ring-2 ring-black' : 'hover:opacity-75'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 20vw, 10vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6 lg:space-y-8">
              {/* Product Title and Price */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold tracking-tight uppercase">{product.brand}</h1>
                  <p className="text-2xl text-gray-500 uppercase">{product.name}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="text-4xl font-bold">
                    ${product.sellingPrice?.toLocaleString()}
                  </p>
                  {product.discount > 0 && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Product Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Reference', value: product.reference },
                    { label: 'Condition', value: product.condition },
                    { label: 'Year', value: product.year },
                    { label: 'Box & Papers', value: product.boxPapers }
                  ].map(detail => (
                    <div key={detail.label} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500">{detail.label}</p>
                      <p className="mt-1 font-medium">{detail.value || '-'}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Contact Buttons */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <div className="space-y-3">
                  <a 
                    href={`https://wa.me/17149304044?text=Hi! I'm interested in ${product.brand} ${product.name}`}
                    className="flex items-center justify-center space-x-3 w-full bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    <FaWhatsapp size={24} />
                    <span className="font-medium">Contact on WhatsApp</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/finechrono/"
                    className="flex items-center justify-center space-x-3 w-full bg-black from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-opacity"
                  >
                    <FaInstagram size={24} />
                    <span className="font-medium">Message on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add the product gallery */}
      {product && <ProductGallery currentProduct={product} />}
    </div>
  );
} 