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
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      {/* Brand Promise Section */}
      <section className="py-16 bg-black text-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-row md:flex-col gap-8">
            {/* Authentic Luxury */}
            <div className="flex-1 text-center p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Authentic Luxury
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Every piece authenticated<br className="hidden md:block" /> 
                by expert specialists
              </p>
            </div>

            {/* Curated Collection */}
            <div className="flex-1 text-center p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Curated Collection
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Handpicked<br className="hidden md:block" />
                selection
              </p>
            </div>

            {/* Expert Craftsmanship */}
            <div className="flex-1 text-center p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Unparalleled<br className="hidden md:block" />
                craftsmanship
              </p>
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
      <section id="featured-products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <ProductGallery />
        </div>
      </section>

      {/* Contact/Social Proof Section */}
      
    </div>
  );
}
