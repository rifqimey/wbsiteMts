import React from 'react';
import Slider from "react-slick";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Lokasi = () => {

  const slides = [
    { src: "/images/lampiran05.jpg", label: "Masjid" },
    { src: "/images/lab.jpeg", label: "Lab Komputer" },
    { src: "/images/pramuka.jpg", label: "Pramuka" },
    { src: "/images/halaman.jpg", label: "Halaman Sekolah" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mt-16">
        <div className="h-[520px] bg-gradient-to-br from-green-600 via-green-500 to-green-700 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6">
              Profil Lingkungan Sekolah
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Kenali lebih dekat lingkungan MTs Miftahul Anwar melalui dokumentasi visual yang inspiratif.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 mt-[-80px]">
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-2">
                  <div className="overflow-hidden rounded-xl group transition-all duration-300 hover:shadow-xl">
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-56 md:h-64 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="bg-white p-3 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{slide.label}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Lokasi Sekolah */}
      <section className="text-center mt-24 mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Lokasi Sekolah</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          MTs Miftahul Anwar terletak di Selagai Lingga, Lampung Tengah. Berikut peta lokasi sekolah kami:
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6044297636427!2d104.84558937400888!3d-5.0051755509976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4751d107beed93%3A0x45065612339f8b74!2sMTs%20Miftahul%20Anwar%20Selagai%20Lingga!5e0!3m2!1sid!2sid!4v1732511488477!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sekolah"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lokasi;
