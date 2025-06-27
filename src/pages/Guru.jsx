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
      const response = await axios.get("http://192.168.112.240:8000/teacher", {
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
      <div className="bg-white p-8 mt-10">
        {/* Search Bar */}
        <div className="flex flex-col items-end mb-6 mt-10">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search Teacher"
              className="w-full px-10 py-3 pr-10 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-gray-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="w-full border-b-2 border-gray-200 mt-6 mb-6"></div>
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
                    key={teacher.id || teacher.nuptk}
                    className="bg-white border border-gray-300 shadow-xl rounded-lg overflow-hidden text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Foto Guru */}
                    <img
                      src={teacher.image || "https://via.placeholder.com/150"}
                      alt={teacher.nama || "Gambar tidak tersedia"}
                      className="w-28 h-32 object-cover mt-6 mx-auto border-2 border-gray-300 rounded-md"
                    />

                    {/* Informasi Guru */}
                    <div className="w-full px-6 py-4 text-left space-y-2">
                      <div className="flex">
                        <h2 className="font-semibold text-black w-24">Nama</h2>
                        <span className="font-medium text-black">:</span>
                        <p className="text-black flex-1 ml-2">{teacher.nama || "Tidak tersedia"}</p>
                      </div>
                      <div className="flex">
                        <h2 className="font-semibold text-black w-24">Nuptk</h2>
                        <span className="font-medium text-black">:</span>
                        <p className="text-black flex-1 ml-2">{teacher.nuptk || "Tidak tersedia"}</p>
                      </div>
                      <div className="flex">
                        <h2 className="font-semibold text-black w-24">Pelajaran</h2>
                        <span className="font-medium text-black">:</span>
                        <p className="text-black flex-1 ml-2">{teacher.pelajaran || "Tidak tersedia"}</p>
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
