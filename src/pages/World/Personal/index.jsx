import React from "react";
import './style.scss';

const Personal = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <h2 className="contact__title">Say hello</h2>
                <p className="contact__desc">Lorem Ipsum is simply dummy text of the printing.</p>
                <form className="contact__form">
                    <div className="contact__form-container">
                        <div className="contact__form-block contact__form-block--small">
                            <label htmlFor="contact__form-name">First Name</label>
                            <input id="contact__form-name" />
                        </div>
                        <div className="contact__form-block contact__form-block--small">
                            <label htmlFor="contact__form-last-name">Last Name</label>
                            <input id="contact__form-last-name" />
                        </div>
                        <div className="contact__form-block">
                            <label htmlFor="contact__form-mail">Email Address</label>
                            <input id="contact__form-mail" />
                        </div>
                        <div className="contact__form-block">
                            <label htmlFor="contact__form-message">Message</label>
                            <textarea id="contact__form-message" />
                        </div>
                    </div>
                    <buttton className="contact__form-btn" type='submit' >
                        Get in touch
                    </buttton>
                </form>
            </div>
        </section>
    )
}

export default Personal