import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Prestasi = () => {
  const prestasi = [
    {
      id: 1,
      title: "Juara 1 Olimpiade Matematika",
      nama: "Ahmad Zaki",
      tingkat: "Kabupaten",
      deskripsi: "Mengalahkan 30 peserta dari berbagai sekolah dalam ajang olimpiade tingkat kabupaten.",
      image: "/images/prestasi/math1.jpg"
    },
    {
      id: 2,
      title: "Juara 2 Lomba Pidato Bahasa Arab",
      nama: "Siti Aisyah",
      tingkat: "Provinsi",
      deskripsi: "Mewakili sekolah dalam lomba tingkat provinsi dan berhasil meraih juara 2.",
      image: "/images/prestasi/pidato.jpg"
    },
    {
      id: 3,
      title: "Juara Harapan 1 MTQ",
      nama: "Muhammad Fajar",
      tingkat: "Nasional",
      deskripsi: "Berhasil masuk 5 besar lomba MTQ tingkat nasional dan membawa harum nama sekolah.",
      image: "/images/prestasi/mtq.jpg"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Prestasi MTs Miftahul Anwar</h1>
        <p className="text-lg">Berbagai pencapaian membanggakan dari siswa dan sekolah</p>
      </div>

      {/* Daftar Prestasi */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {prestasi.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.nama} - {item.tingkat}</p>
                <p className="text-gray-700 text-sm">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prestasi;
