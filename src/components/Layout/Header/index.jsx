import React, {useState} from "react";
import './style.scss';
import Nav from "./Nav";
import Contacts from "../Contacts";

const Header = () => {
    const [active, setActive] = useState(false)
    const clickHandler = () => {
        setActive(!active)
    }
    return (
        <>
            <Contacts/>
            <header className="header">
                <div className="header__container">
                    <a href='/' className="header__logo">logo</a>
                    <Nav active={active} click={clickHandler}/>
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
                    <button className="hamburger" onClick={clickHandler}>
                        <span className="img-container">
                            <svg className="icon">
                                <use xlinkHref="#hamburger"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;