import React from 'react';
import Container from 'react-bootstrap/Container';

const HeroImage = () => {
    return (
        <div className="hero-image-farm h-100 d-flex align-items-center">
            <div className="overlay overlay-jumbo"></div>
            <Container>
                {/* <h1>Welkom</h1>
                <p>Veldhuizen Perspakket</p> */}
                <h1>Veldhuizen<br />Perspak</h1>
                <h2>Verpakkingsbedrijf</h2>
            </Container> 
        </div>
    )
}

export default HeroImage;