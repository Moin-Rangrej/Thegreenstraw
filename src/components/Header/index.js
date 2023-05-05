import React from 'react'
import './Header.css'
import Greenstrawlogo from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import { Link,NavLink } from 'react-router-dom'

export default function Header() {

    function scrollingcontrol(){
        console.log("scroll working")
        console.log(window);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
      }



    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light p-4 bg-dark fixed-top">
                    <div className='container-fluid'>
                        <div className='logoText'>
                            <img src={Greenstrawlogo} alt='Greenstrawlogo' className='Greenstrawlogo'/>
                            <Link className="navbar-brand gsHeading" to='/'>THE GREENSTRAW</Link>
                        </div>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon" /> */}
                            <span className='toggler-icon top-bar'></span>
                            <span className='toggler-icon middle-bar'></span>
                            <span className='toggler-icon bottom-bar'></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbarPages">
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle"  to='/' onClick={scrollingcontrol}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/aboutus' onClick={scrollingcontrol} >About us</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle navbartitle" to='/services' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </NavLink>
                                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item dropdown-text" to='/services'>The Greenstraw Spaces</a>
                                        <a className="dropdown-item dropdown-text" href="#store">Stores</a>
                                        <a className="dropdown-item dropdown-text" href="#services">Cafes</a>
                                        <a className="dropdown-item dropdown-text" href="#services">Co-working Space</a>
                                        <a className="dropdown-item dropdown-text" href="#services">The Greenstraw Foundation</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/gallery' onClick={scrollingcontrol}>Gallery</NavLink>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                            <Link to='/contactus'>
                                <button className="contactbtn my-2 my-sm-0" type="submit" onClick={scrollingcontrol}>Contact Us</button>
                            </Link>    
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
    