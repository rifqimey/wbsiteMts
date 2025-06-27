import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { FaDownload } from "react-icons/fa"; // Import download icon from react-icons
import "react-toastify/dist/ReactToastify.css"; // Style for Toastify
import axios from "axios"; // Import axios for sending data to backend


const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nisn: "",
    tempatTanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    alamat: "",
    namaAyah: "",
    namaIbu: "",
    nomorTelepon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    for (let key in formData) {
      if (formData[key] === "") {
        toast.warn(`Kolom "${key.replace(/([A-Z])/g, ' $1')}" belum diisi!`, {
          position: toast.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:8000/pendaftaran", formData);
        console.log("Data berhasil dikirim:", response.data);
        toast.success("Formulir berhasil dikirim!", {
          position: toast.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        toast.error("Terjadi kesalahan, coba lagi!", {
          position: toast.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
      }
    }
  };

  return (
    <>
      <Navbar />
      {/* Download File Section */}
      <div className="ml-4 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:bg-blue-400 flex items-center space-x-2 shadow-lg w-fit mt-24 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <FaDownload className="text-white text-lg" />
        <a
          href="/file/formPendaftaran.pdf"
          download
          className="text-white font-bold transition-all duration-300"
        >
          Unduh Form
        </a>
      </div>

      {/* Registration Instructions */}
      <div className="py-8 px-6 shadow-xl rounded-lg w-4/5 mx-auto my-10 bg-white">
        <h2 className="text-2xl font-extrabold text-center mb-6 text-green-600">
          Tata Cara Pendaftaran
        </h2>
        <ol className="list-decimal list-inside text-left text-gray-700 text-lg space-y-3">
          <li>Isi formulir di bawah dengan benar.</li>
          <li>
            Setelah mengisi dan mengirim formulir di bawah, silahkan download
            form <b className=" text-green-500">Unduh form</b> di kiri atas.
          </li>
          <li>
            Siapkan dokumen pendukung seperti fotokopi kartu keluarga, dan
            ijazah terakhir.
          </li>
          <li>Serahkan formulir yang sudah didownload ke sekolah.</li>
          <li>
            Tunggu konfirmasi dari pihak sekolah melalui email atau telepon.
          </li>
        </ol>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-10 my-12 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="p-8 shadow-2xl rounded-lg w-full max-w-screen-sm mx-auto bg-white"
        >
          <h2 className="text-3xl font-extrabold my-8 mb-8 text-center text-green-600">
            Formulir Pendaftaran
          </h2>
          <div className="space-y-6 text-left">
            {[{ label: "Nama Lengkap", name: "namaLengkap", type: "text", placeholder: "Masukkan Nama Lengkap" },
            { label: "NISN", name: "nisn", type: "text", placeholder: "Masukkan NISN" },
            { label: "Tempat Tanggal Lahir", name: "tempatTanggalLahir", type: "text", placeholder: "Masukkan Tempat Tanggal Lahir" },
            { label: "Agama", name: "agama", type: "text", placeholder: "Masukkan Agama" },
            { label: "Nomor Telepon", name: "nomorTelepon", type: "text", placeholder: "Masukkan Nomor Telepon" }].map((field, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <label className="w-1/3 text-gray-700 font-medium">
                  {field.label}
                </label>
                <div className="relative w-2/3">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 text-gray-500">
                    {/* Replace with appropriate icons */}
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
            ))}

            {/* Jenis Kelamin */}
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700 font-medium">
                Jenis Kelamin
              </label>
              <select
                name="jenisKelamin" 
                value={formData.jenisKelamin}
                onChange={handleChange}
                className="w-2/3 p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
              >
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Alamat Siswa */}
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700 font-medium">Alamat</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Masukkan Alamat"
                className="w-2/3 p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
                rows="3"
              />
            </div>

            {/* Data Orang Tua */}
            <div className="space-y-6">
              {/* Data Ayah */}
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-gray-700 font-medium">
                  Nama Ayah
                </label>
                <input
                  type="text"
                  name="namaAyah"
                  value={formData.namaAyah}
                  onChange={handleChange}
                  placeholder="Masukkan Nama Ayah"
                  className="w-2/3 p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
                />
              </div>

              {/* Data Ibu */}
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-gray-700 font-medium">
                  Nama Ibu
                </label>
                <input
                  type="text"
                  name="namaIbu"
                  value={formData.namaIbu}
                  onChange={handleChange}
                  placeholder="Masukkan Nama Ibu"
                  className="w-2/3 p-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="
      relative
      px-10 py-3
      rounded-full
      bg-gradient-to-r from-green-400 via-green-500 to-green-600
      text-white font-semibold text-lg
      shadow-lg
      overflow-hidden
      transition
      duration-500
      ease-in-out
      hover:scale-105
      hover:shadow-2xl
      focus:outline-none
      before:absolute before:inset-0 before:bg-white/20 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-30
    "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Daftar Sekarang
                  <svg
                    className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Pendaftaran;