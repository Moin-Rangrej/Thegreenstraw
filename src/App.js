import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contactus from './pages/contactus';
import All from './pages/gallery/All';
import Cafes from './pages/gallery/Cafes';
import Cowork from './pages/gallery/Cowork';
import Store from './pages/gallery/Store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightbox2/dist/css/lightbox.css'
import 'lightbox2/dist/js/lightbox-plus-jquery'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />}>
          <Route index element={<All/>}/>
          <Route path='all' element={<All />} />
          <Route path='cafes' element={<Cafes />} />
          <Route path='cowork' element={<Cowork />} />
          <Route path='store' element={<Store />} />
        </Route>
        <Route path='/contactus/' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
