import React from "react";
import './style.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="page-container">
                    <div className="footer__container">

                        <div className="footer__block footer__block--info">
                            <h2 className="footer__logo">logo</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="footer__block footer__block--nav">
                            <h3 className="footer__title">About Us</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="/" className="footer__link">
                                        Company
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">
                                        Carrers
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__block footer__block--contact">
                            <h3 className="footer__title">Contact us</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="/" className="footer__link">example@example.com</a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="+374 000 000">+374 000 000</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Your Address</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__block footer__block--row">
                            <a href='/' className="footer__icon">
                                <span className="img-container">
                                    <svg className="icon">
                                        <use xlinkHref="#fb" />
                                    </svg>
                                </span>
                            </a>
                            <a href='/' className="footer__icon">
                                <span className="img-container">
                                    <svg className="icon">
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </span>
                            </a>
                            <a href='/' className="footer__icon">
                                <span className="img-container">
                                    <svg className="icon">
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </span>
                            </a>
                            <a href='/' className="footer__icon">
                                <span className="img-container">
                                    <svg className="icon">
                                        <use xlinkHref="#linkedin" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__line" />
            <div className="footer__bottom">
                <div className="page-container">
                    <h3 className="footer__bottom-title">Copyright ® 2021 Company All rights Rcerved</h3>
                </div>
            </div>

        </footer>
    )
}

export default Footer