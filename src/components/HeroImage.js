import React from 'react';
import logoWhite from '../img/logo - white.png';
import { Container, Row } from 'react-bootstrap';

const HeroImage = () => {
    return (
        <div className="hero-image-farm h-100 d-flex align-items-center">
            <div className="overlay overlay-jumbo"></div>
            <img src={logoWhite} className="hero-logo hero-fade-in" alt="Veldhuizen Perspak"/>
        </div>
    )
}

export default HeroImage;