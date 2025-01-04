import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Footer from './pages/components/Footer';
import Profile from './pages/Profile';
import Guru from './pages/Guru';
import About from './pages/About';
import Fasilitas from './pages/Fasilitas';
import Lokasi from './pages/Lokasi';
import Sejarah from './pages/Sejarah';
import Prestasi from './pages/Prestasi';
import Extrakulikuler from './pages/Extrakulikuler';
import Pendaftaran from './pages/Pendaftaran';
import Galeri from './pages/Galeri';
import GaleriGuru from './pages/Gallery/GaleriGuru';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/guru' element={<Guru/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/fasilitas' element={<Fasilitas/>}/>
      <Route path='/lokasi' element={<Lokasi/>}/>
      <Route path='/sejarah' element={<Sejarah/>}/>
      <Route path='/prestasi' element={<Prestasi/>}/>
      <Route path='/extrakulikuler' element={<Extrakulikuler/>}/>
      <Route path='/pendaftaran' element={<Pendaftaran/>}/>
      <Route path='/galeri' element={<Galeri/>}/>
      <Route path='/galeriGuru' element={<GaleriGuru/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
