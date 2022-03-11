import React from 'react'
import './Header.css';
import logo from '../../assets/svg/logo.svg';

export default function Header() {

    const toggleMenu = () => {
        document.querySelector('.hamburger-nav').classList.toggle('open');
        document.querySelector('.header_nav_adaptive').classList.toggle('open-nav');
    }

    return (
        <header className="wrapper">
            <div className="header_container">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <nav className="nav">
                    <ul className="header_nav">
                        <li className="header_nav-active"><a href="#">About the shelter</a></li>
                        <li><a href="#">Our pets</a></li>
                        <li><a href="#">Help the shelter</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>
                <div className="hamburger-nav" onClick={toggleMenu}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div> 
                <nav className="header_nav_adaptive">
                    <ul>
                        <li><a href="#">About the shelter</a></li>
                        <li><a href="#">Our pets</a></li>
                        <li><a href="#">Help the shelter</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav> 
            </div>  
        </header>
    )
}
