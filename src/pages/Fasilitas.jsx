import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const fasilitasData = [
  {
    title: 'CCTV',
    image: '/images/cctv.png',
    description: 'Menunjang keamanan dan pengawasan lingkungan sekolah selama 24 jam.'
  },
  {
    title: 'Halaman Luas',
    image: '/images/halaman.jpg',
    description: 'Area luas yang digunakan untuk upacara, olahraga, dan aktivitas siswa lainnya.'
  },
  {
    title: 'Perpustakaan',
    image: '/images/perpustakaan.jpg',
    description: 'Tempat yang nyaman untuk membaca dan menambah wawasan siswa.'
  },
  {
    title: 'Lab Komputer',
    image: '/images/lab.jpeg',
    description: 'Dilengkapi komputer dan akses internet untuk menunjang pembelajaran teknologi.'
  },
  {
    title: 'Masjid',
    image: '/images/lampiran05.jpg',
    description: 'Tempat ibadah yang digunakan untuk kegiatan keagamaan siswa dan guru.'
  },
  {
    title: 'Ruang UKS',
    image: '/images/uks.jpg',
    description: 'Fasilitas kesehatan yang siap digunakan saat siswa mengalami gangguan kesehatan.'
  },
];

const Fasilitas = () => {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 py-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-600">Fasilitas Sekolah</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitasData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="bg-emerald-500 text-white text-center py-2 text-lg font-semibold">
                {item.title}
              </div>
              <p className="p-4 text-gray-700 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Fasilitas;
