import React from 'react';
import './style.scss';
import Heading from "../../../components/Heading";
import Loop from "../../../components/Loop";

const About = () => {
    return (
        < >
            <div className="heading">
                <div className="page-container">
                    <h2 className="heading__title">Lorem Ipsum is simply dummy text of the printing and.</h2>
                    <p className="heading__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="page-container">
                <div className="inf">
                    <ul className="nav-inf">
                        <li className="inf-list">
                            <div className="inf-item__image-circle">
                                <div className="inf-item__image-container">
                                    <div className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#person-test" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="inf-item">90+</h1>
                                <p className="inf-text">Clients</p>
                            </div>
                        </li>
                        <li className="inf-list">
                            <div className="inf-item__image-circle">
                                <div className="inf-item__image-container">
                                    <div className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#location" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="inf-item">30+</h1>
                                <p className="inf-text">Countries</p>
                            </div>
                        </li>
                        <li className="inf-list">
                            <div className="inf-item__image-circle">
                                <div className="inf-item__image-container">
                                    <div className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref="#projects" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="inf-item">50+</h1>
                                <p className="inf-text">Projects</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About;