import React from "react";
import './style.scss';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/" className='nav__link'>Home</a>
                </li>
                <li className="nav__item">
                    <a href="/" className='nav__link'>About Us</a>
                </li>
                <li className="nav__item">
                    <a href="/" className='nav__link'>Services</a>
                </li>
                <li className="nav__item">
                    <a href="/" className='nav__link'>News</a>
                </li>
                <button className="nav__btn">Contact Us</button>
            </ul>
        </nav>
    )
}

export default Nav;