import React, {useState} from "react";
import './style.scss';
import {Link} from "react-router-dom";

const Nav = () => {
    const [navActive, setNavActive] = useState(false);

    const clickHandler = () => {
        setNavActive(!navActive)
    }

    return (
        <nav className="nav">
            <ul className={`nav__list${navActive ? ` nav__list--active` : ''}`}>
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
                <li className="nav__item">
                    <Link to="World" className='nav__link'>
                        <button className="nav__btn">Contact Us</button>
                    </Link>
                </li>
            </ul>
            <button className="hamburger" onClick={clickHandler}>
                <span className="img-container">
                    <svg className="icon">
                        <use xlinkHref="#hamburger" />
                    </svg>
                </span>
            </button>
        </nav>
    )
}

export default Nav;