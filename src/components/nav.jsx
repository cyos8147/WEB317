import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Tab,
    initTWE,
} from "tw-elements";

initTWE({ Tab });

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className='fixed top-0 left-0 w-full bg-gray-900 py-4 z-50'>
                <div className="container mx-auto px-7 md:px-0">
                    <div className="flex justify-between items-center text-white">
                        <div className="text-xl md:text-2xl font-bold">
                            <h1 className='hover:text-red-600'><Link to='/'>Computer Science</Link></h1>
                        </div>

                        {/* ToggleMenuButton */}
                        <div className="md:hidden flex items-center z-51">
                            <button id='Menu-toggle' onClick={toggleMenu}>
                                <svg 
                                    fill='none' 
                                    stroke='currentColor' 
                                    strokeLinecap='round' 
                                    strokeLinejoin='round' 
                                    strokeWidth='2' 
                                    viewBox='0 0 24 24' 
                                    className='w-6 h-6'
                                > 
                                    <path d='M4 6h16M4 12h16M4 18h16'></path>
                                </svg>
                            </button>
                        </div>

                        <ul className="hidden md:flex justify-center gap-x-4 items-center">
                            <Link to = '/' className='cursor-pointer hover:text-blue-500'>Home</Link>
                            <Link to = '/' className='cursor-pointer hover:text-blue-500'>About</Link>
                            <Link to = '/' className='cursor-pointer hover:text-blue-500'>Contact</Link>
                        </ul>
                    </div>
                </div>

                {/* MobileMenuToggle */}
                <div className={`md:hidden fixed top-0 left-0 h-full w-1/2 bg-gray-800 text-white p-6 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="text-xl text-white text-center font-semibold mb-5"><span className='text-blue-600'>CS</span>MJU</div>
                    <ul className="flex flex-col space-y-4">
                        <Link to = '/' className='cursor-pointer hover:text-blue-500'>Home</Link>
                        <Link to = '/' className='cursor-pointer hover:text-blue-500'>About</Link>
                        <Link to = '/' className='cursor-pointer hover:text-blue-500'>Contact</Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
