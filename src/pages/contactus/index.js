import React from 'react'
import './contactus.css'
import Layout from '../../components/Layout'

export default function Contactus() {
  return (
    <>
      <Layout>
        <section className='contactussec'>
          <div className='contactBG'>
            <h2 className='contactHeading'>Contact Us</h2>
            <p className='contactPera'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt</p>
            </p>
          </div>

          {/* section two start here */}

          <div className='sectiontwo'>
            <div className='row my-5'>
              <h1 className='getTouch col-lg-4'>GET IN TOUCH</h1>
              <div className="col-lg-1 vl" />
              <p className='col-lg-7'>We are available 24/7 by fax, e-mail or by phone. You can also use our
                quick contact form to ask a question about our products.</p>
            </div>
          </div>

          <div className='sectionThree'>

          </div>

          <div className='infoBG row'>
            <div className='container d-flex '>
              <div className='col-lg-4 border border-primary phoneinfo'>
                <h1>Phones</h1>
                <p>Office +1 (409) 987–5874</p>
                <p>Fax +1 (409) 987–5874</p>
              </div>
              <div className='col-lg-4 border border-primary phoneinfo'>
                <h1>ADDRESS</h1>
                <p>Office +1 (409) 987–5874</p>
                <p>Fax +1 (409) 987–5874</p>
              </div>
              <div className='col-lg-4 border border-primary phoneinfo'>
                <h1>E-MAILS</h1>
                <p>info@demolink.org</p>
                <p>mail@demolink.org</p>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7947401145693!2d72.56638377501685!3d23.031307579167706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854310b186e9%3A0xc2ff10907f8de50c!2sUptake%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682604268889!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0"}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" /></p>
          </div>

        </section>
      </Layout>
    </>
  )
}
