import React from "react";
import './style.scss';
import SmartGlass from '../../../assets/img/info/smart-glass.png'
import IPhone from '../../../assets/img/info/i-phone.png'
import WebDeveloper from '../../../assets/img/info/web-developer.png'

const Lorem = () => {
    return (
        < >
            <section>
                <div className="page-container">
                <div className="lorem">
                    <div className="lorem__info">
                        <div className="lorem-text">
                            <h1 className="lorem-title">Lorem Ipsum is simply dummy text dummy text </h1>
                            <p className="lorem-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,</p>
                            <p className="lorem-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <button className="lorem-btn">Read more</button>
                        </div>
                        <img src={SmartGlass} alt="#" />
                    </div>
                </div>
                <div className="lorem2">
                    <div className="lorem2__info">
                        <img src={IPhone} alt="#" />
                        <div className="lorem2-text">
                            <h1 className="lorem2-title">Lorem Ipsum is simply dummy text dummy text </h1>
                            <p className="lorem2-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,</p>
                            <p className="lorem2-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <button className="lorem2-btn">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="lorem3">
                    <div className="lorem3__info">
                        <div className="lorem3-text">
                            <h1 className="lorem3-title">Lorem Ipsum is simply dummy text dummy text </h1>
                            <p className="lorem3-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,</p>
                            <p className="lorem3-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <button className="lorem3-btn">Read more</button>
                        </div>
                        <img src={WebDeveloper} alt="#" />
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Lorem