// app/loading.tsx
import React from 'react';
import AppCardSkeleton from '@/components/AppCardSkeleton';

const Loading = () => {
    return (
        <div className="w-full bg-gray-50 animate-pulse">
            
            {/* ================= Section 1: Hero Skeleton ================= */}
            <section className="w-full bg-white pt-16 md:pt-24 pb-8 px-4">
                <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
                    
                    {/* Headline */}
                    <div className="skeleton h-12 md:h-16 w-3/4 md:w-2/3 rounded-lg"></div>
                    <div className="skeleton h-12 md:h-16 w-1/2 md:w-1/3 rounded-lg"></div>

                    {/* Subtext */}
                    <div className="skeleton h-4 w-full max-w-2xl rounded-md mt-2"></div>
                    <div className="skeleton h-4 w-5/6 max-w-xl rounded-md"></div>

                    {/* Store Buttons */}
                    <div className="flex gap-3 mt-4">
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                    </div>

                    {/* Hero Image (Phone) */}
                    <div className="skeleton h-72 w-48 md:h-96 md:w-64 rounded-3xl mt-8"></div>
                </div>
            </section>

            {/* ================= Section 2: Stats Skeleton ================= */}
            <section className="w-full bg-[#6D28D9] py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
                    <div className="skeleton h-10 w-72 md:w-96 rounded-lg bg-white/20"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="skeleton h-4 w-24 rounded-md bg-white/20"></div>
                                <div className="skeleton h-12 w-32 rounded-lg bg-white/20"></div>
                                <div className="skeleton h-3 w-36 rounded-md bg-white/20"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= Section 3: Trending Apps Skeleton ================= */}
            <section className="w-full py-16 md:py-24 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16 flex flex-col items-center gap-4">
                        <div className="skeleton h-8 w-32 rounded-full"></div>
                        <div className="skeleton h-10 w-64 rounded-lg"></div>
                        <div className="skeleton h-5 w-96 max-w-full rounded-md"></div>
                    </div>

                    {/* 🔥 6 App Cards Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <AppCardSkeleton key={index} />
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Loading;