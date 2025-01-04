import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isDropdownOpen) setIsDropdownOpen(false); // Close dropdown when menu opens
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHomePage
                ? isScrolled
                    ? "bg-white shadow-md text-gray-800"
                    : "bg-transparent text-green-400"
                : "bg-white shadow-md text-gray-800"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
                {/* Logo and Text */}
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src="/images/logoKemenag.png"
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                    <span className="font-bold text-lg tracking-wide hidden md:block text-green-500">
                        MTs Miftahul Anwar
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {["Home", "About", "Guru", "Pendaftaran"].map((item) => (
                        <Link
                            key={item}
                            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="text-sm font-medium text-green-500 hover:text-green-300 group relative transition-all duration-300 transform hover:scale-105"
                        >
                            {item}
                            {/* Underline animation effect */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}

                    {/* Dropdown for Desktop */}
                    <div className="relative group">
                        <button
                            onClick={toggleDropdown}
                            className="text-sm font-medium text-green-500 hover:text-green-500 transition-all duration-300 flex items-center group-hover:text-green-400"
                        >
                            Lainnya
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-1 h-4 w-4 transform ${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div
                                className="absolute -left-2 mt-0 w-40 shadow-lg bg-transparent rounded-lg text-left py-2 z-20"
                                style={{ top: "100%" }} // Posisikan dropdown tepat di bawah tombol
                            >
                                <Link
                                    to="/lokasi"
                                    className="block px-4 py-2 text-sm font-bold text-green-500 hover:bg-green-50 hover:underline"
                                    onClick={closeMenu}
                                >
                                    Lokasi
                                </Link>
                                <Link
                                    to="/extrakulikuler"
                                    className="block px-4 py-2 text-sm font-bold text-green-500 hover:bg-green-50 hover:underline"
                                    onClick={closeMenu}
                                >
                                    Ekstrakurikuler
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={closeMenu}
            ></div>
            <div
                className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-green-100 shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    onClick={closeMenu}
                    className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul className="flex flex-col space-y-6 mt-10 px-6 text-left">
                    {["Home", "About", "Guru", "Pendaftaran"].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="block text-gray-800 text-xl font-medium hover:text-green-600 hover:scale-105 transform transition-all duration-300"
                                onClick={closeMenu}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Dropdown */}
                    <li>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full text-black text-xl font-medium hover:text-green-600"
                            >
                                Lainya
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute mt-2 bg-green-100 shadow-md text-black font-bold text-xl rounded-md py-2 w-48 space-y-2">
                                    <li>
                                        <Link
                                            to="/lokasi"
                                            className="block px-4 py-2 text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded"
                                            onClick={closeMenu}
                                        >
                                            Lokasi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/extrakulikuler"
                                            className="block px-4 py-2 text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded"
                                            onClick={closeMenu}
                                        >
                                            Ekstrakurikuler
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
