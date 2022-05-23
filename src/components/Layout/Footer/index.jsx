import React from "react";
import './style.scss'

const Footer = () => {
    return (
        <footer className="footer">
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
                    <div className="footer__icon">
                        <a href="/">
                            <img src="facebook.png" />
                        </a>
                    </div>
                    <div className="footer__icon" />
                    <div className="footer__icon">
                        <a href="/">
                            <img src="twitter.png" />
                        </a>
                    </div>
                    <div className="footer__icon" />
                </div>
            </div>
        </footer>
)
}

export default Footer