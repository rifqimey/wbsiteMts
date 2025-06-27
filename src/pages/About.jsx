import React from "react";
import Slider from "react-slick";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Profile = () => {
  const slides = [
    { src: "/images/lampiran05.jpg", label: "Masjid" },
    { src: "/images/lab.jpeg", label: "Lab Komputer" },
    { src: "/images/pramuka.jpg", label: "Pramuka" },
    { src: "/images/halaman.jpg", label: "Halaman Sekolah" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <section className="relative mt-16">
        <div className="h-[520px] bg-gradient-to-br from-green-600 via-green-500 to-green-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
              Profil MTs Miftahul Anwar
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Mengenal lingkungan, struktur organisasi, dan sarana penunjang MTs Miftahul Anwar.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 mt-[-80px]">
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-2">
                  <div className="overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
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

      {/* Struktur Organisasi */}
      <section className="w-full px-6 lg:px-20 py-14">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Struktur Organisasi
        </h2>
        <div className="flex justify-center">
          <div className="w-[95%] max-w-7xl rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white p-4">
            <img
              src="/images/struktur.png"
              alt="Struktur Organisasi MTs Miftahul Anwar"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Identitas Sekolah + Data Fasilitas */}
      <section className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap gap-6 px-6 py-12">
        {/* Sidebar */}
        <aside className="bg-white p-6 shadow-lg rounded-2xl border border-gray-100 w-full lg:w-1/3 text-center">
          <h3 className="font-bold text-xl text-green-600 mb-1">Nama Sekolah</h3>
          <p className="mb-6 text-lg">MTs Miftahul Anwar</p>

          <h3 className="font-bold text-xl text-green-600 mb-1">Kepala Sekolah</h3>
          <p className="mb-6 text-lg">Tamyis, S.Pd.I</p>

          <h3 className="font-bold text-xl text-green-600 mb-1">Alamat</h3>
          <p className="mb-6">
            Jl. Slamet Ridwan, Negeri Sari, Selagai Lingga - Lampung Tengah<br />34671
          </p>

          <h3 className="font-bold text-xl text-green-600 mb-1">NPSN</h3>
          <p>10816595</p>
        </aside>

        {/* Fasilitas */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-bold text-green-600 text-lg">{item.jenis}</h3>
              <p className="mt-2 text-gray-600">Jumlah: {item.jumlah}</p>
              <p className="text-gray-600">Baik: {item.baik}</p>
              <p className="text-gray-600">Rusak: {item.rusak}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabel Data Ruangan */}
      <section className="w-full px-6 lg:px-20 pb-20">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Data Ruang Kelas
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
          <table className="min-w-full text-sm text-center">
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
      </section>

      <Footer />
    </>
  );
};

export default Profile;
