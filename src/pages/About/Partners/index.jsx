import React from 'react';
import './index.scss';
import JumLogo from '../../../assets/img/info/Jum-Logo.png';
import EarthLogo from '../../../assets/img/info/Earth-Logo.png';
import BioLogo from  '../../../assets/img/info/Bio-Logo.png';
import UniverLogo from '../../../assets/img/info/Univer-Logo.png';
import MegaLogo from '../../../assets/img/info/Mega-Logo.png';

const Partners = () => {
    return (
        <section className="heading__partnership">
            <div className="page-container">
                <div className="partnership__container">
                    <h1 className="partnership__title">Our Partnership and Collabratiors</h1>
                    <div className="partnership__desc">
                        <div className="partners"><img src={JumLogo} alt="" /></div>
                        <div className="partners"><img src={EarthLogo} alt="" /></div>
                        <div className="partners"><img src={BioLogo} alt="" /></div>
                        <div className="partners"><img src={UniverLogo} alt="" /></div>
                        <div className="partners"><img src={MegaLogo} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners