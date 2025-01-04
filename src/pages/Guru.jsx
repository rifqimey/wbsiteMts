import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Guru = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTeachers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/teacher", {
        params: {
          search: searchTerm,
          limit: 6,
        },
      });
      setTeachers(response.data.data || []);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      if (error.response) {
        setError(`Kesalahan: ${error.response.data.message || "Terjadi kesalahan saat mengambil data."}`);
      } else {
        setError("Terjadi kesalahan saat mengambil data.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchTeachers();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [fetchTeachers]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-8 mt-10">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Cari guru..."
              className="w-full px-10 py-4 pr-12 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600" />
          </div>
        </div>

        {/* Loading Indicator or Error Message */}
        {isLoading ? (
          <div className="flex justify-center mb-6">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-4 border-green-500"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teachers.length > 0 ? (
                teachers.map((teacher) => (
                  <div
                    key={teacher.id || teacher.nip}
                    className="bg-white border border-gray-300 shadow-xl rounded-xl overflow-hidden text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      src={teacher.image || "https://via.placeholder.com/150"}
                      alt={teacher.nama || "Gambar tidak tersedia"}
                      className="w-32 h-32 object-cover mt-6 mx-auto rounded-full border-4 border-green-500"
                    />
                    <div className="w-full px-6 py-4 text-left space-y-3">
                      <div className="flex items-center">
                        <h2 className="font-semibold text-lg text-gray-700 w-28">Nama</h2>
                        <p className="text-gray-600 text-sm flex-1">{teacher.nama || "Tidak tersedia"}</p>
                      </div>
                      <div className="flex items-center">
                        <h2 className="font-semibold text-lg text-gray-700 w-28">NIP</h2>
                        <p className="text-gray-600 text-sm flex-1">{teacher.nip || "Tidak tersedia"}</p>
                      </div>
                      <div className="flex items-center">
                        <h2 className="font-semibold text-lg text-gray-700 w-28">Pelajaran</h2>
                        <p className="text-gray-600 text-sm flex-1">{teacher.pelajaran || "Tidak tersedia"}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center col-span-4">
                  <p className="text-xl text-gray-500">Data guru tidak ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Guru;
