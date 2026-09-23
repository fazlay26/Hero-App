import Image from 'next/image';
import footer_logo from '@/assets/logo.png';
import React from 'react';
import { FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0F0F14] text-gray-400 pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-gray-800">
                    
                    {/* Column 1: Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="bg-white/5 p-3 rounded-xl">
                            <Image 
                                src={footer_logo} 
                                alt='footer logo' 
                                width={120} 
                                height={40} 
                                className="object-contain" 
                            />
                        </div>
                        <p className="text-sm text-gray-500 text-center md:text-left max-w-xs leading-relaxed">
                            We build productive apps designed to make everyday life simpler, smarter, and more exciting.
                        </p>
                    </div>

                    {/* Column 2: Quick Links (Optional but looks good) */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="flex flex-col items-center md:items-start gap-3 text-sm">
                            <li className="hover:text-purple-400 transition-colors cursor-pointer">Home</li>
                            <li className="hover:text-purple-400 transition-colors cursor-pointer">Apps</li>
                            <li className="hover:text-purple-400 transition-colors cursor-pointer">Installation</li>
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-white font-semibold text-lg">Follow Us</h3>
                        <p className="text-sm text-gray-500">Stay connected with us on social media</p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaGithubSquare size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
                    <p>Copyright © 2025 HERO.IO - All rights reserved</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-purple-400 transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-purple-400 transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;