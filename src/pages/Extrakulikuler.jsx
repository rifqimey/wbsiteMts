import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Extrakulikuler = () => {
  const data = [
    {
      id: 1,
      title: "Pramuka",
      image: "link_gambar_basket",
      pembimbing: "Noviyani, S.Pd",
      hari: "Sabtu",
      waktu: "14.00 - 16.00",
    },
    {
      id: 2,
      title: "Futsal / Sepak Bola",
      image: "link_gambar_futsal",
      pembimbing: "Devi Noviyandi, S.Pd",
      hari: "Kamis",
      waktu: "14.30 - 17.00",
    },
    {
      id: 3,
      title: "Osis",
      image: "link_gambar_osis",
      pembimbing: "Iyan Sopian, S.Pd",
      hari: "Kamis",
      waktu: "14.00 - 16.00",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-full py-4 my-16 mt-32">
        <h1 className="text-3xl font-bold text-black text-center">Ekstrakulikuler MTs Miftahul Anwar</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-2 left-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
              {item.id}
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <div className="text-sm mt-2 text-justify">
                <div className="flex">
                  <span className="font-semibold w-24">Pembimbing</span>
                  <span>: {item.pembimbing}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-24">Hari</span>
                  <span>: {item.hari}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold w-24">Waktu</span>
                  <span>: {item.waktu}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Extrakulikuler
