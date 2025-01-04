import React from 'react';
import Slider from "react-slick";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Lokasi = () => {

  const slides = [
    { src: "/images/aula.png", label: "Aula Sekolah" },
    { src: "/images/kantin.png", label: "Kantin" },
    { src: "/images/smpn1.png", label: "SMPN 1 Cibadak" },
    { src: "/images/halaman.png", label: "Halaman" },
  ];

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
      {/* Section Heading */}
      <div className="flex items-center justify-center h-full py-4 my-16 mt-20">
        <h1 className="text-3xl font-bold text-black text-center">LOKASI</h1>
      </div>

      {/* Google Map Section */}
      <div className="flex justify-center items-center my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.6044297636427!2d104.84558937400888!3d-5.0051755509976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4751d107beed93%3A0x45065612339f8b74!2sMTs%20Miftahul%20Anwar%20Selagai%20Lingga!5e0!3m2!1sid!2sid!4v1732511488477!5m2!1sid!2sid"
          width="990"
          height="400" // Menambah tinggi iframe untuk peta lebih besar
          style={{ border: 0, borderRadius: '10px' }} // Menambahkan border radius pada iframe
          title="Peta Lokasi Sekolah"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Lokasi;
