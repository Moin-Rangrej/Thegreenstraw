import React from 'react'
import './Header.css'
import Greenstrawlogo from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import { Link } from 'react-router-dom'

export default function Header() {
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
                                <li className="nav-item active">
                                    <Link className="nav-link navbartitle" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navbartitle" to='/aboutus'>About us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle navbartitle" to='/services' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item dropdown-text" href="#services">The Greenstraw Spaces</a>
                                        <a className="dropdown-item dropdown-text" href="#services">Stores</a>
                                        <a className="dropdown-item dropdown-text" href="#services">Cafes</a>
                                        <a className="dropdown-item dropdown-text" href="#services">Co-working Space</a>
                                        <a className="dropdown-item dropdown-text" href="#services">The Greenstraw Foundation</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link navbartitle" to='/gallery'>Gallery</Link>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                            <Link to='/contactus'>
                                <button className="contactbtn my-2 my-sm-0" type="submit">Contact Us</button>
                            </Link>    
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
