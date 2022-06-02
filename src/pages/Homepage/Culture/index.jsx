import React from "react";
import './style.scss';
import office from '../../../assets/img/info/office.png'
import dots from '../../../assets/img/about/dots.png'

const Culture = () => {
    return (
        <section className="culture">
            <div className="page-container">
                <div className="culture__container">
                    <h2 className="culture__title">Lorem Ipsum</h2>
                    <p className="culture__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <h2 className="culture__title">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h2>
                    <div className="culture__image-container">
                        <div className="culture__dots">
                            <div className="img-container">
                                <img src={dots} alt="dots"/>
                            </div>
                        </div>
                        <div className="img-container">
                            <img src={office} alt='office'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Culture;