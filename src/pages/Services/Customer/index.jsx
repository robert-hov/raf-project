import React from "react";
import './style.scss';
import MarkA from '../../../assets/img/info/Mark-A.png';
import JaneB from '../../../assets/img/info/Jane-B.png';
import DenC from '../../../assets/img/info/Den-C.png';
import RightD from '../../../assets/img/info/Right-D.png';
import LeftE from '../../../assets/img/info/Left-E.png';
import StarF from '../../../assets/img/info/Star-F.png'


const Customer = () => {
    return (
        <section className="customer">
            <div className="page-container">
            <div className="title">
                <h1 className="customer__title">Trusted by Thousands of Happy Customer</h1>
                <p className="coustomer__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                    Ipsum is simply dummy .</p>
            </div>
            </div>
            <div className="customer__box">
                <div className="page-container">
                    <div className="customer__box-container">
                        <div className="box">
                            <div className="box__title">
                                <div className="box__title-img-container">
                                    <img src={MarkA} />
                                    <div>
                                        <h3 className="small__box-title">Viezh Robert</h3>
                                        <p className="small__box-desc">Warsaw, Poland</p>
                                    </div>
                                </div>
                                <div className="mark">
                                    <h3 className="box__mark">4.5</h3>
                                    <img src={StarF} />
                                </div>
                            </div>
                            <div className="box__desc">
                                <p className="box__desc-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__title">
                                <div className="box__title-img-container">
                                    <img src={JaneB} />
                                    <div>
                                        <h3 className="small__box-title">Viezh Robert</h3>
                                        <p className="small__box-desc">Warsaw, Poland</p>
                                    </div>
                                </div>
                                <div className="mark">
                                    <h3 className="box__mark">4.5</h3>
                                    <img src={StarF} />
                                </div>
                            </div>
                            <div className="box__desc">
                                <p className="box__desc-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__title">
                                <div className="box__title-img-container">
                                    <img src={DenC} />
                                    <div>
                                        <h3 className="small__box-title">Viezh Robert</h3>
                                        <p className="small__box-desc">Warsaw, Poland</p>
                                    </div>
                                </div>
                                <div className="mark">
                                    <h3 className="box__mark">4.5</h3>
                                    <img src={StarF} />
                                </div>
                            </div>
                            <div className="box__desc">
                                <p className="box__desc-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-container">
                <div className="customer__button">
                    <button className="button__left">
                        <img src={LeftE} />
                    </button>
                    <button className="button__right">
                        <img src={RightD} />
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Customer
