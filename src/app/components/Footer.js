import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';  // Importing Instagram icon from react-icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-4 rounded-t-3xl text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Shopping Categories */}
                <div className='my-4'>
                    <h5 className="text-lg font-bold mb-2">Shop</h5>
                    <ul>
                        <li><Link href="/watch" className="hover:text-gray-300">Watches</Link></li>
                        <li><Link href="/purse" className="hover:text-gray-300">Purses</Link></li>
                        <li><Link href="/merch" className="hover:text-gray-300">Merch</Link></li>
                    </ul>
                </div>
                {/* <div>
                    <h5 className="text-lg font-bold mb-2"></h5>
                    <ul>
                        <li><Link href="/purses/evening" className="hover:text-gray-300">Rolex</Link></li>
                        <li><Link href="/purses/daytime" className="hover:text-gray-300"></Link></li>
                        <li><Link href="/purses/designer" className="hover:text-gray-300">Designer Purses</Link></li>
                    </ul>
                </div> */}
                {/* <div>
                    <h5 className="text-lg font-bold mb-2">Merch</h5>
                    <ul>
                        <li><Link href="/merch/shirts" className="hover:text-gray-300">Shirts</Link></li>
                        <li><Link href="/merch/accessories" className="hover:text-gray-300">Accessories</Link></li>
                        <li><Link href="/merch/posters" className="hover:text-gray-300">Posters</Link></li>
                    </ul>
                </div> */}
                
                {/* Social Media Links */}
                <div className="flex items-center">
                    <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                    <a href="https://www.instagram.com/watchplug/" target="_blank" rel="noopener noreferrer" className="ml-4 text-center text-gray-400 hover:text-white">
                        <FaInstagram size={64} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;