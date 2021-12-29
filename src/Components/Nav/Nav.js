import React, {useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MenuItmes } from './Menuitems'
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import UseAuth from '../../Hook/UseAuth';
const Nav = () => {
    const { totalqty } = useSelector((state) => state.CartReducer)
    const [clicked, setClicked] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const {logOut,user} =UseAuth()
    const handleClick = () => {
        setClicked(!clicked)
    }
    const closemobilemenu = () => {
        setClicked(!clicked)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)




    return (
        <>
            <nav className={navbar ? 'nabar active ' : 'NavbarItems '}>
                <Link to='/' style={{ "textDecoration": "none" }} ><h1 className="navbar-logo " style={{ "color": "black" }}>
                    Emart <span style={{ "color": "orange" }}>way</span> <i className='fab fa-react'></i></h1></Link>
                <div className="menu-icon" onClick={handleClick}>
                    {clicked ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={clicked ? 'nav-menu active ' : 'nav-menu '}>
                    {
                        MenuItmes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link style={{color:"black"}} to={item.url} onClick={closemobilemenu} className={item.cName}>
                                        {item.title}
                                    </Link>


                                </li>


                            )

                        })
                    }

                     {
                         user?.email&&<div className='d-flex justify-content-center align-items-center'>
                         <FaUserAlt/><span>{user.displayName}</span>
                         </div>
                     }
                    {
                        user?.email? <div className='logout'>
                            <button className='logout-btn' onClick={logOut}>Logout</button>
                        </div>:
                        <Link style={{color:"black",textDecoration:"none"}} to="/login">Login</Link>
                    }
                    <Link style={{ "textDecoration": "none" }} onClick={closemobilemenu} to='/cart'> <div className='basket'>
                        <BsCartFill className='cart_icon' />
                        <span>{totalqty}</span>
                       
                    </div>
                    </Link>
                </ul>

            </nav>

        </>
    );
};

export default Nav;