import React from 'react'
import Merch from '../components/Merch'
import Navbar from '../components/Navbar'
import ProductGallery from '../components/ProductGallery'
import NewlyLaunchedProducts from '../components/NewlyLaunchedProducts'

function MerchPage() {
  return (
    <div>
       <Navbar/>
       <ProductGallery initialCategory="Merch" hideCategoryDropdown={true} />
   </div>
  )
}

export default MerchPage