import React from "react"
import './style.scss';

const Contacts = () => {
    return (
        <div class="header__top">
            <div class="page-container">
                <div class="header__top-container">
                    <a href="/" class="header__top-block">
                        <span class="header__top-icon">
                            <svg class="icon">
                                <use xlinkHref="#location" />
                            </svg>
                        </span>
                        <span class="header__top-text">
                            Company Address type here
                        </span>
                    </a>
                    <a href="/" class="header__top-block">
                        <span class="header__top-icon">
                            <svg class="icon">
                                <use xlinkHref="#telephone" />
                            </svg>
                        </span>
                        <span class="header__top-text">
                            +94 000 00000
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;