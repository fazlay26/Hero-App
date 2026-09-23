import { iApp } from '@/types/appTypes';
import Image from 'next/image';
import React from 'react';

interface AppCardProps {
    app: iApp;
}

// Star Icon SVG
const StarIcon = () => (
    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// Download Icon SVG
const DownloadIcon = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const AppCard = ({ app }: AppCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-4 group">
            
            {/* Top Section: Image & Info */}
            <div className="flex items-start gap-4">
                {/* App Image */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Title & Company */}
                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 truncate">{app.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{app.companyName}</p>
                    
                    {/* Rating & Size */}
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-100">
                            <StarIcon />
                            <span className="text-xs font-bold text-gray-700">{app.ratingAvg}</span>
                        </div>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500 font-medium">{app.size} MB</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {app.description}
            </p>

            {/* Bottom Section: Downloads & Button */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex items-center gap-1.5">
                    <DownloadIcon />
                    <span className="text-sm font-semibold text-gray-700">{app.downloads}</span>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-sm shadow-purple-200">
                    Install
                </button>
            </div>

        </div>
    );
};

export default AppCard;