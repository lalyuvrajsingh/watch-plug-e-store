"use client"
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [product] = useState({
    name: 'Luxury Watch Purse',
    coverImage: '/images/watch-purse.jpg',
    sellingPrice: 499.99,
  });

  const handleCopyText = () => {
    navigator.clipboard.writeText(`Hi! I am interested in ${product.name}.`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <div>
    <Navbar />
    <div className="lg:my-10 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="w-full">
        <div>
          {/* <h2 className="mt-6 m-4 text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2> */}
          {/* <p className="mt-2 m-4 text-center text-sm text-gray-600">
            We'd love to hear from you!
          </p> */}
          
        </div>
        <div className='lg:flex justify-center items-center p-2 w-full'>
        <div className='mt-8 bg-gray-100 shadow-md rounded-2xl p-4 w-full'>
        <form className="bg-gray-50 rounded-2xl shadow-lg p-4 border" onSubmit={sendEmail}>
        <h2 className='text-xl font-extrabold'>Contact us</h2>
          <input type="hidden" name="product_name" value={product.name} />
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none w-full my-2 px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="user_email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none w-full my-2 px-3 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none w-full px-3 my-2 py-2 border border-gray-300  placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Message"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
        <div className='m-4   p-4 text-center'>
        <p className=''>or</p>
        </div>
        <div className='mt-8 bg-gray-100 shadow-md rounded-2xl p-4 w-full'>
        <div className='bg-gray-50 pt-5 rounded-2xl shadow-lg p-4 border'>
          <h2 className='text-5xl mt-1 mb-7 font-extrabold'>Reach out us on Instagram</h2>
          <h2 className='text-4xl mt-7 text-gray-500 font-extrabold'>@watchplug</h2>
          <a href="https://www.instagram.com/watchplug/">
          <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent mt-[85px] text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Send DM!
            </button>
            </a>
        </div>
        </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white px-4 mx-4 h-fit rounded-2xl shadow-xl max-w-sm">
            <button
              onClick={() => setShowModal(false)}
              className="my-2 text-2xl font-semibold"
            >
              &times;
            </button>
            <div className='p-4'>
              <div className="flex border my-5 rounded-xl shadow-md justify-center items-center">
                <img src={product.coverImage} alt={product.name} className="w-[75px] mx-4" />
                <div className='ml-4'>
                  <h2 className="text-xl text-gray-500 font-bold">{product.name}</h2>
                  <p className="text-gray-700">{`$ ${product.sellingPrice.toFixed(2)}`}</p>
                </div>
              </div>
              <p className='font-semibold mt-5 px-2'>{`Drop us a text to get your ${product.name.toLowerCase()}.`}</p>
              <p className='border text-center border-dashed py-4 mt-1 border-gray-400 rounded-xl text-gray-400 font-semibold px-2'>{`Hi! I am interested in ${product.name}.`}</p>
              <p className="text-gray-500 font-semibold mt-5 px-2">{`+1 (714) 930-4044`}</p>
              <a href="https://www.instagram.com/watchplug/" target="_blank" rel="noopener noreferrer" className="flex px-1 text-gray-500">
                <FaInstagram size={24} />
                <p className="text-gray-500 font-semibold px-2">@watchplug</p>
              </a>
              <div className='mt-10 flex justify-center items-center'>
                <button
                  onClick={handleCopyText}
                  className="mx-3 inline-block border border-black text-black px-3 py-2 rounded-2xl shadow-lg hover:bg-gray-200"
                >
                  {isCopied ? 'Copied!' : 'Copy Text'}
                </button>
                <a
                  href="https://www.instagram.com/watchplug/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 inline-block bg-black text-white px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl"
                >
                  Send Message!
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Contact;
