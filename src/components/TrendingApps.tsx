import { iApp } from '@/types/appTypes';
import React from 'react';
import AppCard from './AppCard';

const getApps = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}

const TrendingApps = async () => {
    const apps = await getApps();

    return (
        <section className="w-full bg-gray-50 py-16 md:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                        Our Collection
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Trending Apps
                    </h2>
                    <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {
                        apps.slice(0,6).map((app: iApp) => {
                            return <AppCard app={app} key={app.id} />
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default TrendingApps;