import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className='nav__link'>Home</Link>
                </li>
                <li className="nav__item">
                    <Link to="/about-us" className='nav__link'>About Us</Link>
                </li>
                <li className="nav__item">
                    <Link to="/services" className='nav__link'>Services</Link>
                </li>
                <li className="nav__item">
                    <Link to="/extranews" className='nav__link'>News</Link>
                </li>
                <Link to="World" className='nav__link'>
                <button className="nav__btn">Contact Us</button>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;