import React from 'react';
import './index.scss';
import JumLogo from '../../../assets/img/info/Jum-Logo.png';
import EarthLogo from '../../../assets/img/info/Earth-Logo.png';
import BioLogo from '../../../assets/img/info/Bio-Logo.png';
import UniverLogo from '../../../assets/img/info/Univer-Logo.png';
import MegaLogo from '../../../assets/img/info/Mega-Logo.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const Partners = () => {
    return (
        <section className="partners">
            <div className="page-container">
                <div className="partners__container">
                    <h2 className="partners__title">Our Partnership and Collabratiors</h2>
                    <div className="partners__swiper-container">
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={30}
                            className="partners__swiper"
                        >
                            <SwiperSlide>
                                <div className="partners__img-container">
                                    <div className="img-container">
                                        <img src={JumLogo} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partners__img-container">
                                    <div className="img-container">
                                        <img src={EarthLogo} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partners__img-container">
                                    <div className="img-container">
                                        <img src={BioLogo} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partners__img-container">
                                    <div className="img-container">
                                        <img src={UniverLogo} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partners__img-container">
                                    <div className="img-container">
                                        <img src={MegaLogo} alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners