import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPpdbOpen, setIsPpdbOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        if (isPpdbOpen) setIsPpdbOpen(false);
    };

    const togglePpdb = () => setIsPpdbOpen(!isPpdbOpen);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsPpdbOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHomePage && !isScrolled
                ? "bg-transparent text-green-400"
                : "bg-white shadow-md text-gray-800"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
                <Link to="/" className="flex items-center space-x-3">
                    <img src="/images/logoKemenag.png" alt="Logo" className="h-10 w-auto" />
                    <span className="font-bold text-lg tracking-wide hidden md:block text-green-500">
                        MTs Miftahul Anwar
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    {[
                        { label: "Home", to: "/" },
                        { label: "About", to: "/about" },
                        { label: "Guru", to: "/guru" },
                        { label: "Lokasi", to: "/lokasi" },
                        { label: "Ekstrakurikuler", to: "/extrakulikuler" },
                    ].map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            className="text-base font-medium text-green-500 hover:text-green-300 group relative transition-all duration-300 transform hover:scale-105"
                        >
                            {label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}

                    {/* PPDB Dropdown (desktop) */}
                    <div className="relative">
                        <button
                            onClick={togglePpdb}
                            className="text-base font-medium text-green-500 hover:text-green-400 transition-all duration-300 flex items-center"
                        >
                            PPDB
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-1 h-4 w-4 transform transition-transform ${isPpdbOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isPpdbOpen && (
                            <div className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-lg z-20">

                                <Link
                                    to="/Pendaftaran"
                                    onClick={closeMenu}
                                    className="block px-4 py-2 font-medium text-green-700 hover:bg-green-50 text-left"
                                >
                                    Pendaftaran
                                </Link>
                                <Link
                                    to="/Sejarah"
                                    onClick={closeMenu}
                                    className="block px-4 py-2 font-medium text-green-700 hover:bg-green-50 text-left"
                                >
                                    Brosur
                                </Link>

                            </div>
                        )}

                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 p-2 text-green-600 hover:bg-green-100 rounded-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <nav className="mt-16 flex flex-col space-y-1 px-4">
                    {[
                        { label: "Home", to: "/" },
                        { label: "About", to: "/about" },
                        { label: "Guru", to: "/guru" },
                        { label: "Lokasi", to: "/lokasi" },
                        { label: "Ekstrakurikuler", to: "/extrakulikuler" },
                    ].map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            onClick={closeMenu}
                            className="text-green-700 text-base font-medium py-2 px-2 rounded hover:bg-green-50 transition-all text-left"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* PPDB dropdown mobile */}
                    <div>
                        <button
                            onClick={togglePpdb}
                            className="w-full flex items-center justify-between text-green-700 text-base font-medium py-2 px-2 rounded hover:bg-green-50 transition-all"
                        >
                            PPDB
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 transition-transform ${isPpdbOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isPpdbOpen ? "max-h-40 mt-1" : "max-h-0"
                                }`}
                        >
                            <Link
                                to="/form"
                                onClick={closeMenu}
                                className="block py-2 px-4 text-green-700 text-sm hover:bg-green-50 rounded"
                            >
                                Form Pendaftaran
                            </Link>
                            <Link
                                to="/brosur"
                                onClick={closeMenu}
                                className="block py-2 px-4 text-green-700 text-sm hover:bg-green-50 rounded"
                            >
                                Brosur
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
