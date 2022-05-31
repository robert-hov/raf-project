import React from "react";
import './style.scss';
import VideoImage from'../../../assets/img/info/Video-Image.png'

const Info = () => {
    return (
        <section className="video__info">
            <div className="page-container">
            <div className="video__img">
                <img src={VideoImage} />
                    <div className="video__info-text">
                        <h2 className="video__info-title">Lorem Ipsum is simply dummy text.</h2>
                        <p className="video__info-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
                        <ul className="video__nav">
                            <li className="video__nav-list">
                                <p>Lorem Ipsum is simply</p>
                            </li>
                            <li className="video__nav-list">
                                <p>Lorem Ipsum is simply</p>
                            </li>
                            <li className="video__nav-list">
                                <p>Lorem Ipsum is simply</p>
                            </li>
                            <li className="video__nav-list">
                                <p>Lorem Ipsum is simply</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info