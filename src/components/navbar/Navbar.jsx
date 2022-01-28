import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo-2.png'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const Menu = () => (
        <>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>About</a></p>
            <p><a href='#models'>Models</a></p>
            <p><a href='#codes'>Code</a></p>
            <p><a href='#conclusion'>Conclusion</a></p>
        </>
    )
    return (
        <div className='hd__navbar'>
            <div className='hd__navbar-links'>
                <div className='hd__navbar-links_logo'>
                    <img src={logo} alt='logo ' />
                </div>
                <div className='hd__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='hd__navbar-sign'>
                {/* <p>Sign in</p> */}
                <button type='button'>Predict Now</button>
            </div>
            <div className='hd__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    /> : <RiMenu3Line
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                }
                {toggleMenu && (
                    <div className='hd__navbar-menu_container scale-up-center'>
                        <div className='hd__navbar-menu_container-links'>
                            <Menu />
                            <div className='hd__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar