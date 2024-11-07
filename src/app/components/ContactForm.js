import React from 'react'


export default function ContactForm() {
  return (
    <div className="lg:my-10 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className='lg:flex justify-center items-center p-2 w-full'>
          <div className='mt-8 bg-gray-100 shadow-md rounded-2xl p-4 w-full'>
            <div className='bg-gray-50 pt-5 rounded-2xl shadow-lg p-4 border'>
              <h2 className='text-5xl mt-1 mb-7 font-extrabold'>Connect with FineChrono</h2>
              <h2 className='text-4xl mt-7 text-gray-500 font-extrabold'>@finechrono</h2>
              <a href="https://www.instagram.com/finechrono/">
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent mt-[35px] text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Message Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
