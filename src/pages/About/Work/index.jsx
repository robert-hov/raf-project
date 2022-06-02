import React from 'react';
import './index.scss';


const Work = () => {
    return (
        <section className="work">
            <div className="page-container-big">
                <div className="work__container">
                    <h3 className="work__title">Why Work with Us</h3>
                    <ul className="work__list">
                        <li className="work__item">
                            <button className="work__item-btn work__item-btn--purple">Lorem Ipsum</button>
                            <h5 className="work__item-title">Lorem Ipsum</h5>
                            <p className="work__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s,</p>
                        </li>
                        <li className="work__item">
                            <button className="work__item-btn work__item-btn--orange">Lorem Ipsum</button>
                            <h5 className="work__item-title">Lorem Ipsum</h5>
                            <p className="work__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s,</p>
                        </li>
                        <li className="work__item">
                            <button className="work__item-btn work__item-btn--green">Lorem Ipsum</button>
                            <h5 className="work__item-title">Lorem Ipsum</h5>
                            <p className="work__item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s,</p>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Work