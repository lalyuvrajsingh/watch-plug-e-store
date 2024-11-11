import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaPhone } from 'react-icons/fa';  // Importing Instagram icon from react-icons

const Footer = () => {
    return (
        <footer className="bg-black mt-4 rounded-t-3xl text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div className="col-span-1 md:col-span-2">
                    <h5 className="text-2xl font-bold mb-4">FineChrono</h5>
                    <p className="text-gray-400 mb-4">
                        Curating exceptional timepieces and luxury accessories for the discerning collector.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h5 className="text-lg font-bold mb-4">Collections</h5>
                    <ul className="space-y-2">
                        <li><Link href="/watch" className="hover:text-gray-300">Timepieces</Link></li>
                        <li><Link href="/purse" className="hover:text-gray-300">Leather Goods</Link></li>
                        <li><Link href="/merch" className="hover:text-gray-300">Accessories</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h5 className="text-lg font-bold mb-4">Contact</h5>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaPhone className="mr-2" /> +1 (714) 930-4044
                        </li>
                        <li className="flex items-center">
                            <FaInstagram className="mr-2" /> @finechrono
                        </li>
                    </ul>
                </div>

                {/* Trust Signals */}
                <div className="col-span-full mt-8 pt-8 border-t border-gray-800">
                    <div className="flex justify-center space-x-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-sm text-gray-400">Authentic</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">Expert</div>
                            <div className="text-sm text-gray-400">Verification</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">Secure</div>
                            <div className="text-sm text-gray-400">Transactions</div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="col-span-full mt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} FineChrono. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;