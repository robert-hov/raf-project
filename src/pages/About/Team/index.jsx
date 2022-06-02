import Recat from 'react';
import "./index.scss";
import JohnPeter from '../../../assets/img/info/John-Peter.png';
import BeverlyHills from '../../../assets/img/info/Beverly-Hills.png';
import ClaudiaHeyes from '../../../assets/img/info/Claudia-Heyes.png';
import AvatarBlue from '../../../assets/img/info/Avatar-Blue.png';


const Team = () => {
    return (
        <section className="team">
            <div className="page-container">
                <div className="team__container">
                    <h1 className="team__title">Our Team</h1>
                    <ul className="team__list">
                        <li className="team__item">
                            <div className="team__img-container">
                                <div className="img-container">
                                    <img src={JohnPeter} alt=""/>
                                </div>
                            </div>
                            <h4 className="team__name">John Peter</h4>
                            <h5 className="team__position">COO</h5>
                        </li>
                        <li className="team__item">
                            <div className="team__img-container">
                                <div className="img-container">
                                    <img src={BeverlyHills} alt=""/>
                                </div>
                            </div>
                            <h4 className="team__name">John Peter</h4>
                            <h5 className="team__position">COO</h5>
                        </li>
                        <li className="team__item">
                            <div className="team__img-container">
                                <div className="img-container">
                                    <img src={ClaudiaHeyes} alt=""/>
                                </div>
                            </div>
                            <h4 className="team__name">John Peter</h4>
                            <h5 className="team__position">COO</h5>
                        </li>
                        <li className="team__item">
                            <div className="team__img-container">
                                <div className="img-container">
                                    <img src={AvatarBlue} alt=""/>
                                </div>
                            </div>
                            <h4 className="team__name">John Peter</h4>
                            <h5 className="team__position">COO</h5>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Team