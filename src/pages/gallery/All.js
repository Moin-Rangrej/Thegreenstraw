import React from 'react'
import './All.css'
import Img1 from '../../assets/images/Gallery/img1.png'
import Img2 from '../../assets/images/Gallery/img2.png'
import Img3 from '../../assets/images/Gallery/img3.png'
import Img4 from '../../assets/images/Gallery/img4.png'
import Img5 from '../../assets/images/Gallery/img5.png'
import Img6 from '../../assets/images/Gallery/img6.png'
import Img7 from '../../assets/images/Gallery/img7.png'
import Img8 from '../../assets/images/Gallery/img8.png'
import Img9 from '../../assets/images/Gallery/img9.png'
import Img10 from '../../assets/images/Gallery/img10.png'

export default function All() {
  return (
    <>
      <h1 className='text-center text-success py-4'>From All page</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='col'>
                  <div className='row-lg-6 no-gutters'>
                    <img src={Img1} alt='Img1' className='img1'/>
                  </div>
                  <div className='row-lg-6'>
                    <img src={Img2} alt='Img2' className='second_divImges'/>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <img src={Img3} alt='Img3' className='second_divImges'/>
              </div>
            </div>
            <div>
              <img src={Img7} alt='Img7' className='second_divImges'/>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-lg-6 pl-0'>
                <div className='col-lg-6 pl-3'>
                  <img src={Img4} alt='Img4' className='second_divImges4'/>
                </div>
              </div>
              <div className='col-lg-6'>
                <img src={Img5} alt='Img5' className='second_divImges'/>
              </div>
            </div>
            <div>
              <img src={Img6} alt='Img6' className='second_divImges'/>
            </div>
          </div>
        </div>
        {/* second div images */}
        <div className='second_div row py-5'>
          <div className='second_divImges col-lg-3'>
            <img src={Img8} alt='Img8' className='second_divImges'/>
          </div>
          <div className='col-lg-6'>
            <img src={Img9} alt='Img9' className='second_divImges'/>
          </div>
          <div className='col-lg-3'>
            <img src={Img10} alt='Img10' className='second_divImges'/>
          </div>
        </div>
      </div>

    </>
  )
}