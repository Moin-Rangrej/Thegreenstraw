import React from 'react'
import './Header.css'
import Greenstrawlogo from '../../assets/images/GREENSTRAW-EMBLEM1.png'

export default function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light p-4 bg-dark fixed-top">
                    <div className='container'>
                        <div>
                            <img src={Greenstrawlogo} alt='Greenstrawlogo' />
                            <a className="navbar-brand gsHeading" href="#">THE GREENSTRAW</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbarPages">
                                <li className="nav-item active">
                                    <a className="nav-link navbartitle" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbartitle" href="#">About us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle navbartitle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item dropdown-text" href="#">The Greenstraw Spaces</a>
                                        <a className="dropdown-item dropdown-text" href="#">Stores</a>
                                        <a className="dropdown-item dropdown-text" href="#">Cafes</a>
                                        <a className="dropdown-item dropdown-text" href="#">Co-working Space</a>
                                        <a className="dropdown-item dropdown-text" href="#">The Greenstraw Foundation</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbartitle" href="#">Gallery</a>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <button className="contactbtn my-2 my-sm-0" type="submit">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
