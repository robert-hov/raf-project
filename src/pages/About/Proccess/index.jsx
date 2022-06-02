import React from 'react';
import './index.scss';
import officeTeam from '../../../assets/img/info/office-team.png'

const Process = () => {
    return (
        <section className="process">
            <div className="page-container">
                <div className="process__container">
                    <div className="process__img-container">
                        <div className="img-container">
                            <img src={officeTeam} alt={'work process'} />
                        </div>
                    </div>
                    <div className="process__content">
                        <h3 className="process__subtitle">
                            Lorem ipsum
                        </h3>
                        <h1 className="process__title">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. </h1>
                        <p className="process__desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries,</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Process