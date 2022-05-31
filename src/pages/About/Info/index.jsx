import React from 'react';
import './index.scss';
import officeTeam from '../../../assets/img/info/office-team.png'

const Info = () => {
    return (
        <section className="heading__info">
            <div className="info__container">
                <div><img src={officeTeam} className="info__image-container" /></div>
                <div className="info__desc">
                    <h1 className="info__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                    <p className="info__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
            </div>
        </section>
    )
}
export default Info