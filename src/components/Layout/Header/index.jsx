import React from "react";
import './style.scss';
import Nav from "./Nav";
import Contacts from "../Contacts";

const Header = () => {
    return (
        <>
            <Contacts />
            <header className="header">
                <div className="header__container">
                    <a href='/' className="header__logo">logo</a>
                    <Nav />
                    <div className="header__popup ">
                        <div className="header__popup-wrapper">
                            <button className="header__popup-close-btn">
                                X
                            </button>
                            <h1 className="header__popup-text">
                                Calling...
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;