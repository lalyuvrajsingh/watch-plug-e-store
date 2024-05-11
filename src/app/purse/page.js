
 import React from 'react'
 import Purses from '../components/Purse'
 import Navbar from '../components/Navbar'
 
 function PursePage() {
   return (
     <div>
        <Navbar/>
        <ProductGallery initialCategory="Purse" hideCategoryDropdown={true}/>
    </div>
   )
 }
 
 export default PursePage

