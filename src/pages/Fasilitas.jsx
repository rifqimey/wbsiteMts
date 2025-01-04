import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const Fasilitas = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">CCTV</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">Greenhouse</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">Lemari Trophy</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">Panggung</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">TV Umum</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/cctv.png" alt="CCTV" className="w-full h-48 object-cover" />
            <div className="bg-green-500 text-white text-center py-2 font-semibold">Lab Biologi</div>
            <p className="p-4 text-gray-600 text-sm text-center">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Fasilitas
