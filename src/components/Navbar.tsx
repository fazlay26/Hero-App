import Link from 'next/link';
import logo from '@/assets/logo.png';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link href={'/'} className="hover:text-primary transition-colors duration-200">
                    Home
                </Link>
            </li>
            <li>
                <Link href={'/apps'} className="hover:text-primary transition-colors duration-200">
                    Apps
                </Link>
            </li>
            <li>
                <Link href={'/installation'} className="hover:text-primary transition-colors duration-200">
                    Installation
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md shadow-md border-b border-base-300 sticky top-0 z-50 px-4 md:px-8">
            {/* Start: mobile menu + logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle lg:hidden hover:bg-primary/10 transition-colors"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-52 p-2 shadow-xl border border-base-300"
                    >
                        {links}
                    </ul>
                </div>

                <Link href={'/installation'} className="ml-2 transition-transform duration-300 hover:scale-105">
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                        alt="hero app logo"
                        className="rounded-lg"
                    />
                </Link>
            </div>

            {/* Center: desktop links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 font-medium">
                    {links}
                </ul>
            </div>

            {/* End: CTA */}
            <div className="navbar-end">
                <a className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;