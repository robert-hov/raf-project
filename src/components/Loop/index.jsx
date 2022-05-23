import React from "react"
import './style.scss'

const Loop = ({isTitleShown}) => {
    return (
        <section className="loop">
            <div className="page-container">
                {isTitleShown && (
                    <>
                        <h2 className="loop__section-title">
                            Lorem Ipsum
                        </h2>
                        <p className="loop__section-desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </>
                )}
                <div className="loop__wrapper">
                    <div className="loop__div">
                        <h2 className="loop__title">Stay in the loop</h2>
                        <p className="loop__desc">Subscribe to receive the latest news and updates about TDA.
                            We promise not to spam you!
                        </p>
                    </div>
                    <div className="form">
                        <input type="text" className="form-inp" placeholder="Enter email adress"/>
                        <button className="form-btn">Continue</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loop