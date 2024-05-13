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
    <div className="container">
      <Navbar/>
      {/* <CustomSlider slides={slides} className="w-[400px]"/> */}
      <Slideshow/>
      {/* <Categories categories={categories}/> */}
      {/* <WatchSlide/> */}
      {/* <NewlyLaunchedProducts category="Watch" title="Latest Watches"/> */}
      <CategorySlide category="Watch" title="Latest Watches"/>
      <CategorySlide category="Purse" title="Hermes Purses"/>
      <CategorySlide category="Merch" title="Merch"/>
      {/* <ProductSlide/> */}
      <h2 className="text-2xl w-fit text-gray-500 mx-4 mt-8 mb-2 font-semibold text-center">Shop More</h2>
      <hr className="mb-5"/>
      <ProductGallery/>
      {/* <Products/> */}
      {/* <Watches />
      <Purses />
      <Merch /> */}
      {/* <ProductGrid products={products} /> */}
    </div>
  );
}
