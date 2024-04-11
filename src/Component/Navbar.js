import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import logo2 from '../images/logo2.png'


function Navbar() {
   
    const [logout, setLogout] = useState(false)
    const [click, setClick] = useState(true);
    const [showIcon, setShowIcon] = useState(false)
 

    const handleClick = () =>
   
        setClick(!click)
    


    const cartItems = useSelector((store) => store.cart.items)
    return (
        <section className=''>
            <div className='navbar shadow-lg flex justify-between font-bold text-xl'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo2} />
                    </Link>
                </div>
                <div className="menu mr-5 flex">
                    <ul className='flex justify-center flex-wrap  m-auto mr-5 nav-ul'>
                        <li className='mt-2 text-xl mr-8  onClick={handleClick}'>
                            <Link to="/home">Home
                            </Link>
                        </li>

                        <li className='mt-2 text-xl mr-8  onClick={handleClick}'>
                            <Link to="/about">About </Link>
                        </li>

                        <li className='mt-2 text-xl mr-8  onClick={handleClick}'>
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                       
                    </ul>
                    <div className='nav-li mt-2 font-bold text-xl  mr-8  onClick={handleClick}'>
                        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span style={{ color: "red" }}>{cartItems.length}</span> </Link>
                        </div>
                    <Link to='/Login'>
                    <button className='bg-orange-400 text-white  px-4 py-2 font-bold rounded' onClick={handleClick}>
                     {click ? "Login": "Logout"}
                    </button>
                    </Link>
                </div>
            </div>




            <nav className=" mobile-menu navbar bg-body-tertiary fixed-top shadow-lg flex justify-between font-bold text-xl">
                <div className="container-fluid">
                    <div className='logo'>
                        <img src={logo2} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                       
                        <span><i className="fa-solid fa-bars "></i></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div className="offcanvas-title" id="offcanvasNavbarLabel">    <img src={logo2} /> </div>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav nav-ul justify-content-end flex-grow-1 pe-3">
                                <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                                    <Link to="/home">Home
                                    </Link>
                                </li>
                                <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                                    <Link to="/about">About </Link>
                                </li>

                                <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                                    <Link to="/contact">Contact</Link>
                                </li>
                               
                               
                                
                            <li className='ml-4 font-bold text-xl mt-2 mr-8  onClick={handleClick}'>
                                <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span style={{ color: "red" }}>{cartItems.length}</span> </Link></li>
                            </ul>
                            <button className='bg-orange-400 text-white px-4 py-2 font-bold rounded' onClick={handleClick}>
                                <Link to='/login'>Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
