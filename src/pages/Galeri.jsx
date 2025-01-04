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
      <Link to={path} className="text-green-500 font-medium hover:underline">
        Lihat Foto
      </Link>
    </div>
  </div>
);

const Galeri = () => {
  const data = [
    {
      title: "Guru",
      description: "Beberapa Foto Guru SMP Negeri 1 Cibadak",
      src: "/images/bgHome.jpg", // Ganti dengan URL gambar
      path: "/galeriGuru", // Tautan untuk halaman GaleriGuru
    },
    {
      title: "Sanlat",
      description: "Beberapa Foto Ketika Sanlat Murid-Murid SMP Negeri 1 Cibadak",
      src: "https://via.placeholder.com/400x200",
      path: "/galeri/sanlat", // Tambahkan path sesuai kebutuhan
    },
    {
      title: "Kunjungan Disdik",
      description: "Beberapa Foto Kunjungan dari Dinas Pendidikan SMP Negeri 1 Cibadak",
      src: "https://via.placeholder.com/400x200",
      path: "/galeri/kunjungan-disdik", // Tambahkan path sesuai kebutuhan
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
