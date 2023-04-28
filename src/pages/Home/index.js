import React, { useState } from 'react'
import './Home.css'
import Layout from '../../components/Layout'
import Serviceicon from '../../assets/images/Services/service.png'
import Cafeicon from '../../assets/images/Services/cafe.png'
import Workingicon from '../../assets/images/Services/workingspace.png'
import Restaurant from '../../assets/images/Services/Restaurant.png'
import Client from '../../assets/images/client.png'
import Leftcout from '../../assets/images/Services/leftd_cout.png'
import Rigthcout from '../../assets/images/Services/rigthd_cout.png'



export default function Home() {
    const [arrow,setarrow] = useState(false)
    const [arrow1,setarrow1] = useState(false)
    const [arrow2,setarrow2] = useState(false)
    const [arrow3,setarrow3] = useState(false)


    const updateArrow = () => {
        setarrow(arrow =>  !arrow)
    }

    const updateArrow1 = () => {
        setarrow1(arrow1 => !arrow1)
    }

    const updateArrow2 = () => {
        setarrow2(arrow2 => !arrow2)
    }

    
    const updateArrow3 = () => {
        setarrow3(arrow3 => !arrow3)
    }

    return (
        <>
            <Layout>
                {/* Section 1 start */}
                <section className='homediv'>
                    <div className='homedata'>
                        <p className='Home_heading'>
                            Make each day <p> your masterpiece</p>
                        </p>
                        <p className='Home_pera'>
                            Amet minim mollit non deserunt ullamco est sit
                            <p>aliqua dolor do amet sint. Velit officia consequat duis</p>
                            <p>enim velit mollit. Exercitation veniam consequat sunt</p>
                        </p>
                        <button className='explorebtn'>
                            Explore
                        </button>
                    </div>
                </section>

                {/* Section 1 end */}

                {/* Section2 start */}

                <section className='section2'>
                    <div className='greenstarw'>
                        <h1 className='greenstarwHeading text-center m-4'>
                            The Greenstraw
                        </h1>
                        <p className='greenstarwPera text-center'>
                            The Greenstraw is an initiative to create a community of conscious and conscientious
                            individuals by curating low waste and interactive solutions to everyday things to
                            bring about a sustainable behavioral change.
                        </p>
                    </div>
                </section>

                {/* Section2 end */}

                {/* Section3 start here */}

                <section className='section3' id='services'>

                    <div className='servicepage d-flex justify-content-center align-items-center flex-wrap'>
                        <h1 className=' servicesHeading p-4'>
                            Services We Offer
                        </h1>
                        <p className='servicesPera'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div className='serviceType d-flex justify-content-center flex-wrap'>
                        <div className='stores text-center p-5'>
                            <img src={Serviceicon} />
                            <h1 className='serviceTypeHeading text-center p-3'>
                                Store’s
                            </h1>
                            <p className='text-center serviceTypePera'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='servicebtn m-3'>
                                View
                            </button>
                        </div>
                        <div className='stores text-center p-5'>
                            <img src={Cafeicon} />
                            <h1 className='serviceTypeHeading text-center p-3'>
                                Cafe’s
                            </h1>
                            <p className='text-center serviceTypePera'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='servicebtn m-3'>
                                View
                            </button>
                        </div>
                        <div className='stores text-center p-5'>
                            <img src={Workingicon} />
                            <h1 className='serviceTypeHeading text-center py-3'>
                                Co-Working Space
                            </h1>
                            <p className='text-center serviceTypePera'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                            </p>
                            <button className='servicebtn m-3'>
                                View
                            </button>
                        </div>

                    </div>

                </section>

                {/* Section3 end here */}

                {/* Section4 start here */}

                <section className='section4 container'>
                    <div className='Faqsdiv row'>
                        <div className='col-lg-6 restaurant py-5'>
                            <img src={Restaurant} alt='Restaurant' className='Restaurant ' />
                        </div>
                        <div className='col-lg-6 Whatwedo py-5'>
                            <h3 className='text-left WhatwedoHeading'>
                                What we do!
                            </h3>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className={arrow ? "fa fa-chevron-circle-right pr-3 accordianArrow" : "fa fa-chevron-circle-down pr-3 accordianArrow" } onClick={updateArrow} aria-hidden="true" />
                                                <span>Events and Workshops</span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body cardData ml-4">
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <i className={arrow1 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow" } onClick={updateArrow1} aria-hidden="true" />
                                                {/* <i className= "fa fa-chevron-circle-right pr-3 accordianArrow" aria-hidden="true" /> */}
                                                <span>Sustainability Models</span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body cardData ml-4">
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i className={arrow2 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow" } onClick={updateArrow2} aria-hidden="true" />
                                                <span className='accordion3'>Low waste product curation and consulting</span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body cardData ml-4">
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <i className={arrow3 ? "fa fa-chevron-circle-down pr-3 accordianArrow" : "fa fa-chevron-circle-right pr-3 accordianArrow" } onClick={updateArrow3} aria-hidden="true" />
                                                <span>Awareness Campaigns</span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body cardData ml-4">
                                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section4 end here */}

                {/* Section5 start here */}

                <section className='abc'>
                    <h4 className='workareaHeading'>It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.</h4>
                    <p className='authorname'>
                        ~ Mae Jemison
                    </p>
                </section>

                {/* Section5 end here */}

                {/* Section6 start here */}

                <section className='section6'>
                    <div className='container peoplesaydiv'>
                        <h1 className='peoplesayHead text-center pt-5'>
                            What People Say
                        </h1>
                        <img src={Leftcout} alt='Leftcout' className='Leftcout' />
                        <p className='peoplesayPera text-center'>
                            We design and implement awareness campaigns by identifying various environmental factors that needs to be addressed in our communities
                        </p>
                        <img src={Rigthcout} alt='Rigthcout' className='Rigthcout' />
                        <img src={Client} className='rounded-circle py-3' />
                        <h1 className='text-center clientname'>Patarika Goodman <p className='client'>Client</p></h1>
                    </div>
                </section>

                {/* Section6 end here */}

                {/* section7 start here */}

                <div className='section7 my-5'>
                    <div className='container d-flex  flex-wrap'>
                        <div className='stayconnect pt-5'>
                            STAY <p className='connect'>CONNECTED</p>
                        <p className='subscribePera'>Subscribe to our newsletter</p>
                        </div>

                        <div className='inputbox d-flex justify-content-center align-items-center '>
                            <input type='text' placeholder='Enter your E-mail Address' className='inputmail py-2'/>
                            <button className='subscribebtn'>Subscribe</button>
                        </div>
                    </div>

                </div>

                {/* section7 start here */}

                {/* section8 start here */}

                <section className='section8 container'>
                    <div className='clientsnames d-flex justify-content-between flex-wrap py-5 my-3'>
                        <h1 className='clientname'>Cameron <p>Williamson</p></h1>
                        <h1 className='clientname'>Leslie <p>Alexander</p></h1>
                        <h1 className='clientname'>Darlene <p>Robertson</p></h1>
                        <h1 className='clientname'>Kathryn <p>Murphy</p></h1>
                        <h1 className='clientname'>Darlene <p>Robertson</p></h1>
                    </div>
                </section>

                {/* section8 end here */}

            </Layout>
        </>
    )
}
