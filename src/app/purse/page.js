
 import React from 'react'
 import Purses from '../components/Purse'
 import Navbar from '../components/Navbar'
import ProductGallery from '../components/ProductGallery'
 
 function PursePage() {

   return (
     <div>
        <Navbar/>
        <ProductGallery initialCategory="Purse" hideCategoryDropdown={true}/>
    </div>
   )
 }
 
 export default PursePage

