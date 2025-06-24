import React, { useState, useRef, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNavbar = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Icon */}
            <button
                onClick={toggleNavbar}
                className="cursor-pointer fixed top-4 left-4 z-50 text-2xl px-2 py-1 rounded bg-[#00d3f3]"
            >
                {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>

            {/* Navbar */}
            <div
                ref={navRef}
                className={`fixed top-0 left-0 h-full w-96 bg-[#101828] border-dashed border-2 border-[#00d3f3] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6 mt-10">
                    <h2 className="text-2xl font-bold mb-6">Questions</h2>
                    <ul className="flex flex-col gap-y-3">
                        <li className="hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">question 1</li>
                        <li className="hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">question 1</li>
                        <li className="hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">question 1</li>
                        <li className="hover:text-gray-300 hover:scale-105 transition-all cursor-pointer">question 1</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
