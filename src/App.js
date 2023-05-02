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
import Gridall from './pages/gallery/Gridall';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'lightbox2/dist/css/lightbox.css'
import 'lightbox2/dist/js/lightbox-plus-jquery'
import Gallery2 from './pages/gallery2/index2';
import All2 from './pages/gallery2/All2';
import Cafes2 from './pages/gallery2/Cafes2';
import Cowork2 from './pages/gallery2/Cowork2';
import Store2 from './pages/gallery2/Store2';
import { AnimatePresence } from 'framer-motion';
import Overlay from './pages/Home/Overlay';
import Overlay2 from './pages/Aboutus/Overlay2';
import Officesec from './pages/services/Officesec';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/overlay' element={<Overlay2 />}/>
        <Route path='/officesec' element={<Officesec />}/>
        <Route path='/gallery' element={<Gallery2 />}>
          <Route index element={<All2/>}/>
          <Route path='all2' element={<All2 />} />
          <Route path='cafes2' element={<Cafes2 />} />
          <Route path='cowork2' element={<Cowork2 />} />
          <Route path='store2' element={<Store2 />} />
        </Route>
        
        {/* <Route path='/gallery' element={<Gallery />}>
          <Route index element={<All/>}/>
          <Route path='all' element={<All />} />
          <Route path='cafes' element={<Cafes />} />
          <Route path='cowork' element={<Cowork />} />
          <Route path='store' element={<Store />} />
        </Route> */}
        <Route path='/contactus/' element={<Contactus />} />
      </Routes>
    
    </div>
  );
}

export default App;


{/* <Route index element={<All/>}/>
          <Route path='all' element={<All />} /> */}