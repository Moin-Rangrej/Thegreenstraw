import React from 'react'
import './gallery.css'
import Layout from '../../components/Layout'

export default function Gallery() {
  return (
    <>
      <Layout>
        <section className='Gallerysec'>
          <div className='gallerybBG'>
            <h2 className='galleryHeading'>Gallery</h2>
            <p className='galleryPera'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
            </p>
          </div>

          {/* sectiontwo start here */}

          <div className='galleryimagesSec'>
              <div className='container my-5'>
                <div className='gallerypages d-flex justify-content-around flex-wrap'>
                  <p className='imgpages'>ALL</p>
                  <p className='imgpages'>Cafe's</p>
                  <p className='imgpages'>Co-Working Space</p>
                  <p className='imgpages'>Store's</p>
                  </div>
                  

              </div>
          </div>

        </section>
      </Layout>
    </>
  )
}
