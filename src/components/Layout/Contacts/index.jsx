import React from "react"
import './style.scss';

const Contacts = () => {
    return (
        <div className="header__top">
            <div className="page-container">
                <div className="header__top-container">
                    <a href="/" className="header__top-block">
                        <span className="header__top-icon">
                            <span className="img-container">
                                <svg className="icon">
                                    <use xlinkHref="#location" />
                                </svg>
                            </span>
                        </span>
                        <span className="header__top-text">
                            Company Address type here
                        </span>
                    </a>
                    <a href="/" className="header__top-block">
                        <span className="header__top-icon">
                            <span className="img-container">
                                <svg className="icon">
                                    <use xlinkHref="#telephone"/>
                                </svg>
                            </span>
                        </span>
                        <span className="header__top-text">
                            +94 000 00000
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;