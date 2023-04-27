import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contactus from './pages/contactus';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/contactus' element={<Contactus />}/>
      </Routes>
    </div>
  );
}

export default App;
