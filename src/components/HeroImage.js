import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logoWhite from '../img/logo - white.png';

const HeroImage = () => {
    return (
        <div className="hero-image-farm h-100 d-flex align-items-center">
            <div className="overlay overlay-jumbo"></div>
            <Container fluid={true}>
                <Row>
                    <div className="col-sm-1 col-md-2 col-lg-1" />
                    <div className="col-sm-5 col-md-8 col-lg-4">
                        <img src={logoWhite} className="img-fluid" alt="Veldhuizen Perspak"/>
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-7" />
                </Row>
            </Container>
        </div>
    )
}

export default HeroImage;