import React from "react";
import Slider from "react-slick";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Profile = () => {
  const slides = [
    { src: "/images/bgHome.jpg", label: "Aula Sekolah" },
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    { no: 1, jenis: "Perpustakaan", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 2, jenis: "Ruang Komputer", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 3, jenis: "Ruang TU", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 4, jenis: "Ruang Guru", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 5, jenis: "Ruang Kepala Sekolah", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 6, jenis: "Ruang BP", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 7, jenis: "Ruang UKS", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
    { no: 8, jenis: "Ruang Ibadah", jumlah: 1, baik: 1, rusak: 0, berat: 0, sedang: 0 },
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
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

      {/* Content Section */}
      <div className="flex flex-wrap lg:flex-nowrap w-full max-w-6xl mx-auto py-10">
        {/* Sidebar */}
        <div className="bg-white p-6 shadow-lg rounded-lg lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="font-bold text-lg mb-4 text-center text-green-600">Nama Sekolah</h2>
          <p className="text-center mb-6">MTs Miftahul Anwar</p>
          <h3 className="font-bold text-lg mb-2 text-center text-green-600">Kepala Sekolah</h3>
          <p className="text-center mb-6">Tamyis, S.Pd.I</p>
          <h3 className="font-bold text-lg text-center text-green-600">Alamat</h3>
          <p className="text-center mb-6">
            Jl. Slamet Ridwan, Negeri Sari, Selagai Lingga - Lampung Tengah <br />
            34671
          </p>
          <h3 className="font-bold text-lg text-center text-green-600">Website/Email</h3>
          <p className="text-center mb-6">smptncibadak.schl.id</p>
          <p className="text-center mb-6">smptncibad_kabsi@yahoo.com</p>
          <h3 className="font-bold text-lg text-center text-green-600">No. Telp</h3>
          <p className="text-center">(0266) 531333</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <h3 className="font-bold text-lg text-green-600">{item.jenis}</h3>
              <p className="mt-2 text-gray-700">Jumlah: {item.jumlah}</p>
              <p className="text-gray-700">Baik: {item.baik}</p>
              <p className="text-gray-700">Rusak: {item.rusak}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full px-6 lg:px-20 py-10">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          Data Ruang Kelas
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Jenis Ruangan</th>
                <th className="px-4 py-2 border">Jumlah</th>
                <th className="px-4 py-2 border">Baik</th>
                <th className="px-4 py-2 border">Rusak</th>
                <th className="px-4 py-2 border">Berat</th>
                <th className="px-4 py-2 border">Sedang</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.no}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-white hover:bg-gray-100"}
                >
                  <td className="px-4 py-2 border">{row.no}</td>
                  <td className="px-4 py-2 border">{row.jenis}</td>
                  <td className="px-4 py-2 border">{row.jumlah}</td>
                  <td className="px-4 py-2 border">{row.baik}</td>
                  <td className="px-4 py-2 border">{row.rusak}</td>
                  <td className="px-4 py-2 border">{row.berat}</td>
                  <td className="px-4 py-2 border">{row.sedang}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
