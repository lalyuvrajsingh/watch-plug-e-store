import React from 'react'

export default function Callnow() {
  return (
    <div className='mt-8 bg-gray-100 shadow-md rounded-2xl p-4 w-full'>
        <div className='bg-gray-50 pt-5 rounded-2xl shadow-lg p-4 border'>
          <h2 className='text-5xl mt-1 mb-7 font-extrabold'>Call us on</h2>
          <h2 className='lg:text-4xl text-3xl mt-7 text-gray-500 font-extrabold'>+1 (714) 930-4044</h2>
          <a href="tel:+1 (714) 930-4044">
          <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent mt-[85px] text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Call Now
            </button>
            </a>
        </div>
        
        </div>
  )
}
