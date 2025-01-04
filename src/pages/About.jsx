import React from "react";
import Slider from "react-slick";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {
    // Data untuk gambar dan label
    const slides = [
        { src: "/images/background.png", label: "Aula Sekolah" },
        { src: "/images/kantin.png", label: "Kantin" },
        { src: "/images/smpn1.png", label: "SMPN 1 Cibadak" },
        { src: "/images/halaman.png", label: "Halaman" },
    ];

    // Konfigurasi slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Tablet dan mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Layar menengah
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Navbar />
            <div
                className="relative bg-gradient-to-r from-green-500 via-green-400 to-green-600 mt-16"
                style={{ minHeight: "500px" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h2 className="text-4xl font-bold py-10 animate__animated animate__fadeIn">
                        Profil MTs Miftahul Anwar
                    </h2>

                    {/* Carousel */}
                    <div className="w-[90%] max-w-6xl mt-8">
                        <Slider {...settings}>
                            {slides.map((slide, index) => (
                                <div key={index} className="px-2">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
                                        <img
                                            src={slide.src}
                                            alt={slide.label}
                                            className="w-full h-48 md:h-64 object-cover"
                                        />
                                        <div className="p-4 text-center">
                                            <h3 className="text-gray-800 font-semibold text-xl">{slide.label}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* Konten utama */}
            <div className="px-4 md:px-20 py-12">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Sejarah MTs Miftahul Anwar Selagai Lingga
                </h1>
                <p className="text-justify leading-relaxed text-gray-700 pt-8">
                    SMP Negeri 1 Cibadak didirikan pada tahun 1965 berdasarkan Surat
                    Keputusan Menteri P & K Republik Indonesia...
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
