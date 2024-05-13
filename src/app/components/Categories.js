import React from 'react'

export default function Categories({ categories }) {
  return (
    <div className='flex flex-col mt-3 content-center items-center align-middle justify-center'>
        <h1 className="text-center text-gray-500 text-5xl mt-8 mb-8 font-bold">Shop</h1>
    <div className="w-fit grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {categories.map(category => (
        
        <div key={category.name} className="border hover:shadow-2xl transition-shadow ease-in-out rounded-3xl h-fit shadow-xl">
        <h3 className="text-lg text-center mt-3 font-semibold">{category.name}</h3>
            <img src={category.image} alt={category.name} className="h-[300px] rounded-3xl" />
            <div className="">
                {/* <h3 className="text-md text-gray-500">{category.brand}</h3> */}
            
            {/* <p className="text-gray-700">{`₹ ${category.price}`}</p> */}
            {/* <button className="mt-4 border border-gray-300 rounded-xl hover:shadow-md transition-shadow ease-in-out  text-gray-400 font-bold py-2 px-4 ">
                Check Our Selling Price
            </button> */}
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}
