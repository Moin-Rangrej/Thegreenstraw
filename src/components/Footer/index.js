import React from 'react'
import './Footer.css'
import GSimage from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import Mapicon from '../../assets/images/Icons/map-pin.png'
import Phone from '../../assets/images/Icons/Phone.png'
import Mail from '../../assets/images/Icons/Mail.png'
import Facebook from '../../assets/images/Icons/facebook.png'
import Twitter from '../../assets/images/Icons/twitter.png'
import Instagram from '../../assets/images/Icons/instagram.png'
import Linked from '../../assets/images/Icons/linkedin.png'
import G1 from '../../assets/images/gallery1.png'
import G2 from '../../assets/images/gallery2.png'


export default function Footer() {
    return (
        <>
        <div className='footerParent '>
            <div className=' p-5 row'>
                <div className='child1 col-lg-4 my-3'>
                    <div className='gsImages mx-4'>
                        <img src={GSimage} className='The greenstarw' />
                        <a className="navbar-brand gsHeading" href="#">THE GREENSTRAW</a>
                    </div>
                    <p className='footerpara px-5'>
                        The Greenstraw is an initiative to create a community of conscious and conscientious
                        individuals by curating low waste and interactive solutions to everyday things
                        to bring about a sustainable behavioral change.
                    </p>
                </div>
                <div className='child2 col-lg-3 my-3'>
                    <div className='footertwo'>
                        <p className='getintouch'>GET IN TOUCH</p>
                        <div className='Addressdiv'>
                            <img src={Mapicon} />
                            <p className='Address'>
                                Plot No-216, T.P Scheme-1,
                                Vastrapur, Ahmedabad 380054
                            </p>
                        </div>
                        <div className='Addressdiv'>
                            <img src={Phone} />
                            <p className='Address'>
                                abcz@xyz.com
                            </p>
                        </div>
                        <div className='Addressdiv'>
                            <img src={Mail} />
                            <p className='Address'>
                                +97-78686 79799
                            </p>
                        </div>
                        <div className='socialIcons d-flex justify-content-between flex-wrap'>
                            <img src={Facebook} alt='Facebook' className='fb' />
                            <img src={Twitter} alt='Twitter' />
                            <img src={Instagram} alt='Instagram' />
                            <img src={Linked} alt='Linked' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 my-3'>
                    <h1 className='text-white getintouch pb-2'>GALLERY</h1>
                    <div className='galleryFirst d-flex flex-wrap'>
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                        <img src={G2} alt='Gallery2' className='Gallery1' />
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                    </div>
                    <div className='galleryFirst d-flex flex-wrap'>
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                        <img src={G2} alt='Gallery2' className='Gallery1' />
                        <img src={G1} alt='Gallery1' className='Gallery1' />
                    </div>
                </div>
            </div>
            <hr className='hrline mx-5'/>
            <div className='row'>
                    <h1 className='copyright col-12'>
                    © 2022 The Greenstraw.  All rights reserved. 
                    </h1>
                </div>
            </div>
        </>
    )
}
