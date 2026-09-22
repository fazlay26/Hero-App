import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="text-center max-w-lg mx-auto">
                {/* Animated 404 number */}
                <div className="relative mb-8">
                    <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-none select-none">
                        404
                    </h1>
                    {/* Floating orbs - pure CSS animations via Tailwind */}
                    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Page Not Found
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                {/* Buttons - only link, no JS handlers */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 ease-out"
                    >
                        Go Home
                    </Link>
                </div>

                {/* Decorative line */}
                <div className="mt-12 flex items-center justify-center gap-2">
                    <span className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500" />
                    <span className="text-gray-600 text-sm tracking-widest uppercase">Lost in space</span>
                    <span className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500" />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;