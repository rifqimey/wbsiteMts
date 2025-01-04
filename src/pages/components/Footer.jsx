import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#F9F9F9] py-10 mt-16">
            <div className="container mx-auto px-4 md:px-24 border-gray-200">
                {/* Grid Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-y-8 text-center sm:text-left">
                    {/* Logo dan Alamat */}
                    <div className="col-span-1 flex flex-col items-center sm:items-start space-y-5">
                        <img
                            src="/images/logoKemenag.png"
                            alt="Logo"
                            className="w-20 h-20 mb-1 sm:block hidden"
                        />
                        <address className="space-y-4 text-sm text-gray-600 text-center sm:text-left w-full sm:w-60 mb-4">
                            Jl. Slamet Ridwan, Negeri Sari, Negeri Agung, Kecamatan Selagai Lingga <br />
                            Kabupaten Lampung Tengah 34177, Indonesia <br />
                        </address>
                    </div>

                    {/* Group Jelajah and Halaman Umum */}
                    <div className="col-span-1 flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 items-center">
                        {/* Column Jelajah */}
                        <div className="space-y-2 text-center sm:text-left">
                            <h3 className="text-xl font-bold text-green-800 mb-2 py-2">Jelajah</h3>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li><Link to="/Lokasi" className="hover:text-green-500">Lokasi</Link></li>
                                <li><Link to="/profile" className="hover:text-green-500">Profil Sekolah</Link></li>
                                <li><Link to="/about" className="hover:text-green-500">About</Link></li>
                                <li><Link to="/galeri" className="hover:text-green-500">Galeri</Link></li>
                            </ul>
                        </div>

                        {/* Column Halaman Umum */}
                        <div className="space-y-2 text-center sm:text-left">
                            <h3 className="text-xl font-bold text-green-800 mb-2 py-2">Halaman Umum</h3>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li><Link to="/guru" className="hover:text-green-500">Data Guru</Link></li>
                                <li><Link to="/extrakulikuler" className="hover:text-green-500">Extrakulikuler</Link></li>
                                <li><Link to="/sejarah" className="hover:text-green-500">Sejarah</Link></li>
                                <li>
                                    <a
                                        href="https://wa.me/+6285972531053?text=Halo,%20saya%20ingin%20bertanya%20tentang%20MTs%20Miftahul%20Anwar."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-400"
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Column Media Sosial */}
                    <div className="col-span-1 space-y-6 sm:ml-auto">
                        <h3 className="text-xl font-bold mb-4 text-green-800">Media Sosial</h3>
                        <div className="flex justify-center sm:justify-start space-x-6">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-gray-800 hover:text-pink-500 transition-colors"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.33.062-2.646.346-3.678 1.378C2.346 2.928 2.062 4.244 2 5.574c-.059 1.281-.072 1.691-.072 4.947s.013 3.667.072 4.947c.062 1.33.346 2.646 1.378 3.678.981.981 2.298 1.316 3.678 1.378 1.281.059 1.691.072 4.947.072s3.667-.013 4.947-.072c1.33-.062 2.646-.346 3.678-1.378.981-.981 1.316-2.298 1.378-3.678.059-1.281.072-1.691.072-4.947s-.013-3.667-.072-4.947c-.062-1.33-.346-2.646-1.378-3.678-.981-.981-2.298-1.316-3.678-1.378-1.281-.059-1.691-.072-4.947-.072zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.164a4.001 4.001 0 110-8.002 4.001 4.001 0 010 8.002zm6.406-10.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-gray-800 hover:text-black transition-colors"
                                >
                                    <path d="M21.707 2.293a1 1 0 00-1.414 0L12 10.586 3.707 2.293a1 1 0 10-1.414 1.414L10.586 12 2.293 20.293a1 1 0 101.414 1.414L12 13.414l8.293 8.293a1 1 0 001.414-1.414L13.414 12l8.293-8.293a1 1 0 000-1.414z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-gray-800 hover:text-blue-700 transition-colors"
                                >
                                    <path d="M22.675 0h-21.35C.58 0 0 .582 0 1.3v21.4c0 .718.58 1.3 1.325 1.3h11.495v-9.293h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.144v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.746 0 1.325-.582 1.325-1.3V1.3C24 .582 23.421 0 22.675 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm text-left mt-3">
                <div className="bg-gray-200 h-0.5 w-full max-w-screen-xl mx-auto mb-2 mt-4"></div>
                <p className="pl-4 sm:pl-28 mt-3">
                    © {new Date().getFullYear()} <span className="font-semibold">MTs Miftahul Anwar</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;