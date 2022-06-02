import React, {useEffect, useState} from "react";
import './style.scss';
import {Link} from "react-router-dom";
import {navData} from "../../../../data";

const Nav = ({active, click}) => {

    return (
        <nav className={`nav${active ? ` nav--active` : ''}`}>
            <button className='nav__close-btn' onClick={click}>
                <span className="img-container">
                    <svg className="icon">
                      <use href="#close" />
                    </svg>
                </span>
            </button>
            <ul className={`nav__list`}>
                {navData.map(item => {
                    return (
                        <li key={item.link} className="nav__item" onClick={click}>
                            <Link to={item.link} className='nav__link'>{item.linkText}</Link>
                        </li>
                    )
                })}
                <li className="nav__item">
                    <Link to="World" className='nav__link'>
                        <button className="nav__btn">Contact Us</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;