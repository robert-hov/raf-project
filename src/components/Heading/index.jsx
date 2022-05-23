import React from "react";
import './index.scss';

const Heading = ({title, desc, linkText, link, img, isSmall}) => {
    return (
        <section className="heading">
            <div className="page-container">
                <div className="heading__container">
                    <div className="heading__content">
                        <h1 className={`heading__title ${isSmall && `heading__title--small`}`}>{title}</h1>
                        <p className="heading__desc">{desc}</p>
                        <a href={link} className="heading__button" >{linkText}</a>
                    </div>
                    <div className="heading__image-container">
                        <img src={img} alt='human' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heading