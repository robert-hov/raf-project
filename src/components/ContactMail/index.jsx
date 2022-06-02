import React from "react"
import './style.scss'

const ContactMail = ({isTitleShown}) => {
    return (
        <section className="contact-mail">
            <div className="page-container">
                {isTitleShown && (
                    <>
                        <h2 className="contact-mail__title">
                            Lorem Ipsum
                        </h2>
                        <p className="contact-mail__desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </>
                )}
                <div className="contact-mail__wrapper">
                    <div className="contact-mail__content">
                        <h2 className="contact-mail__inner-title">Stay in the loop</h2>
                        <p className="contact-mail__inner-desc">Subscribe to receive the latest news and updates about TDA.
                            We promise not to spam you!
                        </p>
                    </div>
                    <div className="contact-mail__form">
                        <input type="text" className="contact-mail__inp" placeholder="Enter email adress"/>
                        <button className="contact-mail__btn">Continue</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMail