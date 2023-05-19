import React,{useEffect} from 'react'
import './overlay.css'



export default function Overlay() {

    // useEffect(() => {
    //     Aos.init({ duration: 1500,easing:'ease-in-out',once:true,mirror:true })
    // }, [])

    return (
        <>
            <div className='placeBG'>
                <div className='px-5  palceinfo'>
                    <h1 className='placehead'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.</h1>
                    <p className='placeauthorname'
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >~ Mae Jemison</p>
                </div>
            </div>
        </>
    )
}
