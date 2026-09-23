import Image from 'next/image';
import banner from '@/assets/hero.png';
import playStore from '@/assets/play_store_logo.png';
import appStore from '@/assets/app_store_logo.png';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative w-full bg-[#F8F9FA] pt-16 md:pt-[80px] overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                
                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
                    We Build <br className="hidden sm:block" />
                    <span className="text-[#7C3AED]">Productive</span> Apps
                </h2>

                {/* Subtext */}
                <p className="mt-6 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    At HERO.IO, we craft innovative apps designed to make everyday life 
                    simpler, smarter, and more exciting. Our goal is to turn your ideas 
                    into digital experiences that truly make an impact.
                </p>

                {/* Store buttons with Badge */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3">

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <Image
                                src={playStore}
                                alt="playStore image"
                                width={24}
                                height={24}
                            />
                            <span className="text-sm font-semibold text-gray-800">
                                Google Play
                            </span>
                        </button>

                        <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <Image
                                src={appStore}
                                alt="appStore image"
                                width={24}
                                height={24}
                            />
                            <span className="text-sm font-semibold text-gray-800">
                                App Store
                            </span>
                        </button>
                    </div>
                </div>

                {/* Hero image */}
                <div className="mt-10 md:mt-20 flex justify-center relative">
                    <Image
                        src={banner}
                       
                        alt="banner image"
                        className=""
                        priority
                    />
                </div>
            </div>

            {/* Stats Section - Full Width Purple Background */}
            <div className="mt-[1px] md:mt-[1px] bg-[#6D28D9] w-full py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Trusted By Millions, Built For You
                    </h3>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm md:text-base text-purple-200 font-medium">
                                Total Downloads
                            </p>
                            <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                29.6M
                            </p>
                            <p className="mt-2 text-xs md:text-sm text-purple-300">
                                21% More Than Last Month
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm md:text-base text-purple-200 font-medium">
                                Total Reviews
                            </p>
                            <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                906K
                            </p>
                            <p className="mt-2 text-xs md:text-sm text-purple-300">
                                46% More Than Last Month
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <p className="text-sm md:text-base text-purple-200 font-medium">
                                Active Apps
                            </p>
                            <p className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                132+
                            </p>
                            <p className="mt-2 text-xs md:text-sm text-purple-300">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;