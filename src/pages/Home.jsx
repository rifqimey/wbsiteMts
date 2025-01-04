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
            <div className="relative overflow-hidden">
                <Navbar />
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="/images/background.png"
                        alt="Background"
                        className="w-full h-full object-cover transition-transform duration-[7000ms] scale-110 animate-heroPan"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay"></div>
                </div>
                {/* Content Section */}
                <div className="relative z-20 p-4 md:px-8 pt-36 flex flex-col items-center justify-center text-center">
                    <div className="motto flex flex-col items-center justify-center gap-4 pt-6">
                        <span className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600 animate-fadeIn">
                            MTs Miftahul Anwar
                        </span>
                        <span className="text-sm md:text-2xl italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-500 drop-shadow-lg animate-zoomIn">
                            Selamat datang di website resmi MTs Miftahul Anwar
                        </span>
                    </div>
                    <div className="mt-8 mb-14">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg mb-16 mt-10 w-40 md:w-52 h-12 font-semibold rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <div
                ref={refSambutan}
                className={`relative flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8 lg:p-16 bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-3xl shadow-xl mb-10 mt-24 transition-all duration-700 ease-in-out transform ${inViewSambutan ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
            >
                {/* Gambar Kepala Sekolah */}
                <div className="relative w-full lg:w-1/3">
                    <div className="relative overflow-hidden rounded-xl lg:rounded-3xl shadow-lg">
                        <img
                            src="/images/image1.png"
                            alt="Sambutan Kepala Sekolah"
                            className="w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-green-400"></div>
                </div>

                {/* sambutan */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        Sambutan Kepala Sekolah <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-100">
                            MTs Miftahul Anwar
                        </span>
                    </h2>
                    <p className="text-white leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                        <strong>Assalamu’alaikum Warahmatullahi Wabarakatuh,</strong>
                        <br />
                        Alhamdulillah, segala puji hanya kepunyaan Allah SWT. Kami bersyukur kepada-Nya atas limpahan nikmat yang tiada tara. Hanya atas taufik dan hidayah-Nya saja website MTs Miftahul Anwar bisa hadir untuk memajukan pendidikan.
                    </p>
                    <p className="text-white leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                        Website sekolah ini merupakan media komunikasi dan interaksi antara sekolah dan masyarakat. Semua pihak yang berkepentingan dengan dunia pendidikan, termasuk guru, murid, orang tua, dan lainnya, dapat mengakses informasi mengenai profil sekolah, staf pengajar, ekstrakurikuler, berita, PPDB, dan informasi penting lainnya.
                    </p>
                    <p className="text-white leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                        Semoga kehadiran website ini memberikan manfaat bagi warga sekolah dan masyarakat luas dalam memajukan pendidikan di Indonesia.
                    </p>
                    <p className="text-white font-semibold mt-4 text-lg lg:text-xl">
                        Wassalamu’alaikum Wr.Wb.
                    </p>
                    <p className="text-white font-bold text-xl lg:text-xl">
                        Kepala Sekolah MTs Miftahul Anwar <br />
                        <span className="text-green-100">Tamyis, S.Pd.I</span>
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16 mb-20 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Visi */}
                    <div
                        ref={refVisi}
                        className={`relative bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg rounded-3xl p-8 transition-transform transform duration-500 hover:shadow-2xl hover:-translate-y-3 ${inViewVisi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                       <div className="absolute top-6 left-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                            VISI
                        </h3>
                        <p className="text-lg leading-relaxed text-white mt-4">
                            Tiada kekayaan yang paling utama daripada kekayaan jiwa, tiada kepapaan yang paling menyedihkan daripada kebodohan, dan tiada warisan yang paling baik daripada pendidikan.
                        </p>
                    </div>

                    {/* Misi */}
                    <div
                        ref={refMisi}
                        className={`relative bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg rounded-3xl p-8 transition-transform transform duration-500 hover:shadow-2xl hover:-translate-y-3 ${inViewMisi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <div className="absolute top-6 left-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block pb-2">
                            MISI
                        </h3>
                        <ul className="text-lg leading-relaxed list-disc mt-4 space-y-2 pl-6 text-left">
                            <li>100% Seluruh Guru/Staf memberikan pelayanan, keteladanan kepada para pengguna jasa dengan pendekatan agama, etika, dan budaya.</li>
                            <li>100% Siswa melakukan syariat agama, etika, dan budaya baik di sekolah maupun di luar.</li>
                            <li>90% Fasilitas sekolah mendekati Standar Nasional Pendidikan (SNP).</li>
                            <li>80% Siswa berprestasi baik di tingkat regional, nasional, maupun global.</li>
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
                            <Link to="/profile">
                                <button className="px-6 py-3 mb-5 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg rounded-lg hover:from-green-600 hover:to-green-800 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Lebih Lanjut
                                </button>
                            </Link>
                        </div>

                        {/* Fasilitas, Lokasi, Sejarah, Prestasi Section */}
                        <div className="w-full md:w-2/3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { ref: ref1, inView: inView1, link: "/fasilitas", imgSrc: "/images/fasilitas.png", title: "Fasilitas" },
                                { ref: ref2, inView: inView2, link: "/lokasi", imgSrc: "/images/lokasi.png", title: "Lokasi" },
                                { ref: ref3, inView: inView3, link: "/about", imgSrc: "/images/sejarah.png", title: "Sejarah" },
                                { ref: ref4, inView: inView4, link: "/prestasi", imgSrc: "/images/prestasi.png", title: "Prestasi" },
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
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nulla sit amet.
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 md:mt-20 bg-[#F9FBFD]">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 py-5 md:py-10">
                    Galeri
                </h2>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8 py-10 px-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div className="relative group" key={index}>
                            {/* Image */}
                            <img
                                src={`/images/image${index + 1}.png`} // Sesuaikan nama file jika ada gambar berbeda
                                alt={`Galeri item ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold opacity-90">
                                    Gambar {index + 1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="px-6 py-3 mb-10 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105">
                    <Link to="/galeri" className="text-white">
                        Lebih Lanjut
                    </Link>
                </button>
            </div>
            {/* Logo WhatsApp */}
            <div className="fixed bottom-4 right-4 z-50">
                <a
                    href="https://wa.me/+6285972531053?text=Hallo%20MTs%20Miftahul%20Anwar%0ANama%20:%0AAlamat%20:%0AIngin%20mengajukan%20pertanyaan%20:%0A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 bounce-animation"
                >
                    <img
                        src="/images/whatsapp.png"
                        alt="WhatsApp Logo"
                        className="w-8 h-8"
                    />
                </a>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;