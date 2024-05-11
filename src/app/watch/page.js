import React from 'react'
import Navbar from '../components/Navbar'
import Watches from '../components/Watch'
import ProductGallery from '../components/ProductGallery'

function WatchPage() {
  return (
    <div>
        <Navbar/>
        <ProductGallery initialCategory="Watch" hideCategoryDropdown={true} />
    </div>
  )
}

export default WatchPage