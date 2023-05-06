import React from 'react'
import './Header.css'
import Greenstrawlogo from '../../assets/images/GREENSTRAW-EMBLEM1.png'
import { Link,NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [show, setShow] = useState(false)
    function handleClick(){
        setShow(false)
        console.log("onclick",show)
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
                        <button className="navbar-toggler collapsed" type="button" onClick={() => {
                            console.log(show)
                        setShow(show => !show)}}  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon" /> */}
                            <span>
                                {
                                    show ? (
                                        <i className="ri-close-line" /> ): ( <i className="ri-menu-line" />)
                                    
                                }
                            </span>
                        </button>

                        <div className= { show ? "collapse navbar-collapse hides" : "collapse navbar-collapse " } id="navbarSupportedContent"
                            
                        >
                            <ul className="navbar-nav ml-auto navbarPages">
                                <li className="nav-item">
                                    <NavLink className= "nav-link navbartitle"  to='/' onClick={handleClick} >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navbartitle" to='/aboutus'  onClick={handleClick} >About us</NavLink>
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
                                    <NavLink className="nav-link navbartitle" to='/gallery'  onClick={handleClick}>Gallery</NavLink>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                            <Link to='/contactus'>
                                <button className="contactbtn my-2 my-sm-0" type="submit"  onClick={handleClick}>Contact Us</button>
                            </Link>    
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
    