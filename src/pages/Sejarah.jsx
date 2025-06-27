import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Sejarah = () => {
  return (
    <div>
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-green-700 mb-3">Brosur PPDB 2025</h1>
          <p className="text-gray-600 text-lg mb-8">
            Informasi lengkap seputar Penerimaan Peserta Didik Baru MTs Miftahul Anwar. Yuk, simak brosur berikut ini!
          </p>

          <div className="relative p-1 rounded-xl shadow-xl bg-white">
            {/* Border Decorative */}
            <div className="absolute -top-2 -left-2 w-full h-full rounded-xl border-2 border-dashed border-green-200 z-0"></div>

            {/* Gambar Brosur */}
            <div className="overflow-hidden rounded-xl relative z-10">
              <img
                src="/file/brosur.png"
                alt="Brosur PPDB MTs Miftahul Anwar"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="/file/brosur.png"
              download
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-green-700 border hover:border-green-700"
            >
              Download Brosur
            </a>

            <a
              href="/Pendaftaran"
              className="px-6 py-3 border border-green-600 text-green-700 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
            >
              Formulir Pendaftaran
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sejarah;
