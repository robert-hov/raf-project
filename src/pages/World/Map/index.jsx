import React from "react";
import './style.scss';
import mapImage from '../../../assets/img/info/map.png'

const Map = () => {
    return (
        <>
        <div className="heading">
            <div className="page-container">
                <h2 className="heading__title">Lorem Ipsum is simply dummy text of the printing and.</h2>
                <p className="heading__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="page-container">
            <div className="mapdiv">
            <img src={mapImage} />
            </div>
        </div>
        </>
    )
}

export default Map
