import React from 'react';
import logoWhite from '../img/logo - white.png';
import backgroundFarm from '../img/farm_cropped.jpg';

const HeroImage = () => {
    const backgroundStyle = {
        backgroundImage: `url('${backgroundFarm}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
    }

    return (
        <div className="h-100 d-flex align-items-center hero-image" style={backgroundStyle}>
            <div className="overlay overlay-jumbo"></div>
            <img src={logoWhite} className="hero-logo hero-fade-in" alt="Veldhuizen Perspak"/>
        </div>
    )
}

export default HeroImage;