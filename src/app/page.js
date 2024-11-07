import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Slideshow from "./components/Slideshow";
import dynamic from 'next/dynamic';
import CustomSlider from './components/CustomSlider';
import Categories from "./components/Categories";
import Products from "./components/Products";
import Watches from "./components/Watch";
import Purses from "./components/Purse";
import Merch from "./components/Merch";
import ProductSlide from "./components/ProductSlide";
import WatchSlide from "./components/CategorySlide";
import CategorySlide from "./components/CategorySlide";
import NewlyLaunchedProducts from "./components/NewlyLaunchedProducts";
import ProductGallery from "./components/ProductGallery";
import Logo from "./components/Logo";
import { FaInstagram } from 'react-icons/fa';
import HeroGallery from './components/HeroGallery'
import BentoGrid from './components/BentoGrid'



export default function Home() {
  const products = [
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" },
    { id: 1, brand:'Rolex', name: "GMT-MASTER II", price: "19,70,000", image: "/661a531e92a63-k-kavitha-134045150-16x9 4.png" }
    // Add other products here
  ];

  const categories = [
    { id: 1, name: "WATCHES", price: "19,70,000", image: "/DALL·E 2024-05-04 06.44.43 - A minimalistic luxury wristwatch logo design on a white background. The logo should feature a sleek, stylized wristwatch silhouette with a simple, ele.webp" },
    { id: 1, name: "PURSES", price: "19,70,000", image: "/DALL·E 2024-05-04 06.44.11 - A minimalistic luxury purse logo design on a white background. The logo should feature a sleek, stylized silhouette of a purse, embodying elegance and.webp" },
    { id: 1, name: "MERCH", price: "19,70,000", image: "/DALL·E 2024-05-04 06.43.35 - A minimalistic luxury T-shirt logo design on a white background. The logo should feature a sleek, stylized icon that is both elegant and modern, embod.webp" },
    // Add other products here
  ];

  const slides = [
    { image: '/661a531e92a63-k-kavitha-134045150-16x9 4.png', title: 'ROLEX NEW WATCHES' },
    { image: '/661a531e92a63-k-kavitha-134045150-16x9 4.png', title: 'EXPLORE OUR COLLECTION' },
    // add more slides as needed
  ];

  

  

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/watch-video/6837062-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">FineChrono</h1>
            <p className="text-2xl mb-8">Timeless Luxury & Elegance</p>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-16  bg-black flex text-gray-300 ">
        <div className="container mx-auto  px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-8 text-center">
            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-3">Authentic Luxury</h3>
              <p className="">Every piece authenticated by expert specialists</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Curated Collection</h3>
              <p className="">Handpicked selection</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="">Unparalleled craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map(category => (
              <div key={category.name} className="relative group overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <HeroGallery />
      <BentoGrid />

      {/* Latest Arrivals */}
      <CategorySlide category="Watch" title="Latest Watches"/>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Connect With Us</h2>
          <p className="text-xl mb-8">Follow us on Instagram for exclusive updates</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/finechrono/" 
               className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200">
              <FaInstagram size={24} />
              <span>@finechrono</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <ProductGallery />
        </div>
      </section>

      {/* Contact/Social Proof Section */}
      
    </div>
  );
}
