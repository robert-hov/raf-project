import React from "react";
import './index.scss';
import human from '../../../assets/img/heading/human.png'

const Heading = () => {
    return (
        <section className="heading">
            <div className="page-container">
                <div className="heading__container">
                    <div className="heading__content">
                        <h1 className="heading__title">Work that we produce for our clients</h1>
                        <p className="heading__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <a className="heading__button" >More details</a>
                    </div>
                    <div className="heading__image-container">
                        <img src={human} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heading