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

          <div className='sectiontwo container'>
            <div className='row my-5'>
              <h1 className='getTouch col-lg-4'>GET IN TOUCH</h1>
              <div className="vl px-2"/>
              <p className='available col-lg-7'>We are available 24/7 by fax, e-mail or by phone. You can also use our
                quick contact form to ask a question about our products.</p>
            </div>
          </div>

          <div className='sectionThree my-lg-5 '>
              <div className='userinput container d-flex flex-wrap'>
                    <div className='namesfield d-flex flex-column flex-wrap justify-content-md-center'>
                        <input type='text' placeholder='First Name' className='firstname my-2'/> 
                        <input type='email' placeholder='E-Mail' className='firstname my-3'/>
                    </div>
                    <div className='namesfield d-flex flex-column flex-wrap justify-content-md-center'>
                    <input type='text' placeholder='Last Name' className='firstname my-2'/>
                        <input type='number' placeholder='Phone' className='firstname my-3'/>
                    </div>
                    <textarea id="w3review" name="w3review" placeholder='Message' rows={2} cols={40} className='message'/>
              </div>
          </div>

          <div className='infoBG row'>
            <div className='container d-flex flex-wrap'>
              <div className='col-lg-4 companyInfo phoneinfo'>
                <h1 className='ownerInfo'>Phones</h1>
                <hr className='hrline2'/>
                <p>Office +1 (409) 987–5874</p>
                <p>Fax +1 (409) 987–5874</p>
              </div>
              <div className='col-lg-4 companyInfo phoneinfo'>
                <h1 className='ownerInfo'>ADDRESS</h1>
                <hr className='hrline2'/>
                <p>523 Sylvan Ave, 5th Floor</p>
                <p>Mountain View, CA 94041 USA</p>
              </div>
              <div className='col-lg-4 companyInfo phoneinfo'>
                <h1 className='ownerInfo'>E-MAILS</h1>
                <hr className='hrline2'/>
                <p>info@demolink.org</p>
                <p>mail@demolink.org</p>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7947401145693!2d72.56638377501685!3d23.031307579167706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854310b186e9%3A0xc2ff10907f8de50c!2sUptake%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682604268889!5m2!1sen!2sin" width="100%" height="500" style={{ border: "0" }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" /></p>
          </div>

        </section>
      </Layout>
    </>
  )
}
