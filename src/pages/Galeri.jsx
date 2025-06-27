import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Card = ({ title, description, src, path }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
    <div className="relative">
      <img src={src} alt={title} className="w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-opacity-75 flex items-center justify-center">
        <h3 className="text-white text-center text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <Link
        to={path}
        className="text-green-500 font-bold transition-colors duration-300 hover:text-green-950 inline-block"
      >
        Lihat Foto
      </Link>

    </div>
  </div>
);

const Galeri = () => {
  const data = [
    {
      description: "Beberapa Foto Guru  MTs Miftahul Anwar",
      src: "/images/lampiran01.jpg", // Ganti dengan URL gambar
      path: "/galeriGuru", // Tautan untuk halaman GaleriGuru
    },
    {
      description: "Foto Murid-Murid MTs Miftahul Anwar",
      src: "/images/lampiran03.jpg",
      path: "/galeriSiswa", // Tambahkan path sesuai kebutuhan
    },
    {
      description: "Foto Kegiatan Di  MTs Miftahul Anwar",
      src: "/images/pramuka.jpg",
      path: "/galeriKegiatan", // Tambahkan path sesuai kebutuhan
    },
    // Tambahkan item lainnya sesuai kebutuhan
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            src={item.src}
            path={item.path} // Berikan properti path untuk setiap kartu
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Galeri;
