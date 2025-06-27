import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Footer from './components/Footer';

const HomePage = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3, initialInView: true });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3, initialInView: true });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3, initialInView: true });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3, initialInView: true });
    const [refSambutan, inViewSambutan] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refVisi, inViewVisi] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refMisi, inViewMisi] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <>
            <div className="relative min-h-screen text-white font-sans overflow-hidden">
                <Navbar />

                {/* BACKGROUND IMAGE UTAMA */}
                <div className="absolute inset-0 -z-20">
                    <img
                        src="/images/lampiran01.jpg"
                        alt="Background"
                        className="w-full h-full object-cover scale-110 blur-sm opacity-70 animate-[slowZoom_30s_ease-in-out_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
                </div>

                {/* FLOATING LIGHT */}
                <div className="absolute -top-20 left-20 w-80 h-80 bg-green-400/10 blur-3xl rounded-full animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-0 right-28 w-72 h-72 bg-emerald-300/10 blur-2xl rounded-full animate-[floatReverse_12s_ease-in-out_infinite]" />

                {/* HERO CONTENT */}
                <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 pt-32 pb-20 gap-12">
                    {/* IMAGE BLOCK */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-[280px] md:w-[380px] aspect-[3/4] bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl animate-[float_6s_ease-in-out_infinite] hidden md:block">
                            <img
                                src="/images/lampiran03.jpg"
                                alt="Siswa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="max-w-xl space-y-6 text-left animate-[fadeInUp_2s_ease-out]">
                        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-green-500 to-green-700 text-transparent bg-clip-text drop-shadow-lg">
                            MTs Miftahul Anwar
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                            Sekolah Islam unggulan yang mendorong prestasi akademik, karakter kuat, dan nilai keislaman. Inovatif, modern, dan siap bersaing global.
                        </p>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition duration-300 shadow-lg hover:shadow-2xl"
                        >
                            📞 Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-24 mb-10">
                <div
                    ref={refSambutan}
                    className={`relative flex flex-col items-center gap-8 p-8 lg:p-16 bg-white rounded-3xl shadow-md transition-all duration-700 ease-in-out transform w-full max-w-6xl ${inViewSambutan
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-10 scale-95'
                        }`}
                >
                    <div className="flex-1 text-center space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-green-700 leading-tight">
                            Sambutan Kepala Sekolah <br />
                            <span className="text-green-500">MTs Miftahul Anwar</span>
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
                            <strong>Assalamu’alaikum Warahmatullahi Wabarakatuh,</strong>
                            <br />
                            Alhamdulillah, segala puji hanya kepunyaan Allah SWT. Kami bersyukur kepada-Nya atas limpahan nikmat yang tiada tara. Hanya atas taufik dan hidayah-Nya saja website MTs Miftahul Anwar bisa hadir untuk memajukan pendidikan.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
                            Website ini merupakan media komunikasi antara sekolah dan masyarakat. Semua pihak bisa mengakses informasi seputar profil sekolah, staf pengajar, ekstrakurikuler, berita, PPDB, dan lainnya.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-3xl mx-auto">
                            Semoga kehadiran website ini memberikan manfaat besar bagi warga sekolah dan masyarakat luas.
                        </p>

                        <p className="text-gray-800 font-semibold mt-1 text-base lg:text-lg">
                            Wassalamu’alaikum Wr.Wb.
                        </p>

                        <p className="text-green-600 font-bold text-lg lg:text-xl">
                            Kepala Sekolah MTs Miftahul Anwar <br />
                            <span className="text-gray-700">Tamyis, S.Pd.I</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-16 mb-20 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Visi */}
                    <div
                        ref={refVisi}
                        className={`relative bg-white text-gray-800 shadow-md rounded-3xl p-8 transition-transform transform duration-500 hover:shadow-lg hover:-translate-y-2 ${inViewVisi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <h3 className="text-3xl font-bold text-green-600">
                            VISI
                        </h3>
                        <div className="w-full h-2 bg-green-600 mt-2 mb-6 rounded-full"></div>

                        <p className="text-2xl leading-relaxed">
                            TAQWA, BERAHLAKUL KARIMAH, DISIPLIN, DAN TERAMPIL
                        </p>
                    </div>

                    {/* Misi */}
                    <div
                        ref={refMisi}
                        className={`relative bg-white text-gray-800 shadow-md rounded-3xl p-8 transition-transform transform duration-500 hover:shadow-lg hover:-translate-y-2 ${inViewMisi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <h3 className="text-3xl font-bold text-green-600">
                            MISI
                        </h3>
                        <div className="w-full h-2 bg-green-600 mt-2 mb-6 rounded-full"></div>

                        <ul className="text-lg leading-relaxed list-disc mt-4 space-y-2 pl-6 text-left">
                            <li>Menggerakan Seluruh Guru dan Siswa Untuk Berdoa Sebelum Memulai Aktvitas Serta Melaksanakan Sholat Wajib dan Sunnah Dhuha Secara Berjamaah</li>
                            <li>Contoh Tauladan Terbaik Adalah Rasulullah SAW</li>
                            <li>Tepat Waktu, Akurat dan Patuh Terhadap Peraturan dan Jadwal Yang Sudah Diterapkan</li>
                            <li>Menggali Potensi Siswa Agar Berkembang Sesuai Dengan Kondisi Madrasah, Mengembangkan Ekstrakulikuler, Seni dan Budaya</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen bg-[#F9FBFD]">
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-wrap -mx-4">
                        {/* Profil Sekolah Section */}
                        <div className="w-full md:w-1/3 px-4 flex flex-col justify-center text-left border-r border-gray-200">
                            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-green-600">
                                Profile Sekolah
                            </h2>
                            <p className="text-gray-700 mb-6 text-base lg:text-lg tracking-wide leading-relaxed">
                                Berikut adalah profil sekolah kami secara keseluruhan dari mulai bagian depan hingga seluruh fasilitas yang terdapat di sekolah kami.
                            </p>
                            <Link to="/about">
                                <button className="px-6 py-3 mb-5 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg rounded-lg hover:from-green-600 hover:to-green-800 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Lebih Lanjut
                                </button>
                            </Link>
                        </div>

                        {/* Fasilitas, Lokasi, Sejarah, Prestasi Section */}
                        <div className="w-full md:w-2/3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {[
                                { ref: ref1, inView: inView1, link: "/fasilitas", imgSrc: "/images/fasilitas.png", title: "Fasilitas Sekolah" },
                                { ref: ref2, inView: inView2, link: "/lokasi", imgSrc: "/images/lokasi.png", title: "Lokasi Sekolah" },
                                { ref: ref3, inView: inView3, link: "/about", imgSrc: "/images/sejarah.png", title: "Sejarah Sekolah" },
                                { ref: ref4, inView: inView4, link: "/prestasi", imgSrc: "/images/prestasi.png", title: "Prestasi Sekolah" },
                            ].map((item, index) => (
                                <Link key={index} to={item.link}>
                                    <div
                                        ref={item.ref}
                                        className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center text-center transition-all duration-500 transform ${item.inView
                                            ? 'translate-y-0 opacity-100 scale-100'
                                            : 'translate-y-10 opacity-0 scale-95'
                                            } hover:scale-105`}
                                    >
                                        <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center shadow-md">
                                            <img
                                                src={item.imgSrc}
                                                alt={item.title}
                                                className="w-8 h-8 transition-transform duration-300 transform hover:scale-110"
                                            />
                                        </div>
                                        <h3 className="text-lg lg:text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 md:mt-10 bg-white">
                {/* Section Title */}
                <h2 className="text-3xl lg:text-4xl font-extrabold text-green-600 py-6">
                    Gallery
                </h2>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-8 px-4 w-full max-w-6xl">
                    <div className="relative group">
                        <img
                            src="/images/lampiran03.jpg"
                            alt="Galeri item 1"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src="/images/lampiran02.jpg"
                            alt="Galeri item 2"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src="/images/lampiran04.jpg"
                            alt="Galeri item 3"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src="/images/lampiran01.jpg"
                            alt="Galeri item 4"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src="/images/upacara.jpg"
                            alt="Galeri item 4"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative group">
                        <img
                            src="/images/pramuka.jpg"
                            alt="Galeri item 4"
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Button */}
                <button
                    className="relative group px-8 py-3 mb-10 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-lg
    shadow-lg
    overflow-hidden
    transition
    duration-300
    ease-in-out
    transform
    hover:scale-105
    hover:shadow-2xl
    focus:outline-none
    focus:ring-4 focus:ring-green-400/70
    active:scale-95 active:shadow-inner active:bg-gradient-to-r active:from-green-600 active:to-green-800
  "
                >
                    <Link to="/galeri" className="relative z-10 flex items-center gap-3">
                        Lebih Lanjut
                        <svg
                            className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </button>

            </div>
            {/* Logo WhatsApp */}
            <div className="fixed bottom-4 right-4 z-50">
                <a
                    href="https://wa.me/6285972531053?text=Halo%20Admin%20MTs%20Miftahul%20Anwar%2C%0ASaya%20ingin%20bertanya%20mengenai%20informasi%20PPDB.%0A%0ANama%20%3A%20%0AAlamat%20%3A%20%0APertanyaan%20%3A%20"

                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kirim pesan melalui WhatsApp"
                    className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 bounce-animation"
                >
                    <img
                        src="/images/whatsapp.png"
                        alt="WhatsApp Logo"
                        className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                </a>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;