import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaPhone } from 'react-icons/fa';  // Importing Instagram icon from react-icons

const Footer = () => {
    return (
        <footer className="bg-black mt-4 rounded-t-3xl text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h5 className="text-2xl font-bold mb-4">FineChrono</h5>
                        <p className="text-gray-400 mb-4">
                            Curating exceptional timepieces and luxury accessories for the discerning collector.
                        </p>
                    </div>

                    {/* Collections */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Collections</h5>
                        <ul className="space-y-2">
                            <li><Link href="/watch" className="text-gray-400 hover:text-white transition-colors">Timepieces</Link></li>
                            <li><Link href="/purse" className="text-gray-400 hover:text-white transition-colors">Leather Goods</Link></li>
                            <li><Link href="/merch" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Contact</h5>
                        <ul className="space-y-2">
                            {/* <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-2" /> +1 (714) 930-4044
                            </li> */}
                            <li>
                                <a 
                                    href="https://www.instagram.com/finechrono/" 
                                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaInstagram className="mr-2" /> @finechrono
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-4 py-8 border-t border-gray-800">
                    <div className="text-center">
                        <div className="text-xl font-bold">100%</div>
                        <div className="text-sm text-gray-400">Authentic</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold">Expert</div>
                        <div className="text-sm text-gray-400">Verification</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl font-bold">Secure</div>
                        <div className="text-sm text-gray-400">Transactions</div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
                    <p>© {new Date().getFullYear()} FineChrono. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;