import React from "react";
import './style.scss';
import office from '../../../assets/img/info/office.png'

const Info = () => {
    return (
        <section className="info">
            <div className="page-container">
                <h2 className="info__title">Lorem Ipsum</h2>
                <p className="info__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className="info__image-container">
                    <img src={office} alt='office' />
                </div>
            </div>
        </section>
    )
}

export default Info;