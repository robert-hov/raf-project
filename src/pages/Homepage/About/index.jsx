import React from "react";
import './style.scss';
import together from '../../../assets/img/about/together.png'

const About = () => {
    return (
        <section className="about">
            <div className="about__page-container">
                <div className="about__container">
                    <div className="about__image-container">
                        <img src={together} alt='together' />
                    </div>
                    <div className="about__content">
                        <h2 className="about__title">
                            Lorem Ipsum is simply dummy text dummy text
                        </h2>
                        <p className="about__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <p className="about__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                        <a href='/' className="about__link">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;