import Recat from 'react';
import "./index.scss";
import JohnPeter from '../../../assets/img/info/John-Peter.png';
import BeverlyHills from '../../../assets/img/info/Beverly-Hills.png';
import ClaudiaHeyes from '../../../assets/img/info/Claudia-Heyes.png';
import AvatarBlue from '../../../assets/img/info/Avatar-Blue.png';


const Team = () => {
    return (
        <section className="heading__team">
            <div className="page-container">
                <h1 className="team__title">Our Team</h1>
                <div className="team__person">
                    <div className="john__place">
                        <img src={JohnPeter} className="john__image" alt="" />
                        <h4 className="john__name">John Peter</h4>
                        <h5 className="john__work">COO</h5>
                    </div>
                    <div className="john__place">
                        <img src={BeverlyHills} className="john__image" alt="" />
                        <h4 className="john__name">Beverly Hills</h4>
                        <h5 className="john__work">COO</h5>
                    </div>
                    <div className="john__place">
                        <img src={ClaudiaHeyes} className="john__image" alt="" />
                        <h4 className="john__name">Claudia Heyes</h4>
                        <h5 className="john__work">COO</h5>
                    </div>
                    <div className="john__place">
                        <img src={AvatarBlue} className="john__image" alt="" />
                        <h4 className="john__name">Avatar Blue</h4>
                        <h5 className="john__work">COO</h5>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Team