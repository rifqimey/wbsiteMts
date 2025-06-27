import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Extrakulikuler = () => {
  const data = [
    {
      title: "Pramuka",
      image: "/images/pramuka.jpg", // sesuaikan dengan folder public atau tempat penyimpanan
      pembimbing: "M. Johandrio. S.Pd.I",
      hari: "Sabtu",
      waktu: "14.00 - 16.00",
    },
    {
      title: "Seni Hadroh",
      image: "/images/hadroh.jpg",
      pembimbing: "Muhajirin, S.Pd",
      hari: "Kamis",
      waktu: "14.00 - 16.00",
    },
    {
      title: "Osis",
      image: "/images/osis.jpg",
      pembimbing: "M. Syaifudin. S.Pd.I",
      hari: "Selasa",
      waktu: "14.00 - 16.00",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-full py-4 my-16 mt-32">
        <h1 className="text-4xl font-extrabold text-green-700 text-center">Ekstrakulikuler MTs Miftahul Anwar</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-20">
        {data.map((item) => (
          <div
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
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
  );
};

export default Extrakulikuler;

